import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Compass,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

const routes = [
  {
    href: "/landing",
    label: "Lumen Ledger",
    kicker: "Compliance finance landing",
    icon: ShieldCheck,
  },
  {
    href: "/dashboard",
    label: "Harbor Desk",
    kicker: "Same-day logistics control",
    icon: LayoutDashboard,
  },
  {
    href: "/product",
    label: "Meridian Type 42",
    kicker: "Field camera product page",
    icon: Camera,
  },
  {
    href: "/suite",
    label: "Northstar Atlas",
    kicker: "Research travel suite",
    icon: Compass,
  },
];

export default function Home() {
  return (
    <main className="index-page">
      <section className="index-panel" aria-labelledby="index-title">
        <p className="eyebrow">Frontend benchmark</p>
        <h1 id="index-title">Four production surfaces, one skill pairing.</h1>
        <p className="index-copy">
          The routes below point to the completed App Router pages for the assigned
          frontend-skill and frontend-design profile.
        </p>
        <div className="index-links" aria-label="Benchmark routes">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link key={route.href} className="index-link" href={route.href}>
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{route.label}</strong>
                  <small>{route.kicker}</small>
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
