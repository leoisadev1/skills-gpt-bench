import { CreditCard, LockKey, ShieldCheck, UsersThree } from "@phosphor-icons/react/ssr";
import { SuiteShell } from "../../../components/SuiteShell";

export default function SuiteAccountPage() {
  return (
    <SuiteShell
      active="/suite/account"
      eyebrow="Account"
      title="Team controls for research travel that has consequences."
      summary="Account owners can manage access, billing, retention, and traveler rules without leaving the planning context."
    >
      <section className="account-layout">
        <div className="account-card primary-account" data-reveal>
          <div className="panel-title">
            <UsersThree size={22} weight="duotone" aria-hidden="true" />
            <h2>Arden Research Group</h2>
          </div>
          <p>18 active travelers across climate, soil, and water programs.</p>
          <div className="member-strip" aria-label="Team members">
            {["MS", "RA", "TN", "LV", "OK"].map((initials) => (
              <span key={initials}>{initials}</span>
            ))}
          </div>
        </div>
        <div className="account-settings" data-reveal>
          {[
            {
              icon: LockKey,
              title: "Access policy",
              body: "Two approvers for high-risk legs and private-source notes."
            },
            {
              icon: CreditCard,
              title: "Billing",
              body: "Research grant GL codes mapped to each field program."
            },
            {
              icon: ShieldCheck,
              title: "Retention",
              body: "Trip packets retained for 4 years with export approval."
            }
          ].map((item) => {
            const SettingIcon = item.icon;
            return (
              <article key={item.title}>
                <SettingIcon size={21} weight="duotone" aria-hidden="true" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
        <form className="account-form" data-reveal>
          <h2>Invite traveler</h2>
          <label>
            Email
            <input type="email" placeholder="researcher@arden.example" />
          </label>
          <label>
            Role
            <select defaultValue="field">
              <option value="field">Field researcher</option>
              <option value="lead">Program lead</option>
              <option value="finance">Finance reviewer</option>
            </select>
          </label>
          <p className="form-helper">Invitations inherit the current retention and approval policy.</p>
          <button type="button" className="button button-dark">Create invitation</button>
        </form>
      </section>
    </SuiteShell>
  );
}
