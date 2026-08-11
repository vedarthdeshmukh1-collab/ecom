/**
 * Import SOLEVA mockup PNGs into owned product webp slots.
 *
 * Drop files here (any of these layouts work):
 *   reference/mockups/<product-id>/studio.png
 *   reference/mockups/<product-id>/lifestyle.png
 *   reference/mockups/<product-id>/dark-mood.png
 *   reference/mockups/<product-id>/top.png
 *   reference/mockups/<product-id>/sole.png
 *
 * Or a flat zip extracted into reference/mockups/.
 *
 * Mapping:
 *   studio.png     → primary.webp + secondary.webp (alternate crop)
 *   dark-mood.png  → side.webp
 *   top.png        → top.webp
 *   sole.png       → sole.webp
 *   lifestyle.png  → lifestyle.webp
 *   (rear stays unchanged unless rear.png is provided)
 *
 * Run: node scripts/import-mockups.mjs
 */
import { existsSync } from "node:fs";
import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { createHash } from "node:crypto";

const ROOT = join(process.cwd(), "reference", "mockups");
const OUT = join(process.cwd(), "public", "products");
const PRODUCTS = ["velocity-one", "cloudstep", "urban-x", "apex-pro", "trailcore"];

const MAP = {
  studio: "primary",
  "dark-mood": "side",
  top: "top",
  sole: "sole",
  lifestyle: "lifestyle",
  rear: "rear",
};

async function toWebp(src, dest, { extract } = {}) {
  let pipeline = sharp(src);
  if (extract) pipeline = pipeline.extract(extract);
  await pipeline.resize(1200, 1200, { fit: "cover", position: "centre" }).webp({ quality: 86 }).toFile(dest);
}

async function hashFile(path) {
  const { readFile } = await import("node:fs/promises");
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

if (!existsSync(ROOT)) {
  console.error(`No mockups found at ${ROOT}`);
  console.error("Drop product folders with studio/lifestyle/dark-mood/top/sole.png there, then re-run.");
  process.exit(1);
}

const hashes = new Map();
let imported = 0;

for (const id of PRODUCTS) {
  const srcDir = join(ROOT, id);
  if (!existsSync(srcDir)) {
    console.warn("skip (missing folder):", id);
    continue;
  }
  const destDir = join(OUT, id);
  await mkdir(destDir, { recursive: true });

  for (const [srcName, slot] of Object.entries(MAP)) {
    const src = join(srcDir, `${srcName}.png`);
    if (!existsSync(src)) {
      // also accept .jpg/.webp
      const alt = [".jpg", ".jpeg", ".webp"].map((ext) => join(srcDir, `${srcName}${ext}`)).find(existsSync);
      if (!alt) {
        console.warn("missing", id, srcName);
        continue;
      }
      await toWebp(alt, join(destDir, `${slot}.webp`));
    } else {
      await toWebp(src, join(destDir, `${slot}.webp`));
    }
    const h = await hashFile(join(destDir, `${slot}.webp`));
    if (hashes.has(h)) throw new Error(`Duplicate image: ${hashes.get(h)} vs ${id}/${slot}`);
    hashes.set(h, `${id}/${slot}`);
    imported++;
    console.log("ok", id, slot);
  }

  // secondary from studio alternate crop
  const studio = [".png", ".jpg", ".jpeg", ".webp"]
    .map((ext) => join(srcDir, `studio${ext}`))
    .find(existsSync);
  if (studio) {
    const meta = await sharp(studio).metadata();
    const w = meta.width ?? 1200;
    const h = meta.height ?? 1200;
    const side = Math.min(w, h);
    const zoom = Math.floor(side * 0.88);
    const left = Math.min(w - zoom, Math.max(0, Math.floor((w - side) / 2 + side * 0.06)));
    const top = Math.min(h - zoom, Math.max(0, Math.floor((h - side) / 2 + side * 0.04)));
    const dest = join(destDir, "secondary.webp");
    await toWebp(studio, dest, { extract: { left, top, width: zoom, height: zoom } });
    const sh = await hashFile(dest);
    if (hashes.has(sh)) throw new Error(`Duplicate secondary ${id}`);
    hashes.set(sh, `${id}/secondary`);
    imported++;
    console.log("ok", id, "secondary");
  }
}

console.log(`\nImported ${imported} files. Unique hashes: ${hashes.size}`);
if (imported === 0) process.exit(1);
