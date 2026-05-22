import { Database, Key, Receipt, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";

export default function AccountPage() {
  return (
    <main className="atlas-page account-page">
      <section className="page-heading">
        <p className="eyebrow">Account</p>
        <h1>Keep research travel access controlled.</h1>
        <p>
          Manage workspace identity, collaborators, billing, and data export
          settings for the Northstar Atlas research group.
        </p>
      </section>

      <section className="account-grid" aria-label="Northstar account settings">
        <article className="account-profile">
          <UsersThree size={24} weight="duotone" aria-hidden="true" />
          <h2>Research group</h2>
          <form>
            <label>
              Workspace name
              <input defaultValue="Cairn Institute Field Ops" />
            </label>
            <label>
              Primary contact
              <input defaultValue="Mina Halvorsen" />
            </label>
            <button type="button" className="primary-action compact">
              Save profile
            </button>
          </form>
        </article>

        <article className="settings-list">
          {[
            [ShieldCheck, "Access policy", "Require approval for external collaborators."],
            [Key, "Security keys", "3 hardware keys enrolled for trip leads."],
            [Receipt, "Billing", "Archive plan renews on June 18, 2026."],
            [Database, "Data export", "Monthly itinerary and note archive enabled."],
          ].map(([Icon, title, copy]) => (
            <div key={title}>
              <Icon size={22} weight="duotone" aria-hidden="true" />
              <span>
                <strong>{title}</strong>
                <small>{copy}</small>
              </span>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
