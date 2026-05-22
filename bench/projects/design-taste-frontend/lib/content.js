export const routes = [
  {
    href: "/landing",
    label: "Lumen Ledger",
    description: "Compliance finance automation for operators"
  },
  {
    href: "/dashboard",
    label: "Harbor Desk",
    description: "Same-day logistics control room"
  },
  {
    href: "/product",
    label: "Meridian Type 42",
    description: "Field camera product detail"
  },
  {
    href: "/suite",
    label: "Northstar Atlas",
    description: "Research-team travel planning suite"
  }
];

export const landingProof = [
  { label: "Evidence packs exported", value: "18,742" },
  { label: "Close tasks reconciled", value: "42.7m" },
  { label: "Auditor questions deflected", value: "71.4%" }
];

export const ledgerSteps = [
  "Ingest bank feeds, approvals, payroll, and vendor changes.",
  "Bind each transaction to policy, owner, and proof.",
  "Route exceptions to operators before month-end hardens."
];

export const routeHealth = [
  { lane: "Pier 7 to Midtown labs", eta: "18m", health: 87, load: "12 vans", status: "Clear" },
  { lane: "South cold dock to Queens", eta: "31m", health: 61, load: "8 vans", status: "Watch" },
  { lane: "Newark intake loop", eta: "44m", health: 42, load: "6 vans", status: "Risk" },
  { lane: "Harlem hospital run", eta: "22m", health: 76, load: "9 vans", status: "Clear" }
];

export const exceptions = [
  {
    id: "ex-741",
    type: "Cold chain",
    title: "Van 42A crossed 6.8 C for nine minutes",
    lane: "South cold dock to Queens",
    owner: "Marta Velez",
    age: "11m",
    priority: "High",
    action: "Move biologics to insulated reserve bay at Depot C."
  },
  {
    id: "ex-318",
    type: "Customs",
    title: "Importer code mismatch on radiology crates",
    lane: "Newark intake loop",
    owner: "Oren Feld",
    age: "26m",
    priority: "High",
    action: "Attach corrected IOR letter before dispatch window closes."
  },
  {
    id: "ex-904",
    type: "Dock hold",
    title: "Bay 3 forklift battery is below shift threshold",
    lane: "Pier 7 to Midtown labs",
    owner: "Asha Marin",
    age: "34m",
    priority: "Medium",
    action: "Swap bay assignment with Bay 1 and stage charger."
  },
  {
    id: "ex-527",
    type: "Cold chain",
    title: "Dry ice reserve is short by 18.6 kg",
    lane: "Harlem hospital run",
    owner: "Vikram Doss",
    age: "48m",
    priority: "Medium",
    action: "Reserve from Hudson supplier and retime pickup group."
  }
];

export const drivers = [
  { name: "Elian Brookes", zone: "North loop", state: "On route", stops: 7 },
  { name: "Noor Sayegh", zone: "Hospital line", state: "Loading", stops: 5 },
  { name: "Bennett Shaw", zone: "Pier intake", state: "Paused", stops: 3 },
  { name: "Rina Calder", zone: "Queens sprint", state: "On route", stops: 8 }
];

export const depots = [
  { name: "Depot A", capacity: 72, detail: "General freight" },
  { name: "Depot C", capacity: 88, detail: "Cold reserve" },
  { name: "Pier Annex", capacity: 54, detail: "Intake staging" }
];

export const productVariants = [
  {
    id: "field",
    name: "Field Kit",
    price: "$2,840",
    lens: "42mm f/2.4 fixed prime",
    body: "Sealed magnesium alloy",
    runtime: "14.6 hr cell",
    weight: "612 g"
  },
  {
    id: "survey",
    name: "Survey Kit",
    price: "$3,260",
    lens: "42mm f/2.4 plus range hood",
    body: "Titanium rail with grip cage",
    runtime: "18.2 hr dual cell",
    weight: "689 g"
  },
  {
    id: "archive",
    name: "Archive Kit",
    price: "$3,980",
    lens: "42mm macro-calibrated prime",
    body: "Graphite ceramic shell",
    runtime: "16.8 hr cell",
    weight: "641 g"
  }
];

export const materials = [
  "Graphite ceramic",
  "Brushed titanium",
  "Weathered olive"
];

export const accessories = [
  "Sealed battery sled",
  "Color reference strip",
  "Canvas field wrap",
  "Dual card capsule",
  "Tripod indexing plate"
];

export const suiteLinks = [
  { href: "/suite", label: "Home" },
  { href: "/suite/itineraries", label: "Itineraries" },
  { href: "/suite/notes", label: "Field notes" },
  { href: "/suite/account", label: "Account" }
];

export const itineraryRows = [
  { day: "D1", place: "Oslo archive wing", focus: "Transit permits", window: "09:20 to 15:10" },
  { day: "D2", place: "Tromso climate pier", focus: "Sampler transfer", window: "07:45 to 19:30" },
  { day: "D3", place: "Svalbard staging house", focus: "Cold room intake", window: "10:00 to 16:40" },
  { day: "D4", place: "Longyearbyen return", focus: "Specimen audit", window: "06:30 to 13:15" }
];

export const notes = [
  {
    title: "Glacier approach access",
    author: "Celia Iversen",
    tag: "Permit",
    excerpt: "Local coordinator requests final route pin before issuing the overnight vehicle letter."
  },
  {
    title: "Sensor crate handling",
    author: "Tomas Ader",
    tag: "Equipment",
    excerpt: "Two crates need upright-only labeling because the inertial units drift after side storage."
  },
  {
    title: "Interview room acoustics",
    author: "Mina Okonkwo",
    tag: "Site",
    excerpt: "Room B has intermittent freezer noise. Reserve Room D for recorded sessions."
  }
];
