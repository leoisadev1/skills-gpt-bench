# Frontend Skills Benchmark

This repo compares four frontend-design skills by giving them the same app-building prompts, then grading the finished UI work.

Repo link: https://github.com/leoisadev1/skills-gpt-bench

The short version: the best result was not "use every skill at once." The winner was a focused three-skill mix:

`gpt-taste__frontend-skill__frontend-design`

That combination produced the strongest overall set of pages because it had enough visual force to avoid generic UI, enough restraint to stay usable, and enough concept direction to make the pages feel intentionally designed.

## What This Tested

Four skill snapshots were tested:

| Skill | What it tended to help with |
| --- | --- |
| `gpt-taste` | Bigger visual ideas, motion, dramatic first impressions |
| `frontend-skill` | Restraint, practical layout, cleaner product-page structure |
| `design-taste-frontend` | Operational UI discipline, dashboards, dense product surfaces |
| `frontend-design` | Stronger art direction, more complete page concepts |

The benchmark tested every non-empty combination of those four skills:

| Profile type | Count |
| --- | ---: |
| Single skill | 4 |
| Two-skill combinations | 6 |
| Three-skill combinations | 4 |
| All four skills together | 1 |
| Total | 15 |

Each profile built a separate Next.js app from the same prompt set. Each app had the same routes: landing page, dashboard, product page, and a small multi-page product suite.

## The Result

| Rank | Profile | Score | Plain-English read |
| ---: | --- | ---: | --- |
| 1 | `gpt-taste__frontend-skill__frontend-design` | 91 | Best overall. Dramatic, but still controlled. |
| 2 | `frontend-skill__design-taste-frontend__frontend-design` | 90 | Best option without GPT-Taste. Very strong for product suites and operational UI. |
| 3 | `frontend-design` | 89 | Best single skill. Focused direction beat several combinations. |
| 4 | `frontend-skill__frontend-design` | 89 | Strong simple pair. Expressive without too many competing rules. |
| 5 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | 89 | All four skills. Good, but not the winner. |
| 6 | `gpt-taste__frontend-skill` | 88 | Good marketing/product pair. GPT-Taste works better with restraint. |
| 7 | `frontend-skill__design-taste-frontend` | 88 | Best practical pair for dashboards and utility screens. |
| 8 | `gpt-taste__frontend-skill__design-taste-frontend` | 88 | Competent product UI with a bolder first impression. |
| 9 | `design-taste-frontend__frontend-design` | 87 | Structured and distinctive, but a little less complete. |
| 10 | `gpt-taste__design-taste-frontend` | 87 | Bolder operational hybrid. |
| 11 | `gpt-taste__frontend-design` | 86 | Memorable and dark, but less practical on dashboards. |
| 12 | `design-taste-frontend` | 86 | Best single skill for dashboard-style work. |
| 13 | `gpt-taste__design-taste-frontend__frontend-design` | 86 | Interesting, but uneven. |
| 14 | `frontend-skill` | 85 | Clean and tasteful, but safer than the best combinations. |
| 15 | `gpt-taste` | 84 | Strong hero instincts, weaker utility and mobile resilience. |

## What The Scores Mean

The main finding is simple: combinations usually helped, but more instructions did not automatically make the output better.

The all-four profile scored well, but it lost to a tighter mix. That matters. It suggests that skill stacking has a ceiling: after a point, the agent gets more guidance, but the design direction can become less sharp.

The best triple worked because the skills complemented each other:

- `gpt-taste` pushed the work away from safe template UI.
- `frontend-skill` kept the layouts from becoming pure spectacle.
- `frontend-design` helped the pages feel more conceptually complete.

Adding `design-taste-frontend` to that exact mix made the output more disciplined in places, but also a bit more blended. That is useful when building dashboards or admin tools. It was not better for the overall benchmark.

## Practical Picks

Use `gpt-taste__frontend-skill__frontend-design` when you want a landing page, product page, or polished product surface that needs to look memorable.

Use `frontend-skill__design-taste-frontend` when you care most about dashboards, settings screens, internal tools, or dense product workflows.

Use `frontend-skill__design-taste-frontend__frontend-design` when you want the strongest no-GPT-Taste setup.

Use `frontend-design` when you only want one skill. It was the strongest single-skill result in this run.

Use `gpt-taste` alone only when you specifically want dramatic, cinematic marketing work and can tolerate more risk on utility screens.

## Page-Type Winners

