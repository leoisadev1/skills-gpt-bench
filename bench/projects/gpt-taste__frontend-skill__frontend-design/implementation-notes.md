# Implementation Notes

This app implements the benchmark prompts from `bench/prompts/prompts.json` as a self-contained Next.js app-router project.

## Skill snapshot influence

- `gpt-taste` shaped the high-contrast Lumen Ledger hero, wide two-line headline treatment, inline image capsule, dense proof grid, marquee, GSAP-powered reveals, scroll scaling, word scrubbing, and stacked product-depth cards.
- `frontend-skill` kept the landing and product pages focused on one dominant visual idea per section, with restrained copy, real image anchors from stable placeholder URLs, clear CTAs, and fewer but more meaningful panels.
- `frontend-design` pushed each surface toward a distinct point of view: dark compliance control room for Lumen Ledger, calm utilitarian dispatch for Harbor Desk, tactile material-led commerce for Meridian Type 42, and warm field-research editorial structure for Northstar Atlas.

## Route coverage

- `/` links to all benchmark surfaces.
- `/landing` builds the Lumen Ledger premium landing page.
- `/dashboard` builds the Harbor Desk operational control room.
- `/product` builds the Meridian Type 42 product detail page.
- `/suite`, `/suite/itineraries`, `/suite/notes`, and `/suite/account` build the Northstar Atlas mini site with shared navigation and page-specific structures.

## Validation target

The intended narrow check is:

```bash
bun run build
```

from this profile directory.
