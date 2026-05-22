import { SiteNav } from "../../components/SiteNav";
import { benchmarkPrompts } from "../../lib/prompts";

const routeHealth = [
  { lane: "North pier loop", status: "Clear", eta: "94%", load: "18 stops" },
  { lane: "Airport medical", status: "Watch", eta: "76%", load: "9 stops" },
  { lane: "Crosstown retail", status: "Delay", eta: "61%", load: "26 stops" },
  { lane: "South labs", status: "Clear", eta: "98%", load: "7 stops" },
];

const exceptions = [
  { id: "HX-1184", issue: "Cold chain sensor drift", owner: "Maya", age: "12m", severity: "High" },
  { id: "HX-1178", issue: "Recipient gate locked", owner: "Ishan", age: "21m", severity: "Medium" },
  { id: "HX-1169", issue: "Driver break conflict", owner: "Noor", age: "34m", severity: "Medium" },
  { id: "HX-1162", issue: "Depot bay overflow", owner: "Rae", age: "49m", severity: "Low" },
];

const drivers = [
  { name: "Elena W.", state: "On route", route: "HP-42", stops: "6 left" },
  { name: "Marcus L.", state: "Loading", route: "CD-19", stops: "14 left" },
  { name: "Tariq N.", state: "Break soon", route: "AM-07", stops: "3 left" },
  { name: "June P.", state: "Exception", route: "CR-31", stops: "11 left" },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-page overflow-guard">
      <SiteNav brand="Harbor Desk" tone="light" cta={{ href: "/landing", label: "Control view" }} />

      <section className="dashboard-shell" aria-label="Harbor Desk same-day logistics control room">
        <div className="dashboard-topbar">
          <div>
            <h1>Harbor Desk</h1>
            <p>{benchmarkPrompts.dashboard}</p>
          </div>
          <form className="filter-bar" aria-label="Dashboard filters">
            <label>
              Region
              <select defaultValue="metro">
                <option value="metro">Metro core</option>
                <option value="airport">Airport</option>
                <option value="south">South labs</option>
              </select>
            </label>
            <label>
              SLA
              <select defaultValue="today">
                <option value="today">Due today</option>
                <option value="risk">At risk</option>
                <option value="all">All lanes</option>
              </select>
            </label>
            <button type="button">Refresh board</button>
          </form>
        </div>

        <div className="dashboard-grid">
          <section className="panel route-map-panel" aria-labelledby="route-health-heading">
            <div className="panel-heading">
              <h2 id="route-health-heading">Route health</h2>
              <span>Live dispatch window</span>
            </div>
            <div className="route-map" data-gsap-image aria-hidden="true">
              <span className="route-node route-node--a" />
              <span className="route-node route-node--b" />
              <span className="route-node route-node--c" />
              <span className="route-node route-node--d" />
              <span className="route-line route-line--one" />
              <span className="route-line route-line--two" />
              <span className="route-line route-line--three" />
            </div>
            <div className="route-health-list">
              {routeHealth.map((route) => (
                <article key={route.lane} className={`health-card health-card--${route.status.toLowerCase()}`}>
                  <span>{route.lane}</span>
                  <strong>{route.eta}</strong>
                  <small>{route.status} / {route.load}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="panel exception-panel" aria-labelledby="exceptions-heading">
            <div className="panel-heading">
              <h2 id="exceptions-heading">Exception queue</h2>
              <span>4 active</span>
            </div>
            <div className="exception-list">
              {exceptions.map((item) => (
                <article key={item.id} className="exception-row group-card">
                  <strong>{item.id}</strong>
                  <span>{item.issue}</span>
                  <small>{item.owner} / {item.age} / {item.severity}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="panel driver-panel" aria-labelledby="drivers-heading">
            <div className="panel-heading">
              <h2 id="drivers-heading">Driver status</h2>
              <span>32 active drivers</span>
            </div>
            {drivers.map((driver) => (
              <article key={driver.name} className="driver-row">
                <span className="driver-avatar" aria-hidden="true">{driver.name.slice(0, 1)}</span>
                <div>
                  <strong>{driver.name}</strong>
                  <small>{driver.route} / {driver.stops}</small>
                </div>
                <span>{driver.state}</span>
              </article>
            ))}
          </section>

          <section className="panel depot-panel" aria-labelledby="depot-heading">
            <div className="panel-heading">
              <h2 id="depot-heading">Depot capacity</h2>
              <span>Bay pressure</span>
            </div>
            {[
              ["Cold storage", "68%"],
              ["Outbound docks", "91%"],
              ["Bike rack", "54%"],
            ].map(([label, value]) => (
              <div className="capacity-row" key={label}>
                <span>{label}</span>
                <div className="capacity-meter" aria-label={`${label} at ${value}`}>
                  <span style={{ width: value }} />
                </div>
                <strong>{value}</strong>
              </div>
            ))}
          </section>

          <aside className="panel inspector-panel" aria-labelledby="inspector-heading">
            <div className="panel-heading">
              <h2 id="inspector-heading">Inspector</h2>
              <span>HX-1184</span>
            </div>
            <div className="inspector-photo" data-gsap-image aria-hidden="true" />
            <h3>Cold chain sensor drift on Airport medical</h3>
            <p>
              Driver Elena W. has a 12 minute window before the clinic SLA is at risk. Suggested action:
              reroute South labs spare cooler through Depot C and notify recipient.
            </p>
            <dl className="inspector-facts">
              <div><dt>Owner</dt><dd>Maya Chen</dd></div>
              <div><dt>Required by</dt><dd>14:20</dd></div>
              <div><dt>Recovery time</dt><dd>18 min</dd></div>
            </dl>
            <button type="button">Assign recovery route</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
