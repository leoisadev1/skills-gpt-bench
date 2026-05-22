import { writeFileSync } from "node:fs";
import profilesData from "../profiles.json" with { type: "json" };
import gradesData from "../results/grades.json" with { type: "json" };
import screenshotData from "../results/screenshot-results.json" with { type: "json" };

const pageOrder = [
  ["/landing", "Landing page"],
  ["/dashboard", "Operations dashboard"],
  ["/product", "Product detail page"],
  ["/suite", "Four-page mini site"],
  ["/suite/itineraries", "Suite: itineraries"],
  ["/suite/notes", "Suite: notes"],
  ["/suite/account", "Suite: account"],
];

const contactSheets = [
  ["Landing page", "../contact-sheets/landing-desktop.png", "../contact-sheets/landing-mobile.png"],
  ["Operations dashboard", "../contact-sheets/dashboard-desktop.png", "../contact-sheets/dashboard-mobile.png"],
  ["Product detail page", "../contact-sheets/product-desktop.png", "../contact-sheets/product-mobile.png"],
  ["Four-page mini site", "../contact-sheets/four-page-desktop.png", "../contact-sheets/four-page-mobile.png"],
  ["Suite: itineraries", "../contact-sheets/suite-itineraries-desktop.png", "../contact-sheets/suite-itineraries-mobile.png"],
  ["Suite: notes", "../contact-sheets/suite-notes-desktop.png", "../contact-sheets/suite-notes-mobile.png"],
  ["Suite: account", "../contact-sheets/suite-account-desktop.png", "../contact-sheets/suite-account-mobile.png"],
];

const profilesById = new Map(profilesData.profiles.map((profile) => [profile.id, profile]));
const rankByProfile = new Map(gradesData.summary.map((entry) => [entry.profile, entry.rank]));
const scoreByProfile = new Map(gradesData.summary.map((entry) => [entry.profile, entry.score]));
const shotsByProfile = new Map(
  screenshotData.results.map((entry) => [
    entry.profile,
    new Map(entry.screenshots.map((shot) => [`${shot.route}:${shot.viewport}`, shot])),
  ]),
);

function link(label, href) {
  return `[${label}](${href})`;
}

function shotLink(profileId, route, viewport) {
  const shot = shotsByProfile.get(profileId)?.get(`${route}:${viewport}`);
  if (!shot) return "Missing";
  return link(viewport === "desktop" ? "Desktop" : "Mobile", shot.path.replace("bench/results/screenshots/", ""));
}

const lines = [
  "# Screenshot Index",
  "",
  "This folder contains the individual screenshot evidence for the benchmark.",
  "",
  "The contact sheets show the big comparison view. The profile sections below link to each separate screenshot so every page can be inspected on its own.",
  "",
  "## Contact Sheet Overviews",
  "",
  "| Page | Desktop Overview | Mobile Overview |",
  "| --- | --- | --- |",
  ...contactSheets.map(([page, desktop, mobile]) => `| ${page} | ${link("Desktop sheet", desktop)} | ${link("Mobile sheet", mobile)} |`),
  "",
  "## Individual Screenshots By Profile",
  "",
];

for (const entry of gradesData.summary) {
  const profile = profilesById.get(entry.profile);
  lines.push(
    `### ${entry.rank}. ${profile?.label ?? entry.profile}`,
    "",
    `Profile ID: \`${entry.profile}\``,
    "",
    `Score: ${scoreByProfile.get(entry.profile)} / 100`,
    "",
    "| Page | Desktop | Mobile |",
    "| --- | --- | --- |",
  );

  for (const [route, label] of pageOrder) {
    lines.push(
      `| ${label} | ${shotLink(entry.profile, route, "desktop")} | ${shotLink(entry.profile, route, "mobile")} |`,
    );
  }

  lines.push("");
}

lines.push(
  "## Integrity Notes",
  "",
  `- Profiles: ${profilesData.profiles.length}`,
  `- Screenshots in manifest: ${screenshotData.results.reduce((count, profile) => count + profile.screenshots.length, 0)}`,
  "- Expected screenshots: 15 profiles x 7 routes x 2 viewports = 210",
  "- Raw worker logs are intentionally excluded from the public repository.",
  "",
);

writeFileSync("bench/results/screenshots/README.md", `${lines.join("\n")}\n`);
