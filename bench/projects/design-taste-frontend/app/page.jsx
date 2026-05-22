import Link from "next/link";
import { routes } from "../lib/content";
import { Icon } from "./components/Icon";
import { RouteNav } from "./components/RouteNav";

export default function HomePage() {
  return (
    <main id="main-content" className="home-shell">
      <RouteNav />
      <section className="home-intro">
        <p className="eyebrow">Frontend skill benchmark</p>
        <h1>Four production surfaces, one controlled design profile.</h1>
        <p>
          This app links to each required route built for the design-taste-frontend profile:
          finance automation, logistics operations, field camera commerce, and travel planning.
        </p>
      </section>
      <section className="home-route-grid" aria-label="Benchmark routes">
        {routes.map((route, index) => (
          <Link key={route.href} href={route.href} className="home-route-card">
            <span>0{index + 1}</span>
            <strong>{route.label}</strong>
            <small>{route.description}</small>
            <Icon name="ArrowRight" size={18} />
          </Link>
        ))}
      </section>
    </main>
  );
}
