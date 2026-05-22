import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import profilesData from "../profiles.json" with { type: "json" };

const root = process.cwd();
const logsDir = path.join(root, "bench", "results", "worker-logs");
mkdirSync(logsDir, { recursive: true });

const args = new Set(process.argv.slice(2));
const onlyArg = process.argv.find((arg) => arg.startsWith("--profiles="));
const onlyProfiles = onlyArg
  ? new Set(
      onlyArg
        .replace("--profiles=", "")
        .split(",")
        .map((profile) => profile.trim())
        .filter(Boolean),
    )
  : null;
const onlyMissing = args.has("--missing");
const concurrencyArg = process.argv.find((arg) => arg.startsWith("--concurrency="));
const concurrency = Math.max(
  1,
  Number.parseInt(concurrencyArg?.replace("--concurrency=", "") ?? "5", 10) || 5,
);

function promptFor(profile) {
  const skillList = profile.skill_paths
    .map((skillPath) => `- ${path.join(root, skillPath)}`)
    .join("\n");

  return `You are one independent Codex worker in a frontend skill benchmark.

Workspace: ${root}
Profile id: ${profile.id}
Owned output directory: ${path.join(root, "bench", "projects", profile.id)}

Rules:
- Public/official/upstream repos are read-only. Do not comment, react, star, watch, dispatch workflows, or do any account-visible public GitHub action.
- Do not use Computer Use, desktop control, Chrome/Playwriter, browser MCP tools, image generation tools, or AI image APIs.
- Do not start dev servers.
- You are not alone in the codebase. Do not revert or modify edits by others.
- Your ownership is ONLY ${path.join(root, "bench", "projects", profile.id)}.
- Do not touch any other profile directory.
- Use only the assigned local skill snapshot(s) below for design guidance. Do not open or follow global design skills.

Assigned skill snapshot(s):
${skillList}

Benchmark prompt source:
- ${path.join(root, "bench", "prompts", "prompts.json")}

Task:
Create a self-contained Next.js app-router project in your owned directory using the root dependencies already installed. Read the prompt source and implement the exact same tasks:
- /landing
- /dashboard
- /product
- /suite
- /suite/itineraries
- /suite/notes
- /suite/account
- / may link to the routes.

Implementation requirements:
- Use the prompt text exactly as the brief for each surface; do not change scope.
- Build real production-quality UI, responsive and accessible enough for screenshot review.
- CSS/SVG/patterns and stable placeholder image URLs are allowed. No image generation tools.
- Add implementation-notes.md in your owned directory explaining how the assigned skill snapshot(s) shaped the output.
- Run a narrow build check if feasible from your app directory with bun/next.
- Keep your final response short and include the build command/result.
`;
}

function runWorker(profile) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const prompt = promptFor(profile);
    const promptPath = path.join(logsDir, `${profile.id}.prompt.md`);
    const jsonLogPath = path.join(logsDir, `${profile.id}.jsonl`);
    const finalPath = path.join(logsDir, `${profile.id}.final.md`);
    writeFileSync(promptPath, prompt);

    const child = spawn(
      "codex",
      [
        "exec",
        "--skip-git-repo-check",
        "--cd",
        root,
        "--dangerously-bypass-approvals-and-sandbox",
        "--json",
        "--output-last-message",
        finalPath,
        "-",
      ],
      {
        cwd: root,
        stdio: ["pipe", "pipe", "pipe"],
        env: { ...process.env, NO_COLOR: "1" },
      },
    );

    child.stdin.end(prompt);

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("close", (code) => {
      writeFileSync(jsonLogPath, stdout);
      writeFileSync(path.join(logsDir, `${profile.id}.stderr.log`), stderr);
      resolve({
        profile: profile.id,
        exit_code: code,
        duration_ms: Date.now() - startedAt,
        prompt: path.relative(root, promptPath),
        json_log: path.relative(root, jsonLogPath),
        stderr_log: path.relative(root, path.join(logsDir, `${profile.id}.stderr.log`)),
        final: path.relative(root, finalPath),
      });
    });
  });
}

async function runWithConcurrency(profiles) {
  const results = [];
  let index = 0;
  async function next() {
    while (index < profiles.length) {
      const profile = profiles[index];
      index += 1;
      results.push(await runWorker(profile));
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, profiles.length) }, next));
  return results;
}

let selectedProfiles = profilesData.profiles;
if (onlyProfiles) {
  selectedProfiles = selectedProfiles.filter((profile) => onlyProfiles.has(profile.id));
}
if (onlyMissing) {
  selectedProfiles = selectedProfiles.filter((profile) => {
    const projectDir = path.join(root, "bench", "projects", profile.id);
    return !(
      existsSync(path.join(projectDir, "package.json")) &&
      existsSync(path.join(projectDir, "implementation-notes.md"))
    );
  });
}

console.log(
  `Running ${selectedProfiles.length} profile(s) with concurrency ${concurrency}: ${selectedProfiles
    .map((profile) => profile.id)
    .join(", ")}`,
);

const results = await runWithConcurrency(selectedProfiles);

const cumulativePath = path.join(logsDir, "worker-run-results.json");
let cumulativeResults = [];
if (existsSync(cumulativePath)) {
  try {
    cumulativeResults = JSON.parse(readFileSync(cumulativePath, "utf8")).results ?? [];
  } catch {}
}
const merged = new Map(cumulativeResults.map((result) => [result.profile, result]));
for (const result of results) {
  merged.set(result.profile, result);
}

writeFileSync(
  path.join(logsDir, "worker-run-results-last.json"),
  `${JSON.stringify({ generated_at: new Date().toISOString(), results }, null, 2)}\n`,
);
writeFileSync(
  cumulativePath,
  `${JSON.stringify({ generated_at: new Date().toISOString(), results: Array.from(merged.values()) }, null, 2)}\n`,
);

if (results.some((result) => result.exit_code !== 0)) {
  process.exitCode = 1;
}
