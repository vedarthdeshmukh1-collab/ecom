import {
  products,
  productImageList,
  collections,
  categoryMeta,
  sports,
} from "../src/data/products";

async function main() {
  const productUrls = products.flatMap(productImageList);
  const normalize = (url: string) => url.split("?")[0];

  const counts = new Map<string, number>();
  for (const u of productUrls.map(normalize)) {
    counts.set(u, (counts.get(u) || 0) + 1);
  }
  const dups = [...counts.entries()].filter(([, n]) => n > 1);

  console.log("Products:", products.length);
  console.log("Product image URLs:", productUrls.length);
  console.log("Unique:", counts.size);
  console.log("Duplicates:", dups.length ? dups : "none");

  let httpFail = 0;
  for (const url of productUrls) {
    try {
      const res = await fetch(url, { method: "HEAD", redirect: "follow" });
      if (!res.ok) {
        console.log("HTTP", res.status, url);
        httpFail++;
      }
    } catch (e) {
      console.log("ERR", url, e);
      httpFail++;
    }
  }
  console.log(httpFail === 0 ? `HTTP: all ${productUrls.length} OK` : `HTTP failures: ${httpFail}`);

  for (const p of products) {
    const n = productImageList(p).length;
    const ok =
      n >= 5 &&
      p.images.mainImage !== p.images.hoverImage &&
      p.images.gallery.length >= 3;
    if (!ok) console.log("STRUCT FAIL", p.slug);
  }

  // marketing images colliding with product galleries
  const productSet = new Set(productUrls.map(normalize));
  const marketing = [
    ...collections.map((c) => c.image),
    ...categoryMeta.map((c) => c.image),
    ...sports.map((s) => s.image),
  ].map(normalize);
  const collisions = marketing.filter((u) => productSet.has(u));
  console.log(
    "Marketing collisions with products:",
    collisions.length ? collisions : "none",
  );
}

main();
