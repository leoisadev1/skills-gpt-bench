import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const routes = [
  {
    href: "/landing",
    title: "Lumen Ledger",
    detail: "Premium finance automation landing page",
  },
  {
    href: "/dashboard",
    title: "Harbor Desk",
    detail: "Same-day logistics control room",
  },
  {
    href: "/product",
    title: "Meridian Type 42",
    detail: "Field camera product detail page",
  },
  {
    href: "/suite",
    title: "Northstar Atlas",
    detail: "Four-page travel planning mini site",
  },
];

export default function Home() {
  return (
    <main className="home-index overflow-safe">
      <div className="home-index-inner">
        <header className="home-header">
          <strong>Frontend Skill Benchmark</strong>
          <span>gpt-taste + frontend-skill + frontend-design</span>
        </header>
        <h1 className="home-title">Four surfaces, one local Next build.</h1>
        <p className="home-copy">
          Route index for the benchmark app. Each destination is built as a real responsive surface using the assigned local skill snapshots.
        </p>
        <section className="route-grid" aria-label="Benchmark routes">
          {routes.map((route) => (
            <Link href={route.href} className="route-card" key={route.href}>
              <span>{route.detail}</span>
              <strong>
                {route.title}
                <ArrowUpRight size={20} aria-hidden="true" />
              </strong>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
