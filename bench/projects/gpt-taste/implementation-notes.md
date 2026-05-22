# GPT Taste Implementation Notes

Assigned design guidance used:

- `bench/skills/gpt-taste/SKILL.md`

The benchmark prompt text in `bench/prompts/prompts.json` was used as the brief for each surface:

- `/landing`: Lumen Ledger compliance-focused finance automation landing page.
- `/dashboard`: Harbor Desk same-day logistics operational dashboard.
- `/product`: Meridian Type 42 field camera product detail page.
- `/suite`, `/suite/itineraries`, `/suite/notes`, `/suite/account`: Northstar Atlas four-page mini site.

How the snapshot shaped the output:

- I followed the snapshot's deterministic planning requirement with a seed of `1156`, selecting Artistic Asymmetry, Satoshi-style typography, inline typography images, horizontal accordions, infinite marquee, image scale/fade scroll, and card stacking.
- Marketing and product surfaces use ultra-wide hero type, inline pill media, strong first-viewport brand signals, visible CTAs, and final conversion sections.
- Dense grids use `grid-auto-flow: dense` with balanced spans so desktop rows do not leave intentional dead cells.
- GSAP is isolated in `components/MotionField.tsx` and targets declarative data attributes for image scale/fade, word reveal, and stacked card motion.
- The dashboard intentionally starts with the working surface, filters, route health, exceptions, driver status, depot capacity, and an inspector panel instead of a hero.
- Northstar Atlas pages share a related navigation and material language while each page has distinct structure: route cards, itinerary timeline/map, notes workspace, and account controls.
- All imagery uses stable `picsum.photos/seed/...` URLs and CSS treatments. No image generation tools or AI image APIs were used.
- No dev server was started.
