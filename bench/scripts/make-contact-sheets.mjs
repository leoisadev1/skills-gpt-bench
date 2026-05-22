import { mkdirSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import profilesData from "../profiles.json" with { type: "json" };

const root = process.cwd();
const screenshotsRoot = path.join(root, "bench", "results", "screenshots");
const outputRoot = path.join(root, "bench", "results", "contact-sheets");
const thumbsRoot = path.join(outputRoot, "thumbs");
mkdirSync(outputRoot, { recursive: true });
mkdirSync(thumbsRoot, { recursive: true });

const routes = [
  "landing",
  "dashboard",
  "product",
  "four-page",
  "suite-itineraries",
  "suite-notes",
  "suite-account",
];

const viewports = {
  desktop: { crop: "1440x1100+0+0", resize: "360x275" },
  mobile: { crop: "390x844+0+0", resize: "195x422" },
};

function runMagick(args) {
  const result = spawnSync("magick", args, { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`magick failed: ${args.join(" ")}`);
  }
}

for (const route of routes) {
  for (const [viewport, geometry] of Object.entries(viewports)) {
    const thumbs = [];
    const thumbDir = path.join(thumbsRoot, `${route}-${viewport}`);
    mkdirSync(thumbDir, { recursive: true });

    for (const profile of profilesData.profiles) {
      const input = path.join(screenshotsRoot, profile.id, `${route}-${viewport}.png`);
      const thumb = path.join(thumbDir, `${profile.id}.png`);
      thumbs.push(thumb);
      runMagick([
        input,
        "-crop",
        geometry.crop,
        "+repage",
        "-resize",
        geometry.resize,
        "-background",
        "white",
        "-gravity",
        "north",
        "-extent",
        viewport === "desktop" ? "360x315" : "195x462",
        "-gravity",
        "south",
        "-fill",
        "#111111",
        "-pointsize",
        viewport === "desktop" ? "17" : "13",
        "-annotate",
        "+0+8",
        profile.id,
        thumb,
      ]);
    }

    const output = path.join(outputRoot, `${route}-${viewport}.png`);
    runMagick([
      "montage",
      ...thumbs,
      "-tile",
      "5x3",
      "-geometry",
      "+12+12",
      "-background",
      "#f3f4f6",
      output,
    ]);
  }
}
