import { Plane, TrainFront, TriangleAlert, Waypoints } from "lucide-react";
import { SuiteShell } from "../../components/SuiteShell";

const itinerary = [
  ["May 31", "Helsinki arrival", "Equipment customs, team briefing", "Confirmed"],
  ["Jun 02", "Rovaniemi transfer", "Rail plus cargo van handoff", "Watch"],
  ["Jun 05", "Sodankyla site", "Sensor station interviews", "Confirmed"],
  ["Jun 11", "Inari north loop", "Snow-road weather buffer", "Risk"],
];

export default function SuiteItinerariesPage() {
  return (
    <SuiteShell
      active="itineraries"
      eyebrow="Itineraries"
      title="Sequence the trip around field dependencies, not just flights."
      description="Every travel segment carries ownership, blockers, weather exposure, and equipment movement so planners can see what breaks first."
      rail={
        <div className="suite-alert-panel">
          <TriangleAlert size={19} aria-hidden="true" />
          <strong>North loop risk</strong>
          <p>Snow-road forecast creates a 36-hour buffer recommendation before the Inari interviews.</p>
        </div>
      }
    >
      <section className="itinerary-board">
        <div className="route-ribbon" aria-label="Trip mode summary">
          <span><Plane size={17} aria-hidden="true" /> 2 flights</span>
          <span><TrainFront size={17} aria-hidden="true" /> 1 rail transfer</span>
          <span><Waypoints size={17} aria-hidden="true" /> 4 field sites</span>
        </div>
        <div className="itinerary-list">
          {itinerary.map(([date, place, detail, state]) => (
            <article className={`itinerary-item ${state.toLowerCase()}`} key={place}>
              <time>{date}</time>
              <div>
                <h2>{place}</h2>
                <p>{detail}</p>
              </div>
              <span>{state}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="dependency-panel" aria-labelledby="dependency-title">
        <h2 id="dependency-title">Dependency chain</h2>
        <div className="dependency-line">
          <span>Customs</span>
          <span>Rail cargo</span>
          <span>Site permit</span>
          <span>Interview block</span>
        </div>
      </section>
    </SuiteShell>
  );
}
