import { TopNav, icons } from "../components";

const routes = [
  { id: "R-18", lane: "Downtown loop", health: "Stable", eta: "14:18", load: "82%", tone: "good" },
  { id: "R-24", lane: "West pier relay", health: "Late dock", eta: "14:43", load: "67%", tone: "warn" },
  { id: "R-31", lane: "Medical rush", health: "Escalated", eta: "14:09", load: "41%", tone: "bad" },
  { id: "R-42", lane: "Airport return", health: "Stable", eta: "15:02", load: "74%", tone: "good" }
];

const exceptions = [
  { title: "Cold chain temp breach", owner: "Mika Torres", age: "06m", severity: "Critical" },
  { title: "Gate 7 dock unavailable", owner: "Nolan Pierce", age: "18m", severity: "High" },
  { title: "Signature mismatch", owner: "Iris Vale", age: "23m", severity: "Review" },
  { title: "Driver swap requested", owner: "Theo Marr", age: "31m", severity: "Review" }
];

const drivers = [
  ["Avery Holt", "Loaded", "R-18", "2 stops"],
  ["Selene Okafor", "Returning", "R-42", "Clear"],
  ["Jon Bellamy", "Waiting", "R-24", "Dock B"],
  ["Priya Nair", "Intercept", "R-31", "Priority"]
];

export default function DashboardPage() {
  const { Gauge, SlidersHorizontal, Truck, WarningCircle, Warehouse, Clock } = icons;

  return (
    <main className="dashboard-page">
      <TopNav
        brand="Harbor Desk"
        tone="light"
        links={[
          { href: "/landing", label: "Lumen" },
          { href: "/product", label: "Meridian" },
          { href: "/suite", label: "Northstar" }
        ]}
        cta={{ href: "#exceptions", label: "Exceptions" }}
      />

      <section className="control-room">
        <div className="dashboard-title" data-reveal>
          <div>
            <p>Harbor Desk</p>
            <h1>Same-day logistics control room</h1>
          </div>
          <div className="shift-clock" aria-label="Current dispatch window">
            <Clock size={18} weight="bold" aria-hidden="true" />
            <span>14:06 Eastern</span>
          </div>
        </div>

        <div className="filter-bar" aria-label="Dashboard filters" data-reveal>
          {["All depots", "Same-day", "Exceptions first", "Capacity 80%+"].map((filter, index) => (
            <button className={index === 2 ? "is-active" : ""} type="button" key={filter}>
              {filter}
            </button>
          ))}
          <button type="button" aria-label="Open advanced filters">
            <SlidersHorizontal size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>

        <div className="ops-grid">
          <section className="route-health panel-line" aria-labelledby="route-health-title" data-reveal>
            <div className="panel-heading">
              <Gauge size={22} weight="duotone" aria-hidden="true" />
              <div>
                <h2 id="route-health-title">Route health</h2>
                <p>Live status by dispatch lane and load.</p>
              </div>
            </div>
            <div className="route-map" aria-hidden="true">
              <span className="node node-a" />
              <span className="node node-b" />
              <span className="node node-c" />
              <span className="node node-d" />
            </div>
            <div className="route-list">
              {routes.map((route) => (
                <article className={`route-row route-row--${route.tone}`} key={route.id}>
                  <b>{route.id}</b>
                  <span>{route.lane}</span>
                  <em>{route.health}</em>
                  <strong>{route.eta}</strong>
                  <small>{route.load}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="exceptions panel-line" id="exceptions" aria-labelledby="exceptions-title" data-reveal>
            <div className="panel-heading">
              <WarningCircle size={22} weight="duotone" aria-hidden="true" />
              <div>
                <h2 id="exceptions-title">Exception queue</h2>
                <p>Sorted by customer impact and age.</p>
              </div>
            </div>
            <div className="exception-list">
              {exceptions.map((item) => (
                <article key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.owner}</span>
                  </div>
                  <b>{item.age}</b>
                  <small>{item.severity}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="drivers panel-line" aria-labelledby="drivers-title" data-reveal>
            <div className="panel-heading">
              <Truck size={22} weight="duotone" aria-hidden="true" />
              <div>
                <h2 id="drivers-title">Driver status</h2>
                <p>Active fleet and route assignments.</p>
              </div>
            </div>
            <div className="driver-table">
              {drivers.map(([name, state, route, note]) => (
                <article key={name}>
                  <span className="driver-dot" aria-hidden="true" />
                  <strong>{name}</strong>
                  <span>{state}</span>
                  <b>{route}</b>
                  <small>{note}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="depot panel-line" aria-labelledby="depot-title" data-reveal>
            <div className="panel-heading">
              <Warehouse size={22} weight="duotone" aria-hidden="true" />
              <div>
                <h2 id="depot-title">Depot capacity</h2>
                <p>Inbound dock pressure by site.</p>
              </div>
            </div>
            <div className="capacity-stack">
              {[
                ["North quay", "78%"],
                ["Cedar yard", "64%"],
                ["Pier annex", "91%"]
              ].map(([name, value]) => (
                <div key={name}>
                  <span>{name}</span>
                  <meter min="0" max="100" value={Number.parseInt(value, 10)}>
                    {value}
                  </meter>
                  <b>{value}</b>
                </div>
              ))}
            </div>
          </section>

          <aside className="inspector panel-line" aria-labelledby="inspector-title" data-reveal>
            <p>Selected route</p>
            <h2 id="inspector-title">R-31 Medical rush</h2>
            <dl>
              <div>
                <dt>Customer SLA</dt>
                <dd>28m remaining</dd>
              </div>
              <div>
                <dt>Recovery move</dt>
                <dd>Intercept at Lowell Ave</dd>
              </div>
              <div>
                <dt>Next owner</dt>
                <dd>Priya Nair</dd>
              </div>
            </dl>
            <button type="button">Assign dispatcher</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
