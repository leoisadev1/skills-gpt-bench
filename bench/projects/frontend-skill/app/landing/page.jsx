import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Landmark,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const proofItems = [
  ["190", "control checks reconciled per close"],
  ["12", "audit-ready workstreams unified"],
  ["6 min", "to generate a board packet"],
];

const depthItems = [
  {
    title: "Policy-bound workflows",
    body: "Owners get tasks with thresholds, evidence rules, and escalation paths already attached.",
  },
  {
    title: "Continuous evidence",
    body: "Bank feeds, approvals, ERP entries, and payment runs resolve into a single traceable record.",
  },
  {
    title: "Close-room visibility",
    body: "Operators see which controls are blocked, aging, or ready for review without chasing screenshots.",
  },
];

const timeline = [
  "Source transaction captured",
  "Policy match confirmed",
  "Exception owner assigned",
  "Evidence packet sealed",
];

export default function LandingPage() {
  return (
    <main id="content" className="landing-page">
      <section className="lumen-hero" aria-label="Lumen Ledger landing page">
        <div className="hero-shade" aria-hidden="true" />
        <nav className="landing-nav" aria-label="Lumen Ledger navigation">
          <Link href="/" className="brand-mark">
            <Landmark size={18} aria-hidden="true" />
            Lumen Ledger
          </Link>
          <Link href="#conversion" className="text-link">
            Request review
          </Link>
        </nav>

        <div className="lumen-hero-copy">
          <p className="eyebrow light">Compliance finance automation</p>
          <h1>Lumen Ledger</h1>
          <p className="hero-line">
            Close controls, evidence, and operator approvals in one calm ledger
            before month-end pressure hits.
          </p>
          <div className="action-row">
            <Link href="#conversion" className="button primary">
              Book an operator review <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#depth" className="button ghost-light">
              See workflow
            </Link>
          </div>
        </div>

        <div className="audit-ribbon" aria-label="Audit trail status">
          <span>SOX evidence locked</span>
          <span>Rev-rec variance cleared</span>
          <span>Payment approvals sealed</span>
        </div>
      </section>

      <section className="proof-band" aria-labelledby="proof-heading">
        <div>
          <p className="eyebrow">Proof</p>
          <h2 id="proof-heading">Audit work that stays assembled.</h2>
        </div>
        <div className="proof-grid">
          {proofItems.map(([value, label]) => (
            <div className="proof-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lumen-depth" id="depth" aria-labelledby="depth-heading">
        <div className="section-heading">
          <p className="eyebrow">Product depth</p>
          <h2 id="depth-heading">The ledger follows the work, not the meeting.</h2>
        </div>
        <div className="depth-layout">
          <ol className="evidence-timeline">
            {timeline.map((item) => (
              <li key={item}>
                <FileCheck2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <div className="depth-list">
            {depthItems.map((item) => (
              <article key={item.title}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="control-section" aria-labelledby="control-heading">
        <div className="control-visual" aria-hidden="true">
          <div className="control-ledger-row hot" />
          <div className="control-ledger-row" />
          <div className="control-ledger-row muted" />
          <div className="control-ledger-row" />
        </div>
        <div>
          <p className="eyebrow">Operator fit</p>
          <h2 id="control-heading">Built for the people who own the close.</h2>
          <p>
            Lumen Ledger turns fragmented finance tasks into a live control map:
            assign owners, inspect evidence, and resolve risk without building
            another spreadsheet layer.
          </p>
          <div className="trust-list">
            <span>
              <ShieldCheck size={18} aria-hidden="true" /> SOC 2 evidence
            </span>
            <span>
              <LockKeyhole size={18} aria-hidden="true" /> Segregated approvals
            </span>
          </div>
        </div>
      </section>

      <section className="final-conversion" id="conversion" aria-labelledby="conversion-heading">
        <p className="eyebrow light">Start focused</p>
        <h2 id="conversion-heading">Run one close cycle with every control visible.</h2>
        <Link href="mailto:operators@lumenledger.example" className="button primary light-button">
          Request a control review <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
