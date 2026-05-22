import { AirplaneTilt, CalendarDots, Clock, Train } from "@phosphor-icons/react/ssr";
import { SuiteShell } from "../../../components/SuiteShell";

const legs = [
  ["Mon 06:20", "Research team departs Oslo", "Flight SK-412, instruments hand-carried"],
  ["Mon 11:10", "Sample cold chain pickup", "Depot confirms dry ice swap at bay 3"],
  ["Tue 08:45", "Valley transfer", "Rail to Myrdal, vehicle handoff at north gate"],
  ["Wed 14:30", "Permit window", "Watershed access valid for 210 minutes"]
];

export default function SuiteItinerariesPage() {
  return (
    <SuiteShell
      active="/suite/itineraries"
      eyebrow="Itineraries"
      title="Every leg shows timing, constraint, and field consequence."
      summary="Researchers can see what moves, why it moves then, and which parts of the plan cannot slip."
    >
      <section className="itinerary-board">
        <div className="timeline-panel" data-reveal>
          <div className="panel-title">
            <CalendarDots size={21} weight="duotone" aria-hidden="true" />
            <h2>Watershed transect schedule</h2>
          </div>
          <div className="timeline">
            {legs.map(([time, title, detail]) => (
              <article key={time}>
                <time>{time}</time>
                <div>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="constraint-panel" data-reveal>
          <h2>Constraint stack</h2>
          {[
            ["Weather margin", "3.8 hr before ridge wind limit"],
            ["Sample viability", "17 hr until freezer transfer"],
            ["Access rule", "Two-person check-in required"]
          ].map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{body}</span>
            </article>
          ))}
        </aside>
        <div className="transfer-strip" data-reveal>
          <article>
            <AirplaneTilt size={24} weight="duotone" aria-hidden="true" />
            <strong>Flight</strong>
            <span>2 bags under chain of custody</span>
          </article>
          <article>
            <Train size={24} weight="duotone" aria-hidden="true" />
            <strong>Rail</strong>
            <span>Seat block near storage bay</span>
          </article>
          <article>
            <Clock size={24} weight="duotone" aria-hidden="true" />
            <strong>Slack</strong>
            <span>96 minutes before permit gate</span>
          </article>
        </div>
      </section>
    </SuiteShell>
  );
}
