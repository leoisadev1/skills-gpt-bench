import Link from "next/link";
import { BenchIcon } from "../../components/BenchIcon";
import { ScrollTheatre } from "../../components/ScrollTheatre";
import { SuiteNav } from "../../components/SuiteNav";

const suiteCards = [
  ["Itinerary builder", "Sequence stops, buffers, and handoffs by research objective.", "MapTrifold"],
  ["Field note memory", "Keep observations linked to places, people, and media references.", "Notebook"],
  ["Account controls", "Manage team access, billing rules, and travel policy defaults.", "Binoculars"]
];

export default function SuiteHomePage() {
  return (
    <main className="site-shell suite-shell">
      <ScrollTheatre surface="suite-home" />
      <SuiteNav active="home" />
      <section className="suite-hero" aria-labelledby="suite-title">
        <div>
          <p className="eyebrow">Travel planning for research teams</p>
          <h1 id="suite-title">Northstar Atlas turns field travel into a shared research instrument.</h1>
          <p>
            Plan routes, preserve local context, and keep account rules close to the team moving
            through unfamiliar places.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/suite/itineraries">
              Build itinerary <BenchIcon name="ArrowRight" size={18} />
            </Link>
            <Link className="button button-ghost" href="/suite/notes">
              Read field notes
            </Link>
          </div>
        </div>
        <div className="atlas-map" data-gsap-scale aria-label="Northstar Atlas route board">
          <span className="map-line" />
          <span className="pin pin-a">Reykjavik</span>
          <span className="pin pin-b">Akureyri</span>
          <span className="pin pin-c">Husavik</span>
        </div>
      </section>

      <section className="bento-grid suite-bento">
        <article className="bento-card bento-large" data-gsap-scale>
          <BenchIcon name="Compass" size={30} />
          <h2>One plan for movement, interviews, equipment, and risk.</h2>
          <p>
            Every route carries weather windows, research goals, local contacts, and the fallback
            plan that keeps teams from improvising under pressure.
          </p>
        </article>
        {suiteCards.map(([title, body, icon]) => (
          <article className="bento-card" data-gsap-scale key={title}>
            <BenchIcon name={icon} size={27} />
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
