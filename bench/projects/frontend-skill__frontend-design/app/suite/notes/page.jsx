import { AudioLines, BookMarked, Search, Tag } from "lucide-react";
import { SuiteShell } from "../../components/SuiteShell";

const notes = [
  ["Station caretaker interview", "Sodankyla", "Audio + transcript", "Method"],
  ["Access road condition", "Inari", "Photo memo", "Risk"],
  ["Sensor cabinet sketch", "Rovaniemi", "Notebook scan", "Equipment"],
  ["Local contact correction", "Helsinki", "Team note", "People"],
];

export default function SuiteNotesPage() {
  return (
    <SuiteShell
      active="notes"
      eyebrow="Field notes"
      title="Capture what happened in the field while the itinerary context is still attached."
      description="Notes stay searchable by site, source, method, risk, and team owner so research leads can synthesize without reconstructing the trip."
      rail={
        <div className="note-search-panel">
          <Search size={18} aria-hidden="true" />
          <span>Saved search</span>
          <strong>risk:weather site:inari</strong>
          <p>3 notes, 2 photos, 1 voice memo</p>
        </div>
      }
    >
      <section className="notes-workbench">
        <article className="featured-note">
          <div>
            <BookMarked size={20} aria-hidden="true" />
            <span>Primary note</span>
          </div>
          <h2>Station caretaker says generator outage moved the maintenance window.</h2>
          <p>
            Linked to Jun 05 Sodankyla site visit. Follow up with the equipment owner before calibration crates leave Rovaniemi.
          </p>
        </article>
        <div className="note-list" aria-label="Field note list">
          {notes.map(([title, site, source, tag]) => (
            <article key={title}>
              <span><Tag size={14} aria-hidden="true" /> {tag}</span>
              <h3>{title}</h3>
              <p>{site} · {source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capture-strip" aria-label="Capture methods">
        <span><AudioLines size={17} aria-hidden="true" /> Voice memos</span>
        <span>Photo evidence</span>
        <span>Transcript snippets</span>
        <span>Notebook scans</span>
      </section>
    </SuiteShell>
  );
}
