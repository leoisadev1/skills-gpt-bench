import Link from "next/link";
import { ArrowRight, RadioTower, Search, SlidersHorizontal, Truck } from "lucide-react";

const exceptions = [
  ["Pierside pickup waiting on customs stamp", "Route H-14", "high"],
  ["Driver swap needed before cold-chain handoff", "Route C-03", "med"],
  ["Depot B south bay at receiving limit", "Depot B", "med"],
  ["Customer hold released, re-slot before 16:30", "Route E-22", "low"],
];

const drivers = [
  ["Mara N.", "On route - 14 stops left", "92%"],
  ["Eli K.", "Depot transfer - ready", "100%"],
  ["Jules R.", "Exception review", "68%"],
  ["Ren S.", "Break window in 21 min", "81%"],
];

const depots = [
  ["North", "72%", "72%"],
  ["B South", "91%", "91%"],
  ["Pierside", "64%", "64%"],
  ["Airport", "48%", "48%"],
];

export default function DashboardPage() {
  return (
    <main className="dashboard-page overflow-safe">
      <div className="ops-shell">
        <aside className="ops-sidebar" aria-label="Harbor Desk navigation">
          <Link href="/dashboard" className="ops-brand">
            <span className="ops-mark">H</span>
            <span>Harbor Desk</span>
          </Link>
          <nav className="ops-nav" aria-label="Dashboard sections">
            <span>Control room</span>
            <a href="#routes">Routes</a>
            <a href="#exceptions">Exceptions</a>
            <a href="#capacity">Capacity</a>
          </nav>
        </aside>

        <section className="ops-main">
          <header className="ops-topbar">
            <div className="ops-title">
              <h1>Same-day control room</h1>
              <p>Live route health, driver status, depot load, and exception ownership for the next six hours.</p>
            </div>
            <div className="filter-row" aria-label="Operational filters">
              <button type="button">
                <Search size={15} aria-hidden="true" /> Search
              </button>
              <button type="button">North zone</button>
              <button type="button">Cold chain</button>
              <button type="button">
                <SlidersHorizontal size={15} aria-hidden="true" /> Filters
              </button>
              <Link href="/" className="dark-button">
                Routes <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </header>

          <div className="ops-grid">
            <div className="ops-column">
              <section id="routes" className="ops-panel" aria-labelledby="route-health-title">
                <div className="panel-head">
                  <div>
                    <h2 id="route-health-title">Route health</h2>
                    <p>36 active routes, 8 at risk, 2 need dispatch intervention.</p>
                  </div>
                  <span className="status-pill">
                    <RadioTower size={14} aria-hidden="true" /> live
                  </span>
                </div>
                <div className="route-map" aria-label="Route health map">
                  <svg viewBox="0 0 800 310" role="img" aria-label="Three route bands crossing the harbor service area">
                    <path d="M40 226 C190 88 282 94 420 168 S610 272 758 92" fill="none" stroke="#1d6f89" strokeWidth="16" strokeLinecap="round" opacity="0.84" />
                    <path d="M72 78 C244 116 268 238 438 226 S628 92 736 174" fill="none" stroke="#b26b36" strokeWidth="10" strokeLinecap="round" opacity="0.72" />
                    <path d="M88 262 C258 210 372 42 508 92 S640 218 756 250" fill="none" stroke="#203d36" strokeWidth="8" strokeLinecap="round" opacity="0.64" />
                  </svg>
                  <span className="route-node node-a">North 94</span>
                  <span className="route-node node-b">Pier 71</span>
                  <span className="route-node node-c">Hold 12</span>
                </div>
              </section>

              <section id="exceptions" className="ops-panel" aria-labelledby="exception-title">
                <div className="panel-head">
                  <div>
                    <h2 id="exception-title">Exception queue</h2>
                    <p>Sorted by service risk and time to breach.</p>
                  </div>
                  <span className="status-pill">14 open</span>
                </div>
                <div className="queue-list">
                  {exceptions.map(([title, route, severity]) => (
                    <article className="queue-item" key={title}>
                      <div>
                        <strong>{title}</strong>
                        <span>{route}</span>
                      </div>
                      <span className={`severity ${severity}`}>{severity}</span>
                    </article>
                  ))}
                </div>
              </section>

              <section id="capacity" className="ops-panel" aria-labelledby="capacity-title">
                <div className="panel-head">
                  <div>
                    <h2 id="capacity-title">Depot capacity</h2>
                    <p>Inbound, staging, and dispatch door pressure by depot.</p>
                  </div>
                  <span className="status-pill">next 2 hr</span>
                </div>
                <div className="capacity-bars">
                  {depots.map(([name, width, value]) => (
                    <div className="bar-row" key={name}>
                      <strong>{name}</strong>
                      <span className="bar-track">
                        <span className="bar-fill" style={{ width }} />
                      </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="ops-column inspector" aria-label="Inspector">
              <section className="ops-panel" aria-labelledby="driver-title">
                <div className="panel-head">
                  <div>
                    <h2 id="driver-title">Driver status</h2>
                    <p>Availability and route confidence.</p>
                  </div>
                  <Truck size={22} aria-hidden="true" />
                </div>
                <div className="driver-list">
                  {drivers.map(([name, detail, score]) => (
                    <article className="driver-item" key={name}>
                      <div>
                        <strong>{name}</strong>
                        <span>{detail}</span>
                      </div>
                      <span className="status-pill">{score}</span>
                    </article>
                  ))}
                </div>
              </section>

              <section className="inspector-card" aria-labelledby="inspector-title">
                <h2 id="inspector-title">Selected exception</h2>
                <p>Pierside pickup is waiting on a customs stamp. Route H-14 misses the cold-chain transfer if release is later than 15:20.</p>
                <ul className="inspection-steps">
                  <li>
                    <span className="step-num">1</span>
                    <span>Assign depot runner to customs desk.</span>
                  </li>
                  <li>
                    <span className="step-num">2</span>
                    <span>Hold backup driver at bay 4 until 15:10.</span>
                  </li>
                  <li>
                    <span className="step-num">3</span>
                    <span>Notify customer success if transfer slips by 12 minutes.</span>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
