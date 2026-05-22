import { AppIcon } from "../../components/AppIcon";
import { SuiteNav } from "../../components/SuiteNav";

export default function AccountPage() {
  return (
    <main className="suite-page">
      <SuiteNav current="/suite/account" />
      <section className="account-grid">
        <div className="account-profile">
          <AppIcon name="UserCircle" size={34} weight="duotone" aria-hidden="true" />
          <p className="eyebrow">Account</p>
          <h1>Research travel settings</h1>
          <p>Manage team access, billing codes, and review controls for Northstar Atlas workspaces.</p>
        </div>
        <form className="account-form" aria-label="Northstar Atlas account settings">
          <label className="input-block">
            <span>Workspace name</span>
            <input defaultValue="Nordic climate archive" />
            <small>Shown in travel packets and note exports.</small>
          </label>
          <label className="input-block">
            <span>Billing code</span>
            <input defaultValue="" aria-invalid="true" />
            <small className="field-error">Billing code is required before booking approvals can run.</small>
          </label>
          <label className="input-block">
            <span>Default reviewer</span>
            <select defaultValue="mika">
              <option value="mika">Mika Baines</option>
              <option value="klara">Klara Ravn</option>
              <option value="dara">Dara Nwosu</option>
            </select>
            <small>Reviewer receives travel packet changes.</small>
          </label>
          <button type="button" className="primary-action">
            <AppIcon name="ShieldCheck" size={17} weight="bold" aria-hidden="true" />
            Save settings
          </button>
        </form>
        <aside className="security-stack" aria-label="Account safeguards">
          <div>
            <AppIcon name="Keyhole" size={22} weight="duotone" aria-hidden="true" />
            <strong>Single sign-on</strong>
            <span>Required for every workspace member</span>
          </div>
          <div>
            <AppIcon name="CreditCard" size={22} weight="duotone" aria-hidden="true" />
            <strong>Approval limit</strong>
            <span>$18,750 pending across two trips</span>
          </div>
        </aside>
      </section>
    </main>
  );
}