| Page type | Top profile | Score |
| --- | --- | ---: |
| Landing page | `gpt-taste__frontend-skill__frontend-design` | 92 |
| Operations dashboard | `gpt-taste__frontend-skill__frontend-design` | 91 |
| Product detail page | `gpt-taste__frontend-skill__frontend-design` | 91 |
| Four-page mini site | `gpt-taste__frontend-skill__frontend-design` | 90 |

The dashboard result needs a little context. `frontend-skill__design-taste-frontend` also scored 91 on the dashboard and is the cleaner practical pick if you are building a real operational product. The top global profile won the tie-break because its full set of pages was stronger.

## Image Evidence

The repo includes both big comparison images and separate screenshots.

Use the contact sheets when you want to compare every profile on one page:

- [Landing page contact sheet](bench/results/contact-sheets/landing-desktop.png)
- [Dashboard contact sheet](bench/results/contact-sheets/dashboard-desktop.png)
- [Product page contact sheet](bench/results/contact-sheets/product-desktop.png)
- [Four-page site contact sheet](bench/results/contact-sheets/four-page-desktop.png)
- [All contact sheets](bench/results/contact-sheets)

Use the individual screenshot index when you want separate image files that can be opened or embedded on their own:

- [Individual screenshot gallery](bench/results/screenshots/README.md)
- [All separate screenshots](bench/results/screenshots)

There are 210 separate screenshots total: 15 profiles, 7 routes, and 2 viewport sizes.

## Preview

### Landing Page

![Landing page contact sheet](bench/results/contact-sheets/landing-desktop.png)

### Dashboard

![Dashboard contact sheet](bench/results/contact-sheets/dashboard-desktop.png)

### Product Page

![Product page contact sheet](bench/results/contact-sheets/product-desktop.png)

### Four-Page Site

![Four-page site contact sheet](bench/results/contact-sheets/four-page-desktop.png)

## How To Read A Profile Name

Profile names are just skill IDs joined together.

For example:

`gpt-taste__frontend-skill__frontend-design`

means the agent used:

- `gpt-taste`
- `frontend-skill`
- `frontend-design`

The names are ugly, but they keep the benchmark traceable. You can always look up the friendly labels in [bench/profiles.json](bench/profiles.json).

## Method

Each profile used:

- The same prompts: [bench/prompts/prompts.json](bench/prompts/prompts.json)
- The same rubric: [bench/rubric.md](bench/rubric.md)
- The same required routes
- The same desktop and mobile screenshot process
- A separate generated app under [bench/projects](bench/projects)

The benchmark produced:

| Evidence | Result |
| --- | ---: |
| Generated apps | 15 |
| Passing builds | 15 / 15 |
| Separate screenshots | 210 |
| Contact sheets | 14 |
| Public worker logs | 0 |

All 15 generated apps passed `bunx next build`.

## What This Does Not Prove

This is a controlled qualitative benchmark, not a universal scientific ranking.

It does not prove that one skill is always better. It shows what happened in this run, with this model setup, these prompts, this rubric, and these local skill snapshots.

Important limits:

- One generation per profile, so there are no repeat trials.
- The grading was qualitative, not blind.
- The rubric favors practical, polished, responsive product UI.
- The outputs came from one GPT-5.5 Codex-worker setup.
- Skill snapshots can change over time.
- Page-level ties were resolved by global rank, so tied categories should be read as close results.

That said, the evidence is real: generated source, build results, screenshots, contact sheets, prompts, rubric, and scoring files are all in the repo.

## Files Worth Opening

- [Full report](bench/results/report.md)
- [Final evaluation](bench/results/final-evaluation.md)
- [Machine-readable grades](bench/results/grades.json)
- [Build results](bench/results/build-results.json)
- [Screenshot manifest](bench/results/screenshot-results.json)
- [Individual screenshot gallery](bench/results/screenshots/README.md)
- [Contact sheets](bench/results/contact-sheets)
- [Generated projects](bench/projects)

## Skill Links

- [GPT-Taste](https://www.skills.sh/leonxlnx/taste-skill/gpt-taste)
- [OpenAI Frontend Skill](https://www.skills.sh/openai/skills/frontend-skill)
- [Design Taste Frontend](https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend)
- [Anthropic Frontend Design](https://www.skills.sh/anthropics/skills/frontend-design)

## Safe Summary

If you want one sentence:

In this benchmark, the strongest frontend result came from combining a bold visual skill with a practical implementation skill and a strong concept/design skill, while the all-four setup was good but slightly less decisive.
