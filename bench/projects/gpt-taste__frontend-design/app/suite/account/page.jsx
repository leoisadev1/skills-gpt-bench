import Link from "next/link";
import { ArrowRight, Bell, CreditCard, Database, KeyRound, ShieldCheck, UserRoundPlus, Users } from "lucide-react";
import { FooterBand, ProgressBar, SuiteNav } from "../../components/shared";

const members = [
  ["Dr. Imani Vale", "Principal investigator", "Owner"],
  ["Kenji Sato", "Logistics coordinator", "Admin"],
  ["Marta Ruiz", "Field researcher", "Editor"],
  ["Owen Park", "External partner", "Limited"],
];

export default function AccountPage() {
  return (
    <main className="main-shell atlas-page atlas-subpage">
      <SuiteNav active="account" />
      <section className="account-workspace">
        <div className="suite-page-heading gsap-reveal">
          <span>Northstar Atlas</span>
          <h1>Account controls for research groups with sensitive routes and mixed collaborators.</h1>
          <p>
            The account page separates team access, billing ownership, notification rules, and data boundaries so field
            planning can stay collaborative without becoming loose.
          </p>
        </div>

        <div className="account-grid">
          <section className="team-panel panel gsap-reveal">
            <div className="panel-heading">
              <div>
                <span>Team</span>
                <h2>Research group access</h2>
              </div>
              <Users size={22} aria-hidden="true" />
            </div>
            {members.map(([name, role, access]) => (
              <article className="member-row" key={name}>
                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
                <b>{access}</b>
              </article>
            ))}
            <button type="button">
              <UserRoundPlus size={18} aria-hidden="true" />
              Invite collaborator
            </button>
          </section>

          <section className="security-panel panel gsap-reveal">
            <div className="panel-heading">
              <div>
                <span>Security</span>
                <h2>Route privacy</h2>
              </div>
              <ShieldCheck size={22} aria-hidden="true" />
            </div>
            {[
              ["Sensitive location masking", true],
              ["External partner expiry", true],
              ["Field-device passkeys", false],
            ].map(([label, enabled]) => (
              <label className="toggle-row" key={label}>
                <span>{label}</span>
                <input defaultChecked={enabled} type="checkbox" />
              </label>
            ))}
          </section>

          <section className="storage-panel panel gsap-reveal">
            <div className="panel-heading">
              <div>
                <span>Storage</span>
                <h2>Project archive</h2>
              </div>
              <Database size={22} aria-hidden="true" />
            </div>
            <div className="storage-meter">
              <ProgressBar tone="green" value={58} />
              <strong>58% used</strong>
            </div>
            <p>Media, transcripts, and route records are retained by project with export controls for institutional review.</p>
          </section>

          <section className="billing-panel panel gsap-reveal">
            <div className="panel-heading">
              <div>
                <span>Billing</span>
                <h2>Institution plan</h2>
              </div>
              <CreditCard size={22} aria-hidden="true" />
            </div>
            <dl>
              <div>
                <dt>Plan</dt>
                <dd>Research Team</dd>
              </div>
              <div>
                <dt>Projects</dt>
                <dd>12 active, 38 archived</dd>
              </div>
              <div>
                <dt>Renewal</dt>
                <dd>October 14, 2026</dd>
              </div>
            </dl>
          </section>

          <section className="notification-panel panel gsap-reveal">
            <div className="panel-heading">
              <div>
                <span>Notifications</span>
                <h2>Field alerts</h2>
              </div>
              <Bell size={22} aria-hidden="true" />
            </div>
            {["Permit approval", "Route risk changes", "Interview schedule edits"].map((item) => (
              <label className="toggle-row" key={item}>
                <span>{item}</span>
                <input defaultChecked type="checkbox" />
              </label>
            ))}
          </section>

          <section className="access-panel panel gsap-reveal">
            <div className="panel-heading">
              <div>
                <span>Access</span>
                <h2>Institution keys</h2>
              </div>
              <KeyRound size={22} aria-hidden="true" />
            </div>
            <p>API keys are scoped by project and default to read-only itinerary and note exports.</p>
            <Link href="/suite/itineraries">
              Return to planning
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </section>

      <FooterBand
        action={{ href: "/suite", label: "Back to suite home" }}
        secondary={{ href: "/", label: "Benchmark index" }}
        text="Account structure supports real research teams: collaborators, storage, privacy, billing, and alerts."
        title="Keep the travel workspace governed."
      />
    </main>
  );
}
