import { icons } from "../../components";
import { SuiteShell } from "../suite-components";

const days = [
  ["Day 01", "Santiago arrival", "Gear audit, permits, team briefing"],
  ["Day 02", "Talca transfer", "Road survey and water sample pickup"],
  ["Day 03", "Reserve edge", "Field transect A, two vehicle teams"],
  ["Day 04", "Weather hold", "Lab processing and route revision"]
];

export default function ItinerariesPage() {
  const { CheckCircle, Clock, MapTrifold } = icons;

  return (
    <SuiteShell current="itineraries">
      <section className="itinerary-layout">
        <div className="itinerary-lead" data-reveal>
          <MapTrifold size={34} weight="duotone" aria-hidden="true" />
          <p className="brand-kicker">Itineraries</p>
          <h1>Route plans that show timing, risk, and handoffs in one pass.</h1>
          <p>Built for research teams who need travel plans to survive weather, permits, and gear movement.</p>
        </div>
        <div className="day-stack">
          {days.map(([day, place, detail], index) => (
            <article key={day} data-reveal>
              <span>{day}</span>
              <div>
                <strong>{place}</strong>
                <p>{detail}</p>
              </div>
              {index < 2 ? <CheckCircle size={20} weight="fill" aria-hidden="true" /> : <Clock size={20} weight="duotone" aria-hidden="true" />}
            </article>
          ))}
        </div>
        <aside className="risk-board" data-reveal>
          <h2>Route constraints</h2>
          <p>Snow window opens after 11:40. Fuel stop moved to Linares. Translator confirmed for archive segment.</p>
          <dl>
            <div>
              <dt>Open tasks</dt>
              <dd>7</dd>
            </div>
            <div>
              <dt>Vehicle buffer</dt>
              <dd>42 km</dd>
            </div>
          </dl>
        </aside>
      </section>
    </SuiteShell>
  );
}
