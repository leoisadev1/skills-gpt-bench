import { MainNav, SuiteNav } from "../../components/shared";

const itineraryRows = [
  ["08:10", "Depot departure", "Load water kits, satellite pucks, and survey crates before the bridge window."],
  ["10:45", "Archive visit", "Two researchers, quiet room reservation, no photography until clearance."],
  ["13:20", "Field transect", "North ridge walking route with alternate pickup at marker 7 if weather turns."],
  ["16:40", "Local interview", "Interpreter confirmed. Bring consent forms and printed place index."],
  ["19:10", "Team synthesis", "Upload notes, flag missing evidence, and confirm tomorrow's permit window."]
];

export default function SuiteItinerariesPage() {
  return (
    <main className="suite-page">
      <div className="suite-header">
        <MainNav tone="light" active="/suite" />
        <SuiteNav active="/suite/itineraries" />
      </div>

      <section className="wide-shell itinerary-board">
        <aside className="date-rail" data-reveal>
          <h1>Itineraries</h1>
          <p className="suite-copy">Research-day sequencing with constraints, alternates, and handoff context.</p>
          <div className="date-list">
            {["Svalbard archive loop", "Delta water survey", "Mountain access study", "Coastal interviews"].map((item) => (
              <a key={item} href="#timeline">
                {item}
              </a>
            ))}
          </div>
        </aside>

        <div className="timeline" id="timeline" aria-label="Selected itinerary timeline">
          {itineraryRows.map(([time, title, detail]) => (
            <article className="timeline-row" key={time} data-stack-card>
              <strong>{time}</strong>
              <div>
                <strong>{title}</strong>
                <p>{detail}</p>
              </div>
              <span>Assigned</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
