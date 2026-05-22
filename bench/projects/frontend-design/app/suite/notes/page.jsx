import { AudioLines, BookOpen, Camera, FileText, Tag } from "lucide-react";
import { SuiteNav } from "../../../components/SuiteNav";

const notes = [
  ["Glacier access change", "Site manager moved safe approach 400 m east after meltwater report.", "risk"],
  ["Interview consent", "Participant B requested anonymized company role instead of title.", "protocol"],
  ["Sample handoff", "Cold box transferred to lab courier with seal photos attached.", "chain"],
  ["Battery cache", "Spare drone packs stored at ranger station, locker code in secure note.", "equipment"],
];

const captures = [
  { icon: Camera, title: "18 photos", text: "4 need location confirmation" },
  { icon: AudioLines, title: "5 audio clips", text: "2 consent tags pending" },
  { icon: FileText, title: "9 forms", text: "All synced to expedition folder" },
];

export default function NotesPage() {
  return (
    <main className="suite-page notes-page">
      <SuiteNav active="/suite/notes" />
      <section className="suite-section-heading notes-heading">
        <p className="eyebrow">Field notes</p>
        <h1>Capture observations with enough structure for the team back home.</h1>
        <p>
          Notes in Northstar Atlas keep media, protocol tags, handoffs, and
          decisions together without turning fieldwork into paperwork.
        </p>
      </section>

      <section className="notes-layout" aria-label="Field notes workspace">
        <article className="notebook-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Today</p>
              <h2>North basin log</h2>
            </div>
            <BookOpen size={20} aria-hidden="true" />
          </div>
          <div className="note-list">
            {notes.map((note) => (
              <div className="note-row" key={note[0]}>
                <strong>{note[0]}</strong>
                <p>{note[1]}</p>
                <span>
                  <Tag size={14} aria-hidden="true" />
                  {note[2]}
                </span>
              </div>
            ))}
          </div>
        </article>

        <aside className="capture-panel" aria-labelledby="capture-title">
          <h2 id="capture-title">Capture queue</h2>
          {captures.map((capture) => {
            const Icon = capture.icon;
            return (
            <div className="capture-row" key={capture.title}>
              <Icon size={20} aria-hidden="true" />
              <strong>{capture.title}</strong>
              <span>{capture.text}</span>
            </div>
            );
          })}
        </aside>
      </section>
    </main>
  );
}
