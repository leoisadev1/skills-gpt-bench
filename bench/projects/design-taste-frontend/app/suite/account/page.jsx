import { Icon } from "../../components/Icon";

export default function SuiteAccountPage() {
  return (
    <section className="suite-workspace">
      <div className="suite-page-head">
        <div>
          <p className="eyebrow">Account</p>
          <h1>Team settings for exports, roles, and field access.</h1>
        </div>
        <button type="button" className="button button--compact">
          <Icon name="GearSix" size={17} />
          Save changes
        </button>
      </div>
      <div className="account-layout">
        <section className="settings-panel">
          <h2>Research group</h2>
          <label>
            <span>Workspace name</span>
            <input defaultValue="Polar Materials Lab" />
            <small>Shown on exports, invoices, and shared itinerary links.</small>
          </label>
          <label>
            <span>Default export format</span>
            <select defaultValue="packet">
              <option value="packet">Research packet PDF</option>
              <option value="csv">Structured CSV bundle</option>
              <option value="json">Archive JSON</option>
            </select>
          </label>
          <p className="field-error" role="alert">
            Billing contact needs a verified backup email before remote exports can be enabled.
          </p>
        </section>
        <section className="role-panel">
          <h2>Field roles</h2>
          {[
            ["Mina Okonkwo", "Lead researcher", "Full access"],
            ["Tomas Ader", "Equipment manager", "Itineraries and notes"],
            ["Celia Iversen", "Local coordinator", "Shared stops only"]
          ].map(([name, role, access]) => (
            <article key={name}>
              <span className="driver-avatar">{name.slice(0, 2)}</span>
              <div>
                <strong>{name}</strong>
                <small>{role}</small>
              </div>
              <em>{access}</em>
            </article>
          ))}
        </section>
        <aside className="billing-panel">
          <Icon name="CreditCard" size={24} />
          <h2>Billing</h2>
          <p>Research Team plan renews on Jun 18, 2026. Current usage is 17 seats and 184 GB.</p>
          <button type="button" className="button button--full button--ghost">
            Review invoice history
          </button>
        </aside>
      </div>
    </section>
  );
}
