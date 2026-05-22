import Link from "next/link";
import { AppIcon } from "../components/AppIcon";
import { RouteNav } from "../components/RouteNav";
import { complianceProof, ledgerEvents } from "../../lib/content";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <RouteNav active="/landing" />
      <section className="lumen-hero" aria-labelledby="lumen-title">
        <div className="lumen-copy">
          <p className="eyebrow">Lumen Ledger</p>
          <h1 id="lumen-title">Finance automation that keeps compliance visible.</h1>
          <p>
            Lumen Ledger gives operators a controlled close workflow with policy checks, exception queues, and audit-ready evidence before month end pressure builds.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="primary-action">
              View operator workflow
              <AppIcon name="ArrowRight" size={18} weight="bold" aria-hidden="true" />
            </Link>
            <Link href="/product" className="secondary-action">Inspect controls</Link>
          </div>
          <div className="proof-row" aria-label="Compliance proof points">
            {complianceProof.map((item) => (
              <span key={item}>
                <AppIcon name="CheckCircle" size={16} weight="fill" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="ledger-visual" aria-label="Lumen Ledger compliance workflow preview">
          <div className="ledger-spine" aria-hidden="true" />
          <div className="ledger-window">
            <div className="window-top">
              <span />
              <span />
              <span />
              <strong>Close command</strong>
            </div>
            <div className="reconcile-band">
              <AppIcon name="FileMagnifyingGlass" size={21} weight="duotone" aria-hidden="true" />
              <div>
                <span>Evidence bundle</span>
                <strong>Quarter close packet 184-B</strong>
              </div>
            </div>
            <div className="ledger-events">
              {ledgerEvents.map((event) => (
                <div key={event.label} data-state={event.state}>
                  <time>{event.time}</time>
                  <span>{event.label}</span>
                  <strong>{event.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="control-stamp">
            <AppIcon name="ShieldCheck" size={30} weight="duotone" aria-hidden="true" />
            <span>Audit lock</span>
            <strong>4 min ago</strong>
          </div>
        </div>
      </section>

      <section className="landing-proof" aria-labelledby="proof-title">
        <div>
          <p className="eyebrow">Operator proof</p>
          <h2 id="proof-title">Controls stay attached to the work.</h2>
        </div>
        <div className="proof-metrics">
          <div>
            <strong>38.4%</strong>
            <span>Fewer close exceptions after policy routing</span>
          </div>
          <div>
            <strong>11,842</strong>
            <span>Evidence artifacts mapped to controls this quarter</span>
          </div>
          <div>
            <strong>6.7 h</strong>
            <span>Median audit response time for approved requests</span>
          </div>
        </div>
      </section>

      <section className="product-depth" aria-label="Product depth">
        <article>
          <AppIcon name="LockKey" size={26} weight="duotone" aria-hidden="true" />
          <h2>Policy gate</h2>
          <p>Every payable, refund, and vendor change is checked against operating thresholds before release.</p>
        </article>
        <article>
          <AppIcon name="Scales" size={26} weight="duotone" aria-hidden="true" />
          <h2>Exception bench</h2>
          <p>Reviewers see the reason, source record, owner, and deadline without searching across finance tools.</p>
        </article>
        <article>
          <AppIcon name="FileMagnifyingGlass" size={26} weight="duotone" aria-hidden="true" />
          <h2>Evidence export</h2>
          <p>Auditors receive structured packets with approvals, timestamps, and control language preserved.</p>
        </article>
      </section>

      <section className="conversion-band" aria-labelledby="conversion-title">
        <div>
          <p className="eyebrow">Ready for controlled automation</p>
          <h2 id="conversion-title">Put finance operations on a visible ledger.</h2>
        </div>
        <Link href="/suite" className="primary-action">
          Plan rollout
          <AppIcon name="ArrowRight" size={18} weight="bold" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
