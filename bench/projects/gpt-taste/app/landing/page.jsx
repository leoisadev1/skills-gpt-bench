import Link from "next/link";
import { SiteNav } from "../../components/SiteNav";
import { benchmarkPrompts } from "../../lib/prompts";

const controls = [
  { title: "Close evidence gaps", body: "Ledger trails, operator approvals, and bank movements are reconciled before close." },
  { title: "Escalate with context", body: "Exceptions arrive with owners, evidence, prior decisions, and risk tier already attached." },
  { title: "Stay audit-ready", body: "Controls remain readable for finance, compliance, and external reviewers without exports." },
  { title: "Automate safely", body: "Rules can draft journal actions while human checkpoints remain visible and measurable." },
];

export default function LandingPage() {
  return (
    <main className="landing-page overflow-guard">
      <SiteNav brand="Lumen Ledger" cta={{ href: "#conversion", label: "Book a control review" }} />

      <section className="landing-hero section-shell">
        <div className="landing-hero__copy">
          <h1>
            Lumen Ledger keeps finance automation inside a visible control room
            <span
              className="inline-image"
              style={{ backgroundImage: "url(https://picsum.photos/seed/lumen-ledger-audit/320/160)" }}
              aria-hidden="true"
            />
          </h1>
          <p>
            {benchmarkPrompts.landing}
          </p>
          <div className="hero-actions" aria-label="Landing page calls to action">
            <Link href="#product-depth" className="button button--primary">
              See the control layer
            </Link>
            <Link href="#proof" className="button button--ghost">
              Review proof
            </Link>
          </div>
        </div>
        <div className="ledger-visual" data-gsap-image aria-label="Lumen Ledger control visual">
          <div className="ledger-visual__beam" />
          <div className="ledger-card ledger-card--top">
            <span>Revenue recognition</span>
            <strong>Matched</strong>
          </div>
          <div className="ledger-card ledger-card--middle">
            <span>Vendor approval trail</span>
            <strong>2 exceptions</strong>
          </div>
          <div className="ledger-card ledger-card--bottom">
            <span>Audit packet</span>
            <strong>Ready</strong>
          </div>
        </div>
      </section>

      <section id="proof" className="proof-strip">
        <div className="marquee" aria-label="Lumen Ledger proof points">
          <div className="marquee__track">
            {["SOX control map", "Month-end close", "Evidence vault", "Approval replay", "Exception desk", "Bank sync"].map((item) => (
              <span key={item}>{item}</span>
            ))}
            {["SOX control map", "Month-end close", "Evidence vault", "Approval replay", "Exception desk", "Bank sync"].map((item) => (
              <span key={`${item}-repeat`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="product-depth" className="section-shell product-depth">
        <div className="section-intro">
          <h2 data-reveal-words>Controls are not bolted on after automation. They are the operating surface.</h2>
          <p>
            Operators can trace every automated finance action back to the source document, approval path,
            policy threshold, and human decision that shaped it.
          </p>
        </div>
        <div className="bento-grid bento-grid--landing">
          {controls.map((control, index) => (
            <article key={control.title} className={`bento-card bento-card--${index + 1} group-card`} data-stack-card>
              <div className="bento-card__media" aria-hidden="true" />
              <h3>{control.title}</h3>
              <p>{control.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-desire section-shell">
        <div className="pin-copy">
          <h2>From close checklist to board packet without the scramble.</h2>
          <p>
            Lumen Ledger turns every control into a living system: owner, evidence, reason, exception,
            remediation, and reviewer-ready record.
          </p>
        </div>
        <div className="stack-list">
          {[
            ["Policy graph", "Rules are expressed as linked control language instead of brittle spreadsheet notes."],
            ["Exception queue", "Finance teams see severity, owner, and time left before close impact."],
            ["Evidence bundle", "Documents, approvals, and calculations ship together as an exportable record."],
          ].map(([title, body]) => (
            <article key={title} className="stack-card group-card" data-stack-card>
              <span>{title}</span>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="conversion" className="conversion-section">
        <div>
          <h2>Make automation visible enough for finance leaders to trust.</h2>
          <p>Bring one close workflow. Leave with a mapped control review and a practical rollout path.</p>
        </div>
        <Link href="/dashboard" className="button button--primary">
          Open benchmark dashboard
        </Link>
      </section>
    </main>
  );
}
