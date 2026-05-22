import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { MotionFrame } from "../components/MotionFrame";

const proofCards = [
  {
    className: "ledger-card large motion-scale",
    title: "Every operator action becomes an audit-ready finance event.",
    copy: "Approvals, reconciliations, exceptions, and policy checks land in one searchable operating ledger.",
    metric: "99.7%",
    label: "matched without manual chase",
  },
  {
    className: "ledger-card tall motion-rise",
    title: "Controls that live beside the work.",
    copy: "Policy owners can tune thresholds, review evidence, and publish changes without waiting for a platform release.",
    metric: "4 hr",
    label: "month-end evidence pack",
  },
  {
    className: "ledger-card small motion-rise",
    title: "Close desk",
    copy: "Daily variance review with owner, source, and next action visible before the close call.",
    metric: "18",
    label: "saved operator hours",
  },
  {
    className: "ledger-card small motion-rise",
    title: "Risk queue",
    copy: "Exceptions are grouped by exposure and routed to the person who can resolve them.",
    metric: "7 min",
    label: "median response",
  },
  {
    className: "ledger-card small motion-rise",
    title: "Evidence vault",
    copy: "Every attachment, approval, and policy version keeps its original context for audit review.",
    metric: "0",
    label: "orphan documents",
  },
];

const stackItems = [
  ["01", "Ingest bank feeds, invoices, approvals, and ledger exports without forcing operators into a new workflow."],
  ["02", "Normalize the event trail into controlled records with policy checks, owners, and escalation paths."],
  ["03", "Ship finance-ready evidence packets with source files, decisions, and reviewer history intact."],
];

export default function LandingPage() {
  return (
    <main className="lumen-page overflow-safe">
      <MotionFrame />
      <nav className="site-nav" aria-label="Lumen Ledger">
        <Link href="/landing" className="brand-lockup">
          <span className="brand-mark">L</span>
          <span>Lumen Ledger</span>
        </Link>
        <div className="nav-pill">
          <a href="#proof">Proof</a>
          <a href="#depth">Product depth</a>
          <a href="#conversion">Start</a>
        </div>
        <Link href="/" className="ghost-button">
          Routes <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </nav>

      <section className="lumen-hero" aria-labelledby="lumen-title">
        <div className="hero-grid">
          <div>
            <p className="hero-kicker">Finance automation for operators</p>
            <h1 id="lumen-title" className="lumen-title">
              Lumen Ledger turns messy <span className="title-image" aria-hidden="true" /> finance work into controlled flow.
            </h1>
            <p className="hero-copy">
              Compliance-focused automation for teams that need reconciliations, approvals, and evidence to move as fast as the operation.
            </p>
            <div className="hero-actions">
              <a className="button" href="#conversion">
                Schedule a control review <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="ghost-button" href="#proof">
                See operator proof
              </a>
            </div>
          </div>

          <div className="hero-visual motion-scale" aria-label="Lumen Ledger product console preview">
            <div className="ledger-screen">
              {["Revenue variance", "Vendor approval", "Bank match", "Audit packet", "Policy drift"].map((row, index) => (
                <div className="ledger-row" key={row}>
                  <span>{row}</span>
                  <strong>{index === 4 ? "review" : "clear"}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="ribbon-window" aria-hidden="true">
        <div className="audit-ribbon">
          <span>Controls in the flow</span>
          <span>Evidence without chase</span>
          <span>Operator-owned close</span>
          <span>Policy-aware automation</span>
          <span>Controls in the flow</span>
          <span>Evidence without chase</span>
        </div>
      </div>

      <section id="proof" className="lumen-section" aria-labelledby="proof-title">
        <div className="section-heading">
          <h2 id="proof-title">Proof that finance can move at operations speed.</h2>
          <p>
            Lumen Ledger gives operators the working surface while finance keeps the controls, evidence, and policy lineage.
          </p>
        </div>
        <div className="lumen-bento">
          {proofCards.map((card) => (
            <article className={card.className} key={card.title}>
              <div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
              <div className="metric-line">
                <strong>{card.metric}</strong>
                <span>{card.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="depth" className="lumen-section" aria-labelledby="depth-title">
        <div className="depth-grid">
          <div className="depth-sticky">
            <h2 id="depth-title" className="sr-only">Product depth</h2>
            <p className="depth-copy">
              {"Operators keep moving while finance keeps the receipt for every decision.".split(" ").map((word, index) => (
                <span className="scrub-word" key={`${word}-${index}`}>
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
          <div className="stack-list">
            {stackItems.map(([num, copy]) => (
              <article className="stack-card" key={num}>
                <strong>{num}</strong>
                <p>{copy}</p>
                <CheckCircle2 size={26} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="conversion" className="final-conversion" aria-labelledby="conversion-title">
        <div>
          <ShieldCheck size={42} aria-hidden="true" />
          <h2 id="conversion-title">Put the next close on rails.</h2>
          <p>
            Bring a messy approval, reconciliation, or audit packet. Lumen Ledger will map the control path with your operators.
          </p>
        </div>
        <a className="dark-button" href="mailto:hello@lumenledger.example">
          Book the walkthrough
        </a>
      </section>
    </main>
  );
}
