"use client";

import { useMemo, useState } from "react";
import {
  ArrowClockwise,
  CheckCircle,
  Funnel,
  MapPin,
  SealWarning,
  Truck
} from "@phosphor-icons/react";
import { depotCapacity, driverStatus, exceptionQueue, routeHealth } from "../../lib/content";

const filters = ["All routes", "At risk", "Cold chain", "Medical"];

function StatusPill({ state }) {
  return <span className={`status-pill status-pill--${state.toLowerCase().replace(" ", "-")}`}>{state}</span>;
}

export function DashboardBoard() {
  const [activeFilter, setActiveFilter] = useState("All routes");
  const [selectedRoute, setSelectedRoute] = useState(routeHealth[1]);

  const visibleRoutes = useMemo(() => {
    if (activeFilter === "All routes") return routeHealth;
    if (activeFilter === "At risk") return routeHealth.filter((route) => route.state === "At risk" || route.state === "Blocked");
    return routeHealth.filter((route) => route.load === activeFilter);
  }, [activeFilter]);

  return (
    <main className="ops-shell">
      <section className="ops-topline" aria-labelledby="ops-title">
        <div>
          <p className="eyebrow">Harbor Desk</p>
          <h1 id="ops-title">Same-day logistics control</h1>
        </div>
        <div className="ops-actions" aria-label="Dashboard controls">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              data-active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              <Funnel size={15} weight="bold" aria-hidden="true" />
              {filter}
            </button>
          ))}
          <button type="button" className="ops-refresh">
            <ArrowClockwise size={15} weight="bold" aria-hidden="true" />
            08:52 sync
          </button>
        </div>
      </section>

      <section className="ops-grid" aria-label="Harbor Desk working surface">
        <div className="ops-panel ops-panel--routes">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Route health</p>
              <h2>{visibleRoutes.length} lanes watched</h2>
            </div>
            <span className="quiet-stat">Risk median 34.7</span>
          </div>
          <div className="route-table" role="table" aria-label="Route health table">
            <div className="route-row route-row--head" role="row">
              <span role="columnheader">Lane</span>
              <span role="columnheader">Driver</span>
              <span role="columnheader">ETA</span>
              <span role="columnheader">Risk</span>
            </div>
            {visibleRoutes.map((route) => (
              <button
                className="route-row"
                key={route.id}
                type="button"
                role="row"
                data-selected={selectedRoute.id === route.id}
                onClick={() => setSelectedRoute(route)}
              >
                <span role="cell">
                  <strong>{route.id}</strong>
                  <small>{route.lane}</small>
                </span>
                <span role="cell">{route.driver}</span>
                <span role="cell">{route.eta}</span>
                <span role="cell">
                  <i style={{ "--risk": `${route.risk}%` }} aria-hidden="true" />
                  {route.risk}
                </span>
              </button>
            ))}
          </div>
          {visibleRoutes.length === 0 ? (
            <div className="empty-state">
              <CheckCircle size={22} weight="duotone" aria-hidden="true" />
              No routes match this filter.
            </div>
          ) : null}
        </div>

        <aside className="ops-panel ops-panel--inspector" aria-labelledby="inspector-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Inspector</p>
              <h2 id="inspector-title">{selectedRoute.id}</h2>
            </div>
            <StatusPill state={selectedRoute.state} />
          </div>
          <div className="inspector-map" aria-label={`Map preview for ${selectedRoute.lane}`}>
            <span className="map-line map-line-a" aria-hidden="true" />
            <span className="map-line map-line-b" aria-hidden="true" />
            <span className="map-pin map-pin-a" aria-hidden="true" />
            <span className="map-pin map-pin-b" aria-hidden="true" />
            <MapPin size={21} weight="fill" aria-hidden="true" />
          </div>
          <dl className="inspector-list">
            <div>
              <dt>Load</dt>
              <dd>{selectedRoute.load}</dd>
            </div>
            <div>
              <dt>Current driver</dt>
              <dd>{selectedRoute.driver}</dd>
            </div>
            <div>
              <dt>ETA</dt>
              <dd>{selectedRoute.eta}</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>Confirm gate slot and dispatch dock crew.</dd>
            </div>
          </dl>
        </aside>

        <section className="ops-panel ops-panel--queue" aria-labelledby="queue-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Exception queues</p>
              <h2 id="queue-title">17 unresolved</h2>
            </div>
            <SealWarning size={22} weight="duotone" aria-hidden="true" />
          </div>
          <div className="queue-list">
            {exceptionQueue.map((item) => (
              <div key={item.code} className="queue-item" data-urgency={item.urgency}>
                <span>{item.code}</span>
                <strong>{item.count}</strong>
                <small>{item.owner}</small>
              </div>
            ))}
          </div>
          <div className="error-strip" role="status">
            2 label scans failed validation at Pier 8.
          </div>
        </section>

        <section className="ops-panel ops-panel--drivers" aria-labelledby="drivers-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Driver status</p>
              <h2 id="drivers-title">Crew clock</h2>
            </div>
            <Truck size={22} weight="duotone" aria-hidden="true" />
          </div>
          <div className="driver-stack">
            {driverStatus.map((driver) => (
              <div key={driver.name} className="driver-row">
                <span className="avatar" aria-hidden="true">{driver.name.slice(0, 2).toUpperCase()}</span>
                <div>
                  <strong>{driver.name}</strong>
                  <small>{driver.stop}</small>
                </div>
                <span>{driver.status}</span>
                <b>{driver.hours}</b>
              </div>
            ))}
          </div>
        </section>

        <section className="ops-panel ops-panel--capacity" aria-labelledby="capacity-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Depot capacity</p>
              <h2 id="capacity-title">Dock pressure</h2>
            </div>
            <span className="quiet-stat">Peak 86%</span>
          </div>
          <div className="capacity-bars">
            {depotCapacity.map((depot) => (
              <div key={depot.depot}>
                <span>
                  <strong>{depot.depot}</strong>
                  <small>{depot.docks}</small>
                </span>
                <i style={{ "--fill": `${depot.volume}%` }} aria-hidden="true" />
                <b>{depot.volume}%</b>
              </div>
            ))}
          </div>
          <div className="skeleton-block" aria-label="Loading replan preview">
            <span />
            <span />
            <span />
          </div>
        </section>
      </section>
    </main>
  );
}
