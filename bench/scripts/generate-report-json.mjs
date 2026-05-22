import { writeFileSync } from "node:fs";
import profilesData from "../profiles.json" with { type: "json" };
import gradesData from "../results/grades.json" with { type: "json" };
import metadata from "../results/benchmark-metadata.json" with { type: "json" };

const profileLabels = new Map(
  profilesData.profiles.map((profile) => [profile.id, profile.label]),
);
const globalRanks = new Map(
  gradesData.summary.map((entry) => [entry.profile, entry.rank]),
);

const pageLabels = {
  landing: "Landing page",
  dashboard: "Operations dashboard",
  product: "Product detail page",
  four_page_mini_site: "Four-page mini site",
};

const categoryLabels = {
  product_fit_and_task_completion: "Product fit and task completion",
  visual_hierarchy_and_composition: "Visual hierarchy and composition",
  distinctiveness_without_gimmickry: "Distinctiveness without gimmickry",
  information_architecture_and_workflow_clarity:
    "Information architecture and workflow clarity",
  responsive_resilience_and_text_handling: "Responsive resilience and text handling",
  interaction_states_and_motion_appropriateness:
    "Interaction states and motion appropriateness",
  technical_execution_and_maintainability: "Technical execution and maintainability",
};

function rankEntries(entries) {
  return entries
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (globalRanks.get(a.profile) ?? 999) - (globalRanks.get(b.profile) ?? 999);
    })
    .map((entry, index) => ({
      rank: index + 1,
      ...entry,
      label: profileLabels.get(entry.profile) ?? entry.profile,
    }));
}

const pageRankings = {};
for (const [pageKey, label] of Object.entries(pageLabels)) {
  pageRankings[pageKey] = {
    label,
    ranking: rankEntries(
      Object.entries(gradesData.profiles).map(([profile, data]) => ({
        profile,
        score: data.task_scores[pageKey],
      })),
    ),
  };
}

const rubricCategoryRankings = {};
for (const [categoryKey, label] of Object.entries(categoryLabels)) {
  rubricCategoryRankings[categoryKey] = {
    label,
    ranking: rankEntries(
      Object.entries(gradesData.profiles).map(([profile, data]) => ({
        profile,
        score: data.category_scores[categoryKey],
      })),
    ),
  };
}

const compactProfileTable = gradesData.summary.map((entry) => ({
  rank: entry.rank,
  profile: entry.profile,
  label: profileLabels.get(entry.profile) ?? entry.profile,
  score: entry.score,
  best_for: entry.best_for,
  short_read: entry.short_read,
  page_scores: gradesData.profiles[entry.profile].task_scores,
}));

function profileType(profile) {
  if (profile.skill_paths.length === 1) return "single";
  if (profile.skill_paths.length === 2) return "pair";
  if (profile.skill_paths.length === 3) return "triple";
  return "all_four";
}

function includedSkills(profile) {
  if (profile.id === "gpt-taste__frontend-skill__design-taste-frontend__frontend-design") {
    return [
      "GPT-Taste",
      "OpenAI Frontend Skill",
      "Design Taste Frontend",
      "Anthropic Frontend Design",
    ];
  }
  return profile.label.split(" + ");
}

const profilesById = new Map(profilesData.profiles.map((profile) => [profile.id, profile]));
const profileGuide = gradesData.summary.map((entry) => {
  const profile = profilesById.get(entry.profile);
  return {
    rank: entry.rank,
    profile: entry.profile,
    label: profile?.label ?? entry.profile,
    profile_type: profile ? profileType(profile) : "unknown",
    included_skills: profile ? includedSkills(profile) : [],
    score: entry.score,
    best_for: entry.best_for,
    short_read: entry.short_read,
    page_scores: gradesData.profiles[entry.profile].task_scores,
    source: profile?.source ?? null,
  };
});

