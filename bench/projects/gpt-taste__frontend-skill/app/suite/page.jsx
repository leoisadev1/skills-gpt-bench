import { ArrowLink, ImagePlane, MainNav, MiniRail, RouteFooter, SuiteNav } from "../components/shared";
import { picsum } from "../lib/content";

export default function SuiteHomePage() {
  return (
    <main className="suite-page">
      <div className="suite-header">
        <MainNav tone="light" active="/suite" />
        <SuiteNav active="/suite" />
      </div>

      <section className="wide-shell suite-hero">
        <div data-reveal>
          <p className="eyebrow">Northstar Atlas</p>
          <h1 className="suite-title">
            Travel planning for research teams moving through complex places.
          </h1>
          <p className="suite-copy">
            Northstar Atlas keeps route plans, field constraints, notes, and account readiness together without
            flattening research work into a vacation itinerary.
          </p>
          <MiniRail items={["Research routes", "Field notes", "Team readiness"]} />
          <div className="hero-actions">
            <ArrowLink href="/suite/itineraries" variant="dark">
              Build itinerary
            </ArrowLink>
          </div>
        </div>
        <ImagePlane seed="northstar-atlas-field-map" className="suite-image" label="Research team map table" />
      </section>

      <section className="section-shell chapter">
        <div className="atlas-grid">
          <article className="atlas-card span-7" data-stack-card>
            <h2>Plan around field constraints, not generic destinations.</h2>
            <p>
              Team leads can attach permits, transport windows, access limits, and research objectives directly to
              each leg of the plan.
            </p>
          </article>
          <article
            className="atlas-card atlas-card--image span-5"
            data-stack-card
            style={{ backgroundImage: `url(${picsum("northstar-camp-road")})` }}
          />
          <article className="atlas-card span-4" data-stack-card>
            <h3>Itinerary depth</h3>
            <p>Day-by-day sequencing, contingency paths, and local contact context.</p>
          </article>
          <article className="atlas-card span-4" data-stack-card>
            <h3>Field notes</h3>
            <p>Observations, media references, and source confidence sit beside the route.</p>
          </article>
          <article className="atlas-card span-4" data-stack-card>
            <h3>Account readiness</h3>
            <p>Passports, equipment, role access, and emergency details are visible before departure.</p>
          </article>
        </div>
      </section>

      <RouteFooter
        title="Give the next field team a plan with memory."
        body="Northstar Atlas makes travel planning specific enough for research work and calm enough for daily use."
        href="/suite/itineraries"
        cta="Open itineraries"
        tone="light"
      />
    </main>
  );
}
