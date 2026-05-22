import Link from "next/link";
import { ArrowRight, AudioLines, BookOpen, Camera, FileSearch, MapPin, Mic, Tags } from "lucide-react";
import { FooterBand, SuiteNav } from "../../components/shared";

const notes = [
  ["Transect weather shift", "Svalbard coast", "Wind rose changed after noon; move sensor placement 300m inland."],
  ["Interview consent update", "Harbor office", "Two participants requested embargo until publication review."],
  ["Equipment observation", "Field station", "Tripod heads stiff below -12C; add lubricant note to return checklist."],
];

export default function NotesPage() {
  return (
    <main className="main-shell atlas-page atlas-subpage">
      <SuiteNav active="notes" />
      <section className="notes-workspace">
        <div className="suite-page-heading gsap-reveal">
          <span>Northstar Atlas</span>
          <h1>Field notes that keep observations tied to place, people, and itinerary context.</h1>
          <p>
            Notes are not a dumping ground. They are structured records linked to route legs, research questions,
            collaborators, and media that needs review.
          </p>
        </div>

        <div className="notes-layout">
          <aside className="notes-map panel media-zoom" aria-label="Field note map">
            <div className="atlas-grid" aria-hidden="true" />
            <span className="note-pin note-pin--one">weather</span>
            <span className="note-pin note-pin--two">interview</span>
            <span className="note-pin note-pin--three">equipment</span>
          </aside>

          <section className="note-feed" aria-label="Field note feed">
            {notes.map(([title, place, text], index) => (
              <article className={index === 0 ? "note-card note-card--active gsap-reveal" : "note-card gsap-reveal"} key={title}>
                <div>
                  <BookOpen size={20} aria-hidden="true" />
                  <span>{place}</span>
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
                <footer>
                  <span>Linked to itinerary leg {index + 2}</span>
                  <Link href="/suite/itineraries">
                    View leg
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </footer>
              </article>
            ))}
          </section>

          <aside className="capture-panel panel gsap-reveal" aria-label="Capture tools">
            <div className="panel-heading">
              <div>
                <span>Capture</span>
                <h2>Structured inputs</h2>
              </div>
              <FileSearch size={22} aria-hidden="true" />
            </div>
            {[
              ["Audio memo", Mic],
              ["Photo evidence", Camera],
              ["Transcript", AudioLines],
              ["Location tag", MapPin],
              ["Research tags", Tags],
            ].map(([label, Icon]) => (
              <button key={label} type="button">
                <Icon size={18} aria-hidden="true" />
                {label}
              </button>
            ))}
          </aside>
        </div>
      </section>

      <FooterBand
        action={{ href: "/suite/account", label: "Manage account" }}
        secondary={{ href: "/suite/itineraries", label: "Back to itinerary" }}
        text="Field notes stay searchable because their project context is captured at the moment of writing."
        title="Turn observations into usable research records."
      />
    </main>
  );
}