const validityAndBiasAudit = {
  conclusion:
    "The benchmark is valid as an artifact-backed qualitative comparison of these local skill snapshots in this generation environment. It should not be described as a statistically unbiased or universal ranking.",
  supported_claims: [
    "All 15 non-empty skill combinations were included.",
    "Every profile received the same prompt file and route requirements.",
    "Each profile produced a separate Next.js app under bench/projects.",
    "All 15 apps passed the recorded production build check.",
    "The screenshot manifest contains 210 screenshots: 15 profiles, 7 routes, and 2 viewports.",
    "The global, page-type, and rubric-category rankings are derived from bench/results/grades.json.",
  ],
  bias_controls: [
    "Same prompts for every profile.",
    "Same scoring rubric for every profile.",
    "Same route set and viewport set for screenshot review.",
    "Full combination matrix instead of cherry-picking selected pairs.",
    "Local snapshots of each skill are committed so the compared instructions are inspectable.",
    "No image generation was allowed for the generated apps.",
  ],
  remaining_limitations: [
    "Scores are qualitative and reflect the rubric's taste priorities.",
    "The grading was not blind.",
    "There was one generation per profile, so there are no repeated trials or confidence intervals.",
    "The same GPT-5.5 Codex-worker model/session and reasoning setup generated the apps, so this measures these skill prompts in this environment rather than every possible agent setup.",
    "The local skill snapshots may drift from current upstream versions.",
    "Page and category ranking ties are resolved by global rank, so tied winners should be read as tied clusters, not decisive category-only victories.",
  ],
  article_safe_summary:
    "Use this as evidence for which skill combinations performed best in this controlled qualitative benchmark. Do not frame it as proof that one skill is objectively best in every environment.",
};

const report = {
  title: "Frontend Skill Benchmark",
  generated_at: new Date().toISOString(),
  methodology: {
    model_family: metadata.model_family,
    reasoning_context: metadata.reasoning_context,
    profile_matrix: gradesData.profile_matrix,
    prompts_file: metadata.prompts_file,
    rubric_file: metadata.rubric_file,
    routes: metadata.routes,
    viewport_checks: metadata.viewport_checks,
    screenshot_count: gradesData.screenshots.count,
    build_status: gradesData.builds.status,
    notes: [
      "Every profile received the same prompts.",
      "Each profile built a separate Next.js app under bench/projects.",
      "The Anthropic frontend-design skill was used as a local snapshot only.",
      "This is GPT-5.5 Codex-worker evidence for this session only, not a cross-model comparison.",
      "No image-generation tools were used for the generated apps.",
    ],
  },
  global_ranking: gradesData.summary,
  profile_table: compactProfileTable,
  profile_guide: profileGuide,
  page_rankings: pageRankings,
  rubric_category_rankings: rubricCategoryRankings,
  validity_and_bias_audit: validityAndBiasAudit,
  profiles: gradesData.profiles,
  artifacts: {
    profiles: "bench/profiles.json",
    prompts: "bench/prompts/prompts.json",
    final_evaluation: "bench/results/final-evaluation.md",
    report_markdown: "bench/results/report.md",
    report_json: "bench/results/report.json",
    grades: "bench/results/grades.json",
    build_results: gradesData.builds.source,
    screenshot_manifest: gradesData.screenshots.source,
    screenshot_index: "bench/results/screenshots/README.md",
    screenshots: "bench/results/screenshots/",
    contact_sheets: "bench/results/contact-sheets/",
    raw_worker_logs:
      "excluded from the public repository because they can include local paths and machine-specific diagnostic output",
  },
};

gradesData.page_rankings = pageRankings;
gradesData.rubric_category_rankings = rubricCategoryRankings;

writeFileSync(
  "bench/results/grades.json",
  `${JSON.stringify(gradesData, null, 2)}\n`,
);
writeFileSync(
  "bench/results/report.json",
  `${JSON.stringify(report, null, 2)}\n`,
);
