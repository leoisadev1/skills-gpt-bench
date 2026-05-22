export const benchmarkBriefs = {
  landing:
    "Build a premium landing page for Lumen Ledger, a compliance-focused finance automation product for operators. It needs a first-viewport brand signal, one strong visual idea, clear CTA, proof, product depth, and a final conversion section. Avoid generic SaaS card soup and purple gradient defaults.",
  dashboard:
    "Build an operational dashboard for Harbor Desk, a same-day logistics control room. Show route health, exception queues, driver status, depot capacity, filters, and a useful detail/inspector region. Start with the working surface, not a hero. Dense, calm, scannable, and mobile-safe.",
  product:
    "Build a product detail page for the Meridian Type 42 field camera. It should help a buyer compare variants, inspect materials, see specs, understand included accessories, and choose a configuration. Make the object feel tangible with strong layout, not fake testimonial filler.",
  suite:
    "Build a cohesive four-page mini site for Northstar Atlas, a travel planning service for research teams. Include home, itineraries, field notes, and account pages with navigation between them. Each page should feel related but not duplicated, with real page-specific structure and responsive behavior."
};

export const primaryRoutes = [
  { href: "/landing", label: "Landing" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/product", label: "Product" },
  { href: "/suite", label: "Suite" }
];

export const suiteRoutes = [
  { href: "/suite", label: "Home" },
  { href: "/suite/itineraries", label: "Itineraries" },
  { href: "/suite/notes", label: "Field Notes" },
  { href: "/suite/account", label: "Account" }
];

export function picsum(seed, width = 1600, height = 1100) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
