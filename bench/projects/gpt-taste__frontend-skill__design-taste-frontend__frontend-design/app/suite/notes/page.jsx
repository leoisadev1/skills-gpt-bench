import { icons } from "../../components";
import { NoteLine, SuiteShell } from "../suite-components";

export default function NotesPage() {
  const { Notebook } = icons;

  return (
    <SuiteShell current="notes">
      <section className="notes-layout">
        <div className="notes-lead" data-reveal>
          <Notebook size={34} weight="duotone" aria-hidden="true" />
          <p className="brand-kicker">Field notes</p>
          <h1>Observations stay attached to place, people, and itinerary context.</h1>
        </div>
        <div className="notes-board">
          <NoteLine
            title="Snowmelt channel moved east"
            tag="Transect A"
            text="Mark the sample grid 140 meters closer to the granite shelf before the second pass."
          />
          <NoteLine
            title="Archive contact prefers morning"
            tag="Baltic run"
            text="Confirm document handling rules before arriving; glove policy changed since last visit."
          />
          <NoteLine
            title="Night survey radio shadow"
            tag="Sonoran"
            text="Ridge blocks shortwave after mile marker 18. Add relay stop near wash entrance."
          />
        </div>
        <aside className="note-composer" data-reveal>
          <h2>New note</h2>
          <label>
            Location
            <input defaultValue="Reserve edge checkpoint" />
          </label>
          <label>
            Observation
            <textarea defaultValue="Track wind shift before setting the second sampling marker." />
          </label>
          <button type="button">Attach to itinerary</button>
        </aside>
      </section>
    </SuiteShell>
  );
}
