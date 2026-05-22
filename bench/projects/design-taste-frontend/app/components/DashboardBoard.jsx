"use client";

import { useMemo, useState } from "react";
import { depots, drivers, exceptions, routeHealth } from "../../lib/content";
import { Icon } from "./Icon";

const filters = ["All lanes", "Cold chain", "Customs", "Dock hold"];

export function DashboardBoard() {
  const [activeFilter, setActiveFilter] = useState("All lanes");
  const [selectedId, setSelectedId] = useState(exceptions[0].id);

  const visibleExceptions = useMemo(() => {
    if (activeFilter === "All lanes") {
      return exceptions;
    }
    return exceptions.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  const selectedException =
    visibleExceptions.find((item) => item.id === selectedId) ?? visibleExceptions[0] ?? null;

  return (
    <div className="dashboard-grid">
      <section className="ops-panel ops-panel--wide" aria-labelledby="route-health-title">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Route health</p>
            <h2 id="route-health-title">Live lane pressure</h2>
          </div>
          <span className="freshness" aria-live="polite">
            Updated 42 sec ago
          </span>
        </div>
        <div className="route-health-list">
          {routeHealth.map((route) => (
            <article className="route-row" key={route.lane}>
              <div>
                <strong>{route.lane}</strong>
                <span>
                  {route.load} - ETA {route.eta}
                </span>
              </div>
              <div className="health-meter" aria-label={`${route.health} percent route health`}>
                <span style={{ width: `${route.health}%` }} />
              </div>
              <b data-status={route.status}>{route.status}</b>
            </article>
          ))}
        </div>
      </section>

      <aside className="ops-panel" aria-labelledby="capacity-title">
        <div className="panel-heading compact">
          <div>
            <p className="eyebrow">Depots</p>
            <h2 id="capacity-title">Capacity</h2>
          </div>
          <Icon name="Warehouse" size={22} />
        </div>
        <div className="capacity-list">
          {depots.map((depot) => (
            <div className="capacity-row" key={depot.name}>
              <div>
                <strong>{depot.name}</strong>
                <span>{depot.detail}</span>
              </div>
              <div className="donut" style={{ "--value": depot.capacity }}>
                <span>{depot.capacity}%</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="ops-panel ops-panel--queue" aria-labelledby="exception-title">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Exception queue</p>
            <h2 id="exception-title">Interventions that still matter</h2>
          </div>
          <Icon name="SlidersHorizontal" size={22} />
        </div>
        <div className="filter-bar" role="group" aria-label="Filter exceptions">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="inline-alert" role="status">
          <Icon name="Warning" size={18} />
          Customs and cold chain alerts are inside the same dispatch window.
        </div>
        <div className="exception-list">
          {visibleExceptions.length === 0 ? (
            <div className="empty-state">
              <Icon name="CheckCircle" size={28} />
              <strong>No open exceptions</strong>
              <span>Change the filters to review another queue.</span>
            </div>
          ) : (
            visibleExceptions.map((item) => (
              <button
                type="button"
                key={item.id}
                className="exception-row"
                aria-pressed={selectedException?.id === item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <span>
                  <b>{item.title}</b>
                  <small>
                    {item.lane} - {item.owner}
                  </small>
                </span>
                <em>{item.age}</em>
              </button>
            ))
          )}
        </div>
      </section>

      <aside className="ops-panel inspector" aria-labelledby="inspector-title">
        <div className="panel-heading compact">
          <div>
            <p className="eyebrow">Inspector</p>
            <h2 id="inspector-title">Selected issue</h2>
          </div>
          <Icon name="ClipboardText" size={22} />
        </div>
        {selectedException ? (
          <div className="inspector-body">
            <span className="priority">{selectedException.priority} priority</span>
            <h3>{selectedException.title}</h3>
            <dl>
              <div>
                <dt>Lane</dt>
                <dd>{selectedException.lane}</dd>
              </div>
              <div>
                <dt>Owner</dt>
                <dd>{selectedException.owner}</dd>
              </div>
              <div>
                <dt>Action</dt>
                <dd>{selectedException.action}</dd>
              </div>
            </dl>
            <button type="button" className="button button--full">
              Assign response
            </button>
          </div>
        ) : (
          <div className="empty-state">
            <Icon name="MagnifyingGlass" size={28} />
            <strong>Select an exception</strong>
            <span>The inspector will show ownership and next action.</span>
          </div>
        )}
      </aside>

      <section className="ops-panel ops-panel--drivers" aria-labelledby="drivers-title">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Driver status</p>
            <h2 id="drivers-title">Active crews</h2>
          </div>
          <div className="skeleton-set" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="driver-grid">
          {drivers.map((driver) => (
            <article className="driver-card" key={driver.name}>
              <span className="driver-avatar">{driver.name.slice(0, 2)}</span>
              <div>
                <strong>{driver.name}</strong>
                <small>{driver.zone}</small>
              </div>
              <b>{driver.state}</b>
              <em>{driver.stops} stops</em>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
