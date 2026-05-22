import { DashboardBoard } from "../components/DashboardBoard";
import { Icon } from "../components/Icon";
import { RouteNav } from "../components/RouteNav";

export default function DashboardPage() {
  return (
    <main id="main-content" className="dashboard-page">
      <RouteNav />
      <section className="dashboard-topbar" aria-label="Harbor Desk controls">
        <div>
          <p className="eyebrow">Harbor Desk</p>
          <h1>Same-day logistics control room</h1>
        </div>
        <div className="control-cluster">
          <label>
            <span>Region</span>
            <select defaultValue="nyc">
              <option value="nyc">NYC metro</option>
              <option value="phl">Philadelphia</option>
              <option value="bos">Boston corridor</option>
            </select>
          </label>
          <label>
            <span>Time window</span>
            <select defaultValue="today">
              <option value="today">Today until 21:00</option>
              <option value="am">Morning run</option>
              <option value="pm">Afternoon run</option>
            </select>
          </label>
          <button type="button" className="button button--compact">
            <Icon name="RadioButton" size={17} />
            Live
          </button>
        </div>
      </section>
      <DashboardBoard />
    </main>
  );
}
