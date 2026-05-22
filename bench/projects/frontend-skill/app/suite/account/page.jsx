import { CreditCard, KeyRound, ShieldCheck, Users } from "lucide-react";

const settings = [
  ["Team seats", "9 active, 3 invited", Users],
  ["Travel budget", "$18,400 remaining", CreditCard],
  ["Access policy", "Research leads approve exports", KeyRound],
  ["Compliance", "Consent retention enabled", ShieldCheck],
];

export default function AccountPage() {
  return (
    <main id="content" className="suite-page account-page">
      <section className="suite-page-heading">
        <p className="eyebrow">Account</p>
        <h1>Team and travel controls</h1>
        <p>
          Manage seats, approvals, billing, and export rules for the research
          travel workspace.
        </p>
      </section>

      <section className="account-layout" aria-label="Account settings">
        <div className="account-summary">
          <span className="account-avatar" aria-hidden="true">NA</span>
          <div>
            <h2>Northstar Research Group</h2>
            <p>Academic fieldwork workspace · Annual plan</p>
          </div>
        </div>
        <div className="settings-list">
          {settings.map(([label, value, Icon]) => (
            <article key={label}>
              <Icon size={20} aria-hidden="true" />
              <div>
                <h2>{label}</h2>
                <p>{value}</p>
              </div>
              <button type="button">Manage</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
