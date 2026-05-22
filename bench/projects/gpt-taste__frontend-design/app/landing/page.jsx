import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, ShieldAlert, Workflow } from "lucide-react";
import { BentoCard, FooterBand, InlineImage, RevealWords, SurfaceNav } from "../components/shared";

const controls = [
  ["Approval provenance", "Every invoice step carries actor, policy, evidence, and timestamp into the close file."],
  ["Policy drift alerts", "Rule changes are tested against live workflows before finance teams expose a gap."],
  ["ERP reconciliation", "Exceptions are grouped by owner and materiality instead of becoming another export."],
  ["Board-ready trails", "Auditors receive scoped workspaces with immutable evidence and no finance data sprawl."],
];

const proof = ["SOX controls", "month-end close", "procurement approvals", "ERP sync", "variance review", "audit rooms"];

export default function LandingPage() {
  return (
    <main className="main-shell lumen-page">
      <SurfaceNav
        brand="Lumen Ledger"
        cta={{ href: "#demo", label: "Book review" }}
        links={[
          { href: "#proof", label: "Proof" },
          { href: "#product", label: "Product" },
          { href: "#deploy", label: "Deploy" },
        ]}
        tone="light"
      />

      <section className="landing-hero">
        <div className="hero-copy gsap-reveal">
          <h1>
            Finance ops that keep every <InlineImage label="signed approval trail" seed="lumen-approval" /> approval
            audit-ready.
          </h1>
          <p>
            Lumen Ledger turns finance automation into a living control system: policy-aware routing, immutable
            evidence, and clean close packets for operators who cannot afford a messy audit trail.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#demo">
              Schedule controls review
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#product">
              Inspect product depth
            </a>
          </div>
        </div>

        <aside className="ledger-visual media-zoom" aria-label="Compliance automation preview">
          <div className="ledger-topline">
            <span>Control room</span>
            <strong>97.8%</strong>
          </div>
          <div className="ledger-stack">
            {controls.slice(0, 3).map(([title, text], index) => (
              <article className="ledger-row" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
                <CheckCircle2 size={20} aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="ledger-thread" aria-hidden="true" />
        </aside>
      </section>

      <section className="proof-strip" id="proof" aria-label="Lumen Ledger proof points">
        <div className="marquee-row">
          {[...proof, ...proof].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="lumen-depth" id="product">
        <div className="section-heading gsap-reveal">
          <h2>Controls that live inside the work, not after it.</h2>
          <p>
            Operators see exceptions while the approval is still movable. Auditors see the complete trail without
            asking finance to rebuild the story.
          </p>
        </div>
        <div className="bento-grid bento-grid--lumen">
          <BentoCard className="span-7" icon="audit" title="Evidence packets assemble themselves">
            <p>
              Lumen attaches purchase orders, approval comments, policy snapshots, and ERP records to the same control
              event, then seals the packet when the variance clears.
            </p>
          </BentoCard>
          <BentoCard className="span-5 visual-card" icon="chart" title="Exception heat map">
            <div className="heat-map" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} style={{ "--heat": `${35 + ((index * 17) % 61)}%` }} />
              ))}
            </div>
          </BentoCard>
          <BentoCard className="span-4" icon="lock" title="Scoped audit rooms">
            <p>Share exact ledgers, redacted attachments, and reviewer notes without opening the whole finance stack.</p>
          </BentoCard>
          <BentoCard className="span-4" icon="sliders" title="Policy simulations">
            <p>Preview how new thresholds would route against the last quarter before shipping the control change.</p>
          </BentoCard>
          <BentoCard className="span-4" icon="file" title="Close-ready exports">
            <p>Generate close packets organized by entity, materiality, control owner, and review status.</p>
          </BentoCard>
        </div>
      </section>

      <section className="lumen-desire" id="deploy">
        <div className="pin-title gsap-reveal">
          <FileCheck2 size={34} aria-hidden="true" />
          <h2>Built for the moment an operator asks, “can we prove this?”</h2>
        </div>
        <div className="desire-copy">
          <RevealWords text="Every invoice, approval, variance, policy edit, and reviewer decision remains connected to the same operational truth, so compliance stops being a scramble after the quarter has already closed." />
          <div className="stacked-evidence">
            {[
              ["Route", "Policy matched and owner assigned in 420 ms", Workflow],
              ["Review", "Controller note linked to source transaction", ShieldAlert],
              ["Seal", "Evidence packet locked with auditor-safe scope", FileCheck2],
            ].map(([title, text, Icon]) => (
              <article className="stack-card evidence-card" key={title}>
                <Icon size={24} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterBand
        action={{ href: "#demo", label: "Book a review" }}
        secondary={{ href: "/", label: "All benchmark routes" }}
        text="Bring one approval workflow, one ERP export, and one control requirement. Lumen will show exactly where evidence appears, who owns the exception, and what the auditor receives."
        title="Make the next close defensible before it begins."
      />

      <section className="demo-panel" id="demo" aria-label="Schedule a controls review">
        <div>
          <h2>Controls review request</h2>
          <p>For screenshot review, this form is intentionally static and complete enough to show the conversion path.</p>
        </div>
        <form>
          <label>
            Work email
            <input type="email" placeholder="operator@example.com" />
          </label>
          <label>
            Primary system
            <select defaultValue="erp">
              <option value="erp">ERP and AP automation</option>
              <option value="close">Close management</option>
              <option value="procurement">Procurement workflow</option>
            </select>
          </label>
          <button className="button button--primary" type="button">
            Request walkthrough
          </button>
        </form>
        <Link className="quiet-link" href="/">
          Return to route index
        </Link>
      </section>
    </main>
  );
}
