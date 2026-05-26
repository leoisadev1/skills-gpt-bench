# Benchmark source notes

This is not the blog post. It is the source pile for writing one.

Use this as the factual base for an X thread, long-form X post, blog post, launch note, or README summary. It keeps the claims grounded in the actual benchmark artifacts instead of turning the result into "vibes plus a screenshot."

## Short version

The benchmark tested four frontend design skills across every non-empty combination:

- 4 single-skill profiles
- 6 two-skill profiles
- 4 three-skill profiles
- 1 all-four profile
- 15 profiles total

Each profile got the same prompts, built the same route set, and produced a separate Next.js app. Every app passed the recorded production build. The run captured 210 screenshots: 15 profiles, 7 routes, 2 viewports.

The winner was `gpt-taste__frontend-skill__frontend-design` with a score of 91.

The useful finding is not just "this combo won." The useful finding is that the all-four setup did not win. More skills helped up to a point, but the best output came from a tighter mix.

## Blog-safe core claim

Safe claim:

> In this controlled qualitative benchmark, using the same prompts, route requirements, build check, screenshots, and rubric, the strongest overall frontend skill profile was `gpt-taste__frontend-skill__frontend-design`.

Do not claim:

> This proves `gpt-taste__frontend-skill__frontend-design` is objectively the best frontend skill combination everywhere.

The data does not support that. It supports a narrower, more honest claim: this profile won this benchmark.

## What was tested

Four local skill snapshots were tested:

| Skill | Source | What it brought |
| --- | --- | --- |
| `gpt-taste` | https://www.skills.sh/leonxlnx/taste-skill/gpt-taste | Big visual swings, motion, strong first impressions, more dramatic design instincts. |
| `frontend-skill` | https://www.skills.sh/openai/skills/frontend-skill | Restraint, practical frontend judgment, cleaner product structure. |
| `design-taste-frontend` | https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend | Dashboard discipline, operational UI, dense workflows, mobile-safe structure. |
| `frontend-design` | https://www.skills.sh/anthropics/skills/frontend-design | Stronger concept direction, better page systems, more complete visual ideas. |

Important detail: `frontend-design` was used as a local benchmark snapshot. It was not installed globally.

## Run context

- Benchmark created: 2026-05-21
- Report generated: 2026-05-22
- Model family: GPT-5.5 Codex worker agents in this session
- Reasoning setup: one Codex worker reasoning setup for the run
- Not tested: Claude, Gemini, other GPT versions, other reasoning budgets, repeated trials, blind grading
- Generated app stack: Next.js apps under `bench/projects`
- Production build command recorded for each app: `bunx next build`
- All 15 builds passed
- Browser evidence: 210 screenshots
- Viewports:
  - Desktop: 1440 x 1100
  - Mobile: 390 x 844

## Shared rules

The prompt file had these benchmark rules:

- Use the same task prompt text for every skill profile.
- Do not use image generation tools or AI image APIs.
- Build real working Next.js code.
- Use only the assigned skill snapshot(s) for design guidance.
- Do not install the Anthropic frontend-design skill globally; use the local snapshot only.

The no-image-generation part matters. The generated projects had to solve the design problem through layout, type, UI structure, and code, not by hiding behind generated hero art.

## Required routes

Each profile had to build the same route set:

- `/landing`
- `/dashboard`
- `/product`
- `/suite`
- `/suite/itineraries`
- `/suite/notes`
- `/suite/account`

The screenshot run captured every route in desktop and mobile.

## Prompts

### Landing page

Product: Lumen Ledger

Prompt:

> Build a premium landing page for Lumen Ledger, a compliance-focused finance automation product for operators. It needs a first-viewport brand signal, one strong visual idea, clear CTA, proof, product depth, and a final conversion section. Avoid generic SaaS card soup and purple gradient defaults.

What this tested:

- Can the skill make a real brand signal quickly?
- Does it avoid generic SaaS patterns?
- Does it create one strong visual idea instead of a pile of cards?
- Can it still handle proof, CTA, product depth, and conversion?

### Operations dashboard

Product: Harbor Desk

Prompt:

> Build an operational dashboard for Harbor Desk, a same-day logistics control room. Show route health, exception queues, driver status, depot capacity, filters, and a useful detail/inspector region. Start with the working surface, not a hero. Dense, calm, scannable, and mobile-safe.

What this tested:

- Can the skill avoid making a dashboard into a landing page?
- Can it handle density without turning into clutter?
- Does it show filters, queues, status, capacity, and inspector detail?
- Is the mobile version still usable?

### Product detail page

Product: Meridian Type 42 field camera

Prompt:

