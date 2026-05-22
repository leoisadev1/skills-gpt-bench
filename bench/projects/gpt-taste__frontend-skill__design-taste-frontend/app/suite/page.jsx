import { ArrowRight, MapTrifold, Notebook, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { MagneticAnchor, RevealWords } from "../components/Interactive";
import { SuiteNav } from "../components/Navigation";
import { suiteTrips } from "../lib/content";

export default function SuiteHomePage() {
  return (
    <main className="suite-page overflow-guard">
      <SuiteNav />
      <section className="suite-hero">
        <div>
          <p className="eyebrow">Travel planning for research teams</p>
          <h1>Northstar Atlas keeps field travel, permits, and notes in one research-ready plan.</h1>
          <p>
            Build itineraries that hold logistics, field context, account controls, and the record your team needs later.
          </p>
          <div className="hero-actions">
            <MagneticAnchor href="/suite/itineraries" className="button-dark">
              Open itineraries <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </MagneticAnchor>
            <MagneticAnchor href="/suite/notes" className="button-ghost-dark">Read field notes</MagneticAnchor>
          </div>
        </div>
        <div className="atlas-map" aria-hidden="true">
          <span className="map-line line-one" />
          <span className="map-line line-two" />
          <span className="map-dot dot-one" />
          <span className="map-dot dot-two" />
          <span className="map-dot dot-three" />
        </div>
      </section>

      <section className="suite-work section-space">
        <article>
          <MapTrifold size={26} weight="duotone" aria-hidden="true" />
          <h2>Itineraries stay operational.</h2>
          <p>Dates, vendors, transfer windows, and permit states sit in a plan that a lead researcher can scan fast.</p>
        </article>
        <article>
          <Notebook size={26} weight="duotone" aria-hidden="true" />
          <h2>Notes keep field context.</h2>
          <p>Location remarks, weather observations, and follow-up tasks stay attached to the trip.</p>
        </article>
        <article>
          <ShieldCheck size={26} weight="duotone" aria-hidden="true" />
          <h2>Account controls are practical.</h2>
          <p>Team contacts, billing status, and alert rules are visible without turning the suite into admin clutter.</p>
        </article>
      </section>

      <section className="trip-list section-space">
        <div className="section-copy">
          <p className="eyebrow">Active plans</p>
          <h2>Research trips with enough detail to act.</h2>
        </div>
        <div className="trip-table">
          {suiteTrips.map((trip) => (
            <div className="trip-row" key={trip[0]}>
              {trip.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="suite-closing section-space">
        <RevealWords
          className="reveal-statement"
          text="Northstar Atlas is quiet enough for planning days and structured enough for the field record that comes after the trip."
        />
      </section>
    </main>
  );
}
