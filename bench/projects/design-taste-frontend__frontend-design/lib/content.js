export const topRoutes = [
  { href: "/landing", label: "Lumen Ledger", eyebrow: "Finance automation" },
  { href: "/dashboard", label: "Harbor Desk", eyebrow: "Logistics control" },
  { href: "/product", label: "Meridian Type 42", eyebrow: "Field camera" },
  { href: "/suite", label: "Northstar Atlas", eyebrow: "Research travel" }
];

export const ledgerEvents = [
  { time: "08:14", label: "Invoice batch matched", value: "$418,720", state: "cleared" },
  { time: "08:22", label: "Policy exception isolated", value: "3 vendors", state: "review" },
  { time: "08:36", label: "Controls evidence bundled", value: "42 files", state: "ready" },
  { time: "08:47", label: "Operator approval captured", value: "A. Mehra", state: "cleared" }
];

export const complianceProof = [
  "SOC 2 control map",
  "SOX evidence trail",
  "ERP audit exports",
  "Vendor change review"
];

export const routeHealth = [
  {
    id: "HX-184",
    lane: "Pier 8 to Fulton",
    driver: "Maren Okafor",
    eta: "18 min",
    state: "On time",
    load: "Cold chain",
    risk: 18
  },
  {
    id: "GL-512",
    lane: "Depot North to Red Hook",
    driver: "Ilya Moreno",
    eta: "42 min",
    state: "At risk",
    load: "Priority",
    risk: 64
  },
  {
    id: "CM-290",
    lane: "Laurel Yard to SoHo",
    driver: "Priya Lasker",
    eta: "7 min",
    state: "Ahead",
    load: "Retail",
    risk: 9
  },
  {
    id: "BA-073",
    lane: "Bay 3 to Greenpoint",
    driver: "Tomasz Vale",
    eta: "31 min",
    state: "Blocked",
    load: "Medical",
    risk: 82
  }
];

export const exceptionQueue = [
  { code: "Label scan", count: 7, owner: "Dispatch", urgency: "high" },
  { code: "Gate hold", count: 3, owner: "Depot North", urgency: "medium" },
  { code: "Temp drift", count: 2, owner: "Cold desk", urgency: "high" },
  { code: "Address split", count: 5, owner: "Routing", urgency: "low" }
];

export const driverStatus = [
  { name: "Neve Callow", status: "Available", stop: "Bay 2", hours: "4.6h" },
  { name: "Jonas Rhee", status: "Loading", stop: "Pier 8", hours: "6.1h" },
  { name: "Salma Voss", status: "Break", stop: "Depot West", hours: "2.9h" },
  { name: "Ren Ito", status: "Final mile", stop: "Canal", hours: "7.2h" }
];

export const depotCapacity = [
  { depot: "North", volume: 71, docks: "9/12" },
  { depot: "West", volume: 48, docks: "5/10" },
  { depot: "Pier 8", volume: 86, docks: "11/12" }
];

export const productVariants = [
  {
    id: "brass",
    name: "Graphite brass",
    finish: "Anodized graphite with brass controls",
    price: "$3,480",
    weight: "912 g",
    weather: "IP54 sealed",
    color: "graphite",
    note: "Best balance for survey teams and editorial field kits."
  },
  {
    id: "olive",
    name: "Olive titanium",
    finish: "Matte olive titanium shell",
    price: "$3,940",
    weight: "788 g",
    weather: "IP56 sealed",
    color: "olive",
    note: "Lighter body for long field days and wet climates."
  },
  {
    id: "silver",
    name: "Archive silver",
    finish: "Satin alloy with black knurled dials",
    price: "$3,220",
    weight: "936 g",
    weather: "IP52 sealed",
    color: "silver",
    note: "Studio-friendly finish with the clearest material contrast."
  }
];

export const productSpecs = [
  ["Sensor", "42 MP stacked APS-C"],
  ["Lens mount", "Meridian M bayonet"],
  ["Shutter", "Leaf, 1/2000 mechanical"],
  ["Storage", "Dual CFexpress Type A"],
  ["Battery", "620 frames field rated"],
  ["Display", "3.4 in daylight LCD"]
];

export const accessories = [
  "Weather collar kit",
  "Field strap with quick lugs",
  "Dual-cell charger",
  "Rigid archive case",
  "Calibration slate"
];

export const suiteLinks = [
  { href: "/suite", label: "Home" },
  { href: "/suite/itineraries", label: "Itineraries" },
  { href: "/suite/notes", label: "Field notes" },
  { href: "/suite/account", label: "Account" }
];

export const itineraryRows = [
  { day: "Mon", site: "Tromso archive", lead: "K. Ravn", window: "09:10 to 12:40", status: "Confirmed" },
  { day: "Tue", site: "Harbor samples lab", lead: "M. Baines", window: "13:20 to 16:10", status: "Travel risk" },
  { day: "Wed", site: "Fjord transect", lead: "I. Sorrel", window: "07:30 to 15:45", status: "Permit ready" },
  { day: "Fri", site: "Oslo review room", lead: "D. Nwosu", window: "10:00 to 14:15", status: "Draft" }
];

export const fieldNotes = [
  { title: "Cold-room access", author: "Mika Baines", tag: "Access", age: "12 min" },
  { title: "Specimen chain handoff", author: "Ines Sorrel", tag: "Protocol", age: "34 min" },
  { title: "Late ferry contingency", author: "Klara Ravn", tag: "Travel", age: "1 h" }
];
