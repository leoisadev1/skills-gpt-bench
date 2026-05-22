import { ArrowRight, CalendarCheck, MapPin, TrainSimple } from "@phosphor-icons/react/dist/ssr";
import { MagneticAnchor } from "../../components/Interactive";
import { SuiteNav } from "../../components/Navigation";

export default function ItinerariesPage() {
  return (
    <main className="suite-page suite-subpage overflow-guard">
      <SuiteNav />
      <section className="suite-subhero">
        <p className="eyebrow">Northstar Atlas itineraries</p>
        <h1>Trip plans organized around route certainty and research obligations.</h1>
        <p>Each itinerary shows the travel spine, permit readiness, local handoffs, and field timing.</p>
      </section>

      <section className="itinerary-board">
        {[
          ["Svalbard Ice Core", "Longyearbyen", "Apr 12-19", "Permits confirmed", CalendarCheck],
          ["Atacama Radio Array", "San Pedro", "May 2-10", "Altitude review", TrainSimple],
          ["Skellig Archive", "County Kerry", "Jun 4-8", "Ferry window open", MapPin],
        ].map(([name, place, date, status, Icon]) => (
          <article className="itinerary-item" key={name}>
            <Icon size={25} weight="duotone" aria-hidden="true" />
            <div>
              <h2>{name}</h2>
              <p>{place}</p>
            </div>
            <span>{date}</span>
            <strong>{status}</strong>
          </article>
        ))}
      </section>

      <section className="suite-action section-space">
        <h2>Move from route plan to field notes when the team starts collecting context.</h2>
        <MagneticAnchor href="/suite/notes" className="button-dark">
          Open field notes <ArrowRight size={18} weight="bold" aria-hidden="true" />
        </MagneticAnchor>
      </section>
    </main>
  );
}
