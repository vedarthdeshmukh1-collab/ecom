#!/usr/bin/env node
/**
 * Export high-quality product WebPs from HQ studio sources.
 *
 * Expects PNG sources at:
 *   /opt/cursor/artifacts/assets/hq-{productId}-{slot}.png
 *   slots: primary, side, top, sole, lifestyle
 *
 * Writes to public/products/{id}/{slot}.webp (+ secondary from side framing).
 *
 * Usage: node scripts/export-hq-catalog-images.mjs
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir =
  process.env.SOLEVA_HQ_ASSETS || "/opt/cursor/artifacts/assets";
const outDir = join(root, "public", "products");

if (!existsSync(srcDir)) {
  console.error(`HQ asset directory not found: ${srcDir}`);
  process.exit(1);
}

const py = `
from pathlib import Path
from PIL import Image, ImageEnhance

SRC = Path(${JSON.stringify(srcDir)})
OUT = Path(${JSON.stringify(outDir)})
PRODUCTS = ["velocity-one", "cloudstep", "urban-x", "apex-pro", "trailcore"]
SLOTS = ["primary", "side", "top", "sole", "lifestyle"]
TARGET = 1400
WEBP_Q = 95

def load(path):
    return Image.open(path).convert("RGB")

def enhance(im):
    im = ImageEnhance.Sharpness(im).enhance(1.12)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im = ImageEnhance.Color(im).enhance(1.03)
    return im

def fit_square(im, size):
    w, h = im.size
    side = max(w, h)
    canvas = Image.new("RGB", (side, side), (255, 255, 255))
    canvas.paste(im, ((side - w) // 2, (side - h) // 2))
    if side != size:
        canvas = canvas.resize((size, size), Image.Resampling.LANCZOS)
    return canvas

def save_webp(im, dest):
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "WEBP", quality=WEBP_Q, method=6)
    print(f"  wrote {dest} ({dest.stat().st_size/1024:.0f}KB)")

for pid in PRODUCTS:
    print(f"== {pid}")
    for slot in SLOTS:
        src = SRC / f"hq-{pid}-{slot}.png"
        if not src.exists():
            print(f"  MISSING {src.name}")
            continue
        save_webp(enhance(fit_square(load(src), TARGET)), OUT / pid / f"{slot}.webp")

    side_src = SRC / f"hq-{pid}-side.png"
    if side_src.exists():
        im = load(side_src)
        w, h = im.size
        m = int(min(w, h) * 0.06)
        im = im.crop((m, m, w - m, int(h - m * 0.4)))
        save_webp(enhance(fit_square(im, TARGET)), OUT / pid / "secondary.webp")

print("DONE")
`;

const result = spawnSync("python3", ["-c", py], {
  stdio: "inherit",
  encoding: "utf8",
});
process.exit(result.status ?? 1);
