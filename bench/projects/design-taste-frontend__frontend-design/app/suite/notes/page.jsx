import { fieldNotes } from "../../../lib/content";
import { AppIcon } from "../../components/AppIcon";
import { SuiteNav } from "../../components/SuiteNav";

export default function NotesPage() {
  return (
    <main className="suite-page">
      <SuiteNav current="/suite/notes" />
      <section className="notes-layout">
        <aside className="notes-sidebar" aria-label="Field note filters">
          <p className="eyebrow">Field notes</p>
          <h1>Context before the team lands.</h1>
          <label className="search-box">
            <span>Search notes</span>
            <div>
              <AppIcon name="MagnifyingGlass" size={17} weight="bold" aria-hidden="true" />
              <input type="search" placeholder="permits, ferries, specimens" />
            </div>
          </label>
          <button type="button" className="primary-action">
            <AppIcon name="Plus" size={17} weight="bold" aria-hidden="true" />
            New note
          </button>
        </aside>
        <section className="notes-stream" aria-label="Field note stream">
          {fieldNotes.map((note) => (
            <article key={note.title} className="note-card">
              <AppIcon name="FileText" size={20} weight="duotone" aria-hidden="true" />
              <div>
                <span>{note.tag}</span>
                <h2>{note.title}</h2>
                <p>{note.author} updated this note {note.age} ago with trip-critical context for the research group.</p>
              </div>
            </article>
          ))}
          <article className="note-card note-card--draft">
            <AppIcon name="FileText" size={20} weight="duotone" aria-hidden="true" />
            <div>
              <span>Draft</span>
              <h2>Permit translation checklist</h2>
              <p>The draft has no reviewer yet. Assign one before releasing the travel packet.</p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
