import Link from "next/link";
import { ArrowRight, Map, Plane, Search, Users } from "lucide-react";

const modules = [
  ["Research routes", "Pin source visits, interviews, labs, and field days into one trip logic."],
  ["Shared context", "Teams keep notes, consent needs, and handoff details attached to each stop."],
  ["Account controls", "Budgets, access, and traveler preferences stay visible before booking."],
];

export default function SuiteHomePage() {
  return (
    <main id="content" className="suite-page suite-home">
      <section className="suite-hero">
        <div className="suite-hero-copy">
          <p className="eyebrow light">Travel planning for research teams</p>
          <h1>Northstar Atlas</h1>
          <p>
            Plan field travel around the work: sites, notes, interviews,
            supplies, and accountable team movement.
          </p>
          <div className="action-row">
            <Link className="button primary atlas-button" href="/suite/itineraries">
              Build itinerary <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button ghost-light" href="/suite/notes">
              Review notes
            </Link>
          </div>
        </div>
      </section>

      <section className="atlas-overview" aria-label="Northstar Atlas overview">
        {modules.map(([title, body], index) => {
          const Icon = [Map, Search, Users][index];
          return (
            <article key={title}>
              <Icon size={22} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          );
        })}
      </section>

      <section className="field-plan-band" aria-labelledby="field-plan-title">
        <div>
          <p className="eyebrow">Next field window</p>
          <h2 id="field-plan-title">Oslo material archive, June 12-18</h2>
          <p>
            Three researchers, six site visits, two archive blocks, and one
            transit day are already sequenced for review.
          </p>
        </div>
        <div className="mini-itinerary" aria-label="Sample itinerary">
          <span><Plane size={16} aria-hidden="true" /> Arrive</span>
          <span>Archive</span>
          <span>Interview</span>
          <span>Lab</span>
          <span>Return</span>
        </div>
      </section>
    </main>
  );
}
