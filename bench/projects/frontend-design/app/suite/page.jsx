import Link from "next/link";
import { ArrowRight, CalendarDays, FlaskConical, MapPinned, Radio } from "lucide-react";
import { SuiteNav } from "../../components/SuiteNav";

const expeditions = [
  ["Alpine runoff study", "Reykjavik -> Akureyri", "4 researchers", "Ready"],
  ["Coastal battery survey", "Busan field loop", "7 researchers", "Needs permit"],
  ["Archive interviews", "Lisbon and Porto", "2 researchers", "Drafting"],
];

const overviewCards = [
  {
    icon: MapPinned,
    title: "Itinerary logic",
    text: "Connect flights, ground transfers, site windows, and contingency routes.",
  },
  {
    icon: FlaskConical,
    title: "Research context",
    text: "Attach protocols, sample constraints, interviews, and field risks.",
  },
  {
    icon: CalendarDays,
    title: "Team readiness",
    text: "Track traveler documents, budgets, approvals, and policy coverage.",
  },
];

export default function SuiteHomePage() {
  return (
    <main className="suite-page atlas-home">
      <SuiteNav active="/suite" />
      <section className="atlas-hero" aria-labelledby="atlas-title">
        <div className="atlas-copy">
          <p className="eyebrow">Travel planning for research teams</p>
          <h1 id="atlas-title">Northstar Atlas keeps fieldwork moving with context intact.</h1>
          <p>
            Plan itineraries, field notes, travel rules, and team account
            readiness in one expedition workspace.
          </p>
          <Link className="button button-primary atlas-button" href="/suite/itineraries">
            Build an itinerary
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="atlas-map" aria-label="Northstar Atlas planning map">
          <span className="atlas-pin pin-one" />
          <span className="atlas-pin pin-two" />
          <span className="atlas-pin pin-three" />
          <span className="atlas-path path-one" />
          <span className="atlas-path path-two" />
          <div className="map-note">
            <Radio size={15} aria-hidden="true" />
            Field window synced
          </div>
        </div>
      </section>

      <section className="atlas-overview" aria-label="Northstar Atlas product areas">
        {overviewCards.map((card) => {
          const Icon = card.icon;
          return (
          <article className="atlas-card" key={card.title}>
            <Icon size={22} aria-hidden="true" />
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
          );
        })}
      </section>

      <section className="expedition-board" aria-labelledby="expedition-title">
        <div>
          <p className="eyebrow">Active expeditions</p>
          <h2 id="expedition-title">Research trips with enough detail to act.</h2>
        </div>
        <div className="expedition-list">
          {expeditions.map((trip) => (
            <article className="expedition-row" key={trip[0]}>
              <strong>{trip[0]}</strong>
              <span>{trip[1]}</span>
              <span>{trip[2]}</span>
              <b>{trip[3]}</b>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
