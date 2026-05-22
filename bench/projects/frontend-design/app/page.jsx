import Link from "next/link";
import { ArrowRight, Gauge, Map, PackageCheck, Sparkles } from "lucide-react";

const routes = [
  {
    href: "/landing",
    title: "Lumen Ledger",
    label: "Compliance finance landing page",
    icon: Sparkles,
  },
  {
    href: "/dashboard",
    title: "Harbor Desk",
    label: "Same-day logistics control room",
    icon: Gauge,
  },
  {
    href: "/product",
    title: "Meridian Type 42",
    label: "Field camera product detail",
    icon: PackageCheck,
  },
  {
    href: "/suite",
    title: "Northstar Atlas",
    label: "Research travel planning suite",
    icon: Map,
  },
];

export default function HomePage() {
  return (
    <main className="index-page">
      <section className="index-hero" aria-labelledby="index-title">
        <p className="eyebrow">Frontend skill benchmark</p>
        <h1 id="index-title">Four production surfaces, one self-contained app.</h1>
        <p>
          This directory implements the benchmark routes for the frontend-design
          profile using app-router pages and CSS/SVG visuals.
        </p>
        <div className="index-grid">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link className="index-card" href={route.href} key={route.href}>
                <Icon size={22} aria-hidden="true" />
                <span>
                  <strong>{route.title}</strong>
                  <small>{route.label}</small>
                </span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
