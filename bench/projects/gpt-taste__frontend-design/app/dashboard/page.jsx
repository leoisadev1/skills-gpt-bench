import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Filter,
  MapPinned,
  PackageOpen,
  Radio,
  Search,
  Truck,
} from "lucide-react";
import { ProgressBar } from "../components/shared";

const routes = [
  { id: "R-18", zone: "East pier", status: "At risk", load: "42 drops", eta: "+18m", tone: "amber" },
  { id: "R-24", zone: "Medical loop", status: "Healthy", load: "31 drops", eta: "-4m", tone: "green" },
  { id: "R-31", zone: "West crossdock", status: "Blocked", load: "27 drops", eta: "+41m", tone: "red" },
  { id: "R-44", zone: "University", status: "Healthy", load: "38 drops", eta: "+2m", tone: "green" },
];

const exceptions = [
  ["Dock appointment missed", "R-31", "Call depot, re-slot before 15:10", "12 min"],
  ["Cold chain scan gap", "R-18", "Driver uploaded photo; needs supervisor signoff", "18 min"],
  ["Recipient unavailable", "R-44", "Offer lobby handoff or second attempt", "22 min"],
  ["Capacity breach forecast", "North depot", "Move 16 parcels to overflow bay", "31 min"],
];

const drivers = [
  ["Mara V.", "On route", "92%", "green"],
  ["Dean R.", "At depot", "68%", "amber"],
  ["Jules A.", "Break", "54%", "amber"],
  ["Noor K.", "Delayed", "35%", "red"],
];

export default function DashboardPage() {
  return (
    <main className="main-shell harbor-page">
      <header className="ops-topbar">
        <div>
          <span>Harbor Desk</span>
          <strong>Same-day logistics control room</strong>
        </div>
        <form className="ops-search" role="search">
          <Search size={17} aria-hidden="true" />
          <label className="sr-only" htmlFor="ops-search">
            Search routes, drivers, or exceptions
          </label>
          <input id="ops-search" placeholder="Search route, driver, exception" />
        </form>
        <div className="ops-actions" aria-label="Dashboard filters">
          <button type="button">
            <Filter size={16} aria-hidden="true" />
            Live filters
          </button>
          <button type="button">NYC metro</button>
          <button type="button">Next 90 min</button>
        </div>
      </header>

      <section className="ops-grid" aria-label="Harbor Desk operational dashboard">
        <aside className="ops-sidebar" aria-label="Control room navigation">
          {[
            ["Routes", MapPinned],
            ["Exceptions", AlertTriangle],
            ["Drivers", Truck],
            ["Depots", PackageOpen],
            ["Radio", Radio],
          ].map(([label, Icon], index) => (
            <button aria-pressed={index === 0} key={label} type="button">
              <Icon size={18} aria-hidden="true" />
              {label}
            </button>
          ))}
        </aside>

        <section className="route-health panel gsap-reveal">
          <div className="panel-heading">
            <div>
              <span>Route health</span>
              <h1>74 active routes</h1>
            </div>
            <strong>11 need action</strong>
          </div>
          <div className="health-board">
            {routes.map((route) => (
              <article className={`route-card route-card--${route.tone}`} key={route.id}>
                <div>
                  <strong>{route.id}</strong>
                  <span>{route.status}</span>
                </div>
                <p>{route.zone}</p>
                <footer>
                  <span>{route.load}</span>
                  <b>{route.eta}</b>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="exception-panel panel gsap-reveal">
          <div className="panel-heading">
            <div>
              <span>Exception queue</span>
              <h2>Priority triage</h2>
            </div>
            <AlertTriangle size={22} aria-hidden="true" />
          </div>
          <div className="exception-list">
            {exceptions.map(([title, route, action, age], index) => (
              <article className={index === 0 ? "is-selected" : ""} key={title}>
                <Clock3 size={17} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <p>{action}</p>
                </div>
                <span>{route}</span>
                <b>{age}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="map-panel panel media-zoom" aria-label="Route map preview">
          <div className="map-grid" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="map-route map-route--one" />
          <div className="map-route map-route--two" />
          <div className="map-pin map-pin--a">R-18</div>
          <div className="map-pin map-pin--b">R-31</div>
          <div className="map-pin map-pin--c">D-4</div>
          <div className="map-summary">
            <strong>Route R-31 blocked near West crossdock</strong>
            <p>Suggested recovery: split 9 urgent parcels to R-24 and re-slot dock appointment.</p>
          </div>
        </section>

        <section className="driver-panel panel gsap-reveal">
          <div className="panel-heading">
            <div>
              <span>Driver status</span>
              <h2>Live roster</h2>
            </div>
            <CheckCircle2 size={22} aria-hidden="true" />
          </div>
          {drivers.map(([name, status, value, tone]) => (
            <article className="driver-row" key={name}>
              <div>
                <strong>{name}</strong>
                <span>{status}</span>
              </div>
              <ProgressBar tone={tone} value={Number.parseInt(value, 10)} />
              <b>{value}</b>
            </article>
          ))}
        </section>

        <section className="capacity-panel panel gsap-reveal">
          <div className="panel-heading">
            <div>
              <span>Depot capacity</span>
              <h2>Next load wave</h2>
            </div>
            <PackageOpen size={22} aria-hidden="true" />
          </div>
          {[
            ["North depot", 86, "amber"],
            ["Pier 7 microhub", 62, "green"],
            ["West crossdock", 94, "red"],
          ].map(([name, value, tone]) => (
            <div className="capacity-row" key={name}>
              <span>{name}</span>
              <ProgressBar tone={tone} value={value} />
              <strong>{value}%</strong>
            </div>
          ))}
        </section>

        <aside className="inspector-panel panel gsap-reveal" aria-label="Selected exception inspector">
          <div className="panel-heading">
            <div>
              <span>Inspector</span>
              <h2>Dock appointment missed</h2>
            </div>
            <ArrowUpRight size={22} aria-hidden="true" />
          </div>
          <dl>
            <div>
              <dt>Owner</dt>
              <dd>Dispatch lead</dd>
            </div>
            <div>
              <dt>Route</dt>
              <dd>R-31 West crossdock</dd>
            </div>
            <div>
              <dt>Impact</dt>
              <dd>16 urgent parcels, 3 service-level risks</dd>
            </div>
            <div>
              <dt>Recommendation</dt>
              <dd>Split urgent medical drops to R-24, hold bulk parcels for 15:40 dock slot.</dd>
            </div>
          </dl>
          <div className="inspector-actions">
            <button type="button">Assign recovery</button>
            <button type="button">Open route</button>
          </div>
        </aside>
      </section>
    </main>
  );
}
