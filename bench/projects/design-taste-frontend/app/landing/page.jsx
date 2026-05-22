import Link from "next/link";
import { landingProof, ledgerSteps } from "../../lib/content";
import { Icon } from "../components/Icon";
import { RouteNav } from "../components/RouteNav";

export default function LandingPage() {
  return (
    <main id="main-content" className="landing-page">
      <RouteNav />
      <section className="landing-hero">
        <div className="hero-copy">
          <p className="eyebrow">Compliance finance automation</p>
          <h1>Lumen Ledger</h1>
          <p>
            Operators get a live control layer for approvals, payment evidence, close tasks, and
            auditor-ready trails without waiting for spreadsheet cleanup at month end.
          </p>
          <div className="hero-actions">
            <Link href="#conversion" className="button">
              Book a ledger review <Icon name="ArrowRight" size={18} />
            </Link>
            <Link href="#product-depth" className="button button--ghost">
              Inspect workflow
            </Link>
          </div>
        </div>
        <div className="ledger-visual" aria-label="Compliance ledger visualization">
          <div className="ledger-rail">
            <span />
            <span />
            <span />
          </div>
          <div className="ledger-sheet ledger-sheet--primary">
            <div className="sheet-head">
              <span>Payment evidence</span>
              <b>Ready</b>
            </div>
            <div className="sheet-line strong" />
            <div className="sheet-line" />
            <div className="sheet-line short" />
            <div className="receipt-stack">
              <span>Vendor owner</span>
              <span>Policy match</span>
              <span>Board approval</span>
            </div>
          </div>
          <div className="ledger-sheet ledger-sheet--offset">
            <div className="sheet-head">
              <span>Audit trail</span>
              <b>Locked</b>
            </div>
            <div className="sheet-grid">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Product proof">
        {landingProof.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="landing-section split" id="product-depth">
        <div>
          <p className="eyebrow">Product depth</p>
          <h2>Every approval leaves an inspectable trail.</h2>
        </div>
        <div className="workflow-steps">
          {ledgerSteps.map((step, index) => (
            <article key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section product-layers" aria-label="Lumen Ledger modules">
        <div className="module-panel module-panel--tall">
          <Icon name="ShieldCheck" size={28} />
          <h3>Policy binding</h3>
          <p>
            Rules attach to spend categories, approval groups, and approval thresholds before a
            payment reaches review.
          </p>
        </div>
        <div className="module-panel">
          <Icon name="ChartLineUp" size={28} />
          <h3>Close pressure</h3>
          <p>Operators see which accounts are blocked by people, proof, or timing.</p>
        </div>
        <div className="module-panel">
          <Icon name="FileText" size={28} />
          <h3>Auditor rooms</h3>
          <p>Read-only exports show evidence, owners, and policy history without extra folders.</p>
        </div>
      </section>

      <section className="landing-conversion" id="conversion">
        <div>
          <p className="eyebrow">Final conversion</p>
          <h2>Give finance operations a ledger that explains itself.</h2>
          <p>
            Bring one payment process, one approval matrix, and one recent audit request. Lumen
            Ledger maps the control gaps in a working session.
          </p>
        </div>
        <Link href="/dashboard" className="button button--dark">
          See the operations surface <Icon name="ArrowRight" size={18} />
        </Link>
      </section>
    </main>
  );
}
