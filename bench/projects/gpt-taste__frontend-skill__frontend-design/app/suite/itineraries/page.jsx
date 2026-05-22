import { CalendarDays, CloudSun, Users } from "lucide-react";
import { SuiteFrame } from "../../components/SuiteFrame";

const trips = [
  ["May 28", "Coastal erosion survey", "Santa Cruz transect, two tide windows, drone permit pending"],
  ["Jun 03", "Highland watershed interviews", "Three villages, local guide confirmed, satellite uplink required"],
  ["Jun 17", "Desert calibration run", "Sensor test loop, overnight bivouac, vehicle recovery staged"],
  ["Jul 02", "Northern archive visit", "Museum access, rail transfer, translation support"],
];

export default function ItinerariesPage() {
  return (
    <SuiteFrame active="/suite/itineraries">
      <section className="suite-page" aria-labelledby="itinerary-title">
        <div className="suite-heading">
          <h1 id="itinerary-title">Itineraries with risk, people, and terrain visible.</h1>
          <p>
            Research coordinators can scan the next trips, inspect constraints, and keep field teams aligned before departure.
          </p>
        </div>
        <div className="itinerary-layout">
          <div className="timeline">
            {trips.map(([date, title, detail]) => (
              <article className="timeline-item" key={title}>
                <span className="date-chip">{date}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{detail}</p>
                </div>
                <CloudSun size={24} aria-hidden="true" />
              </article>
            ))}
          </div>
          <aside className="field-map" aria-label="Selected itinerary context">
            <span className="map-pin">A</span>
            <h2>Coastal erosion survey</h2>
            <p>Primary risk is tide compression. Move sample kit pickup before the morning ferry and keep drone work on the second window.</p>
            <p>
              <CalendarDays size={16} aria-hidden="true" /> 4 days
            </p>
            <p>
              <Users size={16} aria-hidden="true" /> 6 researchers
            </p>
          </aside>
        </div>
      </section>
    </SuiteFrame>
  );
}
