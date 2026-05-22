import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import profilesData from "../profiles.json" with { type: "json" };

const root = process.cwd();
const resultsDir = path.join(root, "bench", "results");
mkdirSync(resultsDir, { recursive: true });

function run(command, args, cwd) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = spawn(command, args, {
      cwd,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
      process.stdout.write(chunk);
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
      process.stderr.write(chunk);
    });
    child.on("close", (code) => {
      resolve({
        code,
        stdout,
        stderr,
        duration_ms: Date.now() - startedAt,
      });
    });
  });
}

const builds = [];

for (const profile of profilesData.profiles) {
  const projectDir = path.join(root, "bench", "projects", profile.id);
  if (!existsSync(projectDir)) {
    builds.push({
      profile: profile.id,
      status: "missing",
      command: null,
      duration_ms: 0,
      error: "Project directory does not exist.",
    });
    continue;
  }

  console.log(`\n== Building ${profile.id} ==`);
  const result = await run("bunx", ["next", "build"], projectDir);
  builds.push({
    profile: profile.id,
    status: result.code === 0 ? "passed" : "failed",
    command: "bunx next build",
    duration_ms: result.duration_ms,
    exit_code: result.code,
    stdout_tail: result.stdout.slice(-4000),
    stderr_tail: result.stderr.slice(-4000),
  });
}

writeFileSync(
  path.join(resultsDir, "build-results.json"),
  `${JSON.stringify({ generated_at: new Date().toISOString(), builds }, null, 2)}\n`,
);

const failed = builds.filter((build) => build.status !== "passed");
if (failed.length > 0) {
  process.exitCode = 1;
}
