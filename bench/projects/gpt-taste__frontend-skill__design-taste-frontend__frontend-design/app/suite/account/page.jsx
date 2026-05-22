import { icons } from "../../components";
import { AccountSetting, SuiteShell } from "../suite-components";

export default function AccountPage() {
  const { UserCircle } = icons;

  return (
    <SuiteShell current="account">
      <section className="account-layout">
        <div className="account-profile" data-reveal>
          <UserCircle size={40} weight="duotone" aria-hidden="true" />
          <p className="brand-kicker">Account</p>
          <h1>Research operations settings for the Northstar Atlas workspace.</h1>
          <dl>
            <div>
              <dt>Workspace</dt>
              <dd>Arden Field Lab</dd>
            </div>
            <div>
              <dt>Plan</dt>
              <dd>Research team</dd>
            </div>
          </dl>
        </div>
        <div className="settings-list">
          <AccountSetting title="Travel approval rules" text="Require lead signoff for route edits inside 48 hours of departure." />
          <AccountSetting title="Field note visibility" text="Default new notes to expedition members until reviewed." />
          <AccountSetting title="Document retention" text="Keep permits, waivers, and invoices for seven years." />
          <AccountSetting title="Emergency contacts" text="Sync satellite phone contacts to every active itinerary." />
        </div>
      </section>
    </SuiteShell>
  );
}
