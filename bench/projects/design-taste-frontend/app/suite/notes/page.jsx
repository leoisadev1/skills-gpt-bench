import { notes } from "../../../lib/content";
import { Icon } from "../../components/Icon";

export default function SuiteNotesPage() {
  return (
    <section className="suite-workspace">
      <div className="suite-page-head">
        <div>
          <p className="eyebrow">Field notes</p>
          <h1>Research observations sorted by place, risk, and equipment impact.</h1>
        </div>
        <div className="note-search" role="search">
          <Icon name="MagnifyingGlass" size={17} />
          <input aria-label="Search field notes" placeholder="Search notes" />
        </div>
      </div>
      <div className="notes-layout">
        <section className="note-stack" aria-label="Pinned field notes">
          {notes.map((note) => (
            <article className="note-card" key={note.title}>
              <span>{note.tag}</span>
              <h2>{note.title}</h2>
              <p>{note.excerpt}</p>
              <small>Logged by {note.author}</small>
            </article>
          ))}
        </section>
        <aside className="evidence-panel">
          <p className="eyebrow">Evidence queue</p>
          <h2>Files waiting on context</h2>
          <div className="empty-state">
            <Icon name="FileText" size={28} />
            <strong>No unattached files</strong>
            <span>New uploads will appear here until a researcher links them to a stop.</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
