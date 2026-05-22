import { DashboardWorkspace } from "../components/Interactive";
import { SiteNav } from "../components/Navigation";

export default function DashboardPage() {
  return (
    <main className="dashboard-page overflow-guard">
      <SiteNav brand="Harbor Desk" tone="light" />
      <DashboardWorkspace />
      <section className="ops-support">
        <div className="support-column">
          <span className="eyebrow">Depot capacity</span>
          <strong className="mono">74.3%</strong>
          <p>Canal Yard is the limiting node. North Pier has enough slack for two route swaps.</p>
        </div>
        <div className="support-column">
          <span className="eyebrow">Driver status</span>
          <strong className="mono">31 / 36</strong>
          <p>Five drivers are staged for late pickup recovery and one needs hours review.</p>
        </div>
        <div className="support-column">
          <span className="eyebrow">Exception age</span>
          <strong className="mono">26m</strong>
          <p>Oldest open item is below the service threshold but needs a dispatcher decision.</p>
        </div>
      </section>
    </main>
  );
}
