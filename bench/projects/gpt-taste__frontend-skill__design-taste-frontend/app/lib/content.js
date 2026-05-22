export const benchmarkBriefs = {
  landing:
    "Build a premium landing page for Lumen Ledger, a compliance-focused finance automation product for operators. It needs a first-viewport brand signal, one strong visual idea, clear CTA, proof, product depth, and a final conversion section. Avoid generic SaaS card soup and purple gradient defaults.",
  dashboard:
    "Build an operational dashboard for Harbor Desk, a same-day logistics control room. Show route health, exception queues, driver status, depot capacity, filters, and a useful detail/inspector region. Start with the working surface, not a hero. Dense, calm, scannable, and mobile-safe.",
  product:
    "Build a product detail page for the Meridian Type 42 field camera. It should help a buyer compare variants, inspect materials, see specs, understand included accessories, and choose a configuration. Make the object feel tangible with strong layout, not fake testimonial filler.",
  suite:
    "Build a cohesive four-page mini site for Northstar Atlas, a travel planning service for research teams. Include home, itineraries, field notes, and account pages with navigation between them. Each page should feel related but not duplicated, with real page-specific structure and responsive behavior.",
};

export const mainRoutes = [
  { href: "/landing", label: "Lumen Ledger", detail: "Compliance finance landing page" },
  { href: "/dashboard", label: "Harbor Desk", detail: "Same-day logistics control room" },
  { href: "/product", label: "Meridian Type 42", detail: "Field camera product detail" },
  { href: "/suite", label: "Northstar Atlas", detail: "Research travel planning suite" },
];

export const suiteRoutes = [
  { href: "/suite", label: "Home" },
  { href: "/suite/itineraries", label: "Itineraries" },
  { href: "/suite/notes", label: "Field notes" },
  { href: "/suite/account", label: "Account" },
];

export const ledgerRows = [
  ["Vendor onboarding", "Controls matched", "8 min ago"],
  ["Close checklist", "Exception cleared", "17 min ago"],
  ["Payment run", "Dual approval", "31 min ago"],
  ["Revenue file", "Policy linked", "44 min ago"],
];

export const dashboardData = {
  all: {
    routes: [
      ["R-418", "Loop District", "88%", "12 min risk", "Escalate"],
      ["R-203", "South Shore", "94%", "Clear", "Watch"],
      ["R-771", "West Fulton", "72%", "Dock delay", "Dispatch"],
      ["R-552", "Evanston", "91%", "Clear", "Watch"],
    ],
    exceptions: ["Cold-chain handoff missing photo", "Driver 47 nearing HOS limit", "Depot C bay three blocked"],
  },
  priority: {
    routes: [
      ["R-771", "West Fulton", "72%", "Dock delay", "Dispatch"],
      ["R-418", "Loop District", "88%", "12 min risk", "Escalate"],
    ],
    exceptions: ["Depot C bay three blocked", "Cold-chain handoff missing photo"],
  },
  depots: {
    routes: [
      ["D-A12", "North Pier", "81%", "2 open bays", "Balance"],
      ["D-C03", "Canal Yard", "63%", "Bay three blocked", "Clear"],
      ["D-F22", "Ashland", "89%", "Clear", "Watch"],
    ],
    exceptions: ["Depot C bay three blocked", "Yard scanner offline for lane two"],
  },
};

export const cameraVariants = [
  {
    name: "Graphite body",
    price: "$2,840",
    tone: "Matte charcoal alloy",
    lens: "42mm weather-sealed prime",
    stock: "Ships in 5 business days",
  },
  {
    name: "Field olive kit",
    price: "$3,120",
    tone: "Anodized olive shell",
    lens: "42mm prime plus hood",
    stock: "Low inventory",
  },
  {
    name: "Sand survey set",
    price: "$3,360",
    tone: "Textured ceramic coat",
    lens: "42mm prime plus range plate",
    stock: "Made to order",
  },
];

export const suiteTrips = [
  ["Svalbard Ice Core", "Apr 12-19", "5 researchers", "Permits confirmed"],
  ["Atacama Radio Array", "May 2-10", "3 researchers", "Altitude review"],
  ["Skellig Archive", "Jun 4-8", "4 researchers", "Ferry window open"],
];
