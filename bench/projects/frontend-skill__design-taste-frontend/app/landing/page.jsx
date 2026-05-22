import Link from "next/link";
import {
  ArrowRight,
  Bank,
  CheckCircle,
  FileMagnifyingGlass,
  LockKey,
  Scales,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const proof = [
  ["3,842", "controls reconciled this month"],
  ["18 min", "median evidence packet assembly"],
  ["47.2%", "fewer close-review handoffs"],
];

const workflow = [
  {
    title: "Map money movement to controls",
    copy: "Bank feeds, approvals, invoices, and journal entries land on one evidence spine.",
    Icon: Bank,
  },
  {
    title: "Flag exceptions before close",
    copy: "Variance thresholds, missing owners, and stale signoffs are grouped by operator.",
    Icon: Scales,
  },
  {
    title: "Package the audit trail",
    copy: "Every adjustment exports with source files, decision notes, and control history intact.",
    Icon: FileMagnifyingGlass,
  },
];

export default function LandingPage() {
  return (
    <main className="lumen-page">
      <section className="lumen-hero" aria-labelledby="lumen-title">
        <header className="lumen-nav">
          <Link href="/" className="wordmark">
            Lumen Ledger
          </Link>
          <nav aria-label="Lumen sections">
            <a href="#proof">Proof</a>
            <a href="#depth">Product</a>
            <a href="#convert">Start</a>
          </nav>
        </header>

        <div className="lumen-hero-grid">
          <div className="lumen-copy reveal">
            <p className="eyebrow">Compliance finance automation</p>
            <h1 id="lumen-title">Close the books with evidence attached.</h1>
            <p>
              Lumen Ledger gives finance operators a control-ready workspace
              for reconciliation, approvals, variance review, and audit packets.
            </p>
            <div className="button-row">
              <a className="primary-action" href="#convert">
                Book control review <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="secondary-action" href="#depth">
                See workflow depth
              </a>
            </div>
          </div>

          <div
            className="ledger-visual reveal delay-1"
            role="img"
            aria-label="A compliance ledger showing evidence status, approval trails, and variance checks."
          >
            <div className="ledger-ruler">
              <span>Q2 close</span>
              <span>Evidence locked</span>
            </div>
            <div className="ledger-sheet">
              {[
                ["Cash sweep", "$842,019", "Matched", "Reeves"],
                ["Vendor accrual", "$58,430", "Needs note", "Iqbal"],
                ["Payroll tax", "$214,883", "Approved", "Novak"],
                ["Deferred rev.", "$681,270", "Matched", "Marin"],
              ].map((row, index) => (
                <div className="ledger-row" key={row[0]} style={{ "--i": index }}>
                  <span>{row[0]}</span>
                  <strong>{row[1]}</strong>
                  <em>{row[2]}</em>
                  <small>{row[3]}</small>
                </div>
              ))}
            </div>
            <div className="evidence-rail">
              <div>
                <ShieldCheck size={20} weight="duotone" aria-hidden="true" />
                <span>SOC 2 evidence</span>
              </div>
              <div>
                <LockKey size={20} weight="duotone" aria-hidden="true" />
                <span>Locked journal</span>
              </div>
              <div>
                <CheckCircle size={20} weight="duotone" aria-hidden="true" />
                <span>Owner signoff</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="proof-band" aria-label="Lumen proof">
        <p>Trusted by finance teams running regulated close operations.</p>
        <div>
          {proof.map(([number, label]) => (
            <figure key={label}>
              <strong>{number}</strong>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="depth" className="lumen-depth" aria-labelledby="depth-title">
        <div>
          <p className="eyebrow">Product depth</p>
          <h2 id="depth-title">Controls stay connected to the work that proves them.</h2>
        </div>
        <div className="workflow-list">
          {workflow.map(({ title, copy, Icon }, index) => (
            <article className="workflow-row" key={title} style={{ "--i": index }}>
              <span className="workflow-icon" aria-hidden="true">
                <Icon size={24} weight="duotone" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="convert" className="conversion-section">
        <div>
          <p className="eyebrow">Operator-first implementation</p>
          <h2>Run one close cycle with Lumen before your next audit request.</h2>
        </div>
        <a className="primary-action dark" href="mailto:controls@lumenledger.example">
          Start with sample entities <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
