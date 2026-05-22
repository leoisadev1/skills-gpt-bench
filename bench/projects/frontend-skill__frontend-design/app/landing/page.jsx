import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const proofRows = [
  ["92%", "month-end evidence auto-matched before controller review"],
  ["11 min", "median time from policy change to enforced approval path"],
  ["SOC 2", "control exports mapped to auditor-ready packets"],
];

const controls = [
  "Entity-aware approval rules",
  "Evidence trails for every journal movement",
  "Exception queues grouped by risk and owner",
  "Immutable reviewer sign-off history",
];

export default function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-hero" aria-labelledby="landing-title">
        <nav className="landing-nav" aria-label="Lumen Ledger">
          <Link href="/" className="brand-lockup">
            <ShieldCheck size={20} aria-hidden="true" />
            <span>Lumen Ledger</span>
          </Link>
          <div>
            <a href="#proof">Proof</a>
            <a href="#depth">Controls</a>
            <a href="#convert">Start</a>
          </div>
        </nav>

        <div className="landing-hero-copy">
          <p className="eyebrow">Finance automation for controlled operators</p>
          <h1 id="landing-title">Lumen Ledger keeps close, controls, and evidence in the same line.</h1>
          <p>
            Compliance-focused finance teams automate approvals and reconciliation
            without losing the audit trail operators depend on.
          </p>
          <div className="cta-row">
            <a className="button primary" href="#convert">
              Request control map <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button ghost" href="#depth">See workflow</a>
          </div>
        </div>

        <div className="audit-plane" aria-label="Ledger evidence visual">
          <div className="audit-spine">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="ledger-document">
            <div className="document-topline">
              <FileCheck2 size={22} aria-hidden="true" />
              <span>Q3 close packet</span>
            </div>
            <div className="ledger-lines">
              <span className="wide" />
              <span />
              <span className="medium" />
              <span className="wide" />
              <span className="short" />
            </div>
            <div className="control-stamp">
              <LockKeyhole size={18} aria-hidden="true" />
              Signed control
            </div>
          </div>
          <div className="audit-ticket">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>Revenue cutoff approved</span>
          </div>
        </div>
      </section>

      <section id="proof" className="landing-proof" aria-labelledby="proof-title">
        <div>
          <p className="eyebrow">Proof operators can inspect</p>
          <h2 id="proof-title">Controls are visible before the auditor asks.</h2>
        </div>
        <div className="proof-list">
          {proofRows.map(([value, label]) => (
            <div key={value} className="proof-row">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="depth" className="landing-depth" aria-labelledby="depth-title">
        <div className="depth-copy">
          <p className="eyebrow">Product depth</p>
          <h2 id="depth-title">A control rail runs through every finance workflow.</h2>
          <p>
            Lumen Ledger turns policies into live approval paths, then binds every
            exception, note, file, and reviewer decision to the source transaction.
          </p>
        </div>
        <div className="control-rail">
          {controls.map((control, index) => (
            <div className="control-step" key={control}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{control}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="convert" className="landing-convert" aria-labelledby="convert-title">
        <p className="eyebrow">Ready for the next close</p>
        <h2 id="convert-title">Map one material workflow and leave with an audit-ready control model.</h2>
        <a className="button primary dark" href="mailto:controls@lumenledger.example">
          Book the operator session <ArrowRight size={16} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
