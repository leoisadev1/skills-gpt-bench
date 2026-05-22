import Link from "next/link";
import { fieldNotes, itineraryRows } from "../../lib/content";
import { AppIcon } from "../components/AppIcon";
import { SuiteNav } from "../components/SuiteNav";

export default function SuiteHomePage() {
  return (
    <main className="suite-page">
      <SuiteNav current="/suite" />
      <section className="suite-hero" aria-labelledby="suite-title">
        <div>
          <p className="eyebrow">Northstar Atlas</p>
          <h1 id="suite-title">Travel planning for research teams working far from the office.</h1>
          <p>
            Build field schedules, protect team context, and keep travel decisions tied to site access, permits, and study notes.
          </p>
          <Link className="primary-action" href="/suite/itineraries">
            Open itineraries
            <AppIcon name="ArrowRight" size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>
        <div className="atlas-board" aria-label="Northstar Atlas trip board">
          <span className="atlas-route" aria-hidden="true" />
          <div className="atlas-pin atlas-pin-a"><AppIcon name="MapPinArea" size={18} weight="fill" aria-hidden="true" /> Tromso</div>
          <div className="atlas-pin atlas-pin-b"><AppIcon name="MapPinArea" size={18} weight="fill" aria-hidden="true" /> Fjord transect</div>
          <div className="atlas-pin atlas-pin-c"><AppIcon name="MapPinArea" size={18} weight="fill" aria-hidden="true" /> Oslo</div>
        </div>
      </section>

      <section className="suite-overview" aria-label="Northstar Atlas overview">
        <article>
          <AppIcon name="Binoculars" size={24} weight="duotone" aria-hidden="true" />
          <span>Active study</span>
          <strong>Nordic climate archive</strong>
        </article>
        <article>
          <AppIcon name="UsersThree" size={24} weight="duotone" aria-hidden="true" />
          <span>Travelers</span>
          <strong>9 researchers</strong>
        </article>
        <article>
          <AppIcon name="CheckCircle" size={24} weight="duotone" aria-hidden="true" />
          <span>Readiness</span>
          <strong>74.6%</strong>
        </article>
      </section>

      <section className="suite-two-col">
        <div className="suite-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Next windows</p>
              <h2>Trip rhythm</h2>
            </div>
            <Link href="/suite/itineraries">View all</Link>
          </div>
          {itineraryRows.slice(0, 3).map((row) => (
            <div className="itinerary-line" key={row.site}>
              <time>{row.day}</time>
              <strong>{row.site}</strong>
              <span>{row.window}</span>
            </div>
          ))}
        </div>
        <div className="suite-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Field notes</p>
              <h2>Fresh context</h2>
            </div>
            <Link href="/suite/notes">Open notes</Link>
          </div>
          {fieldNotes.map((note) => (
            <div className="note-line" key={note.title}>
              <strong>{note.title}</strong>
              <span>{note.author} · {note.age}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
