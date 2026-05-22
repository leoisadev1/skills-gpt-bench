import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileClock,
  LockKeyhole,
  Radar,
  ShieldCheck,
} from "lucide-react";

const proof = [
  { value: "8.4h", label: "monthly close evidence saved per operator" },
  { value: "97%", label: "controls mapped before review week" },
  { value: "31", label: "systems reconciled into one audit trail" },
];

const modules = [
  {
    title: "Policy-to-transaction mesh",
    text: "Lumen Ledger binds every reimbursement, vendor change, approval, and exception to the policy clause that governs it.",
  },
  {
    title: "Close-ready evidence packs",
    text: "Export reviewer-ready packets with owners, timestamps, source documents, approvals, and resolved drift in one signed record.",
  },
  {
    title: "Operator controls cockpit",
    text: "A daily queue shows which approvals are blocked, which controls need evidence, and which risks are aging.",
  },
];

const railRows = [
  ["Vendor change", "matched", "7 proofs"],
  ["Revenue deferral", "watch", "2 deltas"],
  ["Approval chain", "sealed", "11 proofs"],
  ["Policy drift", "blocked", "1 owner"],
];

function AuditRailVisual() {
  return (
    <div className="audit-visual" aria-label="Layered audit rail visualization">
      <div className="audit-orbit" aria-hidden="true" />
      <div className="audit-ledger">
        <div className="audit-ledger-top">
          <span>Control rail</span>
          <strong>Q3 evidence stream</strong>
        </div>
        <div className="audit-ruler" aria-hidden="true">
          {Array.from({ length: 22 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="audit-rows">
          {railRows.map((row) => (
            <div className="audit-row" key={row[0]}>
              <span>{row[0]}</span>
              <b data-status={row[1]}>{row[1]}</b>
              <em>{row[2]}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="audit-seal">
        <ShieldCheck size={26} aria-hidden="true" />
        <span>Immutable packet</span>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <Link className="brand-lockup" href="/">
          <span className="brand-glyph" aria-hidden="true" />
          <span>Lumen Ledger</span>
        </Link>
        <nav aria-label="Lumen Ledger page sections">
          <a href="#proof">Proof</a>
          <a href="#depth">Product</a>
          <a href="#convert">Start</a>
        </nav>
      </header>

      <section className="landing-hero" aria-labelledby="landing-title">
        <div className="landing-copy">
          <p className="eyebrow">Compliance finance automation for operators</p>
          <h1 id="landing-title">Lumen Ledger turns close chaos into signed evidence.</h1>
          <p>
            Map finance activity to policy, surface the missing proof, and ship
            audit-ready packets without forcing operators into a second system.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#convert">
              Request controls map
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#depth">
              Inspect product depth
            </a>
          </div>
          <div className="trust-line" role="list" aria-label="Compliance capabilities">
            <span role="listitem">
              <LockKeyhole size={16} aria-hidden="true" />
              SSO and audit roles
            </span>
            <span role="listitem">
              <BadgeCheck size={16} aria-hidden="true" />
              SOX-ready exports
            </span>
            <span role="listitem">
              <FileClock size={16} aria-hidden="true" />
              Reviewer timeline
            </span>
          </div>
        </div>
        <AuditRailVisual />
      </section>

      <section className="proof-band" id="proof" aria-label="Lumen Ledger proof">
        {proof.map((item) => (
          <article key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="product-depth" id="depth" aria-labelledby="depth-title">
        <div>
          <p className="eyebrow">Product depth</p>
          <h2 id="depth-title">Built around the evidence operators already create.</h2>
        </div>
        <div className="depth-grid">
          {modules.map((module, index) => (
            <article key={module.title} className="depth-panel">
              <span>0{index + 1}</span>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="controls-split" aria-labelledby="controls-title">
        <div>
          <p className="eyebrow">Daily operator loop</p>
          <h2 id="controls-title">Compliance work that feels like dispatch, not archaeology.</h2>
          <p>
            Lumen Ledger keeps the next control action visible: who owns it,
            what proof is missing, which finance object is affected, and when it
            will block close.
          </p>
        </div>
        <div className="control-stack" role="list" aria-label="Control workflow">
          {[
            ["Capture", "Pull events from ERP, card, procurement, HRIS, and docs."],
            ["Resolve", "Route exception owners with source context attached."],
            ["Seal", "Generate immutable packets for reviewers and leadership."],
          ].map(([title, text]) => (
            <div className="control-step" role="listitem" key={title}>
              <ClipboardCheck size={20} aria-hidden="true" />
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="final-conversion" id="convert" aria-labelledby="convert-title">
        <Radar size={30} aria-hidden="true" />
        <h2 id="convert-title">Bring one close cycle. Leave with the control map.</h2>
        <p>
          Send last month of approvals, vendor edits, and exception notes. We
          will return a control map with gaps, owners, and packet readiness.
        </p>
        <a className="button button-primary" href="mailto:ops@lumenledger.example">
          Book the evidence review
        </a>
      </section>
    </main>
  );
}
