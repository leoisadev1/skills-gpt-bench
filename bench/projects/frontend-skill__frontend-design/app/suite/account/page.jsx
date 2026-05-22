import { CreditCard, KeyRound, ShieldCheck, UsersRound } from "lucide-react";
import { SuiteShell } from "../../components/SuiteShell";

const members = [
  ["Marta Ivers", "Research lead", "Owner"],
  ["Leo Tan", "Field logistics", "Planner"],
  ["Asha Noor", "Data steward", "Reviewer"],
  ["Jon Bell", "Finance", "Billing"],
];

export default function SuiteAccountPage() {
  return (
    <SuiteShell
      active="account"
      eyebrow="Account"
      title="Manage the team, data rules, and plan controls behind each expedition."
      description="Northstar Atlas account settings keep research access, billing, and retention policy close to the travel work they govern."
      rail={
        <div className="suite-status-card">
          <span>Plan</span>
          <strong>Research Team</strong>
          <p>Renews Jul 18 with 24 active seats and encrypted archive storage.</p>
        </div>
      }
    >
      <section className="account-grid">
        <div className="account-panel team-panel">
          <div className="panel-heading">
            <UsersRound size={17} aria-hidden="true" />
            <h2>Team access</h2>
          </div>
          {members.map(([name, role, access]) => (
            <div className="member-row" key={name}>
              <span>
                <strong>{name}</strong>
                <small>{role}</small>
              </span>
              <em>{access}</em>
            </div>
          ))}
        </div>

        <div className="account-panel">
          <div className="panel-heading">
            <ShieldCheck size={17} aria-hidden="true" />
            <h2>Data retention</h2>
          </div>
          <p>Archive field notes for 7 years, redact passport attachments after 90 days, and require reviewer approval for exports.</p>
        </div>

        <div className="account-panel">
          <div className="panel-heading">
            <KeyRound size={17} aria-hidden="true" />
            <h2>Security</h2>
          </div>
          <p>SSO enforced, device trust required for offline note sync, and all field exports are watermarked.</p>
        </div>

        <div className="account-panel">
          <div className="panel-heading">
            <CreditCard size={17} aria-hidden="true" />
            <h2>Billing owner</h2>
          </div>
          <p>Finance receives monthly expedition summaries with traveler counts, archive usage, and equipment logistics add-ons.</p>
        </div>
      </section>
    </SuiteShell>
  );
}
