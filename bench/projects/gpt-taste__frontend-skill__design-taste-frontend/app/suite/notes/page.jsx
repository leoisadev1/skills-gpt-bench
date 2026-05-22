import { ArrowRight, CloudSun, PencilLine, PushPin } from "@phosphor-icons/react/dist/ssr";
import { MagneticAnchor } from "../../components/Interactive";
import { SuiteNav } from "../../components/Navigation";

export default function NotesPage() {
  return (
    <main className="suite-page suite-subpage overflow-guard">
      <SuiteNav />
      <section className="notes-layout">
        <div className="notes-intro">
          <p className="eyebrow">Northstar Atlas field notes</p>
          <h1>Observations that stay tied to place, weather, and follow-up work.</h1>
          <p>Field notes are structured enough to search later but loose enough to capture what happens outside the plan.</p>
        </div>
        <div className="note-stack">
          {[
            [CloudSun, "Weather window", "Crosswind dropped after 15:20. Good for the second drone survey."],
            [PushPin, "Local contact", "Harbor office asked for the revised equipment manifest by Thursday."],
            [PencilLine, "Sample record", "Core labels need a second pass before transfer to cold storage."],
          ].map(([Icon, title, body]) => (
            <article className="field-note" key={title}>
              <Icon size={24} weight="duotone" aria-hidden="true" />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="suite-action section-space">
        <h2>Keep the trip record tied to the account that manages alerts and approvals.</h2>
        <MagneticAnchor href="/suite/account" className="button-dark">
          Open account <ArrowRight size={18} weight="bold" aria-hidden="true" />
        </MagneticAnchor>
      </section>
    </main>
  );
}