> Build a product detail page for the Meridian Type 42 field camera. It should help a buyer compare variants, inspect materials, see specs, understand included accessories, and choose a configuration. Make the object feel tangible with strong layout, not fake testimonial filler.

What this tested:

- Can the skill make a product feel physical without generated imagery?
- Can it handle variants, specs, materials, accessories, and configuration?
- Does it avoid testimonial filler?
- Does the page help a buyer choose?

### Four-page mini site

Product: Northstar Atlas

Prompt:

> Build a cohesive four-page mini site for Northstar Atlas, a travel planning service for research teams. Include home, itineraries, field notes, and account pages with navigation between them. Each page should feel related but not duplicated, with real page-specific structure and responsive behavior.

What this tested:

- Can the skill create a small product suite, not just one page?
- Do the pages feel connected without being copy-pasted?
- Does navigation work across pages?
- Does each route have its own job?

## Rubric

The scoring rubric was 100 points:

| Category | Points |
| --- | ---: |
| Product fit and task completion | 20 |
| Visual hierarchy and composition | 20 |
| Distinctiveness without gimmickry | 15 |
| Information architecture and workflow clarity | 15 |
| Responsive resilience and text handling | 10 |
| Interaction states and motion appropriateness | 10 |
| Technical execution and maintainability | 10 |

Penalties were available for:

- Generic AI defaults: card soup, purple gradient SaaS look, fake bento filler, hero dashboard mockups, weak brand/object signal, interchangeable copy
- Layout failures: overlap, unreadable contrast, awkward mobile wrapping, horizontal scroll, broken navigation, missing required content
- Implementation issues: build failures, runtime errors, missing routes, inaccessible controls, inconsistent shared styles

## Global ranking

| Rank | Profile | Score | Best use | Short read |
| ---: | --- | ---: | --- | --- |
| 1 | `gpt-taste__frontend-skill__frontend-design` | 91 | High-impact marketing and product pages that still need restraint | Best overall. GPT-Taste supplied drama, frontend-skill restrained it, and frontend-design pushed the concepts beyond the generic. |
| 2 | `frontend-skill__design-taste-frontend__frontend-design` | 90 | Balanced product suites and operational UI with strong visual identity | Best no-GPT-Taste combo. Strong dashboard discipline, cohesive suite pages, and memorable enough brand/product work. |
| 3 | `frontend-design` | 89 | Distinctive page concepts and cohesive visual systems | Strongest single skill. It commits to memorable art direction without losing content. |
| 4 | `frontend-skill__frontend-design` | 89 | Expressive pages with fewer conflicting implementation constraints | Very good pair. Expressive, coherent, and less over-directed than the all-four combination. |
| 5 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | 89 | Broad all-purpose coverage when consistency matters more than a single sharp direction | The all-four profile was strong, but it did not win. The guidance sometimes competed and created a blended output. |
| 6 | `gpt-taste__frontend-skill` | 88 | Balanced marketing pages where expressive composition needs restraint | The original combo stayed solid and was much better controlled than GPT-Taste alone. |
| 7 | `frontend-skill__design-taste-frontend` | 88 | Dashboards and practical multi-page product UI | Strongest pair for utility surfaces, though less visually memorable on brand work. |
| 8 | `gpt-taste__frontend-skill__design-taste-frontend` | 88 | Dense product flows that still need a bolder first impression | Competent, but the added design-taste constraints made it calmer rather than clearly better than the original pair. |
| 9 | `design-taste-frontend__frontend-design` | 87 | Operational pages with a more distinctive visual wrapper | Good blend of structure and character, but the dashboard became a little sparse. |
| 10 | `gpt-taste__design-taste-frontend` | 87 | Bolder operational/marketing hybrids | Improved GPT-Taste's utility discipline, but not enough to beat pairings with frontend-design. |
| 11 | `gpt-taste__frontend-design` | 86 | Dark, expressive, memorable pages | Strong first impressions, but more prone to huge type and weaker dashboard ergonomics. |
| 12 | `design-taste-frontend` | 86 | Dashboards and operational tools | Best single skill for dashboards, but weaker on marketing/product memorability. |
| 13 | `gpt-taste__design-taste-frontend__frontend-design` | 86 | Editorial, concept-heavy surfaces | Interesting but uneven. Sometimes more editorial than useful. |
| 14 | `frontend-skill` | 85 | Tasteful restrained pages | Reliable and polished, but safer than the best combinations. |
| 15 | `gpt-taste` | 84 | High-impact hero pages | Memorable, but too forceful and less resilient on utility/mobile work. |

## Main interpretation

The best triple beat the all-four profile.

That is the headline worth using. The benchmark does not say "stack every design skill you can find." It says the right mix matters.

The winning combo worked because the parts corrected each other:

