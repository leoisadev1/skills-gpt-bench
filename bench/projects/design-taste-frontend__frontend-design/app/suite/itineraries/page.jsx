import { itineraryRows } from "../../../lib/content";
import { AppIcon } from "../../components/AppIcon";
import { SuiteNav } from "../../components/SuiteNav";

export default function ItinerariesPage() {
  return (
    <main className="suite-page">
      <SuiteNav current="/suite/itineraries" />
      <section className="suite-pagehead">
        <p className="eyebrow">Itineraries</p>
        <h1>Research travel by access window.</h1>
        <p>Each segment shows the site lead, viable arrival window, and readiness state for the field team.</p>
      </section>
      <section className="itinerary-board" aria-label="Research itinerary board">
        <div className="timeline-rail" aria-hidden="true" />
        {itineraryRows.map((row, index) => (
          <article key={row.site} className="itinerary-card" style={{ "--index": index }}>
            <time>{row.day}</time>
            <div>
              <h2>{row.site}</h2>
              <p>{row.lead} · {row.window}</p>
            </div>
            <span data-risk={row.status === "Travel risk"}>
              {row.status === "Travel risk" ? (
                <AppIcon name="WarningCircle" size={16} weight="bold" aria-hidden="true" />
              ) : (
                <AppIcon name="CalendarCheck" size={16} weight="bold" aria-hidden="true" />
              )}
              {row.status}
            </span>
          </article>
        ))}
      </section>
      <aside className="empty-state suite-empty">
        No unassigned overnight stays remain for this trip.
      </aside>
    </main>
  );
}
