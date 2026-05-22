import Link from "next/link";
import { SuiteNav } from "../../../components/SuiteNav";

const notes = [
  { title: "Interview synthesis", type: "Audio transcript", body: "Three participants referenced permit delays and informal route changes." },
  { title: "Transect observation", type: "Field reading", body: "Sensor 04 shows a short drop in salinity after the noon tidal shift." },
  { title: "Archive image pull", type: "Reference media", body: "Historic dock photos attached to the harbor redevelopment thread." },
];

export default function SuiteNotesPage() {
  return (
    <main className="suite-page suite-notes overflow-guard">
      <SuiteNav />
      <section className="suite-subpage section-shell">
        <div className="suite-subpage__header">
          <h1>Field notes built for evidence, not just memory.</h1>
          <p>
            Northstar Atlas gives researchers a shared place to capture observations, attach media, and
            connect notes back to itinerary stops.
          </p>
        </div>
        <div className="notes-workspace">
          <aside className="notes-sidebar">
            <button type="button">All notes</button>
            <button type="button">Interview</button>
            <button type="button">Sensor</button>
            <button type="button">Media</button>
          </aside>
          <div className="notes-grid">
            {notes.map((note, index) => (
              <article key={note.title} className={`note-card note-card--${index + 1} group-card`} data-stack-card>
                <span>{note.type}</span>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
              </article>
            ))}
            <article className="note-media" data-gsap-image aria-label="Attached field media preview">
              <h2>Attached media</h2>
              <p>Coastal reference set, 18 images, synced to the field reading thread.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="conversion-section suite-conversion">
        <div>
          <h2>Share only the notes the next team member needs.</h2>
          <p>Account permissions keep sensitive interviews and paid research separated.</p>
        </div>
        <Link href="/suite/account" className="button button--primary">Manage access</Link>
      </section>
    </main>
  );
}
