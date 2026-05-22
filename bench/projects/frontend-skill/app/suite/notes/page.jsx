import { BookOpen, FileText, MapPinned, Mic } from "lucide-react";

const notes = [
  ["Archive humidity", "Store textile samples after noon; morning readings run high."],
  ["Interview window", "Local partner prefers compact prompts and 45-minute sessions."],
  ["Transit detail", "North entrance has step-free access before 18:00 only."],
];

export default function NotesPage() {
  return (
    <main id="content" className="suite-page notes-page">
      <section className="suite-page-heading notes-heading">
        <p className="eyebrow light">Field notes</p>
        <h1>Keep observations attached to place.</h1>
        <p>
          Notes, audio references, and site constraints stay connected to the
          itinerary so the team can act on them later.
        </p>
      </section>

      <section className="notes-layout">
        <div className="note-stream" aria-labelledby="note-stream-title">
          <div className="panel-title">
            <h2 id="note-stream-title">Latest notes</h2>
            <span>Synced</span>
          </div>
          {notes.map(([title, body], index) => {
            const Icon = [BookOpen, Mic, MapPinned][index];
            return (
              <article key={title}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            );
          })}
        </div>
        <aside className="source-panel" aria-labelledby="source-title">
          <FileText size={26} aria-hidden="true" />
          <h2 id="source-title">Source packet</h2>
          <p>
            18 clips, 11 citations, and 4 access notes are ready for the Oslo
            project export.
          </p>
          <button type="button" className="button atlas-button">
            Export packet
          </button>
        </aside>
      </section>
    </main>
  );
}
