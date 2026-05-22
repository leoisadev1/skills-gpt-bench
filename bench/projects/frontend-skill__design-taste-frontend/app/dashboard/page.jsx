import {
  ArrowDown,
  ArrowUp,
  Funnel,
  MapTrifold,
  RadioButton,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

const routeHealth = [
  ["North pier", "91.4%", "7 late scans", "steady"],
  ["Riverside", "82.8%", "dock queue building", "watch"],
  ["Airport loop", "76.3%", "weather reroute", "risk"],
  ["West freight", "94.9%", "capacity open", "clear"],
];

const exceptions = [
  ["HD-4921", "Driver held at gate", "Airport loop", "12 min", "Marta Velic"],
  ["HD-4938", "Refrigerated bay full", "Riverside", "18 min", "Oren Pathak"],
  ["HD-4944", "Missing recipient PIN", "North pier", "21 min", "Nia Calder"],
  ["HD-4952", "Depot scan mismatch", "West freight", "9 min", "Tobin Kells"],
];

const drivers = [
  ["Ari Vale", "16 stops", "On route", "clear"],
  ["Marta Velic", "11 stops", "Gate hold", "risk"],
  ["Cian Rowe", "23 stops", "Loading", "watch"],
  ["Nia Calder", "14 stops", "Customer call", "watch"],
  ["Tobin Kells", "8 stops", "Returning", "clear"],
];

export default function DashboardPage() {
  return (
    <main className="harbor-page">
      <header className="harbor-topbar">
        <div>
          <p className="eyebrow">Harbor Desk</p>
          <h1>Same-day logistics control room</h1>
        </div>
        <form className="filter-strip" aria-label="Dashboard filters">
          <label>
            Region
            <select defaultValue="central">
              <option value="central">Central yards</option>
              <option value="coastal">Coastal route</option>
              <option value="north">North depots</option>
            </select>
          </label>
          <label>
            Window
            <select defaultValue="today">
              <option value="today">Today</option>
              <option value="next">Next 6 hours</option>
              <option value="night">Night shift</option>
            </select>
          </label>
          <button type="button">
            <Funnel size={16} aria-hidden="true" /> Apply
          </button>
        </form>
      </header>

      <section className="harbor-grid" aria-label="Harbor Desk working surface">
        <section className="ops-panel route-health" aria-labelledby="route-health">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Route health</p>
              <h2 id="route-health">Live lanes</h2>
            </div>
            <span className="live-pill">
              <RadioButton size={14} weight="fill" aria-hidden="true" /> 42 active
            </span>
          </div>
          <div className="route-list">
            {routeHealth.map(([name, value, detail, tone]) => (
              <article className="route-row" data-tone={tone} key={name}>
                <div>
                  <strong>{name}</strong>
                  <span>{detail}</span>
                </div>
                <meter min="0" max="100" value={Number.parseFloat(value)}>
                  {value}
                </meter>
                <b>{value}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="ops-panel exception-panel" aria-labelledby="exceptions">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Exception queues</p>
              <h2 id="exceptions">Needs dispatch review</h2>
            </div>
            <span className="trend down">
              <ArrowDown size={14} aria-hidden="true" /> 6.8%
            </span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Case</th>
                  <th>Issue</th>
                  <th>Lane</th>
                  <th>Age</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {exceptions.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="ops-panel inspector" aria-labelledby="inspector-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Inspector</p>
              <h2 id="inspector-title">HD-4938</h2>
            </div>
            <Warning size={22} weight="duotone" aria-hidden="true" />
          </div>
          <dl className="detail-list">
            <div>
              <dt>Exception</dt>
              <dd>Refrigerated bay full at Riverside Depot B.</dd>
            </div>
            <div>
              <dt>Dispatch action</dt>
              <dd>Shift two grocery pallets to bay 4 and release driver C-18.</dd>
            </div>
            <div>
              <dt>Risk</dt>
              <dd>Frozen goods SLA breach in 31 minutes.</dd>
            </div>
          </dl>
          <div className="inline-error" role="status">
            Bay 4 sensor has not confirmed temperature recovery.
          </div>
          <button className="primary-action compact" type="button">
            Assign dock runner
          </button>
        </aside>

        <section className="ops-panel capacity-panel" aria-labelledby="capacity">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Depot capacity</p>
              <h2 id="capacity">Loading bays</h2>
            </div>
            <span className="trend up">
              <ArrowUp size={14} aria-hidden="true" /> 3 bays freed
            </span>
          </div>
          <div className="capacity-bars">
            {[
              ["A", 68],
              ["B", 94],
              ["C", 41],
              ["D", 73],
            ].map(([name, value]) => (
              <div className="capacity-bar" key={name}>
                <span>Depot {name}</span>
                <div><i style={{ width: `${value}%` }} /></div>
                <b>{value}%</b>
              </div>
            ))}
          </div>
          <div className="empty-state">
            <MapTrifold size={24} weight="duotone" aria-hidden="true" />
            No unassigned overflow routes in Central yards.
          </div>
        </section>

        <section className="ops-panel driver-panel" aria-labelledby="drivers">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Driver status</p>
              <h2 id="drivers">Field movement</h2>
            </div>
          </div>
          <div className="driver-list">
            {drivers.map(([name, stops, status, tone]) => (
              <article className="driver-row" data-tone={tone} key={name}>
                <span aria-hidden="true">{name.split(" ").map((part) => part[0]).join("")}</span>
                <div>
                  <strong>{name}</strong>
                  <small>{stops}</small>
                </div>
                <em>{status}</em>
              </article>
            ))}
          </div>
          <div className="skeleton-zone" aria-label="Loading replacement driver recommendations">
            <i />
            <i />
            <i />
          </div>
        </section>
      </section>
    </main>
  );
}
