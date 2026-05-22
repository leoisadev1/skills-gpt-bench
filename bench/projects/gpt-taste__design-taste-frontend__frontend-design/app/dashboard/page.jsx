import Link from "next/link";
import {
  ArrowRight,
  ClipboardText,
  Gauge,
  MapPin,
  SlidersHorizontal,
  Truck,
  WarningDiamond,
  Warehouse
} from "@phosphor-icons/react/ssr";

const routes = [
  { id: "R-184", corridor: "Pier 3 to Oakland", health: "On time", eta: "18:42", load: "42 stops" },
  { id: "R-209", corridor: "SoMa medical loop", health: "Watch", eta: "19:08", load: "31 stops" },
  { id: "R-226", corridor: "Sunset cold chain", health: "Blocked", eta: "19:37", load: "24 stops" },
  { id: "R-241", corridor: "Airport returns", health: "On time", eta: "20:05", load: "28 stops" }
];

const exceptions = [
  { title: "Gate code mismatch", route: "R-226", age: "11 min", severity: "High" },
  { title: "Temperature probe late", route: "R-209", age: "18 min", severity: "Medium" },
  { title: "Depot bay overbooked", route: "R-184", age: "23 min", severity: "Medium" },
  { title: "Signature hold", route: "R-241", age: "31 min", severity: "Low" }
];

const drivers = [
  ["Iris Nwosu", "Available", "Bay 6", "4.8 mi"],
  ["Marco Vale", "Loading", "Dock C", "0.6 mi"],
  ["Talia Bren", "Delayed", "Mission", "9.2 mi"],
  ["Oren Pike", "Break", "Depot east", "0.0 mi"]
];

export default function DashboardPage() {
  return (
    <main className="harbor-page overflow-guard">
      <header className="harbor-bar" data-reveal>
        <Link href="/" className="harbor-brand" aria-label="Go to benchmark index">
          <Gauge size={24} weight="duotone" aria-hidden="true" />
          <span>Harbor Desk</span>
        </Link>
        <div className="harbor-actions" aria-label="Dashboard filters">
          <button type="button">
            <SlidersHorizontal size={16} weight="bold" aria-hidden="true" />
            Live filters
          </button>
          <button type="button">Depot west</button>
          <button type="button">Next 4 hours</button>
        </div>
      </header>

      <section className="control-grid" aria-label="Same-day logistics control room">
        <div className="route-health panel" data-reveal>
          <div className="panel-title">
            <Truck size={20} weight="duotone" aria-hidden="true" />
            <h1>Route health</h1>
          </div>
          <div className="health-table" role="table" aria-label="Route health table">
            <div className="health-row health-head" role="row">
              <span>Route</span>
              <span>Corridor</span>
              <span>Status</span>
              <span>ETA</span>
              <span>Load</span>
            </div>
            {routes.map((route) => (
              <div className="health-row" role="row" key={route.id}>
                <strong>{route.id}</strong>
                <span>{route.corridor}</span>
                <span className={`status ${route.health.toLowerCase().replace(" ", "-")}`}>{route.health}</span>
                <span>{route.eta}</span>
                <span>{route.load}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="inspector panel" data-reveal aria-label="Route inspector">
          <div className="panel-title">
            <ClipboardText size={20} weight="duotone" aria-hidden="true" />
            <h2>Inspector</h2>
          </div>
          <p className="inspector-route">R-226 Sunset cold chain</p>
          <dl>
            <div>
              <dt>Exception owner</dt>
              <dd>Cold ops lead</dd>
            </div>
            <div>
              <dt>Risk window</dt>
              <dd>22 minutes</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>Move freezer totes to Bay 2 before reassignment.</dd>
            </div>
          </dl>
          <button type="button" className="button button-dark">
            Dispatch override
            <ArrowRight size={17} weight="bold" aria-hidden="true" />
          </button>
        </aside>

        <section className="exception-queue panel" data-reveal>
          <div className="panel-title">
            <WarningDiamond size={20} weight="duotone" aria-hidden="true" />
            <h2>Exception queue</h2>
          </div>
          <div className="exception-list">
            {exceptions.map((item) => (
              <article key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.route} - age {item.age}</span>
                </div>
                <span className={`severity ${item.severity.toLowerCase()}`}>{item.severity}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="driver-status panel" data-reveal>
          <div className="panel-title">
            <MapPin size={20} weight="duotone" aria-hidden="true" />
            <h2>Driver status</h2>
          </div>
          <div className="driver-grid">
            {drivers.map(([name, state, place, distance]) => (
              <article key={name}>
                <span className={`driver-dot ${state.toLowerCase()}`} />
                <strong>{name}</strong>
                <span>{state}</span>
                <small>{place} - {distance}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="capacity panel" data-reveal>
          <div className="panel-title">
            <Warehouse size={20} weight="duotone" aria-hidden="true" />
            <h2>Depot capacity</h2>
          </div>
          <div className="capacity-bars" aria-label="Depot capacity bars">
            {[
              ["Cold bay", "84%"],
              ["Cross dock", "62%"],
              ["Returns", "47%"],
              ["Charge stalls", "71%"]
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <i style={{ "--fill": value }} />
              </div>
            ))}
          </div>
        </section>

        <section className="state-row" aria-label="Operational states">
          <article className="state-card loading-state" data-reveal>
            <strong>Loading telemetry</strong>
            <span className="skeleton-line" />
            <span className="skeleton-line short" />
          </article>
          <article className="state-card empty-state" data-reveal>
            <strong>No unassigned drivers</strong>
            <p>Every available driver is already attached to a route or a depot task.</p>
          </article>
          <article className="state-card error-state" data-reveal>
            <strong>Scanner feed delayed</strong>
            <p>Last handheld sync was 7 minutes ago. Manual bay check is recommended.</p>
          </article>
        </section>
      </section>
    </main>
  );
}