- GPT-Taste pushed the work away from safe template UI.
- Frontend Skill pulled the output back toward usable product pages.
- Frontend Design gave the pages stronger concepts.

The all-four profile had broad competence, but the output became less decisive. The guidance looked like it was competing in places. That is a useful warning for skill stacking: more instruction can create more coverage, but not always more taste.

## Page-type rankings

### Landing page

| Rank | Profile | Score |
| ---: | --- | ---: |
| 1 | `gpt-taste__frontend-skill__frontend-design` | 92 |
| 2 | `frontend-design` | 90 |
| 3 | `frontend-skill__frontend-design` | 90 |
| 4 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | 90 |
| 5 | `frontend-skill__design-taste-frontend__frontend-design` | 89 |
| 6 | `gpt-taste__frontend-skill` | 88 |
| 7 | `gpt-taste__frontend-skill__design-taste-frontend` | 88 |
| 8 | `design-taste-frontend__frontend-design` | 88 |
| 9 | `gpt-taste__design-taste-frontend` | 88 |
| 10 | `gpt-taste__frontend-design` | 88 |
| 11 | `gpt-taste__design-taste-frontend__frontend-design` | 87 |
| 12 | `frontend-skill` | 87 |
| 13 | `frontend-skill__design-taste-frontend` | 85 |
| 14 | `gpt-taste` | 85 |
| 15 | `design-taste-frontend` | 82 |

Read: frontend-design was very strong here. Design-taste alone was not the right tool for a landing page, which makes sense because it is more operational than marketing-oriented.

### Operations dashboard

| Rank | Profile | Score |
| ---: | --- | ---: |
| 1 | `gpt-taste__frontend-skill__frontend-design` | 91 |
| 2 | `frontend-skill__design-taste-frontend__frontend-design` | 91 |
| 3 | `frontend-skill__design-taste-frontend` | 91 |
| 4 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | 90 |
| 5 | `design-taste-frontend` | 90 |
| 6 | `gpt-taste__frontend-skill__design-taste-frontend` | 89 |
| 7 | `frontend-design` | 88 |
| 8 | `frontend-skill__frontend-design` | 88 |
| 9 | `gpt-taste__frontend-skill` | 88 |
| 10 | `gpt-taste__design-taste-frontend` | 88 |
| 11 | `gpt-taste__design-taste-frontend__frontend-design` | 85 |
| 12 | `design-taste-frontend__frontend-design` | 84 |
| 13 | `gpt-taste__frontend-design` | 84 |
| 14 | `frontend-skill` | 84 |
| 15 | `gpt-taste` | 83 |

Read: the top three tied by score. If the post talks about real dashboards, mention that `frontend-skill__design-taste-frontend` is probably the most practical pair even though the global winner took the overall tie-break.

### Product detail page

| Rank | Profile | Score |
| ---: | --- | ---: |
| 1 | `gpt-taste__frontend-skill__frontend-design` | 91 |
| 2 | `frontend-skill__design-taste-frontend__frontend-design` | 90 |
| 3 | `frontend-design` | 90 |
| 4 | `frontend-skill__frontend-design` | 90 |
| 5 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | 89 |
| 6 | `gpt-taste__frontend-design` | 89 |
| 7 | `gpt-taste__frontend-skill` | 88 |
| 8 | `frontend-skill__design-taste-frontend` | 88 |
| 9 | `gpt-taste__frontend-skill__design-taste-frontend` | 88 |
| 10 | `design-taste-frontend__frontend-design` | 88 |
| 11 | `gpt-taste__design-taste-frontend` | 88 |
| 12 | `frontend-skill` | 88 |
| 13 | `gpt-taste__design-taste-frontend__frontend-design` | 86 |
| 14 | `design-taste-frontend` | 85 |
| 15 | `gpt-taste` | 80 |

Read: GPT-Taste alone was weakest on product detail. It made an impression, but the page needed buyer help, specs, variants, accessories, and configuration. That punished pure drama.

### Four-page mini site

| Rank | Profile | Score |
| ---: | --- | ---: |
| 1 | `gpt-taste__frontend-skill__frontend-design` | 90 |
| 2 | `frontend-skill__design-taste-frontend__frontend-design` | 90 |
| 3 | `frontend-design` | 88 |
| 4 | `frontend-skill__frontend-design` | 88 |
| 5 | `gpt-taste__frontend-skill__design-taste-frontend__frontend-design` | 88 |
| 6 | `frontend-skill__design-taste-frontend` | 88 |
| 7 | `design-taste-frontend__frontend-design` | 88 |
| 8 | `gpt-taste__frontend-skill` | 87 |
| 9 | `gpt-taste__frontend-skill__design-taste-frontend` | 87 |
| 10 | `design-taste-frontend` | 87 |
| 11 | `gpt-taste__design-taste-frontend` | 86 |
| 12 | `gpt-taste__design-taste-frontend__frontend-design` | 86 |
| 13 | `frontend-skill` | 85 |
| 14 | `gpt-taste__frontend-design` | 84 |
| 15 | `gpt-taste` | 82 |

