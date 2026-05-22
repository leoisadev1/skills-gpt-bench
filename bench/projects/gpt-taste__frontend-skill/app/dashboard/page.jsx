import { MainNav } from "../components/shared";

const healthRows = [
  ["North", "86%", "ok"],
  ["Airport", "72%", "warn"],
  ["Harbor", "51%", "hot"],
  ["South", "91%", "ok"]
];

const queueItems = [
  ["Late handoff", "3 stops at risk", "18m"],
  ["Cold chain", "Sensor gap on V-19", "7m"],
  ["Dock conflict", "Depot B door 4", "24m"],
  ["Address check", "Two failed scans", "31m"]
];

const drivers = [
  ["Maya R.", "On route", "9 stops"],
  ["Anton K.", "Loading", "Depot C"],
  ["Jess P.", "Exception", "Needs dispatch"],
  ["Noel S.", "Break", "Returns 12:40"]
];

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <MainNav tone="light" active="/dashboard" />

      <section className="ops-shell" aria-label="Harbor Desk logistics control room">
        <aside className="ops-panel ops-sidebar" data-reveal>
          <h1>Harbor Desk</h1>
          <div className="filter-stack" aria-label="Dashboard filters">
            {["Same-day", "All depots", "Priority routes", "Exceptions open", "Driver active"].map((filter, index) => (
              <button className="filter-chip" key={filter} type="button">
                <span>{filter}</span>
                <strong>{index === 0 ? "Live" : index + 2}</strong>
              </button>
            ))}
          </div>
        </aside>

        <div className="ops-main">
          <header className="ops-panel ops-topbar" data-reveal>
            <div>
              <h2>Same-day route health</h2>
              <span>Updated 12:18 across 42 vans, 8 depots, 319 active stops.</span>
            </div>
            <div className="ops-actions">
              <button type="button">Rebalance</button>
              <button type="button">Notify leads</button>
            </div>
          </header>

          <div className="health-grid">
            <section className="ops-panel route-map" aria-label="Route map sketch" data-reveal>
              <span className="map-node map-node--a">A12</span>
              <span className="map-node map-node--b">D8</span>
              <span className="map-node map-node--c">H3</span>
            </section>

            <section className="ops-panel route-health" data-reveal>
              <h3>Route health</h3>
              {healthRows.map(([label, value, state]) => (
                <div className="health-row" key={label}>
                  <strong>{label}</strong>
                  <span className="bar">
                    <span className={state === "ok" ? undefined : state} style={{ width: value }} />
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </section>
          </div>

          <div className="ops-lower">
            <section className="ops-panel queue-panel" data-reveal>
              <h3>Exception queue</h3>
              <div className="queue-stack">
                {queueItems.map(([title, detail, time]) => (
                  <article className="queue-item" key={title}>
                    <strong>
                      {title}
                      <span>{time}</span>
                    </strong>
                    <span>{detail}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="ops-panel drivers-panel" data-reveal>
              <h3>Driver status</h3>
              <div className="driver-stack">
                {drivers.map(([name, state, meta]) => (
                  <article className="driver-item" key={name}>
                    <strong>
                      {name}
                      <span>{state}</span>
                    </strong>
                    <span>{meta}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="ops-panel capacity-panel" data-reveal>
              <h3>Depot capacity</h3>
              <p>Inbound volume is tight at Harbor and airport lanes. South has spare cold storage.</p>
              <div className="capacity-meter" aria-hidden="true">
                {[64, 82, 93, 58, 71, 88, 49].map((height) => (
                  <span key={height} style={{ height: `${height}%` }} />
                ))}
              </div>
            </section>
          </div>
        </div>

        <aside className="ops-panel ops-inspector" data-reveal>
          <h3>Inspector</h3>
          <p>Selected: Harbor route H3, van 19, service window 12:30-14:10.</p>
          <div className="inspector-card">
            <div>
              <strong>Risk</strong>
              <p>Driver is 21 minutes behind and has a cold-chain sensor gap after stop 11.</p>
            </div>
            <div>
              <strong>Recommended move</strong>
              <p>Shift two low-priority southbound stops to A12 and hold door 4 for the return load.</p>
            </div>
            <div>
              <strong>Contact</strong>
              <p>Depot B lead and customer success have not been notified.</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
