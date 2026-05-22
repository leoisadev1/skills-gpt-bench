import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "@playwright/test";
import profilesData from "../profiles.json" with { type: "json" };
import promptsData from "../prompts/prompts.json" with { type: "json" };

const root = process.cwd();
const screenshotsRoot = path.join(root, "bench", "results", "screenshots");
const captureResults = [];

const viewports = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "mobile", width: 390, height: 844 },
];

const primaryRoutes = promptsData.tasks.map((task) => ({
  id: task.id,
  path: task.route,
}));

const captureRoutes = [
  ...primaryRoutes,
  { id: "suite-itineraries", path: "/suite/itineraries" },
  { id: "suite-notes", path: "/suite/notes" },
  { id: "suite-account", path: "/suite/account" },
];

function waitForServer(url, timeoutMs = 45000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          resolve();
          return;
        }
      } catch {}
      if (Date.now() > deadline) {
        reject(new Error(`Timed out waiting for ${url}`));
        return;
      }
      setTimeout(tick, 500);
    };
    tick();
  });
}

async function withServer(profile, port, fn) {
  const projectDir = path.join(root, "bench", "projects", profile.id);
  const child = spawn("bunx", ["next", "dev", "-p", String(port), "-H", "127.0.0.1"], {
    cwd: projectDir,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let logs = "";
  child.stdout.on("data", (chunk) => {
    logs += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    logs += chunk.toString();
  });

  try {
    await waitForServer(`http://127.0.0.1:${port}/landing`);
    await fn(`http://127.0.0.1:${port}`, logs);
  } finally {
    child.kill("SIGTERM");
    await new Promise((resolve) => {
      child.once("exit", resolve);
      setTimeout(resolve, 3000);
    });
  }
}

const browser = await chromium.launch({ headless: true });

let port = 4300;
for (const profile of profilesData.profiles) {
  const projectDir = path.join(root, "bench", "projects", profile.id);
  const profileScreenshotsDir = path.join(screenshotsRoot, profile.id);
  mkdirSync(profileScreenshotsDir, { recursive: true });

  if (!existsSync(projectDir)) {
    captureResults.push({ profile: profile.id, status: "missing" });
    continue;
  }

  console.log(`Capturing ${profile.id}`);
  const profileRecord = { profile: profile.id, status: "captured", screenshots: [] };

  try {
    await withServer(profile, port, async (baseUrl) => {
      for (const route of captureRoutes) {
        for (const viewport of viewports) {
          const page = await browser.newPage({ viewport });
          const url = `${baseUrl}${route.path}`;
          const filename = `${route.id}-${viewport.name}.png`;
          const screenshotPath = path.join(profileScreenshotsDir, filename);
          const response = await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
          await page.screenshot({ path: screenshotPath, fullPage: true });
          profileRecord.screenshots.push({
            route: route.path,
            viewport: viewport.name,
            path: path.relative(root, screenshotPath),
            status: response?.status() ?? null,
          });
          await page.close();
        }
      }
    });
  } catch (error) {
    profileRecord.status = "failed";
    profileRecord.error = error instanceof Error ? error.message : String(error);
  }

  captureResults.push(profileRecord);
  port += 1;
}

await browser.close();

writeFileSync(
  path.join(root, "bench", "results", "screenshot-results.json"),
  `${JSON.stringify({ generated_at: new Date().toISOString(), results: captureResults }, null, 2)}\n`,
);

if (captureResults.some((result) => result.status !== "captured")) {
  process.exitCode = 1;
}