Read: multi-page cohesion rewarded balanced profiles. The two top profiles had enough structure to make routes distinct without making the site feel random.

## Category rankings

These are useful if the post wants to say "this profile won overall, but different skills showed different strengths."

### Product fit and task completion

Top scores:

- `gpt-taste__frontend-skill__frontend-design`: 19
- `frontend-skill__design-taste-frontend`: 19
- Several profiles at 18
- `gpt-taste`: 17

Read: product fit punished pure spectacle and rewarded profiles that handled the actual job on the page.

### Visual hierarchy and composition

Top score cluster at 18:

- `gpt-taste__frontend-skill__frontend-design`
- `frontend-skill__design-taste-frontend__frontend-design`
- `frontend-design`
- `frontend-skill__frontend-design`
- all-four profile
- `gpt-taste__frontend-skill`
- `gpt-taste__frontend-skill__design-taste-frontend`
- `frontend-skill`

Read: a lot of profiles handled basic hierarchy well. The differentiator was not just "can it lay things out?" It was whether the layout served the product and stayed responsive.

### Distinctiveness without gimmickry

Top score cluster at 14:

- `gpt-taste__frontend-skill__frontend-design`
- `frontend-skill__design-taste-frontend__frontend-design`
- `frontend-design`
- `frontend-skill__frontend-design`
- `gpt-taste__frontend-design`
- `gpt-taste__design-taste-frontend__frontend-design`
- `gpt-taste`

Lowest:

- `design-taste-frontend`: 11

Read: GPT-Taste and frontend-design helped distinctiveness. Design-taste helped utility more than visual memorability.

### Information architecture and workflow clarity

Top score cluster at 15:

- `gpt-taste__frontend-skill__frontend-design`
- `frontend-skill__design-taste-frontend__frontend-design`
- all-four profile
- `frontend-skill__design-taste-frontend`
- `gpt-taste__frontend-skill__design-taste-frontend`
- `design-taste-frontend`

Lowest:

- `gpt-taste__frontend-design`: 12
- `gpt-taste__design-taste-frontend__frontend-design`: 12
- `gpt-taste`: 12

Read: workflow clarity tracks strongly with design-taste. GPT-Taste alone or with another expressive skill tended to lose clarity.

### Responsive resilience and text handling

Top score cluster at 9:

- `gpt-taste__frontend-skill__frontend-design`
- `frontend-skill__design-taste-frontend__frontend-design`
- `frontend-design`
- `frontend-skill__frontend-design`
- all-four profile
- `frontend-skill__design-taste-frontend`
- `design-taste-frontend`

Lowest:

- `gpt-taste__frontend-design`: 7
- `gpt-taste__design-taste-frontend__frontend-design`: 7
- `gpt-taste`: 7

Read: giant visual systems can hurt mobile. The more practical skills improved mobile handling.

### Interaction states and motion appropriateness

Top score:

- `gpt-taste__frontend-design`: 9
- `gpt-taste__design-taste-frontend__frontend-design`: 9
- `gpt-taste`: 9

Read: GPT-Taste led motion/personality. But motion did not decide the benchmark. The winning profile only scored 7 here and still won overall because it was better balanced.

### Technical execution and maintainability

All profiles scored 9.

Read: this category did not separate the field. The generated apps built successfully across the board.

## Profile notes

### `gpt-taste`

Score: 84

Task scores:

- Landing: 85
- Dashboard: 83
- Product: 80
- Four-page mini site: 82

Category scores:

- Product fit/task completion: 17
- Visual hierarchy/composition: 16
- Distinctiveness: 14
- IA/workflow clarity: 12
- Responsive/text handling: 7
- Interaction/motion: 9
- Technical execution: 9

Strengths:

- Strong first-viewport brand signal.
- Most forceful single-skill visual personality.
- Strongest motion instinct among single skills.

Weaknesses:

- Mobile typography often felt too large.
- Utility screens inherited too much marketing posture.
- Several routes repeated similar dark-green hero language.

Useful read: GPT-Taste alone is memorable, but it needs a practical counterweight.

Evidence:

- `bench/results/screenshots/gpt-taste/landing-mobile.png`
- `bench/results/screenshots/gpt-taste/dashboard-desktop.png`
- `bench/results/screenshots/gpt-taste/product-mobile.png`

### `frontend-skill`

Score: 85

Task scores:

