# Final Evaluation

Checked on 2026-05-22.

## Bottom Line

The benchmark is ready to use as source material for an article if it is framed as a controlled qualitative benchmark, not as a universal or bias-free scientific ranking.

The main result is internally consistent: `gpt-taste__frontend-skill__frontend-design` is the top global profile, the top page-type profile after the documented tie-break rule, and one of the strongest rubric-category profiles. The best no-GPT-Taste profile is `frontend-skill__design-taste-frontend__frontend-design`. The strongest single skill is `frontend-design`.

## What The Evidence Proves

- The profile matrix is complete: 15 profiles cover all non-empty combinations of the four skill snapshots.
- The prompt set is shared: every profile used `bench/prompts/prompts.json`.
- The benchmark created working code: every profile has a generated Next.js app under `bench/projects/`.
- The route coverage is consistent: every profile includes landing, dashboard, product, suite home, itineraries, notes, and account routes.
- The build gate passed: `bench/results/build-results.json` records 15 passing builds.
- The screenshot evidence is present: `bench/results/screenshot-results.json` records 210 screenshots across 15 profiles, 7 routes, and 2 viewports.
- Separate image links are indexed in `bench/results/screenshots/README.md`; big comparison contact sheets remain under `bench/results/contact-sheets/`.
- The rankings are traceable: global, page-type, and rubric-category rankings are derived from `bench/results/grades.json`.
- The source instructions are inspectable: local skill snapshots are committed under `bench/skills/`.
- Raw worker logs are intentionally excluded from the public repository after privacy review.

## Bias And Validity Check

I would not claim there is no bias. The benchmark controls some obvious sources of bias, but it still includes qualitative judgment.

Bias controls:

- Same prompts for every profile.
- Same route requirements for every profile.
- Same rubric for every profile.
- Full profile matrix instead of selected favorites.
- Committed screenshots and contact sheets for external inspection.
- Committed generated source for code-level inspection.
- No AI image-generation calls in the generated project source.
- Raw generation logs are not public because they can contain local paths or machine-specific diagnostic output.

Remaining limitations:

- One generation per profile means there is no variance analysis.
- The grading was not blind.
- The rubric favors practical, tasteful, responsive product UI; a different rubric could rank some profiles differently.
- The same GPT-5.5 Codex-worker model/session and reasoning setup generated the apps.
- The local skill snapshots may not match future upstream versions.
- Page and rubric-category ties are resolved by global rank, so tied category leaders should be described as tied clusters.

## Article-Safe Interpretation

Safe phrasing:

> In this controlled qualitative benchmark, using the same prompts, rubric, route set, and screenshot review process, the strongest overall profile was `gpt-taste__frontend-skill__frontend-design`.

Avoid phrasing:

> This proves `gpt-taste__frontend-skill__frontend-design` is objectively the best frontend skill combination.

The stronger claim is not supported by this dataset.

## Files To Use As Evidence

- `README.md`
- `bench/results/report.md`
- `bench/results/report.json`
- `bench/results/grades.json`
- `bench/results/build-results.json`
- `bench/results/screenshot-results.json`
- `bench/results/screenshots/README.md`
- `bench/results/contact-sheets/`
- `bench/results/screenshots/`
- `bench/projects/`
