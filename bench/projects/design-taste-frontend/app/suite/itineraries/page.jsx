import { itineraryRows } from "../../../lib/content";
import { Icon } from "../../components/Icon";

export default function SuiteItinerariesPage() {
  return (
    <section className="suite-workspace">
      <div className="suite-page-head">
        <div>
          <p className="eyebrow">Itineraries</p>
          <h1>Cold-weather field route, four active days.</h1>
        </div>
        <button type="button" className="button button--compact">
          <Icon name="CalendarBlank" size={17} />
          Export plan
        </button>
      </div>
      <div className="itinerary-layout">
        <div className="itinerary-table" role="table" aria-label="Research itinerary">
          <div role="row" className="table-head">
            <span role="columnheader">Day</span>
            <span role="columnheader">Place</span>
            <span role="columnheader">Focus</span>
            <span role="columnheader">Window</span>
          </div>
          {itineraryRows.map((row) => (
            <div role="row" className="table-row" key={row.day}>
              <span role="cell">{row.day}</span>
              <strong role="cell">{row.place}</strong>
              <span role="cell">{row.focus}</span>
              <span role="cell">{row.window}</span>
            </div>
          ))}
        </div>
        <aside className="permit-panel">
          <p className="eyebrow">Required before departure</p>
          <h2>Route constraints</h2>
          <ul>
            <li>Two satellite phones assigned to the Tromso handoff.</li>
            <li>Specimen crate C needs overnight cold storage confirmation.</li>
            <li>Driver translation notes still missing for Svalbard staging.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
