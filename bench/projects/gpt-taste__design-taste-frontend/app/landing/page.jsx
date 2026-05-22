import Link from "next/link";
import { BenchIcon } from "../../components/BenchIcon";
import { ScrollTheatre } from "../../components/ScrollTheatre";
import { SiteNav, benchmarkLinks } from "../../components/SiteNav";

const ledgerProof = ["Ridgeway Foods", "Halcyon Clinics", "Morrow Renewables", "Bancroft Freight"];
const controlCards = [
  {
    title: "Control evidence",
    detail: "Approval trails, account mappings, and variance notes stay attached to every close task.",
    icon: "ShieldCheck"
  },
  {
    title: "Operator review",
    detail: "Exception owners get one queue ordered by risk, materiality, and deadline pressure.",
    icon: "FileText"
  },
  {
    title: "Audit handoff",
    detail: "Auditors receive scoped packets instead of spreadsheet bundles and late-night exports.",
    icon: "LockKey"
  }
];

export default function LandingPage() {
  return (
    <main className="site-shell landing-shell">
      <ScrollTheatre surface="landing" />
      <SiteNav brand="Lumen Ledger" links={benchmarkLinks} ctaHref="#conversion" ctaLabel="Book control review" />

      <section className="landing-hero" aria-labelledby="landing-title">
        <div className="hero-copy">
          <p className="eyebrow">Compliance finance automation</p>
          <h1 id="landing-title">
            Lumen Ledger closes finance work with proof in place.
          </h1>
          <p>
            Operators reconcile, approve, and package compliance evidence in the same system that
            catches risky variance before it reaches the controller.
          </p>
          <div className="button-row" aria-label="Landing actions">
            <Link className="button button-primary" href="#conversion">
              Schedule review <BenchIcon name="ArrowRight" size={18} />
            </Link>
            <Link className="button button-ghost" href="#product-depth">
              See workflow
            </Link>
          </div>
        </div>
        <div className="ledger-visual" data-gsap-scale aria-label="Lumen Ledger compliance workflow preview">
          <div className="ledger-topline">
            <BenchIcon name="Bank" size={25} />
            <span>Close packet 24-05</span>
            <strong>Ready</strong>
          </div>
          <div className="ledger-trail">
            {["Bank feed", "Variance", "Controller", "Auditor"].map((item, index) => (
              <div className="trail-node" key={item}>
                <span>{index + 1}</span>
                <strong>{item}</strong>
                <small>{["Matched", "Explained", "Approved", "Scoped"][index]}</small>
              </div>
            ))}
          </div>
          <div className="ledger-document">
            <span />
            <span />
            <span />
            <strong>Evidence locked to GL account 6427</strong>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Customer proof">
        <p>Finance operators replacing chase threads with evidence-first close rooms</p>
        <div className="marquee" aria-hidden="true">
          <div>
            {[...ledgerProof, ...ledgerProof].map((name, index) => (
              <span key={`${name}-${index}`}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="product-depth" className="wide-section">
        <div className="section-heading">
          <p className="eyebrow">Product depth</p>
          <h2>Controls, exceptions, and audit packets share one ledger.</h2>
        </div>
        <div className="bento-grid landing-bento">
          <article className="bento-card bento-large group-hover-card" data-gsap-scale>
            <div className="inline-image-heading">
              <span>Variance review built around</span>
              <span className="inline-photo" style={{ backgroundImage: "url(https://picsum.photos/seed/lumen-ledger-audit/300/180)" }} />
              <span>real operating risk.</span>
            </div>
            <p>
              Each variance carries account history, materiality, owner context, and the policy
              excerpt reviewers need to approve or return it.
            </p>
          </article>
          {controlCards.map(({ title, detail, icon }) => (
            <article className="bento-card group-hover-card" key={title} data-gsap-scale>
              <BenchIcon name={icon} size={28} />
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
          <article className="bento-card ledger-metric group-hover-card" data-gsap-scale>
            <BenchIcon name="ChartLineUp" size={29} />
            <span>18.7 hrs</span>
            <p>Average reduction in weekly audit-prep time during pilot close cycles.</p>
          </article>
        </div>
      </section>

      <section className="stack-section" aria-labelledby="ledger-desire">
        <div className="section-heading pinned-copy">
          <p className="eyebrow">Operator rhythm</p>
          <h2 id="ledger-desire">The close room moves from intake to signed packet.</h2>
        </div>
        <div className="stack-list">
          {[
            ["Ingest", "Bank, ERP, and approval systems stream into reconciled work items."],
            ["Prioritize", "Material exceptions rise above noise with owner and deadline context."],
            ["Package", "Signed evidence, notes, and policy references export as a narrow packet."]
          ].map(([title, detail]) => (
            <article className="stack-card" data-gsap-stack key={title}>
              <BenchIcon name="CheckCircle" size={26} />
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="conversion" className="conversion-panel">
        <div>
          <p className="eyebrow">Final conversion</p>
          <h2>Bring one close cycle and leave with a control map.</h2>
        </div>
        <Link className="button button-primary button-invert" href="/dashboard">
          Review the benchmark dashboard <BenchIcon name="ArrowRight" size={18} />
        </Link>
      </section>
    </main>
  );
}
