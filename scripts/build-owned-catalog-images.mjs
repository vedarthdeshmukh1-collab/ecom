/**
 * Downloads one unique footwear source photo per product, then writes
 * owned local files under /public/products/{slug}/:
 *   primary.jpg, secondary.jpg
 *
 * Secondary is an alternate crop of the SAME source (same physical shoe).
 * Other gallery slots stay unset in product data (prefer unavailable over wrong shoe).
 *
 * Never reuses a source URL across products.
 */
import { mkdir, access } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = join(process.cwd(), "public", "products");

/** Each entry owns exactly one remote source. IDs must be unique. */
const UNIQUE_SOURCES = [
  { slug: "velocity-runner", src: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1600&q=85" },
  { slug: "pulse-daily", src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=85" },
  { slug: "aero-race", src: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1600&q=85" },
  { slug: "stride-lite", src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1600&q=85" },
  { slug: "tempo-road", src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1600&q=85" },
  { slug: "sprint-carbon", src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1600&q=85" },
  { slug: "cloud-walk", src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1600&q=85" },
  { slug: "ease-everyday", src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1600&q=85" },
  { slug: "comfort-mile", src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1600&q=85" },
  { slug: "distance-glide", src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1600&q=85" },
  { slug: "softpath-walker", src: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "metro-walk", src: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "forge-gym", src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1600&q=85" },
  { slug: "crossforce-trainer", src: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=85" },
  { slug: "volt-workout", src: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1600&q=85" },
  { slug: "flex-studio", src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=85" },
  { slug: "iron-circuit", src: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1600&q=85" },
  { slug: "pulse-trainer", src: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "court-apex", src: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "hoop-drive", src: "https://images.unsplash.com/photo-1581068505339-d155712f0add?auto=format&fit=crop&w=1600&q=85" },
  { slug: "street-hoops", src: "https://images.pexels.com/photos/2048547/pexels-photo-2048547.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "arena-flex", src: "https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "court-legacy", src: "https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "urban-motion", src: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1600&q=85" },
  { slug: "city-casual", src: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=1600&q=85" },
  { slug: "street-form", src: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1600&q=85" },
  { slug: "lumen-premium", src: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1600&q=85" },
  { slug: "noir-street", src: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1600&q=85" },
  { slug: "crest-casual", src: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1600&q=85" },
  { slug: "ember-lifestyle", src: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "summit-hike", src: "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?auto=format&fit=crop&w=1600&q=85" },
  { slug: "ridge-trail", src: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "pathfinder-outdoor", src: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "alpine-trek", src: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "terra-run", src: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { slug: "horizon-trail", src: "https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1600" },
];

function baseKey(url) {
  return url.split("?")[0];
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "SOLEVA-catalog-builder/1.0" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error(`Too small (${buf.length}) for ${url}`);
  return buf;
}

async function writeOwnedSet(slug, sourceBuf) {
  const dir = join(ROOT, slug);
  await mkdir(dir, { recursive: true });

  const primaryPath = join(dir, "primary.jpg");
  const secondaryPath = join(dir, "secondary.jpg");

  const meta = await sharp(sourceBuf).metadata();
  const w = meta.width ?? 1600;
  const h = meta.height ?? 1600;

  // Primary: centered square crop
  const side = Math.min(w, h);
  const left = Math.floor((w - side) / 2);
  const top = Math.floor((h - side) / 2);
  await sharp(sourceBuf)
    .extract({ left, top, width: side, height: side })
    .resize(1200, 1200)
    .jpeg({ quality: 86 })
    .toFile(primaryPath);

  // Secondary: alternate crop of THE SAME source (same shoe, different framing)
  const zoom = Math.floor(side * 0.82);
  const left2 = Math.min(w - zoom, Math.max(0, left + Math.floor(side * 0.08)));
  const top2 = Math.min(h - zoom, Math.max(0, top + Math.floor(side * 0.05)));
  await sharp(sourceBuf)
    .extract({ left: left2, top: top2, width: zoom, height: zoom })
    .resize(1200, 1200)
    .jpeg({ quality: 86 })
    .toFile(secondaryPath);

  return { primaryPath, secondaryPath };
}

const seen = new Set();
for (const item of UNIQUE_SOURCES) {
  const key = baseKey(item.src);
  if (seen.has(key)) {
    throw new Error(`Duplicate source URL before download: ${key}`);
  }
  seen.add(key);
}

let ok = 0;
let fail = 0;
for (const item of UNIQUE_SOURCES) {
  const primaryPath = join(ROOT, item.slug, "primary.jpg");
  if (await exists(primaryPath) && (await exists(join(ROOT, item.slug, "secondary.jpg")))) {
    console.log("skip", item.slug);
    ok++;
    continue;
  }
  try {
    const buf = await fetchBuffer(item.src);
    await writeOwnedSet(item.slug, buf);
    console.log("ok", item.slug, buf.length);
    ok++;
  } catch (e) {
    console.error("FAIL", item.slug, e.message);
    fail++;
  }
}

console.log(`\nDone. ok=${ok} fail=${fail}`);
if (fail > 0) process.exit(1);
