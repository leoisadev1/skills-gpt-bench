import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpDown,
  CheckCircle2,
  Clock3,
  Filter,
  MapPinned,
  RadioTower,
  Truck,
} from "lucide-react";

const routes = [
  ["Northline 08", "On time", "92%", "good"],
  ["Bay Loop 14", "Weather hold", "61%", "risk"],
  ["Midtown 21", "Loading", "74%", "watch"],
  ["South Pier 05", "Delayed", "43%", "bad"],
];

const exceptions = [
  ["HX-4418", "Cold chain variance", "Bay Loop 14", "8 min", "Escalate"],
  ["HX-4472", "No dock confirmation", "South Pier 05", "14 min", "Call depot"],
  ["HX-4501", "Driver break conflict", "Midtown 21", "22 min", "Reassign"],
  ["HX-4528", "Gate code missing", "Northline 08", "3 min", "Message"],
];

const drivers = [
  ["Maya R.", "Active", "7 stops", "ETA 12:44"],
  ["Jon Bell", "Break", "4 stops", "Return 13:10"],
  ["Priya S.", "Active", "9 stops", "ETA 13:02"],
  ["Noah K.", "Standby", "0 stops", "Ready"],
];

const depots = [
  ["Pier 3", 86, "Near cap"],
  ["West Yard", 54, "Stable"],
  ["Market Hub", 72, "Watch"],
];

export default function DashboardPage() {
  return (
    <main id="content" className="dashboard-page">
      <header className="dash-topbar">
        <div>
          <Link href="/" className="back-link">
            Benchmark index
          </Link>
          <h1>Harbor Desk</h1>
          <p>Same-day logistics control room</p>
        </div>
        <div className="dash-actions" aria-label="Dashboard filters">
          <button type="button">
            <Filter size={16} aria-hidden="true" /> Today
          </button>
          <button type="button">
            <ArrowUpDown size={16} aria-hidden="true" /> Priority
          </button>
          <button type="button">
            <RadioTower size={16} aria-hidden="true" /> Live
          </button>
        </div>
      </header>

      <section className="kpi-strip" aria-label="Route health summary">
        <div>
          <span>Route health</span>
          <strong>81%</strong>
        </div>
        <div>
          <span>Open exceptions</span>
          <strong>18</strong>
        </div>
        <div>
          <span>Drivers active</span>
          <strong>42</strong>
        </div>
        <div>
          <span>Depot capacity</span>
          <strong>71%</strong>
        </div>
      </section>

      <div className="dash-grid">
        <aside className="dash-panel route-health" aria-labelledby="route-health-title">
          <div className="panel-title">
            <h2 id="route-health-title">Route health</h2>
            <span>Live</span>
          </div>
          <ul className="route-health-list">
            {routes.map(([name, status, value, tone]) => (
              <li key={name}>
                <div>
                  <strong>{name}</strong>
                  <span>{status}</span>
                </div>
                <meter className={tone} min="0" max="100" value={parseInt(value, 10)}>
                  {value}
                </meter>
                <b>{value}</b>
              </li>
            ))}
          </ul>
        </aside>

        <section className="dash-panel route-map" aria-labelledby="route-map-title">
          <div className="panel-title">
            <h2 id="route-map-title">City route board</h2>
            <span>13:28 sync</span>
          </div>
          <div className="map-canvas" aria-label="Route map visualization">
            <span className="map-node pier">Pier 3</span>
            <span className="map-node market">Market Hub</span>
            <span className="map-node yard">West Yard</span>
            <span className="route-line line-a" />
            <span className="route-line line-b" />
            <span className="route-line line-c" />
            <span className="truck-dot moving">
              <Truck size={15} aria-hidden="true" />
            </span>
          </div>
        </section>

        <section className="dash-panel exception-panel" aria-labelledby="exception-title">
          <div className="panel-title">
            <h2 id="exception-title">Exception queue</h2>
            <span>Oldest 22 min</span>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Case</th>
                  <th scope="col">Issue</th>
                  <th scope="col">Route</th>
                  <th scope="col">Age</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {exceptions.map(([id, issue, route, age, action]) => (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{issue}</td>
                    <td>{route}</td>
                    <td>{age}</td>
                    <td>
                      <button type="button" className="table-action">
                        {action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="dash-panel driver-panel" aria-labelledby="driver-title">
          <div className="panel-title">
            <h2 id="driver-title">Driver status</h2>
            <span>4 shown</span>
          </div>
          <ul className="driver-list">
            {drivers.map(([name, status, stops, eta]) => (
              <li key={name}>
                <span className={`status-dot ${status.toLowerCase()}`} />
                <div>
                  <strong>{name}</strong>
                  <small>{stops} · {eta}</small>
                </div>
                <b>{status}</b>
              </li>
            ))}
          </ul>
        </aside>

        <section className="dash-panel depot-panel" aria-labelledby="depot-title">
          <div className="panel-title">
            <h2 id="depot-title">Depot capacity</h2>
            <span>3 depots</span>
          </div>
          {depots.map(([name, value, label]) => (
            <div className="capacity-row" key={name}>
              <div>
                <strong>{name}</strong>
                <span>{label}</span>
              </div>
              <meter min="0" max="100" value={value}>
                {value}%
              </meter>
              <b>{value}%</b>
            </div>
          ))}
        </section>

        <aside className="dash-panel inspector" aria-labelledby="inspector-title">
          <div className="panel-title">
            <h2 id="inspector-title">Inspector</h2>
            <span>HX-4418</span>
          </div>
          <div className="inspector-alert">
            <AlertTriangle size={18} aria-hidden="true" />
            <strong>Cold chain variance</strong>
            <p>Bay Loop 14 reported 42°F for six minutes. Cargo threshold is 39°F.</p>
          </div>
          <dl className="detail-list">
            <div>
              <dt>Owner</dt>
              <dd>Ops lead: Lena Ortiz</dd>
            </div>
            <div>
              <dt>Next step</dt>
              <dd>Move to refrigerated hold at Pier 3</dd>
            </div>
            <div>
              <dt>Signal</dt>
              <dd>
                <Clock3 size={15} aria-hidden="true" /> Sensor refreshed 90s ago
              </dd>
            </div>
          </dl>
          <button type="button" className="button dashboard-button">
            <CheckCircle2 size={17} aria-hidden="true" /> Resolve with note
          </button>
        </aside>
      </div>
    </main>
  );
}
