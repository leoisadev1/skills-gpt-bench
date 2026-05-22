import Link from "next/link";
import { BenchIcon } from "../../../components/BenchIcon";
import { ScrollTheatre } from "../../../components/ScrollTheatre";
import { SuiteNav } from "../../../components/SuiteNav";

export default function SuiteAccountPage() {
  return (
    <main className="site-shell suite-shell">
      <ScrollTheatre surface="suite-account" />
      <SuiteNav active="account" />
      <section className="suite-page-head">
        <p className="eyebrow">Account</p>
        <h1>Team access, travel policy, and billing live near the plan.</h1>
        <p>
          Research coordinators can adjust permissions and spend rules without leaving the itinerary
          context.
        </p>
      </section>
      <section className="account-layout">
        <article className="account-panel" data-gsap-scale>
          <BenchIcon name="UserCircle" size={31} />
          <h2>Research team</h2>
          <dl>
            <div>
              <dt>Workspace</dt>
              <dd>Polar Methods Lab</dd>
            </div>
            <div>
              <dt>Members</dt>
              <dd>14 active · 3 guest reviewers</dd>
            </div>
            <div>
              <dt>Data policy</dt>
              <dd>Consent-first archival retention</dd>
            </div>
          </dl>
        </article>
        <form className="account-form" data-gsap-scale>
          <div className="panel-title">
            <span>
              <BenchIcon name="LockKey" size={18} />
              Travel defaults
            </span>
          </div>
          <label>
            Approval threshold
            <input defaultValue="$1,850" />
            <small>Amounts above this route to the program lead.</small>
          </label>
          <label>
            Emergency contact
            <input defaultValue="+1 (312) 847-1928" />
            <small>Visible to team members with itinerary access.</small>
          </label>
          <label>
            Invoice memo
            <textarea defaultValue="Attach itinerary code, consent packet reference, and research objective." />
          </label>
          <button type="button" className="button button-primary">Save settings</button>
        </form>
        <article className="billing-panel" data-gsap-stack>
          <BenchIcon name="CreditCard" size={30} />
          <h2>Billing status</h2>
          <p>May travel spend is tracking 12.4% under the approved field budget.</p>
          <Link className="button button-ghost" href="/landing">
            Return to benchmark start <BenchIcon name="ArrowRight" size={18} />
          </Link>
        </article>
      </section>
    </main>
  );
}