- Landing: 87
- Dashboard: 84
- Product: 88
- Four-page mini site: 85

Category scores:

- Product fit/task completion: 18
- Visual hierarchy/composition: 18
- Distinctiveness: 12
- IA/workflow clarity: 13
- Responsive/text handling: 8
- Interaction/motion: 7
- Technical execution: 9

Strengths:

- Restrained, tasteful hierarchy.
- Strong product detail page.
- Low filler and good content discipline.

Weaknesses:

- Less adventurous than the top combinations.
- Dashboard was usable but visually quiet.
- Motion and interaction states were lighter.

Useful read: reliable, polished, and safe. Good baseline, not the most memorable result.

Evidence:

- `bench/results/screenshots/frontend-skill/product-mobile.png`
- `bench/results/screenshots/frontend-skill/landing-desktop.png`
- `bench/results/screenshots/frontend-skill/suite-notes-desktop.png`

### `design-taste-frontend`

Score: 86

Task scores:

- Landing: 82
- Dashboard: 90
- Product: 85
- Four-page mini site: 87

Category scores:

- Product fit/task completion: 18
- Visual hierarchy/composition: 17
- Distinctiveness: 11
- IA/workflow clarity: 15
- Responsive/text handling: 9
- Interaction/motion: 7
- Technical execution: 9

Strengths:

- Best single-skill dashboard discipline.
- Strong mobile readability.
- Practical route structures.

Weaknesses:

- Weakest single-skill landing page.
- Repeated white/teal system across surfaces.
- Precise but not especially brand-forward.

Useful read: good for real app surfaces. Not the skill to use alone when the job is visual marketing.

Evidence:

- `bench/results/screenshots/design-taste-frontend/dashboard-desktop.png`
- `bench/results/screenshots/design-taste-frontend/dashboard-mobile.png`
- `bench/results/screenshots/design-taste-frontend/suite-account-mobile.png`

### `frontend-design`

Score: 89

Task scores:

- Landing: 90
- Dashboard: 88
- Product: 90
- Four-page mini site: 88

Category scores:

- Product fit/task completion: 18
- Visual hierarchy/composition: 18
- Distinctiveness: 14
- IA/workflow clarity: 14
- Responsive/text handling: 9
- Interaction/motion: 7
- Technical execution: 9

Strengths:

- Strongest single-skill art direction.
- Memorable grid-paper, object, and suite systems.
- Good balance of character and prompt coverage.

Weaknesses:

- Dashboard leaned a bit editorial.
- Interaction depth was moderate.
- Some routes prioritized concept over density.

Useful read: best single skill in the benchmark. A focused strong skill beat several combinations.

Evidence:

- `bench/results/screenshots/frontend-design/landing-desktop.png`
- `bench/results/screenshots/frontend-design/product-desktop.png`
- `bench/results/screenshots/frontend-design/suite-itineraries-mobile.png`

### `gpt-taste__frontend-skill`

Score: 88

Task scores:

- Landing: 88
- Dashboard: 88
- Product: 88
- Four-page mini site: 87

Strengths:

- Good balance between drama and restraint.
- Dashboard was clearer than GPT-Taste alone.
- Landing and product pages kept strong visual anchors.

Weaknesses:

- Suite navigation could feel cramped on mobile.
- Less surprising than frontend-design pairings.
- Shared beige material system risked sameness.

Useful read: GPT-Taste becomes much better when paired with a practical frontend skill.

Evidence:

- `bench/results/screenshots/gpt-taste__frontend-skill/dashboard-desktop.png`
- `bench/results/screenshots/gpt-taste__frontend-skill/landing-mobile.png`
- `bench/results/screenshots/gpt-taste__frontend-skill/suite-account-desktop.png`

### `gpt-taste__design-taste-frontend`

Score: 87

Task scores:

- Landing: 88
- Dashboard: 88
- Product: 88
- Four-page mini site: 86

Strengths:

- Design-taste improved GPT-Taste's operational discipline.
- Dashboard had clearer filters, route health, and inspector structure than GPT-Taste alone.
- Product page was bold but more controlled.

Weaknesses:

- Still had oversized GPT-Taste typography on mobile.
- Less memorable than combinations that included frontend-design.
- Some generated Next config warnings appeared.

Useful read: better than GPT-Taste alone for utility, but not as strong as the frontend-design combinations.

Evidence:

- `bench/results/screenshots/gpt-taste__design-taste-frontend/dashboard-desktop.png`
- `bench/results/screenshots/gpt-taste__design-taste-frontend/product-mobile.png`
- `bench/results/screenshots/gpt-taste__design-taste-frontend/suite-itineraries-desktop.png`

### `gpt-taste__frontend-design`

Score: 86

