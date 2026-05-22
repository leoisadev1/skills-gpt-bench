import Link from "next/link";
import { topRoutes } from "../lib/content";
import { AppIcon } from "./components/AppIcon";

const icons = ["House", "Gauge", "Package", "Compass"];

export default function HomePage() {
  return (
    <main className="index-page">
      <section className="index-hero" aria-labelledby="index-title">
        <p className="eyebrow">Frontend skill benchmark</p>
        <h1 id="index-title">Four production surfaces, one local Next.js app.</h1>
        <p>
          Open the benchmark routes for Lumen Ledger, Harbor Desk, Meridian Type 42, and Northstar Atlas.
        </p>
      </section>
      <nav className="index-grid" aria-label="Benchmark routes">
        {topRoutes.map((route, index) => {
          return (
            <Link href={route.href} key={route.href} className="index-card">
              <AppIcon name={icons[index]} size={24} weight="duotone" aria-hidden="true" />
              <span>{route.eyebrow}</span>
              <strong>{route.label}</strong>
              <AppIcon name="ArrowRight" size={18} weight="bold" aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    </main>
  );
}
