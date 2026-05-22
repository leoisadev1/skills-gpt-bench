# Frontend Skill Benchmark

This repo benchmarks frontend design skills by giving each skill profile the same prompts and comparing the resulting Next.js interfaces.

The goal is practical: if you are asking an agent to build a landing page, dashboard, product page, or small multi-page product site, which skill or skill combination helps most?

Follow-up: [@leodev on X](https://x.com/leodev).

## Model And Run Context

This is a single-model Codex benchmark. Read the results as GPT-5.5 Codex-worker evidence for this session and reasoning setup only, not as a cross-model or cross-reasoning study. It did not compare Claude, Gemini, other GPT versions, repeated trials, or different reasoning budgets.

## Quick Picks

- Best default for high-impact landing pages, product pages, and visual marketing/product work: `gpt-taste__frontend-skill__frontend-design`.
- Best practical pair for dashboards and operational tools: `frontend-skill__design-taste-frontend`.
- Best broad product-suite combo without GPT-Taste: `frontend-skill__design-taste-frontend__frontend-design`.
- Best single skill: `frontend-design`.
- Use `gpt-taste` alone only when you specifically want a dramatic, cinematic marketing surface; in this benchmark it performed better when paired.
- Use all four skills when you want broad coverage, but do not assume "more skills" wins. The all-four profile was strong, but not the top score.

## Install The Skills

The official [skills.sh CLI docs](https://www.skills.sh/docs/cli) use `npx skills add`, and the skill pages expose `npx skills add ... --skill ...` commands for these skill snapshots.

Install a specific skill by choosing one command:

```bash
npx skills add https://github.com/leonxlnx/taste-skill --skill gpt-taste
npx skills add https://github.com/openai/skills --skill frontend-skill
npx skills add https://github.com/leonxlnx/taste-skill --skill design-taste-frontend
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

Install all four:

```bash
npx skills add https://github.com/leonxlnx/taste-skill --skill gpt-taste
npx skills add https://github.com/openai/skills --skill frontend-skill
npx skills add https://github.com/leonxlnx/taste-skill --skill design-taste-frontend
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

Skill pages:

- [GPT-Taste](https://www.skills.sh/leonxlnx/taste-skill/gpt-taste)
- [OpenAI Frontend Skill](https://www.skills.sh/openai/skills/frontend-skill)
- [Design Taste Frontend](https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend)
- [Anthropic Frontend Design](https://www.skills.sh/anthropics/skills/frontend-design)

## What Was Tested

Four skill snapshots were tested:

- GPT-Taste (`gpt-taste`)
- OpenAI Frontend Skill (`frontend-skill`)
- Design Taste Frontend (`design-taste-frontend`)
- Anthropic Frontend Design (`frontend-design`)

The benchmark covers every non-empty combination of those four skills:

- 4 single-skill profiles
- 6 two-skill profiles
- 4 three-skill profiles
- 1 all-four profile

That makes 15 profiles total. The Anthropic frontend-design skill is stored as a local benchmark snapshot only; it was not installed globally.

## How To Read The Profiles

Profile IDs are just the included skill IDs joined by `__`. For example, `gpt-taste__frontend-skill__frontend-design` means the agent used GPT-Taste, OpenAI Frontend Skill, and Anthropic Frontend Design together.

| Rank | Profile | Type | Includes | Score | Best Use |
| ---: | --- | --- | --- | ---: | --- |
| 1 | `gpt-taste__frontend-skill__frontend-design` | Triple | GPT-Taste, OpenAI Frontend Skill, Anthropic Frontend Design | 91 | High-impact marketing and product pages that still need restraint |
| 2 | `frontend-skill__design-taste-frontend__frontend-design` | Triple | OpenAI Frontend Skill, Design Taste Frontend, Anthropic Frontend Design | 90 | Balanced product suites and operational UI with strong visual identity |
| 3 | `frontend-design` | Single | Anthropic Frontend Design | 89 | Distinctive page concepts and cohesive visual systems |
| 4 | `frontend-skill__frontend-design` | Pair | OpenAI Frontend Skill, Anthropic Frontend Design | 89 | Expressive pages that need fewer conflicting implementation constraints |
| 5 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | All four | GPT-Taste, OpenAI Frontend Skill, Design Taste Frontend, Anthropic Frontend Design | 89 | Broad all-purpose coverage when consistency matters more than a single sharp direction |
| 6 | `gpt-taste__frontend-skill` | Pair | GPT-Taste, OpenAI Frontend Skill | 88 | Balanced marketing pages where expressive composition needs restraint |
| 7 | `frontend-skill__design-taste-frontend` | Pair | OpenAI Frontend Skill, Design Taste Frontend | 88 | Dashboards and practical multi-page product UI |
| 8 | `gpt-taste__frontend-skill__design-taste-frontend` | Triple | GPT-Taste, OpenAI Frontend Skill, Design Taste Frontend | 88 | Dense product flows that still need a bolder first impression |
| 9 | `design-taste-frontend__frontend-design` | Pair | Design Taste Frontend, Anthropic Frontend Design | 87 | Operational pages with a more distinctive visual wrapper |
| 10 | `gpt-taste__design-taste-frontend` | Pair | GPT-Taste, Design Taste Frontend | 87 | Bolder operational/marketing hybrids |
| 11 | `gpt-taste__frontend-design` | Pair | GPT-Taste, Anthropic Frontend Design | 86 | Dark, expressive, memorable pages |
| 12 | `design-taste-frontend` | Single | Design Taste Frontend | 86 | Dashboards and operational tools |
| 13 | `gpt-taste__design-taste-frontend__frontend-design` | Triple | GPT-Taste, Design Taste Frontend, Anthropic Frontend Design | 86 | Editorial, concept-heavy surfaces |
| 14 | `frontend-skill` | Single | OpenAI Frontend Skill | 85 | Tasteful restrained pages |
| 15 | `gpt-taste` | Single | GPT-Taste | 84 | High-impact hero pages |

## Shared Prompts

Every profile received the exact same prompt set from [bench/prompts/prompts.json](bench/prompts/prompts.json):

- Landing page for Lumen Ledger
- Operations dashboard for Harbor Desk
- Product detail page for Meridian Type 42
- Four-page mini site for Northstar Atlas

Each profile built a separate Next.js app under [bench/projects](bench/projects).

## Global Ranking

| Rank | Profile | Score | Read |
| ---: | --- | ---: | --- |
| 1 | `gpt-taste__frontend-skill__frontend-design` | 91 | Best overall: dramatic, restrained, and conceptually strong |
| 2 | `frontend-skill__design-taste-frontend__frontend-design` | 90 | Best no-GPT-Taste combination |
| 3 | `frontend-design` | 89 | Strongest single skill |
| 4 | `frontend-skill__frontend-design` | 89 | Best simple expressive pair |
| 5 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | 89 | Strong all-purpose all-four profile |
| 6 | `gpt-taste__frontend-skill` | 88 | Strong original pair |
| 7 | `frontend-skill__design-taste-frontend` | 88 | Best practical operational pair |
| 8 | `gpt-taste__frontend-skill__design-taste-frontend` | 88 | Strong dense product-flow profile |
| 9 | `design-taste-frontend__frontend-design` | 87 | Operational UI with stronger styling |
| 10 | `gpt-taste__design-taste-frontend` | 87 | Bolder operational hybrid |
| 11 | `gpt-taste__frontend-design` | 86 | Dark, expressive, less practical |
| 12 | `design-taste-frontend` | 86 | Best single skill for dashboards |
| 13 | `gpt-taste__design-taste-frontend__frontend-design` | 86 | Interesting but uneven |
| 14 | `frontend-skill` | 85 | Tasteful and restrained |
| 15 | `gpt-taste` | 84 | Memorable but least resilient |

## Rankings By Page Type

| Page Type | Winner | Score | Notes |
| --- | --- | ---: | --- |
| Landing page | `gpt-taste__frontend-skill__frontend-design` | 92 | Best mix of visual force, restraint, and concept |
| Operations dashboard | `gpt-taste__frontend-skill__frontend-design` | 91 | Tied by score with two practical profiles, won on overall tie-break |
| Product detail page | `gpt-taste__frontend-skill__frontend-design` | 91 | Strongest object/product storytelling |
| Four-page mini site | `gpt-taste__frontend-skill__frontend-design` | 90 | Tied with `frontend-skill__design-taste-frontend__frontend-design`, won on global tie-break |

Best practical dashboard-only profile: `frontend-skill__design-taste-frontend` scored 91 on the dashboard and is the cleanest pair when you care more about operational clarity than marketing punch.

Best no-GPT-Taste profile: `frontend-skill__design-taste-frontend__frontend-design` scored 90 overall and stayed strong across dashboards, product pages, and the mini-site.

Best single skill: `frontend-design` scored 89 overall and beat several combinations.

## Main Finding

More skills helped, but more was not automatically better.

The all-four profile scored 89 and was strong, but it did not win. The best profile was a focused triple: `gpt-taste__frontend-skill__frontend-design`. Adding `design-taste-frontend` to that mix improved some operational discipline, but it also made the visual direction feel more blended and less decisive.

## Screenshots

There are two ways to inspect the visual evidence:

- Big comparison sheets: [bench/results/contact-sheets](bench/results/contact-sheets)
- Separate per-profile screenshots: [bench/results/screenshots/README.md](bench/results/screenshots/README.md)

The screenshot index links every desktop and mobile image for all 15 profiles across the landing page, dashboard, product detail page, and four-page mini site routes.

## Validity And Bias

I would not describe this as bias-free. It is a controlled, artifact-backed qualitative benchmark, not a statistically neutral scientific study.

What makes the result credible:

- Every profile used the same prompt file.
- Every profile had to build the same route set.
- The benchmark includes the full non-empty combination matrix instead of hand-picked favorites.
- The rubric was shared across all profiles.
- The rendered evidence is committed: screenshots, contact sheets, build results, generated apps, prompts, rubric, and scoring files.
- All 15 apps passed `bunx next build`.

Important limitations:

- There was one generation per profile, so there are no repeated trials or confidence intervals.
- The grading was qualitative and not blind.
- Scores reflect the benchmark rubric's taste priorities.
- Page/category ties are resolved by global rank, so tied category winners should be read as tied clusters, not decisive victories.
- The skill snapshots are local copies from this benchmark run and may drift from current upstream versions.
- The result is valid for these prompts, this model/session setup, and this rubric. It should not be framed as proof that one skill is universally best.

## Evidence

- Full report: [bench/results/report.md](bench/results/report.md)
- Final evaluation: [bench/results/final-evaluation.md](bench/results/final-evaluation.md)
- Readable JSON report: [bench/results/report.json](bench/results/report.json)
- Machine-readable grades: [bench/results/grades.json](bench/results/grades.json)
- Build results: [bench/results/build-results.json](bench/results/build-results.json)
- Screenshot manifest: [bench/results/screenshot-results.json](bench/results/screenshot-results.json)
- Screenshot index: [bench/results/screenshots/README.md](bench/results/screenshots/README.md)
- Contact sheets: [bench/results/contact-sheets](bench/results/contact-sheets)
- Full screenshots: [bench/results/screenshots](bench/results/screenshots)

Raw worker logs are intentionally not published. They are useful during generation, but they can include local paths and other machine-specific diagnostic output. Public evidence is limited to the generated source, build results, screenshots, contact sheets, prompts, rubric, and scoring files.

Validation summary:

- 15 independent profile apps generated
- 15/15 apps passed `bunx next build`
- 210 screenshots captured
- 14 contact sheets generated
- No image-generation usage found in generated project source

## Preview

### Landing Page

![Landing desktop](bench/results/contact-sheets/landing-desktop.png)

### Operations Dashboard

![Dashboard desktop](bench/results/contact-sheets/dashboard-desktop.png)

### Product Detail Page

![Product desktop](bench/results/contact-sheets/product-desktop.png)

### Four-Page Mini Site

![Suite desktop](bench/results/contact-sheets/four-page-desktop.png)
