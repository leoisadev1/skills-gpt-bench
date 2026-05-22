import Link from "next/link";
import {
  Aperture,
  ArrowRight,
  Compass,
  Gauge,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const routes = [
  {
    href: "/landing",
    name: "Lumen Ledger",
    label: "Landing page",
    summary: "Compliance-focused finance automation for operators.",
    Icon: ShieldCheck,
  },
  {
    href: "/dashboard",
    name: "Harbor Desk",
    label: "Operations dashboard",
    summary: "Same-day logistics control room with route and exception detail.",
    Icon: Gauge,
  },
  {
    href: "/product",
    name: "Meridian Type 42",
    label: "Product detail",
    summary: "Field camera variants, materials, specs, and configuration.",
    Icon: Aperture,
  },
  {
    href: "/suite",
    name: "Northstar Atlas",
    label: "Four-page mini site",
    summary: "Travel planning workspace for research teams.",
    Icon: Compass,
  },
];

export default function IndexPage() {
  return (
    <main className="index-page">
      <section className="index-hero">
        <p className="eyebrow">Frontend skill benchmark</p>
        <h1>One app, four purpose-built product surfaces.</h1>
        <p>
          Each route implements the benchmark brief directly with responsive
          app-router pages and a shared design system.
        </p>
      </section>
      <nav className="route-grid" aria-label="Benchmark routes">
        {routes.map(({ href, name, label, summary, Icon }) => (
          <Link className="route-tile" href={href} key={href}>
            <span className="route-icon" aria-hidden="true">
              <Icon size={22} weight="duotone" />
            </span>
            <span>
              <span className="route-label">{label}</span>
              <strong>{name}</strong>
              <span>{summary}</span>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </main>
  );
}
