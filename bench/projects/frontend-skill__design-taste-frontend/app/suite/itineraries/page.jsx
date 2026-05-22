import { CalendarCheck, Clock, MapPinLine, Warning } from "@phosphor-icons/react/dist/ssr";

const legs = [
  ["06:40", "Lisbon base", "Equipment check", "ready"],
  ["09:15", "Arrabida transect", "Coastal samples", "ready"],
  ["13:30", "Setubal lab", "Cold-chain handoff", "watch"],
  ["17:10", "Airport cargo", "Specimen export", "risk"],
];

export default function ItinerariesPage() {
  return (
    <main className="atlas-page itinerary-page">
      <section className="page-heading">
        <p className="eyebrow">Itineraries</p>
        <h1>Route plans with research constraints visible.</h1>
        <p>
          Review timed movement, site purpose, and risk before a team leaves base.
        </p>
      </section>

      <section className="itinerary-board" aria-labelledby="active-itinerary">
        <div className="timeline-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Active route</p>
              <h2 id="active-itinerary">Portugal coastal ecology</h2>
            </div>
            <span className="live-pill">
              <CalendarCheck size={14} weight="duotone" aria-hidden="true" /> today
            </span>
          </div>
          <div className="timeline-list">
            {legs.map(([time, place, work, tone]) => (
              <article className="timeline-row" data-tone={tone} key={`${time}-${place}`}>
                <span>
                  <Clock size={16} aria-hidden="true" />
                  {time}
                </span>
                <div>
                  <strong>{place}</strong>
                  <p>{work}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="route-brief">
          <MapPinLine size={24} weight="duotone" aria-hidden="true" />
          <h2>Route brief</h2>
          <dl>
            <div>
              <dt>Lead</dt>
              <dd>Dr. Elian Vos</dd>
            </div>
            <div>
              <dt>Local contact</dt>
              <dd>Marisol Enes, Setubal Marine Lab</dd>
            </div>
            <div>
              <dt>Sample window</dt>
              <dd>09:30 to 12:20 during low tide</dd>
            </div>
          </dl>
          <p className="inline-error">
            <Warning size={16} weight="duotone" aria-hidden="true" />
            Export paperwork must be countersigned before 16:00.
          </p>
        </aside>
      </section>
    </main>
  );
}
