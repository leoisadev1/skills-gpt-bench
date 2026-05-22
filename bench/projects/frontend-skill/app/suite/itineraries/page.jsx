import { CalendarDays, Clock, MapPinned, Train } from "lucide-react";

const days = [
  ["Jun 12", "Arrival and gear check", "OSL to Sentrum", "2 travelers"],
  ["Jun 13", "Archive orientation", "National Library", "3 travelers"],
  ["Jun 14", "Field interviews", "Grünerløkka route", "2 travelers"],
  ["Jun 16", "Materials lab", "University district", "3 travelers"],
];

const checkpoints = [
  ["Consent forms", "Ready"],
  ["Cold storage slot", "Pending"],
  ["Transit buffer", "42 min"],
  ["Local contact", "Confirmed"],
];

export default function ItinerariesPage() {
  return (
    <main id="content" className="suite-page itinerary-page">
      <section className="suite-page-heading">
        <p className="eyebrow">Itineraries</p>
        <h1>Research trip sequence</h1>
        <p>
          Compare days, movement time, team coverage, and unresolved logistics
          before the plan is shared.
        </p>
      </section>

      <section className="itinerary-grid">
        <div className="journey-board" aria-labelledby="journey-title">
          <div className="panel-title">
            <h2 id="journey-title">Oslo archive run</h2>
            <span>Draft 04</span>
          </div>
          <ol>
            {days.map(([date, title, location, people]) => (
              <li key={date}>
                <time>{date}</time>
                <div>
                  <strong>{title}</strong>
                  <span><MapPinned size={15} aria-hidden="true" /> {location}</span>
                </div>
                <b>{people}</b>
              </li>
            ))}
          </ol>
        </div>

        <aside className="trip-inspector" aria-labelledby="trip-inspector-title">
          <div className="panel-title">
            <h2 id="trip-inspector-title">Plan checks</h2>
            <span>4 items</span>
          </div>
          <dl>
            {checkpoints.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="transit-summary">
            <Train size={22} aria-hidden="true" />
            <div>
              <strong>Longest transfer</strong>
              <span>31 minutes by tram and foot</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="calendar-strip" aria-label="Trip timing">
        <span><CalendarDays size={18} aria-hidden="true" /> 7 days</span>
        <span><Clock size={18} aria-hidden="true" /> 9 scheduled blocks</span>
        <span><MapPinned size={18} aria-hidden="true" /> 6 verified sites</span>
      </section>
    </main>
  );
}
