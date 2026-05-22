import Link from "next/link";
import {
  ArrowRight,
  Buildings,
  CalendarDots,
  Camera,
  ChartLineUp,
  Check,
  ClockCountdown,
  Compass,
  CreditCard,
  Database,
  FileText,
  Gauge,
  GearSix,
  Graph,
  LockKey,
  MagnifyingGlass,
  MapPin,
  MapTrifold,
  Notebook,
  Package,
  Receipt,
  SealCheck,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UserCircle,
  UsersThree,
  Warning,
} from "@phosphor-icons/react/ssr";

const suiteLinks = [
  { href: "/suite", label: "Home" },
  { href: "/suite/itineraries", label: "Itineraries" },
  { href: "/suite/notes", label: "Field notes" },
  { href: "/suite/account", label: "Account" },
];

function UtilityNav({ product }) {
  return (
    <header className="utility-nav">
      <Link className="nav-back" href="/">
        Benchmark
      </Link>
      <span>{product}</span>
      <nav aria-label={`${product} routes`}>
        <Link href="/landing">Landing</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/product">Product</Link>
        <Link href="/suite">Suite</Link>
      </nav>
    </header>
  );
}

function IconLabel({ icon: Icon, children }) {
  return (
    <span className="icon-label">
      <Icon size={17} weight="duotone" aria-hidden="true" />
      {children}
    </span>
  );
}