Task scores:

- Landing: 88
- Dashboard: 84
- Product: 89
- Four-page mini site: 84

Strengths:

- Strong dark, expressive first impressions.
- Product page felt bold and memorable.
- Clear visual personality.

Weaknesses:

- Dashboard utility was weaker.
- Mobile type could dominate the actual workflow.
- Two expressive skills together over-amplified hero posture.

Useful read: visually memorable, but too much expression without enough practical restraint.

Evidence:

- `bench/results/screenshots/gpt-taste__frontend-design/landing-mobile.png`
- `bench/results/screenshots/gpt-taste__frontend-design/dashboard-desktop.png`
- `bench/results/screenshots/gpt-taste__frontend-design/product-desktop.png`

### `frontend-skill__design-taste-frontend`

Score: 88

Task scores:

- Landing: 85
- Dashboard: 91
- Product: 88
- Four-page mini site: 88

Strengths:

- Strongest pair for dashboards and practical app surfaces.
- Good route/page distinction across the Northstar mini site.
- Readable mobile structures and clear controls.

Weaknesses:

- Less visually surprising than frontend-design combinations.
- Landing page was competent but not top-tier memorable.
- Some generated Next config warnings appeared.

Useful read: if the work is operational UI, this pair may be the better practical recommendation than the global winner.

Evidence:

- `bench/results/screenshots/frontend-skill__design-taste-frontend/dashboard-desktop.png`
- `bench/results/screenshots/frontend-skill__design-taste-frontend/dashboard-mobile.png`
- `bench/results/screenshots/frontend-skill__design-taste-frontend/suite-account-desktop.png`

### `frontend-skill__frontend-design`

Score: 89

Task scores:

- Landing: 90
- Dashboard: 88
- Product: 90
- Four-page mini site: 88

Strengths:

- Great pair for expressive but coherent pages.
- Product page had strong object presence.
- Suite pages had distinct jobs without feeling unrelated.

Weaknesses:

- Dashboard was less dense than design-taste pairings.
- Some surfaces became editorial rather than workflow-first.
- Motion stayed moderate.

Useful read: one of the best simple pairs. Good when you want visual quality without overloading the agent with too many instructions.

Evidence:

- `bench/results/screenshots/frontend-skill__frontend-design/landing-desktop.png`
- `bench/results/screenshots/frontend-skill__frontend-design/product-desktop.png`
- `bench/results/screenshots/frontend-skill__frontend-design/four-page-mobile.png`

### `design-taste-frontend__frontend-design`

Score: 87

Task scores:

- Landing: 88
- Dashboard: 84
- Product: 88
- Four-page mini site: 88

Strengths:

- Good visual wrapper around practical UI structure.
- Landing and suite pages were clean and memorable enough.
- Product page had strong comparison/spec orientation.

Weaknesses:

- Dashboard became too sparse compared with stronger operational runs.
- Some pages favored airy composition over workflow density.
- Not as distinctive as frontend-design alone on product storytelling.

Useful read: decent blend, but the pairing did not beat either the strongest visual setup or the strongest operational setup.

Evidence:

- `bench/results/screenshots/design-taste-frontend__frontend-design/dashboard-desktop.png`
- `bench/results/screenshots/design-taste-frontend__frontend-design/product-mobile.png`
- `bench/results/screenshots/design-taste-frontend__frontend-design/suite-itineraries-desktop.png`

### `gpt-taste__frontend-skill__design-taste-frontend`

Score: 88

Task scores:

- Landing: 88
- Dashboard: 89
- Product: 88
- Four-page mini site: 87

Strengths:

- Solid coverage across all prompts.
- Design-taste kept GPT-Taste/frontend-skill from becoming too decorative.
- Dashboard and suite routes felt coherent.

Weaknesses:

- Less visually sharp than frontend-design triples.
- Beige operational system repeated across routes.
- The extra skill made it safer, not more memorable.

Useful read: good, but not the winning kind of good. It added discipline but did not add enough visual upside.

Evidence:

- `bench/results/screenshots/gpt-taste__frontend-skill__design-taste-frontend/dashboard-desktop.png`
- `bench/results/screenshots/gpt-taste__frontend-skill__design-taste-frontend/four-page-desktop.png`
- `bench/results/screenshots/gpt-taste__frontend-skill__design-taste-frontend/suite-account-mobile.png`

### `gpt-taste__frontend-skill__frontend-design`

Score: 91

Task scores:

- Landing: 92
- Dashboard: 91
- Product: 91
- Four-page mini site: 90

Category scores:

- Product fit/task completion: 19
- Visual hierarchy/composition: 18
- Distinctiveness: 14
- IA/workflow clarity: 15
- Responsive/text handling: 9
- Interaction/motion: 7
- Technical execution: 9

