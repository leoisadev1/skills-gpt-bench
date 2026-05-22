import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Clock3,
  Filter,
  Gauge,
  MapPinned,
  RadioTower,
  Search,
  Truck,
} from "lucide-react";

const metrics = [
  { label: "Routes healthy", value: "42 / 48", note: "+6 since noon", icon: Gauge },
  { label: "Open exceptions", value: "17", note: "5 severe", icon: AlertTriangle },
  { label: "Drivers active", value: "64", note: "8 flex standby", icon: Truck },
  { label: "Depot utilization", value: "73%", note: "2 bays near cap", icon: Boxes },
];

const routeHealth = [
  { route: "H-14", zone: "North loop", eta: "18 min", score: 94, state: "clear" },
  { route: "K-22", zone: "Canal", eta: "42 min", score: 71, state: "watch" },
  { route: "M-08", zone: "East pier", eta: "64 min", score: 58, state: "risk" },
  { route: "R-31", zone: "Market", eta: "26 min", score: 88, state: "clear" },
];

const exceptions = [
  { title: "Dock B scan gap", detail: "3 parcels moved without outbound proof", age: "11m", level: "high" },
  { title: "Driver swap pending", detail: "Route M-08 needs temperature-certified backup", age: "18m", level: "high" },
  { title: "Depot 4 overflow", detail: "Frozen bay projected at 92 percent by 16:10", age: "24m", level: "med" },
  { title: "Customer gate hold", detail: "Access code rejected twice on R-31", age: "31m", level: "low" },
];

const drivers = [
  ["A. Imani", "H-14", "9 stops", "On pace", "clear"],
  ["J. Vale", "K-22", "14 stops", "Reroute", "watch"],
  ["M. Rios", "M-08", "12 stops", "Needs swap", "risk"],
  ["S. Chen", "R-31", "6 stops", "On pace", "clear"],
  ["T. Okafor", "B-19", "17 stops", "Loading", "watch"],
];

const depots = [
  { name: "Depot 1", value: 64, label: "Ambient" },
  { name: "Depot 2", value: 78, label: "Cross-dock" },
  { name: "Depot 4", value: 92, label: "Frozen" },
  { name: "Depot 7", value: 53, label: "Returns" },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <header className="ops-header">
        <div>
          <Link className="ops-back" href="/">
            Benchmark routes
          </Link>
          <h1>Harbor Desk control room</h1>
          <p>Same-day logistics pulse for dispatch, exceptions, depot load, and route recovery.</p>
        </div>
        <div className="ops-clock" aria-label="Current operations snapshot">
          <Clock3 size={18} aria-hidden="true" />
          <span>14:36 local</span>
          <strong>Live window</strong>
        </div>
      </header>

      <section className="ops-toolbar" aria-label="Dashboard filters">
        <label className="search-box">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search routes, drivers, or depots</span>
          <input placeholder="Search routes, drivers, depots" />
        </label>
        <div className="filter-row">
          {["All zones", "Risk first", "Cold chain", "Depot capacity"].map((filter) => (
            <button className="filter-chip" type="button" key={filter}>
              <Filter size={14} aria-hidden="true" />
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="ops-metrics" aria-label="Harbor Desk key metrics">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
          <article className="ops-metric" key={metric.label}>
            <Icon size={20} aria-hidden="true" />
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
          );
        })}
      </section>

      <section className="ops-grid" aria-label="Harbor Desk working surface">
        <article className="route-board panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Route health</p>
              <h2>Priority lanes</h2>
            </div>
            <MapPinned size={20} aria-hidden="true" />
          </div>
          <div className="route-list">
            {routeHealth.map((route) => (
              <div className="route-row" key={route.route}>
                <strong>{route.route}</strong>
                <span>{route.zone}</span>
                <span>{route.eta}</span>
                <div className="score-track" aria-label={`${route.route} health ${route.score} percent`}>
                  <i style={{ width: `${route.score}%` }} data-state={route.state} />
                </div>
                <b data-state={route.state}>{route.score}</b>
              </div>
            ))}
          </div>
        </article>

        <article className="map-panel panel" aria-label="Stylized route map">
          <div className="route-map">
            <span className="map-node node-a" />
            <span className="map-node node-b" />
            <span className="map-node node-c" />
            <span className="map-node node-d" />
            <span className="map-line line-a" />
            <span className="map-line line-b" />
            <span className="map-line line-c" />
            <div className="map-alert">
              <RadioTower size={16} aria-hidden="true" />
              M-08 recovery corridor
            </div>
          </div>
        </article>

        <article className="exceptions panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Exception queue</p>
              <h2>Needs dispatch action</h2>
            </div>
            <AlertTriangle size={20} aria-hidden="true" />
          </div>
          <div className="exception-list">
            {exceptions.map((item) => (
              <div className="exception-item" key={item.title} data-level={item.level}>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
                <span>{item.age} old</span>
              </div>
            ))}
          </div>
        </article>

        <article className="drivers panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Driver status</p>
              <h2>Active roster</h2>
            </div>
            <Truck size={20} aria-hidden="true" />
          </div>
          <div className="driver-table" role="table" aria-label="Driver status table">
            {drivers.map((driver) => (
              <div className="driver-row" role="row" key={driver[0]}>
                <span role="cell">{driver[0]}</span>
                <b role="cell">{driver[1]}</b>
                <span role="cell">{driver[2]}</span>
                <em role="cell" data-state={driver[4]}>
                  {driver[3]}
                </em>
              </div>
            ))}
          </div>
        </article>

        <article className="capacity panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Depot capacity</p>
              <h2>Bay pressure</h2>
            </div>
            <Boxes size={20} aria-hidden="true" />
          </div>
          <div className="depot-bars">
            {depots.map((depot) => (
              <div className="depot-row" key={depot.name}>
                <span>{depot.name}</span>
                <div className="depot-track" aria-label={`${depot.name} ${depot.value} percent full`}>
                  <i style={{ width: `${depot.value}%` }} />
                </div>
                <b>{depot.value}%</b>
                <small>{depot.label}</small>
              </div>
            ))}
          </div>
        </article>

        <aside className="inspector panel" aria-labelledby="inspector-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Inspector</p>
              <h2 id="inspector-title">Route M-08</h2>
            </div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </div>
          <div className="inspector-alert">
            <AlertTriangle size={18} aria-hidden="true" />
            Cold-chain backup needed within 22 minutes.
          </div>
          <dl className="inspector-facts">
            <div>
              <dt>Current driver</dt>
              <dd>M. Rios</dd>
            </div>
            <div>
              <dt>Critical stops</dt>
              <dd>4 medical, 2 grocery</dd>
            </div>
            <div>
              <dt>Recovery move</dt>
              <dd>Swap at Depot 4, merge into K-22 tail</dd>
            </div>
          </dl>
          <button className="button button-primary ops-button" type="button">
            Dispatch recovery plan
          </button>
          <div className="checklist">
            {["Driver confirmed", "Temp logger pending", "Customer ETA draft ready"].map((item, index) => (
              <span key={item}>
                <CheckCircle2 size={15} aria-hidden="true" data-muted={index === 1} />
                {item}
              </span>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
