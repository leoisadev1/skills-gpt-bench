import { BadgeCheck, CircleDollarSign, FileKey2, ShieldCheck, UserRound } from "lucide-react";
import { SuiteNav } from "../../../components/SuiteNav";

const readiness = [
  ["Traveler documents", "9 of 10 verified", 90],
  ["Budget approval", "$42.8k of $48k cleared", 89],
  ["Policy coverage", "Two equipment exceptions", 74],
  ["Data handling", "All protocols acknowledged", 100],
];

const accountActions = [
  {
    icon: FileKey2,
    title: "Travel documents",
    text: "Passport, visas, equipment carnets, and field permits.",
  },
  {
    icon: CircleDollarSign,
    title: "Budget policy",
    text: "Per-diem limits, grant codes, and approval thresholds.",
  },
  {
    icon: ShieldCheck,
    title: "Data security",
    text: "Device rules, consent storage, and export restrictions.",
  },
  {
    icon: BadgeCheck,
    title: "Team roles",
    text: "Add reviewers, collaborators, and field assistants.",
  },
];

export default function AccountPage() {
  return (
    <main className="suite-page account-page">
      <SuiteNav active="/suite/account" />
      <section className="account-layout" aria-label="Northstar Atlas account readiness">
        <aside className="profile-panel">
          <div className="profile-avatar" aria-hidden="true">
            RA
          </div>
          <p className="eyebrow">Research operations</p>
          <h1>Rin Alvarez</h1>
          <p>Program lead for environmental systems fieldwork.</p>
          <div className="profile-tags">
            <span>Workspace owner</span>
            <span>Budget approver</span>
            <span>Protocol admin</span>
          </div>
        </aside>

        <section className="readiness-panel" aria-labelledby="readiness-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Account readiness</p>
              <h2 id="readiness-title">Trip permissions and policy coverage</h2>
            </div>
            <UserRound size={20} aria-hidden="true" />
          </div>
          <div className="readiness-list">
            {readiness.map(([label, detail, value]) => (
              <div className="readiness-row" key={String(label)}>
                <div>
                  <strong>{label}</strong>
                  <span>{detail}</span>
                </div>
                <div className="readiness-track" aria-label={`${label} ${value} percent`}>
                  <i style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="account-actions" aria-label="Account controls">
          {accountActions.map((action) => {
            const Icon = action.icon;
            return (
            <article key={action.title}>
              <Icon size={22} aria-hidden="true" />
              <h2>{action.title}</h2>
              <p>{action.text}</p>
            </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}