function CheckLine({ children }) {
  return (
    <li>
      <Check size={16} weight="duotone" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export function LandingSurface() {
  const proof = [
    ["18.7m", "invoice events reconciled monthly"],
    ["42", "audit controls mapped before close"],
    ["11 min", "median operator review cycle"],
  ];

  return (
    <main className="landing-page">
      <UtilityNav product="Lumen Ledger" />

      <section className="lumen-hero" aria-labelledby="lumen-title">
        <div className="lumen-hero__shade" />
        <div className="lumen-copy">
          <div className="brand-lockup">
            <span className="brand-mark">LL</span>
            <span>Lumen Ledger</span>
          </div>
          <p className="eyebrow">Compliance finance automation for operators</p>
          <h1 id="lumen-title">Close the books with every control already attached.</h1>
          <p className="hero-copy">
            Lumen Ledger turns approvals, evidence, invoice movement, and policy checks into
            one review rail that finance and operations can trust before month end.
          </p>
          <div className="action-row">
            <Link className="button button-dark" href="#lumen-convert">
              Request workflow review
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="#lumen-depth">
              See control map
            </Link>
          </div>
          <ul className="hero-checks" aria-label="Lumen Ledger proof points">
            <CheckLine>Evidence captured at source</CheckLine>
            <CheckLine>Policy exceptions routed by owner</CheckLine>
            <CheckLine>Exportable audit packet on demand</CheckLine>
          </ul>
        </div>

        <div className="ledger-stage" aria-label="Compliance review rail preview">
          <img
            src="https://picsum.photos/seed/lumen-ledger-ops-room/1200/1000"
            alt="Finance operations workspace with papers, screens, and review material"
          />
          <div className="audit-rail">
            <div className="rail-head">
              <IconLabel icon={ShieldCheck}>Control rail</IconLabel>
              <span>Q4 close</span>
            </div>
            {[
              ["AP approval", "Matched", "Evidence 6"],
              ["Vendor policy", "Flagged", "Owner ops"],
              ["Revenue tie-out", "Matched", "Trace 14"],
              ["SOC packet", "Ready", "PDF set"],
            ].map((item, index) => (
              <div className="rail-row" key={item[0]} style={{ "--i": index }}>
                <span>{item[0]}</span>
                <strong>{item[1]}</strong>
                <small>{item[2]}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lumen-proof" aria-label="Operational proof">
        {proof.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="lumen-depth" id="lumen-depth" aria-labelledby="lumen-depth-title">
        <div>
          <p className="eyebrow">Product depth</p>
          <h2 id="lumen-depth-title">A working map from transaction to sign-off.</h2>
          <p>
            Operators can see which event created an exception, who owns it, what evidence
            is missing, and whether the close can proceed without another spreadsheet chase.
          </p>
        </div>
        <div className="control-map">
          {[
            { icon: Receipt, label: "Invoice intake", value: "6,482 items" },
            { icon: Database, label: "Evidence store", value: "92.4% complete" },
            { icon: LockKey, label: "Policy lock", value: "17 open holds" },
            { icon: SealCheck, label: "Audit packet", value: "Ready in 04:16" },
          ].map((item) => (
            <div className="control-step" key={item.label}>
              <item.icon size={22} weight="duotone" aria-hidden="true" />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="operator-section" aria-labelledby="operator-title">
        <div className="operator-image">
          <img
            src="https://picsum.photos/seed/lumen-ledger-review-table/1000/760"
            alt="Operator reviewing finance evidence at a desk"
          />
        </div>
        <div className="operator-copy">
          <p className="eyebrow">Built for the review meeting</p>
          <h2 id="operator-title">Every row answers why it exists.</h2>
          <p>
            Exception paths include the originating workflow, impacted account, policy rule,
            owner, due date, and export status. The interface stays sparse until a row needs
            attention.
          </p>
          <ul className="line-list">
            <CheckLine>Owner-ready queues for AP, RevOps, and procurement</CheckLine>
            <CheckLine>Materiality thresholds tuned per entity</CheckLine>
            <CheckLine>Board packet exports with immutable evidence references</CheckLine>
          </ul>
        </div>
      </section>

      <section className="lumen-convert" id="lumen-convert" aria-labelledby="lumen-convert-title">
        <div>
          <p className="eyebrow">Final conversion</p>
          <h2 id="lumen-convert-title">Bring one close process. Leave with a control map.</h2>
        </div>
        <Link className="button button-dark" href="mailto:review@lumenledger.example">
          Book a compliance workflow review
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

export function DashboardSurface() {
  const exceptions = [
    ["North Loop", "Late scan", "18 min", "Assign depot lead"],
    ["Pier 9", "Capacity hold", "24 min", "Split outbound wave"],
    ["Ridge Clinic", "Driver swap", "07 min", "Approve Rafiq Soler"],
    ["Oak 41", "Temperature check", "12 min", "Request photo proof"],
  ];

  const drivers = [
    ["Amina Vale", "Route HD-18", "On time", "71%"],
    ["Rafiq Soler", "Route HD-42", "Pending swap", "46%"],
    ["Mara Ivers", "Route HD-27", "Ahead", "83%"],
    ["Noel Kwan", "Route HD-36", "At depot", "34%"],
  ];

  return (
    <main className="dashboard-page">
      <UtilityNav product="Harbor Desk" />
      <section className="ops-shell" aria-labelledby="ops-title">
        <header className="ops-header">
          <div>
            <p className="eyebrow">Same-day logistics control room</p>
            <h1 id="ops-title">Harbor Desk</h1>
          </div>
          <div className="ops-time">
            <ClockCountdown size={18} weight="duotone" aria-hidden="true" />
            <span>Live dispatch window</span>
            <strong>14:32</strong>
          </div>
        </header>

        <div className="ops-filters" aria-label="Dashboard filters">
          {["All depots", "Priority exceptions", "Same-day", "Cold chain", "Unassigned"].map((filter, index) => (
            <button className={index === 1 ? "filter-chip active" : "filter-chip"} type="button" key={filter}>
              {filter}
            </button>
          ))}
          <label className="search-field">
            <span>Search route, driver, or stop</span>
            <MagnifyingGlass size={16} aria-hidden="true" />
            <input placeholder="HD-42, Pier 9, Amina" />
          </label>
        </div>

        <div className="ops-grid">
          <aside className="ops-metrics" aria-label="Route health">
            {[
              ["Route health", "87.4%", "+3.1"],
              ["Open exceptions", "19", "-6"],
              ["Drivers active", "142", "+11"],
              ["Depot capacity", "76.8%", "+4.6"],
            ].map(([label, value, delta]) => (
              <div className="metric-line" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{delta}</small>
              </div>
            ))}
          </aside>

          <section className="route-board" aria-label="Route health map">
            <div className="board-toolbar">
              <IconLabel icon={Truck}>Route health</IconLabel>
              <span>42 active lanes</span>
            </div>
            <div className="route-map" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, index) => (
                <span
                  className={index % 7 === 0 ? "route-node urgent" : index % 5 === 0 ? "route-node hold" : "route-node"}
                  key={index}
                  style={{ "--i": index }}
                />
              ))}
              <svg viewBox="0 0 620 300" role="img" aria-label="Stylized same-day route map">
                <path d="M32 218 C120 120 186 252 266 146 S412 48 588 104" />
                <path d="M50 86 C138 132 202 74 286 108 S426 228 574 190" />
                <path d="M102 260 C186 196 244 226 322 176 S446 78 548 48" />
              </svg>
            </div>
          </section>

          <aside className="inspector" aria-label="Selected route inspector">
            <div className="inspector-head">
              <IconLabel icon={Warning}>Inspector</IconLabel>
              <strong>HD-42</strong>
            </div>
            <h2>Pier 9 capacity hold</h2>
            <p>
              Dock lane B is running 24 minutes behind and blocking two outbound medical stops.
            </p>
            <dl>
              <div>
                <dt>Owner</dt>
                <dd>Rafiq Soler</dd>
              </div>
              <div>
                <dt>Next action</dt>
                <dd>Split outbound wave</dd>
              </div>
              <div>
                <dt>Risk</dt>
                <dd>Cold chain breach at 15:05</dd>
              </div>
            </dl>
            <button className="button button-harbor" type="button">
              Resolve exception
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </aside>
        </div>

        <div className="ops-bottom">
          <section className="queue-panel" aria-labelledby="exception-title">
            <div className="section-head">
              <h2 id="exception-title">Exception queue</h2>
              <span>Sorted by service impact</span>
            </div>
            <div className="data-table" role="table" aria-label="Open exceptions">
              {exceptions.map((row) => (
                <div className="data-row" role="row" key={row[0]}>
                  {row.map((cell) => (
                    <span role="cell" key={cell}>
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="driver-panel" aria-labelledby="drivers-title">
            <div className="section-head">
              <h2 id="drivers-title">Driver status</h2>
              <span>142 checked in</span>
            </div>
            {drivers.map(([name, route, status, load]) => (
              <div className="driver-row" key={name}>
                <span className="driver-avatar" aria-hidden="true">
                  {name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <strong>{name}</strong>
                  <span>{route}</span>
                </div>
                <small>{status}</small>
                <meter min="0" max="100" value={Number.parseFloat(load)} aria-label={`${name} load ${load}`} />
              </div>
            ))}
          </section>

          <section className="capacity-panel" aria-labelledby="capacity-title">
            <div className="section-head">
              <h2 id="capacity-title">Depot capacity</h2>
              <span>Next 90 minutes</span>
            </div>
            {[
              ["Pier 9", 91],
              ["North Loop", 74],
              ["South Yard", 62],
              ["Ridge", 48],
            ].map(([depot, value]) => (
              <div className="capacity-row" key={depot}>
                <span>{depot}</span>
                <div className="capacity-track" aria-hidden="true">
                  <span style={{ width: `${value}%` }} />
                </div>
                <strong>{value}%</strong>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

export function ProductSurface() {
  const variants = ["Obsidian body", "Field olive", "Sand alloy"];
  const specs = [
    ["Sensor", "42 MP stacked field sensor"],
    ["Lens mount", "Meridian M weather-sealed bayonet"],
    ["Body", "Magnesium alloy frame, ceramic top plate"],
    ["Power", "Dual cell pack, 640-shot field rating"],
    ["Storage", "Twin UHS-II slots with write mirror"],
  ];

  return (
    <main className="product-page">
      <UtilityNav product="Meridian Type 42" />
      <section className="product-hero" aria-labelledby="product-title">
        <div className="product-visual" aria-label="Meridian Type 42 field camera visual">
          <div className="camera-rig">
            <div className="camera-top" />
            <div className="camera-body">
              <span className="viewfinder" />
              <span className="lens">
                <span />
              </span>
              <span className="grip" />
            </div>
            <div className="camera-shadow" />
          </div>
          <div className="material-tags">
            <span>Ceramic top plate</span>
            <span>Knurled brass dials</span>
            <span>Sealed magnesium shell</span>
          </div>
        </div>

        <div className="product-copy">
          <p className="eyebrow">Field camera</p>
          <h1 id="product-title">Meridian Type 42</h1>
          <p>
            A compact field camera built for survey teams, conservation crews, and location
            producers who need tactile controls, weather sealing, and clean variant choices.
          </p>
          <div className="variant-strip" aria-label="Camera variants">
            {variants.map((variant, index) => (
              <button className={index === 1 ? "variant active" : "variant"} type="button" key={variant}>
                {variant}
              </button>
            ))}
          </div>
          <div className="purchase-panel" aria-label="Configuration summary">
            <div>
              <span>Configured price</span>
              <strong>$4,280</strong>
            </div>
            <button className="button button-camera" type="button">
              Choose configuration
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="material-section" aria-labelledby="materials-title">
        <div>
          <p className="eyebrow">Material inspection</p>
          <h2 id="materials-title">Made to be adjusted with gloves on.</h2>
        </div>
        <div className="material-grid">
          {[
            ["Dial throw", "64-click shutter dial with raised brass indexing"],
            ["Weather seal", "Gasketed ports and dual-lip battery door"],
            ["Grip plate", "Replaceable rubberized side plate with tether point"],
            ["Screen hood", "Fold-flat matte hood for bright survey days"],
          ].map(([title, body]) => (
            <article className="material-item" key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="spec-section" aria-labelledby="spec-title">
        <div className="spec-table">
          <h2 id="spec-title">Specs</h2>
          {specs.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="accessory-panel" aria-labelledby="accessory-title">
          <h2 id="accessory-title">Included accessories</h2>
          <ul className="line-list">
            <CheckLine>Weather hood and rail-mounted hand strap</CheckLine>
            <CheckLine>Two field cells with numbered charge sleeves</CheckLine>
            <CheckLine>Sensor brush, port caps, and compact repair kit</CheckLine>
            <CheckLine>Canvas insert sized for hard case or expedition pack</CheckLine>
          </ul>
        </div>
      </section>
    </main>
  );
}

function SuiteShell({ active, children }) {
  return (
    <main className="suite-page">
      <header className="suite-nav">
        <Link className="suite-brand" href="/suite">
          <Compass size={22} weight="duotone" aria-hidden="true" />
          <span>Northstar Atlas</span>
        </Link>
        <nav aria-label="Northstar Atlas navigation">
          {suiteLinks.map((link) => (
            <Link className={active === link.href ? "active" : ""} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-back suite-back" href="/">
          Benchmark
        </Link>
      </header>
      {children}
    </main>
  );
}

export function SuiteHomeSurface() {
  return (
    <SuiteShell active="/suite">
      <section className="atlas-hero" aria-labelledby="atlas-title">
        <div>
          <p className="eyebrow">Travel planning for research teams</p>
          <h1 id="atlas-title">Field movement, lodging, notes, and approvals in one calm atlas.</h1>
          <p>
            Northstar Atlas keeps research trips legible from first itinerary sketch to
            post-field documentation, with each page shaped for a specific planning job.
          </p>
          <div className="action-row">
            <Link className="button button-atlas" href="/suite/itineraries">
              Open itineraries
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="/suite/notes">
              Review field notes
            </Link>
          </div>
        </div>
        <div className="atlas-map" aria-label="Research trip map preview">
          <svg viewBox="0 0 640 420" role="img" aria-label="Northstar Atlas route preview">
            <path d="M66 314 C150 210 226 282 294 178 S444 90 578 146" />
            <path d="M118 96 L206 132 L300 98 L418 160 L540 96" />
            <circle cx="66" cy="314" r="8" />
            <circle cx="294" cy="178" r="8" />
            <circle cx="578" cy="146" r="8" />
          </svg>
          <div className="map-note top">
            <strong>Patagonia soil study</strong>
            <span>7 researchers, 4 towns, 12 notes due</span>
          </div>
          <div className="map-note bottom">
            <strong>Permit window</strong>
            <span>Confirmed through Jun 18</span>
          </div>
        </div>
      </section>

      <section className="atlas-overview" aria-label="Suite overview">
        {[
          { icon: CalendarDots, title: "Itinerary stack", body: "Compare route days, lodging holds, permit windows, and transport owners." },
          { icon: Notebook, title: "Field notes", body: "Capture observation logs with location, evidence state, and follow-up requests." },
          { icon: UserCircle, title: "Account control", body: "Manage team access, billing owner, and research program defaults." },
        ].map((item) => (
          <article key={item.title}>
            <item.icon size={22} weight="duotone" aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </SuiteShell>
  );
}

export function SuiteItinerariesSurface() {
  const rows = [
    ["Day 01", "Santiago arrival", "Gear check", "Lodging held"],
    ["Day 02", "Punta Arenas", "Permit office", "Driver assigned"],
    ["Day 03", "Torres sector", "Soil transect A", "Weather watch"],
    ["Day 04", "Puerto Natales", "Interview block", "Rooming update"],
  ];

  return (
    <SuiteShell active="/suite/itineraries">
      <section className="suite-workspace itineraries" aria-labelledby="itinerary-title">
        <div className="workspace-intro">
          <p className="eyebrow">Itineraries</p>
          <h1 id="itinerary-title">Plan days against permits, transport, and field capacity.</h1>
        </div>
        <div className="itinerary-grid">
          <div className="timeline-panel">
            {rows.map(([day, place, work, status]) => (
              <div className="timeline-row" key={day}>
                <span>{day}</span>
                <strong>{place}</strong>
                <em>{work}</em>
                <small>{status}</small>
              </div>
            ))}
          </div>
          <aside className="trip-inspector">
            <IconLabel icon={MapPin}>Selected leg</IconLabel>
            <h2>Punta Arenas to Torres sector</h2>
            <p>Leave at 06:20, collect rental kit, clear permit desk before the northern gate closes.</p>
            <dl>
              <div>
                <dt>Drive</dt>
                <dd>4 hr 38 min</dd>
              </div>
              <div>
                <dt>Risk</dt>
                <dd>High wind advisory</dd>
              </div>
              <div>
                <dt>Owner</dt>
                <dd>Elian Roque</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </SuiteShell>
  );
}

export function SuiteNotesSurface() {
  const notes = [
    ["Transect A", "Soil color shifted after ridge line; photo evidence attached.", "Needs lab tag"],
    ["Interview 07", "Local guide confirmed alternate bridge route for equipment van.", "Approved"],
    ["Specimen hold", "Cold pack inventory short by four units after day three.", "Action needed"],
  ];

  return (
    <SuiteShell active="/suite/notes">
      <section className="suite-workspace notes" aria-labelledby="notes-title">
        <div className="workspace-intro">
          <p className="eyebrow">Field notes</p>
          <h1 id="notes-title">Turn field observations into accountable follow-up.</h1>
        </div>
        <div className="notes-grid">
          <div className="note-editor" aria-label="Note capture draft">
            <label>
              <span>Location</span>
              <input value="Torres sector, ridge 4" readOnly />
            </label>
            <label>
              <span>Observation</span>
              <textarea value="Wind shift made the western transect unsafe after 14:10. Move two photo points to the lower trail and ask logistics for revised pickup." readOnly />
            </label>
            <div className="tag-row" aria-label="Evidence tags">
              <span>Photo proof</span>
              <span>Route change</span>
              <span>Logistics</span>
            </div>
          </div>
          <div className="note-list">
            {notes.map(([title, body, status]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
                <span>{status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SuiteShell>
  );
}

export function SuiteAccountSurface() {
  return (
    <SuiteShell active="/suite/account">
      <section className="suite-workspace account" aria-labelledby="account-title">
        <div className="workspace-intro">
          <p className="eyebrow">Account</p>
          <h1 id="account-title">Control access, billing, and research program defaults.</h1>
        </div>
        <div className="account-grid">
          <section className="account-panel" aria-labelledby="team-title">
            <IconLabel icon={UsersThree}>Team</IconLabel>
            <h2 id="team-title">Research group access</h2>
            {[
              ["Mireya Holt", "Program owner", "Full access"],
              ["Tomas Akiyama", "Field lead", "Planning and notes"],
              ["Renee Calder", "Finance reviewer", "Billing and exports"],
            ].map(([name, role, access]) => (
              <div className="account-row" key={name}>
                <span className="driver-avatar" aria-hidden="true">
                  {name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
                <small>{access}</small>
              </div>
            ))}
          </section>
          <section className="account-panel billing" aria-labelledby="billing-title">
            <IconLabel icon={CreditCard}>Billing</IconLabel>
            <h2 id="billing-title">Active research plan</h2>
            <strong className="plan-price">$1,840</strong>
            <p>Renews Jun 27 with 9 seats, archive export, and permit document storage.</p>
            <button className="button button-atlas" type="button">
              Review billing
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </section>
          <section className="account-panel settings" aria-labelledby="settings-title">
            <IconLabel icon={GearSix}>Defaults</IconLabel>
            <h2 id="settings-title">Program settings</h2>
            {["Require lodging approval", "Attach field notes to route days", "Weekly finance export"].map((setting) => (
              <label className="toggle-row" key={setting}>
                <span>{setting}</span>
                <input type="checkbox" defaultChecked />
              </label>
            ))}
          </section>
        </div>
      </section>
    </SuiteShell>
  );
}