Strengths:

- Best overall balance of boldness, restraint, and concept work.
- Dashboard was useful without feeling generic.
- Landing and product pages had strong first-viewport impact with better control than GPT-Taste alone.

Weaknesses:

- Still had some large-type mobile pressure.
- Motion was present but not the main reason it won.
- A few pages leaned on similar neutral/photo materiality.

Useful read: the winning mix. It had enough drama, enough product sense, and enough design concept.

Evidence:

- `bench/results/screenshots/gpt-taste__frontend-skill__frontend-design/landing-mobile.png`
- `bench/results/screenshots/gpt-taste__frontend-skill__frontend-design/dashboard-desktop.png`
- `bench/results/screenshots/gpt-taste__frontend-skill__frontend-design/product-desktop.png`

### `gpt-taste__design-taste-frontend__frontend-design`

Score: 86

Task scores:

- Landing: 87
- Dashboard: 85
- Product: 86
- Four-page mini site: 86

Strengths:

- Interesting editorial character.
- Strong visual mood on landing and suite pages.
- Good object presence on product.

Weaknesses:

- More concept-heavy than task-clear.
- Mobile type and dark editorial layouts reduced scan speed.
- Dashboard was less operationally crisp than design-taste pairings.

Useful read: interesting to look at, but uneven when the task needs clear workflows.

Evidence:

- `bench/results/screenshots/gpt-taste__design-taste-frontend__frontend-design/landing-desktop.png`
- `bench/results/screenshots/gpt-taste__design-taste-frontend__frontend-design/dashboard-mobile.png`
- `bench/results/screenshots/gpt-taste__design-taste-frontend__frontend-design/suite-notes-mobile.png`

### `frontend-skill__design-taste-frontend__frontend-design`

Score: 90

Task scores:

- Landing: 89
- Dashboard: 91
- Product: 90
- Four-page mini site: 90

Strengths:

- Best no-GPT-Taste combination.
- Strong practical dashboard plus distinct product/suite pages.
- Kept visual character without over-scaling or over-dramatizing.

Weaknesses:

- Landing page was strong but not as instantly loud as GPT-Taste combinations.
- Some pages used familiar beige/green product-app materiality.
- Motion was restrained.

Useful read: best setup if you do not want GPT-Taste. Very strong for app/product surfaces.

Evidence:

- `bench/results/screenshots/frontend-skill__design-taste-frontend__frontend-design/dashboard-desktop.png`
- `bench/results/screenshots/frontend-skill__design-taste-frontend__frontend-design/product-desktop.png`
- `bench/results/screenshots/frontend-skill__design-taste-frontend__frontend-design/suite-account-desktop.png`

### `gpt-taste__frontend-skill__design-taste-frontend__frontend-design`

Score: 89

Task scores:

- Landing: 90
- Dashboard: 90
- Product: 89
- Four-page mini site: 88

Strengths:

- Strong broad coverage across all prompts.
- Dashboard and product pages were useful and visually polished.
- Useful generalist setup.

Weaknesses:

- Did not beat the best triples.
- Competing guidance produced a more blended art direction.
- Some mobile pages still carried heavy hero typography.

Useful read: all four skills together is a safe, strong generalist. It is not the sharpest result.

Evidence:

- `bench/results/screenshots/gpt-taste__frontend-skill__design-taste-frontend__frontend-design/landing-mobile.png`
- `bench/results/screenshots/gpt-taste__frontend-skill__design-taste-frontend__frontend-design/dashboard-desktop.png`
- `bench/results/screenshots/gpt-taste__frontend-skill__design-taste-frontend__frontend-design/suite-account-mobile.png`

## Asset links

Use the contact sheets for quick comparison:

- Landing desktop: `bench/results/contact-sheets/landing-desktop.png`
- Landing mobile: `bench/results/contact-sheets/landing-mobile.png`
- Dashboard desktop: `bench/results/contact-sheets/dashboard-desktop.png`
- Dashboard mobile: `bench/results/contact-sheets/dashboard-mobile.png`
- Product desktop: `bench/results/contact-sheets/product-desktop.png`
- Product mobile: `bench/results/contact-sheets/product-mobile.png`
- Four-page desktop: `bench/results/contact-sheets/four-page-desktop.png`
- Four-page mobile: `bench/results/contact-sheets/four-page-mobile.png`
- Suite itineraries desktop: `bench/results/contact-sheets/suite-itineraries-desktop.png`
- Suite itineraries mobile: `bench/results/contact-sheets/suite-itineraries-mobile.png`
- Suite notes desktop: `bench/results/contact-sheets/suite-notes-desktop.png`
- Suite notes mobile: `bench/results/contact-sheets/suite-notes-mobile.png`
- Suite account desktop: `bench/results/contact-sheets/suite-account-desktop.png`
- Suite account mobile: `bench/results/contact-sheets/suite-account-mobile.png`

