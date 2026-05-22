import Link from "next/link";
import { ArrowRight, Camera, Compass, Landmark, Truck } from "lucide-react";

const routes = [
  {
    href: "/landing",
    label: "Lumen Ledger",
    description: "Compliance finance automation landing page",
    icon: Landmark,
  },
  {
    href: "/dashboard",
    label: "Harbor Desk",
    description: "Same-day logistics operations dashboard",
    icon: Truck,
  },
  {
    href: "/product",
    label: "Meridian Type 42",
    description: "Field camera product detail page",
    icon: Camera,
  },
  {
    href: "/suite",
    label: "Northstar Atlas",
    description: "Research travel planning mini-site",
    icon: Compass,
  },
  {
    href: "/suite/itineraries",
    label: "Itineraries",
    description: "Route and day planning workspace",
    icon: Compass,
  },
  {
    href: "/suite/notes",
    label: "Field Notes",
    description: "Research notes and observations",
    icon: Compass,
  },
  {
    href: "/suite/account",
    label: "Account",
    description: "Team, access, and billing settings",
    icon: Compass,
  },
];

export default function IndexPage() {
  return (
    <main id="content" className="index-page">
      <section className="index-intro">
        <p className="eyebrow">Frontend Skill Benchmark</p>
        <h1>Route index</h1>
        <p>
          A lightweight entry point for the benchmark surfaces. Each route is
          implemented as a production-quality App Router page.
        </p>
      </section>
      <nav className="route-list" aria-label="Benchmark routes">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link className="route-link" href={route.href} key={route.href}>
              <span className="route-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <span>
                <strong>{route.label}</strong>
                <small>{route.description}</small>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    </main>
  );
}
