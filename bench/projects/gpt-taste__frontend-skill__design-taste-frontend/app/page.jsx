import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { MagneticAnchor } from "./components/Interactive";
import { mainRoutes } from "./lib/content";

export default function IndexPage() {
  return (
    <main className="index-page overflow-guard">
      <section className="index-hero">
        <p className="eyebrow">Frontend skill benchmark</p>
        <h1>Four production surfaces in one app-router project.</h1>
        <p>
          Routes link to the required landing, operations dashboard, product detail page, and Northstar Atlas suite.
        </p>
      </section>
      <section className="index-route-grid" aria-label="Benchmark routes">
        {mainRoutes.map((route) => (
          <MagneticAnchor href={route.href} className="index-route" key={route.href}>
            <span>
              <strong>{route.label}</strong>
              <small>{route.detail}</small>
            </span>
            <ArrowRight size={22} weight="bold" aria-hidden="true" />
          </MagneticAnchor>
        ))}
      </section>
    </main>
  );
}
