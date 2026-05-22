import { CreditCard, KeyRound, ShieldCheck, UsersRound } from "lucide-react";
import { SuiteFrame } from "../../components/SuiteFrame";

const panels = [
  ["Team access", "12 active researchers, 3 coordinators, 2 pending invites.", UsersRound],
  ["Security", "Single sign-on enforced, offline archive encrypted, exports watermarked.", ShieldCheck],
  ["Billing", "Research team plan renews July 18 with 2,000 GB field media storage.", CreditCard],
];

export default function AccountPage() {
  return (
    <SuiteFrame active="/suite/account">
      <section className="suite-page" aria-labelledby="account-title">
        <div className="suite-heading">
          <h1 id="account-title">Account controls for teams that work offline.</h1>
          <p>
            Northstar Atlas keeps access, sync, billing, and export permissions clear before the team leaves reliable connectivity.
          </p>
        </div>
        <div className="account-layout">
          <div className="account-stack">
            {panels.map(([title, detail, Icon]) => (
              <article className="account-panel" key={title}>
                <Icon size={28} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{detail}</p>
                <div className="setting-row">
                  <span>Enabled for research workspace</span>
                  <span className="switch" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
          <aside className="account-summary" aria-label="Account summary">
            <KeyRound size={26} aria-hidden="true" />
            <h2>Workspace policy</h2>
            <p>
              Offline edits require device passcode, exports expire after seven days, and billing owners receive storage warnings at 80 percent.
            </p>
          </aside>
        </div>
      </section>
    </SuiteFrame>
  );
}
