import { MainNav, SuiteNav } from "../../components/shared";

const notes = [
  ["Ridge access", "Snow line moved lower than local estimate. Use marker 7 pickup if wind exceeds 22 knots."],
  ["Archive", "Cartographer ledger has alternate spelling for the river basin. Link this to tomorrow's interview."],
  ["Consent", "Two participants requested delayed attribution. Mark transcripts as restricted until reviewed."]
];

export default function SuiteNotesPage() {
  return (
    <main className="suite-page">
      <div className="suite-header">
        <MainNav tone="light" active="/suite" />
        <SuiteNav active="/suite/notes" />
      </div>

      <section className="wide-shell notes-layout">
        <aside className="note-rail" data-reveal>
          <h1>Field notes</h1>
          <p className="suite-copy">Capture field observations beside route context and source confidence.</p>
          <div className="note-list">
            {notes.map(([title]) => (
              <a href="#note-canvas" key={title}>
                {title}
              </a>
            ))}
          </div>
        </aside>

        <article className="note-editor" id="note-canvas" data-reveal>
          <h2>Notes should preserve uncertainty, not polish it away.</h2>
          <div className="note-canvas">
            {notes.map(([title, body]) => (
              <section className="note-card" key={title} data-stack-card>
                <h3>{title}</h3>
                <p>{body}</p>
              </section>
            ))}
            <section className="note-card" data-stack-card>
              <h3>Source confidence</h3>
              <p>
                Each note can carry author, location, evidence type, and review status so the team can use it without
                pretending every observation is equally settled.
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
