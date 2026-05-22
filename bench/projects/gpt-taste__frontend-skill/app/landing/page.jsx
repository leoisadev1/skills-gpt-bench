import { ArrowLink, ImagePlane, MainNav, RouteFooter, ScrubLine } from "../components/shared";
import { picsum } from "../lib/content";

const ledgerRows = [
  ["Revenue recognition", "Matched"],
  ["Policy exception", "Queued"],
  ["Close evidence", "Ready"],
  ["Audit trail", "Sealed"]
];

const controls = [
  ["SOX close pack", "18 controls"],
  ["Bank variance", "$4.2k open"],
  ["Operator queue", "7 owners"],
  ["Board export", "Clean"]
];

export default function LandingPage() {
  return (
    <main className="page-dark">
      <MainNav tone="dark" active="/landing" />

      <section className="wide-shell hero-asym">
        <div data-reveal>
          <p className="eyebrow">Lumen Ledger</p>
          <h1 className="hero-title">
            Close finance work with audit evidence already{" "}
            <span
              className="inline-photo"
              style={{ backgroundImage: `url(${picsum("lumen-ledger-audit-strip", 520, 260)})` }}
            />{" "}
            attached.
          </h1>
          <p className="hero-copy">
            Lumen Ledger gives operators a calm compliance layer for reconciliations, approval trails, and close
            packets before finance work reaches review.
          </p>
          <div className="hero-actions">
            <ArrowLink href="/dashboard" variant="light">
              View operator workflow
            </ArrowLink>
            <ArrowLink href="/product" variant="line">
              Compare controls
            </ArrowLink>
          </div>
        </div>

        <div className="image-plane ledger-visual" data-image-scale style={{ backgroundImage: `url(${picsum("lumen-ledger-vault-room")})` }}>
          <div className="ledger-visual__panel">
            {ledgerRows.map(([label, value]) => (
              <div className="ledger-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell proof-strip" aria-label="Lumen Ledger proof">
        <div data-reveal>
          <span>Close review time</span>
          <strong>42% lower</strong>
        </div>
        <div data-reveal>
          <span>Evidence coverage</span>
          <strong>98.6%</strong>
        </div>
        <div data-reveal>
          <span>Policy drift caught</span>
          <strong>3.1k</strong>
        </div>
      </section>

      <section className="section-shell chapter">
        <div className="chapter-head">
          <h2 data-reveal>Compliance is not a separate afterparty.</h2>
          <p data-reveal>
            The product depth lives inside the operator motion: source matching, exception ownership, approval context,
            and final close packets all stay connected.
          </p>
        </div>
        <div className="bento-grid">
          <article className="bento-card span-7" data-stack-card>
            <h3>Close calendar with control pressure.</h3>
            <p>
              Every task carries policy impact, owner confidence, and source freshness so operators know which items
              need escalation before the controller asks.
            </p>
            <div className="control-list">
              {controls.map(([label, value]) => (
                <span key={label}>
                  {label}
                  <strong>{value}</strong>
                </span>
              ))}
            </div>
          </article>
          <article
            className="bento-card bento-card--image span-5"
            data-stack-card
            style={{ backgroundImage: `url(${picsum("finance-compliance-ledger-depth")})` }}
          >
            <h3>Evidence packets stay visual.</h3>
            <p>Reviewer-ready snapshots show source documents, variance notes, and sign-off lineage in one plane.</p>
          </article>
          <article className="bento-card span-4" data-stack-card>
            <h3>Exception queues</h3>
            <p>Sort by risk, controller attention, dollar exposure, and time left in the close window.</p>
          </article>
          <article className="bento-card span-4" data-stack-card>
            <h3>Approval memory</h3>
            <p>Decisions become reusable policy hints, not hidden comments in a spreadsheet tab.</p>
          </article>
          <article className="bento-card span-4" data-stack-card>
            <h3>Export discipline</h3>
            <p>Board and auditor views inherit the same data model, with no late-stage rebuild.</p>
          </article>
          <article
            className="bento-card bento-card--image span-6"
            data-stack-card
            style={{ backgroundImage: `url(${picsum("lumen-control-room-night")})` }}
          >
            <h3>Audit room mode</h3>
            <p>Focus review on the records that changed, with clean paths back to evidence.</p>
          </article>
          <article className="bento-card span-6" data-stack-card>
            <h3>Operator-first automation</h3>
            <p>
              Lumen Ledger suggests matches and flags drift, while keeping final judgment, assignment, and approval
              language readable for humans.
            </p>
          </article>
        </div>
      </section>

      <section className="chapter">
        <ScrubLine text="Finance teams move faster when evidence, ownership, policy, and approval live in the same operating layer." />
      </section>

      <section className="section-shell chapter">
        <div className="chapter-head">
          <h2 data-reveal>Built for the end of month, not the demo day.</h2>
          <p data-reveal>
            Lumen Ledger keeps the interface quiet until something needs attention, then makes the next action obvious.
          </p>
        </div>
        <ImagePlane seed="lumen-ledger-close-desk" label="Compliance finance desk" />
      </section>

      <RouteFooter
        title="Give operators a close process that can defend itself."
        body="Start with one entity, one close calendar, and the control evidence your team already collects."
        href="/dashboard"
        cta="Open the next surface"
        tone="dark"
      />
    </main>
  );
}
