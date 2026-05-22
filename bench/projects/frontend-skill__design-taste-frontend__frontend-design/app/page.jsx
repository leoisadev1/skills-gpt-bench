import Link from "next/link";
import { ArrowRight, Compass, Gauge, Camera, MapTrifold } from "@phosphor-icons/react/ssr";

const routes = [
  {
    href: "/landing",
    label: "Landing",
    title: "Lumen Ledger",
    description: "Finance automation landing page with a full-bleed compliance rail.",
    icon: Compass,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    title: "Harbor Desk",
    description: "Same-day logistics control room with dense route and exception data.",
    icon: Gauge,
  },
  {
    href: "/product",
    label: "Product",
    title: "Meridian Type 42",
    description: "Field camera product detail page with variants and material proof.",
    icon: Camera,
  },
  {
    href: "/suite",
    label: "Mini Site",
    title: "Northstar Atlas",
    description: "Travel planning suite with home, itineraries, notes, and account pages.",
    icon: MapTrifold,
  },
];

export default function Home() {
  return (
    <main className="index-page">
      <section className="index-hero" aria-labelledby="index-title">
        <div className="index-mark">FB</div>
        <p className="eyebrow">Frontend benchmark</p>
        <h1 id="index-title">Four production surfaces for screenshot review.</h1>
        <p>
          Built as a self-contained Next.js App Router project for the assigned
          frontend-skill, design-taste-frontend, and frontend-design snapshots.
        </p>
      </section>

      <nav className="route-grid" aria-label="Benchmark routes">
        {routes.map((route, index) => {
          const Icon = route.icon;
          return (
            <Link
              className="route-tile"
              href={route.href}
              key={route.href}
              style={{ "--i": index }}
            >
              <span className="route-tile__label">
                <Icon size={18} weight="duotone" aria-hidden="true" />
                {route.label}
              </span>
              <strong>{route.title}</strong>
              <span>{route.description}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    </main>
  );
}
