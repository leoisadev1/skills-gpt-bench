import Link from "next/link";
import { BenchIcon } from "../../../components/BenchIcon";
import { ScrollTheatre } from "../../../components/ScrollTheatre";
import { SuiteNav } from "../../../components/SuiteNav";

const notes = [
  ["Harbor interview", "Consent confirmed. Participant asked for transcript review before archive deposit."],
  ["Equipment condition", "Moisture bag replaced after north pier walk. Lens cloths moved to orange case."],
  ["Local context", "Museum staff suggested comparing 1987 logs with private fishery ledgers."]
];

export default function SuiteNotesPage() {
  return (
    <main className="site-shell suite-shell">
      <ScrollTheatre surface="suite-notes" />
      <SuiteNav active="notes" />
      <section className="suite-page-head notes-head">
        <p className="eyebrow">Field notes</p>
        <h1>Observations stay tied to place, consent, and next action.</h1>
        <p>
          Northstar Atlas keeps fragments useful after the trip, when teams need provenance more
          than a blank notes dump.
        </p>
      </section>
      <section className="notes-layout">
        <div className="note-editor" data-gsap-scale>
          <div className="panel-title">
            <span>
              <BenchIcon name="NotePencil" size={18} />
              Draft note
            </span>
            <small>Akureyri · 16:22</small>
          </div>
          <label>
            Title
            <input defaultValue="Archive staff flagged private ledger lead" />
          </label>
          <label>
            Observation
            <textarea defaultValue="Cross-reference the harbor arrival logs with the family-owned fishery ledgers before publishing travel estimates." />
          </label>
          <button type="button" className="button button-primary">Save note</button>
        </div>
        <div className="note-stack">
          {notes.map(([title, body]) => (
            <article className="note-card" data-gsap-stack key={title}>
              <BenchIcon name="FileText" size={21} />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
          <Link className="button button-ghost" href="/suite/account">
            Review account rules <BenchIcon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
