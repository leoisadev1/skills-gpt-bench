import Link from "next/link";
import { SuiteNav } from "../../../components/SuiteNav";

const itinerary = [
  { time: "07:10", stop: "Harbor lab departure", owner: "Logistics", status: "Confirmed" },
  { time: "09:30", stop: "Archive access window", owner: "Dr. Vale", status: "Permit ready" },
  { time: "12:20", stop: "Coastal sensor transect", owner: "Field team", status: "Weather watch" },
  { time: "16:45", stop: "Interview block", owner: "Research ops", status: "Translator booked" },
];

export default function SuiteItinerariesPage() {
  return (
    <main className="suite-page suite-itineraries overflow-guard">
      <SuiteNav />
      <section className="suite-subpage section-shell">
        <div className="suite-subpage__header">
          <h1>Itineraries that show the route, the risk, and the research reason.</h1>
          <p>
            Plan days around access windows, field constraints, permits, and handoffs instead of generic
            travel blocks.
          </p>
        </div>
        <div className="itinerary-layout">
          <div className="itinerary-map" data-gsap-image aria-label="Itinerary route map">
            <span className="map-leg map-leg--one" />
            <span className="map-leg map-leg--two" />
            <span className="map-stop map-stop--a" />
            <span className="map-stop map-stop--b" />
            <span className="map-stop map-stop--c" />
          </div>
          <div className="timeline-panel">
            {itinerary.map((item) => (
              <article key={item.time} className="timeline-row group-card">
                <time>{item.time}</time>
                <div>
                  <h2>{item.stop}</h2>
                  <p>{item.owner}</p>
                </div>
                <span>{item.status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="conversion-section suite-conversion">
        <div>
          <h2>Keep field plans tied to the evidence they support.</h2>
          <p>Move from the route into notes when the team reaches a site.</p>
        </div>
        <Link href="/suite/notes" className="button button--primary">Open field notes</Link>
      </section>
    </main>
  );
}
