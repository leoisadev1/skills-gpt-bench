import Link from "next/link";
import {
  ArrowRight,
  ChartLineUp,
  FileSearchIcon as FileSearch,
  SealCheck,
  ShieldCheck,
  StackSimple
} from "@phosphor-icons/react/ssr";
import { NavLink } from "../../components/NavLink";

const proof = [
  ["17.4 min", "median evidence packet assembly"],
  ["42 ledgers", "mapped into control owners"],
  ["8 day", "quarter close audit trail"]
];

const modules = [
  {
    title: "Policy engine",
    body: "Converts approval rules into finance workflows that operators can inspect before anything posts.",
    icon: ShieldCheck
  },
  {
    title: "Evidence room",
    body: "Keeps invoices, approvals, comments, and exceptions beside the exact ledger line auditors ask about.",
    icon: FileSearch
  },
  {
    title: "Variance watch",
    body: "Flags threshold breaks by vendor, entity, region, and owner before the month-end review turns noisy.",
    icon: ChartLineUp
  },
  {
    title: "Close timeline",
    body: "Shows who changed what, when, and why with immutable state snapshots for every finance handoff.",
    icon: StackSimple
  }
];

export default function LandingPage() {
  return (
    <main className="lumen-page overflow-guard">
      <header className="lumen-nav" data-reveal>
        <Link href="/" className="brand-lockup" aria-label="Go to benchmark index">
          <span className="brand-sigil">LL</span>
          <span>Lumen Ledger</span>
        </Link>
        <nav aria-label="Lumen Ledger page navigation">
          <Link href="#proof">Proof</Link>
          <Link href="#modules">Product depth</Link>
          <Link href="#convert">Get started</Link>
        </nav>
      </header>

      <section className="lumen-hero" aria-labelledby="lumen-title">
        <div className="lumen-hero-copy" data-reveal>
          <p className="quiet-label">Compliance finance automation for operators</p>
          <h1 id="lumen-title">Close the books with controls already attached.</h1>
          <p>
            Lumen Ledger gives finance operators a live audit map across approvals, evidence,
            policies, and exceptions without burying the close team in generic workflow cards.
          </p>
          <div className="hero-actions" aria-label="Lumen Ledger calls to action">
            <Link className="button button-dark" href="#convert">
              Start controls review
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
            <Link className="button button-light" href="#modules">
              View audit map
            </Link>
          </div>
        </div>
        <div className="ledger-visual" aria-label="Lumen Ledger product visualization" data-image-pulse>
          <div className="ledger-rail">
            {["Purchase order", "Approval", "Invoice", "Exception", "Audit packet"].map((item, index) => (
              <span key={item} style={{ "--i": index }}>
                {item}
              </span>
            ))}
          </div>
          <div className="ledger-panel">
            <div className="ledger-panel-header">
              <SealCheck size={24} weight="duotone" aria-hidden="true" />
              <span>Control state: ready</span>
            </div>
            <div className="ledger-wave" />
            <div className="ledger-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" id="proof" aria-label="Lumen Ledger proof points">
        {proof.map(([value, label]) => (
          <article key={label} data-reveal>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="lumen-depth" id="modules">
        <div className="section-heading" data-reveal>
          <p className="quiet-label">Product depth</p>
          <h2>Audit evidence, workflow state, and operator ownership stay in one line of sight.</h2>
        </div>
        <div className="module-grid" aria-label="Lumen Ledger modules">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="module-card" key={module.title} data-stack-card>
                <Icon size={28} weight="duotone" aria-hidden="true" />
                <h3>{module.title}</h3>
                <p>{module.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="lumen-desire">
        <div className="desire-media" data-image-pulse />
        <div className="desire-copy" data-reveal>
          <p className="quiet-label">Operator proof, not boardroom theater</p>
          <h2>Every approval route leaves a clean trail for the person who has to answer the question.</h2>
          <p>
            Reviewers see live status, owners see their open control gaps, and auditors receive
            a packet that reflects the work as it actually happened.
          </p>
        </div>
      </section>

      <section className="conversion-band" id="convert" data-reveal>
        <div>
          <p className="quiet-label">Final conversion</p>
          <h2>Bring the next close into control before it starts.</h2>
        </div>
        <NavLink href="/dashboard">Open the next surface</NavLink>
      </section>
    </main>
  );
}
