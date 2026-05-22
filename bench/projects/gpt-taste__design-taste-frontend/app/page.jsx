import Link from "next/link";
import { BenchIcon } from "../components/BenchIcon";
import { SiteNav, benchmarkLinks } from "../components/SiteNav";

const routes = [
  {
    href: "/landing",
    title: "Lumen Ledger",
    description: "Compliance finance landing page with proof, product depth, and conversion.",
    icon: "Bank"
  },
  {
    href: "/dashboard",
    title: "Harbor Desk",
    description: "Same-day logistics control room with queues, filters, and inspection.",
    icon: "Truck"
  },
  {
    href: "/product",
    title: "Meridian Type 42",
    description: "Field camera product page with variants, materials, specs, and kit choices.",
    icon: "Camera"
  },
  {
    href: "/suite",
    title: "Northstar Atlas",
    description: "A four-page travel planning suite for research teams.",
    icon: "Compass"
  }
];

export default function HomePage() {
  return (
    <main className="site-shell hub-shell">
      <SiteNav brand="Benchmark Index" links={benchmarkLinks} ctaHref="/landing" ctaLabel="Start review" />
      <section className="hub-hero">
        <div>
          <p className="eyebrow">gpt-taste + design-taste-frontend</p>
          <h1>Four benchmark surfaces, one cohesive production pass.</h1>
        </div>
        <p>
          This app links to every required route and keeps each brief distinct: marketing,
          operations, commerce, and a multi-page product suite.
        </p>
      </section>
      <section className="route-grid" aria-label="Benchmark routes">
        {routes.map(({ href, title, description, icon }) => (
          <Link className="route-card" href={href} key={href}>
            <span className="route-icon" aria-hidden="true">
              <BenchIcon name={icon} size={25} />
            </span>
            <span>
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
            <BenchIcon name="ArrowRight" size={18} />
          </Link>
        ))}
      </section>
    </main>
  );
}
