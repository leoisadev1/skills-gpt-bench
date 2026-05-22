import Link from "next/link";
import { SuiteNav } from "../../../components/SuiteNav";

const members = [
  { name: "Ari Moon", role: "Research lead", access: "Owner" },
  { name: "Len Okafor", role: "Field coordinator", access: "Editor" },
  { name: "Mina Cho", role: "External advisor", access: "Limited" },
];

export default function SuiteAccountPage() {
  return (
    <main className="suite-page suite-account overflow-guard">
      <SuiteNav />
      <section className="suite-subpage section-shell">
        <div className="suite-subpage__header">
          <h1>Account controls for teams moving through real-world research constraints.</h1>
          <p>
            Manage seats, field permissions, billing state, and data retention without making the travel
            planning pages feel duplicated.
          </p>
        </div>
        <div className="account-grid">
          <section className="account-panel account-panel--wide">
            <h2>Team access</h2>
            {members.map((member) => (
              <article key={member.name} className="member-row">
                <span className="driver-avatar" aria-hidden="true">{member.name.slice(0, 1)}</span>
                <div>
                  <strong>{member.name}</strong>
                  <small>{member.role}</small>
                </div>
                <span>{member.access}</span>
              </article>
            ))}
          </section>
          <section className="account-panel">
            <h2>Plan</h2>
            <strong className="account-price">$480 / month</strong>
            <p>Research team workspace with four active trips and 2TB evidence storage.</p>
          </section>
          <section className="account-panel">
            <h2>Retention</h2>
            <p>Interview media expires after 18 months unless pinned to a published study packet.</p>
          </section>
          <section className="account-panel account-panel--visual" data-gsap-image>
            <h2>Security posture</h2>
            <p>Field devices require passkeys, offline export approval, and project-level access.</p>
          </section>
        </div>
      </section>
      <section className="conversion-section suite-conversion">
        <div>
          <h2>Return to the planning surface when the account is ready.</h2>
          <p>Northstar keeps operations close to the actual research work.</p>
        </div>
        <Link href="/suite/itineraries" className="button button--primary">Back to itineraries</Link>
      </section>
    </main>
  );
}
