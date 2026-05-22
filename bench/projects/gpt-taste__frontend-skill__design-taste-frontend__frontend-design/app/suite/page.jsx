import { ButtonLink, WordReveal, icons } from "../components";
import { ExpeditionCard, SuiteShell } from "./suite-components";

export default function SuiteHomePage() {
  const { Compass, MapPinLine } = icons;

  return (
    <SuiteShell current="home">
      <section className="atlas-hero">
        <div className="atlas-copy" data-reveal>
          <p className="brand-kicker">Northstar Atlas</p>
          <h1>Travel planning for research teams that need the field to stay legible.</h1>
          <p>
            Build itineraries, capture field notes, and keep account logistics aligned across every expedition.
          </p>
          <ButtonLink href="/suite/itineraries">Plan a route</ButtonLink>
        </div>
        <div className="atlas-map" aria-label="Northstar Atlas trip map" data-scale>
          <span className="map-pin map-pin--one" />
          <span className="map-pin map-pin--two" />
          <span className="map-pin map-pin--three" />
          <div className="map-card">
            <Compass size={28} weight="duotone" aria-hidden="true" />
            <strong>Patagonia Soil Transect</strong>
            <span>5 researchers, 11 stops</span>
          </div>
        </div>
      </section>

      <section className="atlas-overview">
        <div className="atlas-statement" data-reveal>
          <MapPinLine size={28} weight="duotone" aria-hidden="true" />
          <p>
            <WordReveal text="Northstar Atlas turns travel, documents, local context, and field updates into a shared operating map for teams moving through unfamiliar places." />
          </p>
        </div>
        <div className="expedition-grid">
          <ExpeditionCard title="Andes soil window" meta="Mar 14-22">
            Climate sampling with three handoff points and cold-storage constraints.
          </ExpeditionCard>
          <ExpeditionCard title="Baltic archive run" meta="Apr 03-09">
            Library access, translator bookings, and document custody tracked together.
          </ExpeditionCard>
          <ExpeditionCard title="Sonoran night survey" meta="May 19-24">
            Nocturnal checkpoints, vehicle windows, and radio procedures in one plan.
          </ExpeditionCard>
        </div>
      </section>
    </SuiteShell>
  );
}
