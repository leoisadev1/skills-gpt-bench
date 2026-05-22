import Link from "next/link";
import { SuiteNav } from "../../components/SuiteNav";
import { benchmarkPrompts, suiteRoutes } from "../../lib/prompts";

export default function SuiteHomePage() {
  return (
    <main className="suite-page suite-home overflow-guard">
      <SuiteNav />
      <section className="suite-hero section-shell">
        <div>
          <h1>
            Northstar Atlas keeps research travel, evidence, and team access in one expedition-grade workspace
            <span
              className="inline-image inline-image--atlas"
              style={{ backgroundImage: "url(https://picsum.photos/seed/northstar-research-map/320/160)" }}
              aria-hidden="true"
            />
          </h1>
          <p>{benchmarkPrompts.suite}</p>
          <div className="hero-actions">
            <Link href="/suite/itineraries" className="button button--primary">Plan an itinerary</Link>
            <Link href="/suite/notes" className="button button--ghost">Open field notes</Link>
          </div>
        </div>
        <div className="atlas-board" data-gsap-image aria-label="Northstar Atlas planning board">
          <span className="atlas-route atlas-route--one" />
          <span className="atlas-route atlas-route--two" />
          <span className="atlas-pin atlas-pin--a" />
          <span className="atlas-pin atlas-pin--b" />
          <span className="atlas-pin atlas-pin--c" />
        </div>
      </section>

      <section className="section-shell suite-route-grid">
        {suiteRoutes.map((route, index) => (
          <Link key={route.href} href={route.href} className={`suite-route-card suite-route-card--${index + 1} group-card`} data-stack-card>
            <span>{route.label}</span>
            <p>{route.description}</p>
          </Link>
        ))}
      </section>

      <section className="suite-desire section-shell">
        <h2 data-reveal-words>Built for teams that travel with permits, interviews, samples, and a lot of uncertainty.</h2>
        <div className="suite-principles">
          <article>
            <strong>Research ready</strong>
            <p>Every destination can carry permits, contact notes, risks, lodging, and source links.</p>
          </article>
          <article>
            <strong>Page-specific flows</strong>
            <p>Itineraries, notes, and account settings each have their own working structure.</p>
          </article>
          <article>
            <strong>Responsive by default</strong>
            <p>The same workspace condenses into stacked cards and thumb-safe controls on mobile.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
