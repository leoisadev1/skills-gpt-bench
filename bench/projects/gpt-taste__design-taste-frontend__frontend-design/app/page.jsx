import Link from "next/link";
import { ArrowRight, Gauge, ShieldCheck, Camera, Compass } from "@phosphor-icons/react/ssr";

const routes = [
  {
    href: "/landing",
    title: "Lumen Ledger",
    brief: "Compliance-focused finance automation for operators.",
    icon: ShieldCheck
  },
  {
    href: "/dashboard",
    title: "Harbor Desk",
    brief: "Same-day logistics control room.",
    icon: Gauge
  },
  {
    href: "/product",
    title: "Meridian Type 42",
    brief: "Field camera product detail and configuration.",
    icon: Camera
  },
  {
    href: "/suite",
    title: "Northstar Atlas",
    brief: "Travel planning service for research teams.",
    icon: Compass
  }
];

export default function Home() {
  return (
    <main className="index-page overflow-guard">
      <section className="index-hero" data-reveal>
        <p className="index-kicker">Frontend skill benchmark</p>
        <h1>Four production surfaces, one routed Next.js app.</h1>
        <p>
          Each route implements the benchmark prompt as a working interface with distinct structure,
          responsive behavior, and stable visuals for screenshot review.
        </p>
      </section>
      <section className="index-grid" aria-label="Benchmark routes">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link href={route.href} className="index-card" key={route.href} data-reveal>
              <Icon size={28} weight="duotone" aria-hidden="true" />
              <span>
                <strong>{route.title}</strong>
                <small>{route.brief}</small>
              </span>
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
