import Link from "next/link";
import { Icon } from "../components/Icon";

export default function SuiteHomePage() {
  return (
    <>
      <section className="suite-hero">
        <div>
          <p className="eyebrow">Northstar Atlas</p>
          <h1>Travel planning for research teams that carry equipment, permits, and field notes.</h1>
          <p>
            Plan routes, pin field constraints, and keep account controls close enough for a team
            lead to trust every departure.
          </p>
          <div className="hero-actions">
            <Link href="/suite/itineraries" className="button">
              Review itineraries <Icon name="ArrowRight" size={18} />
            </Link>
            <Link href="/suite/notes" className="button button--ghost">
              Read field notes
            </Link>
          </div>
        </div>
        <div className="atlas-board" aria-label="Northstar Atlas planning board">
          <div className="map-panel">
            <span className="map-route" />
            <i style={{ left: "18%", top: "28%" }} />
            <i style={{ left: "52%", top: "44%" }} />
            <i style={{ left: "76%", top: "68%" }} />
          </div>
          <div className="timeline-panel">
            <span>D1 Oslo archive</span>
            <span>D2 Tromso pier</span>
            <span>D3 Svalbard stage</span>
          </div>
        </div>
      </section>
      <section className="suite-overview">
        <article>
          <Icon name="MapTrifold" size={24} />
          <h2>Field route memory</h2>
          <p>Every stop stores contacts, permit links, equipment notes, and local transfer windows.</p>
        </article>
        <article>
          <Icon name="Notebook" size={24} />
          <h2>Notes that travel with the plan</h2>
          <p>Researchers can keep site observations tied to the day, place, and equipment set.</p>
        </article>
        <article>
          <Icon name="LockKey" size={24} />
          <h2>Account controls for teams</h2>
          <p>Leads manage exports, billing, and field permissions without leaving the suite.</p>
        </article>
      </section>
    </>
  );
}
