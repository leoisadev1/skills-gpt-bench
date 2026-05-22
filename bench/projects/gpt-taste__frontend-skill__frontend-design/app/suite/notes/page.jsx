import { NotebookPen, Search } from "lucide-react";
import { SuiteFrame } from "../../components/SuiteFrame";

const notes = [
  ["Tide marker drift", "Photo evidence attached, medium confidence, verify against station archive."],
  ["Interview protocol update", "Local partner requested translated consent card before next visit."],
  ["Sensor pack issue", "Humidity readings diverged after 18:40. Replace seal and rerun calibration."],
  ["Trail access", "North ridge pass is open to foot traffic but closed to vehicles until the bridge inspection clears."],
];

export default function NotesPage() {
  return (
    <SuiteFrame active="/suite/notes">
      <section className="suite-page" aria-labelledby="notes-title">
        <div className="suite-heading">
          <h1 id="notes-title">Field notes that keep context attached.</h1>
          <p>
            Observations stay connected to place, media, confidence, and the next task instead of becoming a loose chat transcript.
          </p>
        </div>
        <div className="notes-layout">
          <div className="note-list">
            {notes.map(([title, detail]) => (
              <article className="note-item" key={title}>
                <div>
                  <NotebookPen size={22} aria-hidden="true" />
                  <h2>{title}</h2>
                  <p>{detail}</p>
                </div>
                <div className="note-image" aria-hidden="true" />
              </article>
            ))}
          </div>
          <aside className="notebook-panel" aria-label="Field note search">
            <Search size={24} aria-hidden="true" />
            <h2>Search notebook</h2>
            <p>Filter by trip, researcher, confidence, media type, tag, or unresolved follow-up.</p>
            <p>Current view: coastal survey notes with attached images and incomplete verification tasks.</p>
          </aside>
        </div>
      </section>
    </SuiteFrame>
  );
}
