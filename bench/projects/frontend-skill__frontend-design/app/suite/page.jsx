import { ArrowRight, CalendarDays, Database, MapPinned, UsersRound } from "lucide-react";
import { SuiteShell } from "../components/SuiteShell";

const readiness = [
  ["Permits", "9 / 12 cleared"],
  ["Flights", "6 traveler holds"],
  ["Equipment", "18 crates assigned"],
  ["Field contacts", "4 local leads"],
];

export default function SuiteHomePage() {
  return (
    <SuiteShell
      active="home"
      eyebrow="Northstar Atlas"
      title="Plan research travel with the itinerary, evidence, and team context in one atlas."
      description="A calm workspace for teams that move through remote sites, interviews, permits, and field notes without losing the study thread."
      rail={
        <div className="suite-status-card">
          <span>Trip readiness</span>
          <strong>74%</strong>
          <div className="suite-progress" aria-hidden="true"><span style={{ width: "74%" }} /></div>
          <p>Two permits and one cargo confirmation are the remaining blockers.</p>
        </div>
      }
    >
      <section className="atlas-hero-panel" aria-label="Research plan overview">
        <div>
          <p className="eyebrow">Current study</p>
          <h2>Lapland sensor study</h2>
          <p>Four field sites, six travelers, two equipment crates per region, and daily note capture synced back to the research office.</p>
          <a className="inline-link" href="/suite/itineraries">
            Review itinerary <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="atlas-map" aria-label="Abstract route map">
          <span className="pin p1" />
          <span className="pin p2" />
          <span className="pin p3" />
          <span className="pin p4" />
        </div>
      </section>

      <section className="suite-grid-2">
        <div className="suite-block">
          <CalendarDays size={20} aria-hidden="true" />
          <h3>Travel windows</h3>
          <p>Compare arrival buffers, weather exposure, and dependency timing before committing the team.</p>
        </div>
        <div className="suite-block">
          <UsersRound size={20} aria-hidden="true" />
          <h3>Team coverage</h3>
          <p>Keep translators, research leads, equipment owners, and approvers visible by site.</p>
        </div>
        <div className="suite-block">
          <MapPinned size={20} aria-hidden="true" />
          <h3>Site context</h3>
          <p>Attach contacts, permits, risk notes, and access instructions to each field stop.</p>
        </div>
        <div className="suite-block">
          <Database size={20} aria-hidden="true" />
          <h3>Study memory</h3>
          <p>Field notes retain the source itinerary, timestamp, and collection method for later synthesis.</p>
        </div>
      </section>

      <section className="readiness-list" aria-label="Readiness details">
        {readiness.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>
    </SuiteShell>
  );
}
