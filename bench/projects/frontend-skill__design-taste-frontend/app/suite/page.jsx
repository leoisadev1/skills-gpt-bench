import Link from "next/link";
import { ArrowRight, Binoculars, GlobeHemisphereWest, UsersThree } from "@phosphor-icons/react/dist/ssr";

export default function SuiteHomePage() {
  return (
    <main className="atlas-page atlas-home">
      <section className="atlas-hero" aria-labelledby="atlas-title">
        <div>
          <p className="eyebrow">Travel planning for research teams</p>
          <h1 id="atlas-title">Plan field movement without losing the study context.</h1>
          <p>
            Northstar Atlas keeps routes, field notes, collaborators, and
            account controls in one calm planning surface for distributed teams.
          </p>
          <Link className="primary-action compact" href="/suite/itineraries">
            Review itineraries <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="atlas-map" aria-label="Active research routes" role="img">
          <span className="pin pin-a" />
          <span className="pin pin-b" />
          <span className="pin pin-c" />
          <div className="route-line route-one" />
          <div className="route-line route-two" />
        </div>
      </section>

      <section className="atlas-overview" aria-label="Northstar overview">
        <article>
          <GlobeHemisphereWest size={24} weight="duotone" aria-hidden="true" />
          <h2>Active studies</h2>
          <p>4 research movements scheduled across coastal, alpine, and urban sites.</p>
        </article>
        <article>
          <Binoculars size={24} weight="duotone" aria-hidden="true" />
          <h2>Readiness</h2>
          <p>Permits, transport, local contacts, and sample windows are checked together.</p>
        </article>
        <article>
          <UsersThree size={24} weight="duotone" aria-hidden="true" />
          <h2>Team handoff</h2>
          <p>Researchers see the next decision, not a loose folder of planning docs.</p>
        </article>
      </section>
    </main>
  );
}