Use the screenshot index for separate images:

- `bench/results/screenshots/README.md`
- `bench/results/screenshots/<profile>/<page>-desktop.png`
- `bench/results/screenshots/<profile>/<page>-mobile.png`

Pages available for each profile:

- `landing-desktop.png`
- `landing-mobile.png`
- `dashboard-desktop.png`
- `dashboard-mobile.png`
- `product-desktop.png`
- `product-mobile.png`
- `four-page-desktop.png`
- `four-page-mobile.png`
- `suite-itineraries-desktop.png`
- `suite-itineraries-mobile.png`
- `suite-notes-desktop.png`
- `suite-notes-mobile.png`
- `suite-account-desktop.png`
- `suite-account-mobile.png`

## Evidence files

- `bench/profiles.json`: skill profiles and local skill paths
- `bench/prompts/prompts.json`: shared prompt set
- `bench/rubric.md`: scoring rubric
- `bench/results/report.md`: readable report
- `bench/results/report.json`: structured report
- `bench/results/grades.json`: machine-readable scores, strengths, weaknesses, evidence paths
- `bench/results/build-results.json`: build results
- `bench/results/screenshot-results.json`: screenshot manifest
- `bench/results/final-evaluation.md`: validity and bias check
- `bench/results/screenshots/README.md`: screenshot gallery index
- `bench/results/contact-sheets/`: comparison images
- `bench/results/screenshots/`: individual screenshots
- `bench/projects/`: generated apps

Raw worker logs are intentionally excluded from the public repo because they can contain local paths and machine-specific diagnostic output.

## Caveats to include

Use these if the post needs to sound honest:

- This is a controlled qualitative benchmark, not a statistically neutral study.
- There was one generation per profile.
- The grading was not blind.
- Scores reflect this rubric's taste priorities.
- All outputs came from the same GPT-5.5 Codex-worker setup.
- The benchmark did not compare Claude, Gemini, older GPT models, different reasoning budgets, or repeated runs.
- Local skill snapshots may drift from current upstream versions.
- Page and category ties were resolved by global rank, so tied category winners should be read as close clusters.

## Strong angles for the post

Do not use all of these at once. These are angle options.

1. "More skills did not automatically win."
   - The all-four profile scored 89.
   - The winning triple scored 91.
   - Good line: "The fourth skill made the result broader, not sharper."

2. "GPT-Taste was better as a spice than as the whole dish."
   - GPT-Taste alone scored 84.
   - GPT-Taste + Frontend Skill + Frontend Design scored 91.
   - GPT-Taste led motion/personality, but practical pairings fixed its mobile and utility problems.

3. "Frontend Design was the strongest single skill."
   - `frontend-design` scored 89.
   - It beat every single skill and several combinations.
   - Useful if the post wants a surprising result beyond the global winner.

4. "Dashboard work wants different guidance than marketing work."
   - `frontend-skill__design-taste-frontend` tied the dashboard winner at 91.
   - `design-taste-frontend` alone scored 90 on dashboard but only 82 on landing.
   - Useful line: "The skill that helps dashboards is not always the one that makes the loudest landing page."

5. "Motion did not decide the benchmark."
   - GPT-Taste profiles led interaction/motion.
   - The overall winner scored only 7/10 for motion.
   - It won through balance: task fit, concept, hierarchy, workflow clarity, and mobile handling.

## Things not to overclaim

- Do not say the benchmark proves one skill is best forever.
- Do not say the all-four setup failed. It scored 89 and ranked 5th.
- Do not say GPT-Taste is bad. It was the most visually forceful single skill, but it needed guardrails.
- Do not say design-taste is bad because it ranked lower overall. It was strong on dashboards and workflow clarity.
- Do not imply image generation made the pages look good. Image generation was not allowed.
- Do not imply raw worker logs are public. They are intentionally excluded.

## Humanizer pass notes

What could make this sound AI-generated if turned into a post:

- Too many tidy "the key insight is..." sentences.
- Too much perfect symmetry between skill names and takeaways.
- Overusing "controlled qualitative benchmark" like a legal disclaimer.
- Making every profile sound equally important.
- Ending with a generic "future of frontend design" conclusion.

Make it sound more human by:

- Being blunt about the weird part: the all-four profile was good, but less sharp.
- Saying when the result surprised you.
- Showing screenshots early.
- Using the ranking as evidence, not the whole story.
- Letting the post have an opinion: skill stacking is useful, but too many design instructions can flatten taste.
