import { BenchIcon } from "../../components/BenchIcon";
import { SiteNav, benchmarkLinks } from "../../components/SiteNav";

const exceptions = [
  { id: "HX-482", route: "Queens medical", issue: "Cold-chain handoff late", age: "14m", severity: "critical" },
  { id: "DV-193", route: "Red Hook bulk", issue: "Dock slot moved", age: "27m", severity: "watch" },
  { id: "KA-708", route: "Newark lab", issue: "Driver has two unresolved calls", age: "42m", severity: "critical" },
  { id: "MP-414", route: "SoHo retail", issue: "Customer window narrowed", age: "51m", severity: "stable" }
];

const drivers = [
  ["Ari Ventresca", "Loaded", "Route 18", "87%"],
  ["Mina Halberg", "At depot", "Route 07", "43%"],
  ["Theo Ibarra", "Exception", "Route 22", "62%"],
  ["Nadia Ro", "Returning", "Route 11", "76%"]
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <SiteNav brand="Harbor Desk" links={benchmarkLinks} ctaHref="/suite" ctaLabel="Open suite" />

      <section className="dashboard-top" aria-labelledby="dashboard-title">
        <div>
          <p className="eyebrow">Same-day logistics control room</p>
          <h1 id="dashboard-title">Harbor Desk Control</h1>
        </div>
        <div className="filter-bar" aria-label="Dashboard filters">
          {["All depots", "Next 3 hours", "Exceptions", "Capacity risk"].map((filter) => (
            <button key={filter} type="button">
              <BenchIcon name="SlidersHorizontal" size={15} />
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="ops-grid" aria-label="Harbor Desk dashboard">
        <div className="ops-main">
          <div className="ops-strip" aria-label="Route health summary">
            {[
              ["Routes live", "142", "+11 since 08:00"],
              ["At risk", "18", "6 need dispatcher"],
              ["Depot load", "71.4%", "North bay tight"],
              ["Median delay", "9m", "Down from 16m"]
            ].map(([label, value, detail]) => (
              <article key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
                <span>{detail}</span>
              </article>
            ))}
          </div>

          <div className="map-panel">
            <div className="panel-title">
              <span>
                <BenchIcon name="Gauge" size={18} />
                Route health
              </span>
              <small>Live clustering</small>
            </div>
            <div className="route-map" aria-label="Route health map">
              {["Brooklyn", "Queens", "Newark", "Jersey City", "Staten Island"].map((zone, index) => (
                <span className={`map-node node-${index + 1}`} key={zone}>
                  {zone}
                </span>
              ))}
            </div>
          </div>

          <div className="dashboard-columns">
            <section className="queue-panel" aria-labelledby="exception-title">
              <div className="panel-title">
                <span>
                  <BenchIcon name="WarningCircle" size={18} />
                  <strong id="exception-title">Exception queue</strong>
                </span>
                <button type="button">Escalate selected</button>
              </div>
              <div className="exception-list">
                {exceptions.map((exception) => (
                  <article key={exception.id}>
                    <span className={`severity ${exception.severity}`} />
                    <div>
                      <strong>{exception.route}</strong>
                      <small>{exception.id} · {exception.issue}</small>
                    </div>
                    <time>{exception.age}</time>
                  </article>
                ))}
              </div>
            </section>

            <section className="driver-panel" aria-labelledby="driver-title">
              <div className="panel-title">
                <span>
                  <BenchIcon name="Truck" size={18} />
                  <strong id="driver-title">Driver status</strong>
                </span>
                <small>4 of 31 shown</small>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Driver</th>
                    <th>Status</th>
                    <th>Load</th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map(([name, status, route, load]) => (
                    <tr key={name}>
                      <td>
                        <strong>{name}</strong>
                        <small>{route}</small>
                      </td>
                      <td>{status}</td>
                      <td>{load}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>

        <aside className="inspector-panel" aria-labelledby="inspector-title">
          <div className="panel-title">
            <span>
              <BenchIcon name="Warehouse" size={18} />
              <strong id="inspector-title">Depot inspector</strong>
            </span>
            <small>North bay</small>
          </div>
          <div className="capacity-ring" aria-label="Depot capacity 83 percent">
            <span>83%</span>
          </div>
          <dl className="inspector-list">
            <div>
              <dt>Dock doors</dt>
              <dd>12 active · 2 blocked</dd>
            </div>
            <div>
              <dt>Sort lanes</dt>
              <dd>Lane C backing up at 38 carts</dd>
            </div>
            <div>
              <dt>Next risk</dt>
              <dd>Frozen parcels miss carrier cutoff in 21m</dd>
            </div>
          </dl>
          <div className="state-panel loading-state" aria-label="Loading replay">
            <span />
            <span />
            <span />
          </div>
          <div className="state-panel error-state" role="status">
            <BenchIcon name="Clock" size={17} />
            Weather feed stale by 6m. Dispatch estimates remain usable.
          </div>
          <div className="state-panel empty-state">
            No unassigned vans after current filter. Clear capacity risk to widen the roster.
          </div>
        </aside>
      </section>
    </main>
  );
}
