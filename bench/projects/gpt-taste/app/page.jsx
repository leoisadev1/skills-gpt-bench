import Link from "next/link";
import { benchmarkPrompts, suiteRoutes } from "../lib/prompts";

const routes = [
  { href: "/landing", title: "Lumen Ledger", prompt: benchmarkPrompts.landing },
  { href: "/dashboard", title: "Harbor Desk", prompt: benchmarkPrompts.dashboard },
  { href: "/product", title: "Meridian Type 42", prompt: benchmarkPrompts.product },
  { href: "/suite", title: "Northstar Atlas", prompt: benchmarkPrompts.suite },
];

export default function IndexPage() {
  return (
    <main className="index-page overflow-guard">
      <section className="index-hero">
        <div className="index-hero__copy">
          <p className="eyebrow">GPT Taste benchmark</p>
          <h1>Production surfaces for every assigned route.</h1>
          <p>
            Each path uses the shared prompt text as the brief, with responsive app-router pages and
            stable placeholder media.
          </p>
        </div>
        <div className="index-hero__panel" aria-label="Route index">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="index-route group-card">
              <span>{route.title}</span>
              <small>{route.href}</small>
            </Link>
          ))}
        </div>
      </section>
      <section className="index-suite">
        <h2>Northstar Atlas pages</h2>
        <div>
          {suiteRoutes.map((route) => (
            <Link key={route.href} href={route.href}>
              <span>{route.label}</span>
              <small>{route.description}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
