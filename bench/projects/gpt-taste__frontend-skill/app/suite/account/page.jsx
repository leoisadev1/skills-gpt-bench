import { MainNav, SuiteNav } from "../../components/shared";

const accountCells = [
  ["Team access", "12 active researchers, 3 external collaborators, 2 pending field contractors."],
  ["Travel documents", "9 passports verified, 2 expiring inside 120 days, 1 visa review blocked."],
  ["Equipment profile", "Satellite pucks, water kits, archive gloves, and cold-weather packs are assigned by leg."],
  ["Emergency chain", "Regional lead, institution duty officer, and local fixer contacts are synced for offline use."]
];

export default function SuiteAccountPage() {
  return (
    <main className="suite-page">
      <div className="suite-header">
        <MainNav tone="light" active="/suite" />
        <SuiteNav active="/suite/account" />
      </div>

      <section className="wide-shell account-layout">
        <aside className="account-rail" data-reveal>
          <h1>Account</h1>
          <p className="suite-copy">
            Readiness, permissions, and equipment status for research travel that has operational risk.
          </p>
        </aside>

        <article className="account-main" data-reveal>
          <h2>Prepare people and permissions before the route gets fragile.</h2>
          <div className="account-grid">
            {accountCells.map(([title, body]) => (
              <section className="account-cell" key={title} data-stack-card>
                <h3>{title}</h3>
                <p>{body}</p>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
