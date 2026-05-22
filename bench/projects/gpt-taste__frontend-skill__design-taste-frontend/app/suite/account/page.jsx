import { BellRinging, CreditCard, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { AccountForm } from "../../components/Interactive";
import { SuiteNav } from "../../components/Navigation";

export default function AccountPage() {
  return (
    <main className="suite-page suite-subpage overflow-guard">
      <SuiteNav />
      <section className="account-layout">
        <div className="account-copy">
          <p className="eyebrow">Northstar Atlas account</p>
          <h1>Team controls for alerts, billing status, and research travel access.</h1>
          <p>Account settings stay practical so planning work remains the center of the suite.</p>
        </div>
        <AccountForm />
      </section>

      <section className="account-status section-space">
        {[
          [UsersThree, "Research team", "12 active members, 3 external coordinators"],
          [BellRinging, "Alerts", "Permit, weather, and transfer updates enabled"],
          [CreditCard, "Billing", "No open billing exceptions"],
        ].map(([Icon, title, body]) => (
          <article className="status-line" key={title}>
            <Icon size={24} weight="duotone" aria-hidden="true" />
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
