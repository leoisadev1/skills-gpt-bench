import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Clock3,
  Filter,
  RadioTower,
  Route,
  Truck,
} from "lucide-react";

const routes = [
  ["R-18", "Financial District", "On pace", "7 stops", "14:22"],
  ["R-24", "SoMa medical", "At risk", "4 stops", "14:05"],
  ["R-31", "Mission retail", "Clear", "9 stops", "14:41"],
  ["R-44", "Airport parts", "Blocked", "2 stops", "13:58"],
];

const exceptions = [
  ["Cold chain breach", "R-24", "Driver waiting at dock", "High"],
  ["Gate code failed", "R-44", "Depot needs receiver call", "High"],
  ["Load mismatch", "R-18", "Two parcels need scan review", "Med"],
  ["Driver break window", "R-31", "Auto-reschedule suggested", "Low"],
];

const drivers = [
  ["Ari Chen", "En route", "96%", "Van 12"],
  ["Mika Shah", "Dock hold", "72%", "Van 07"],
  ["Noel Ortiz", "Loading", "88%", "Van 19"],
  ["Iris Vale", "Break", "64%", "Van 04"],
];

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <header className="ops-topbar">
        <Link href="/" className="ops-brand">
          <RadioTower size={19} aria-hidden="true" />
          <span>Harbor Desk</span>
        </Link>
        <div className="ops-status">
          <span>Same-day control room</span>
          <strong>Live at 14:08</strong>
        </div>
      </header>

      <section className="ops-shell" aria-label="Logistics operations dashboard">
        <aside className="ops-filters" aria-label="Filters">
          <div className="panel-heading">
            <Filter size={16} aria-hidden="true" />
            <span>Filters</span>
          </div>
          {["Today", "Bay Area", "Medical priority", "Exceptions only"].map((filter) => (
            <button key={filter} type="button">
              {filter}
            </button>
          ))}
          <div className="depot-meter">
            <span>Depot capacity</span>
            <strong>82%</strong>
            <div aria-hidden="true"><span /></div>
          </div>
        </aside>

        <section className="ops-main">
          <div className="ops-metrics" aria-label="Route health">
            <div>
              <span>Route health</span>
              <strong>31 / 38</strong>
              <small>clear or on pace</small>
            </div>
            <div>
              <span>Exception queue</span>
              <strong>14</strong>
              <small>6 require dispatcher</small>
            </div>
            <div>
              <span>Drivers active</span>
              <strong>47</strong>
              <small>4 nearing break window</small>
            </div>
          </div>

          <div className="route-board">
            <div className="board-map" aria-label="Route map overview">
              <svg viewBox="0 0 540 300" role="img" aria-labelledby="map-title">
                <title id="map-title">Live route lines crossing the city grid</title>
                <path className="street" d="M28 70H510M28 148H510M28 226H510M120 24V276M250 24V276M392 24V276" />
                <path className="route-ok" d="M62 232C126 184 154 180 218 140S342 76 468 60" />
                <path className="route-risk" d="M80 72C160 126 206 126 260 160S350 246 474 232" />
                <path className="route-warn" d="M136 258C176 206 205 192 272 196S378 174 438 116" />
                <circle className="map-node ok" cx="468" cy="60" r="9" />
                <circle className="map-node risk" cx="474" cy="232" r="9" />
                <circle className="map-node warn" cx="438" cy="116" r="9" />
              </svg>
            </div>

            <div className="route-table-wrap">
              <div className="panel-heading">
                <Route size={16} aria-hidden="true" />
                <span>Active routes</span>
              </div>
              <table className="ops-table">
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Zone</th>
                    <th>Health</th>
                    <th>Stops</th>
                    <th>ETA</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route) => (
                    <tr key={route[0]}>
                      {route.map((cell, index) => (
                        <td key={cell} data-label={["Route", "Zone", "Health", "Stops", "ETA"][index]}>
                          {index === 2 ? <span className={`health ${cell.toLowerCase().replace(" ", "-")}`}>{cell}</span> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="queue-grid">
            <section className="exception-panel" aria-labelledby="exceptions-title">
              <div className="panel-heading">
                <AlertTriangle size={16} aria-hidden="true" />
                <h2 id="exceptions-title">Exception queues</h2>
              </div>
              {exceptions.map(([title, route, note, severity]) => (
                <article key={title} className="exception-row">
                  <strong>{title}</strong>
                  <span>{route} · {note}</span>
                  <em>{severity}</em>
                </article>
              ))}
            </section>

            <section className="driver-panel" aria-labelledby="drivers-title">
              <div className="panel-heading">
                <Truck size={16} aria-hidden="true" />
                <h2 id="drivers-title">Driver status</h2>
              </div>
              {drivers.map(([name, status, battery, van]) => (
                <div className="driver-row" key={name}>
                  <span>
                    <strong>{name}</strong>
                    <small>{van}</small>
                  </span>
                  <span>{status}</span>
                  <em>{battery}</em>
                </div>
              ))}
            </section>
          </div>
        </section>

        <aside className="ops-inspector" aria-labelledby="inspector-title">
          <div className="panel-heading">
            <ArrowUpRight size={16} aria-hidden="true" />
            <h2 id="inspector-title">Inspector</h2>
          </div>
          <div className="inspector-focus">
            <span>Selected exception</span>
            <strong>Gate code failed · R-44</strong>
            <p>Driver is staged outside SFO cargo gate B with 19-minute dwell and two priority parts in the bay.</p>
          </div>
          <ol className="action-list">
            <li>Call receiver from verified contact</li>
            <li>Authorize alternate gate if code is stale</li>
            <li>Recalculate route if dwell exceeds 25 min</li>
          </ol>
          <div className="sla-box">
            <Clock3 size={18} aria-hidden="true" />
            <span>
              <strong>12 min</strong>
              SLA buffer remaining
            </span>
          </div>
        </aside>
      </section>
    </main>
  );
}
