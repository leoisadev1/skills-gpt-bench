import Link from "next/link";
import { BenchIcon } from "../../../components/BenchIcon";
import { ScrollTheatre } from "../../../components/ScrollTheatre";
import { SuiteNav } from "../../../components/SuiteNav";

const days = [
  ["Day 04", "Reykjavik lab handoff", "08:40", "Equipment check, interview prep, courier lockbox"],
  ["Day 05", "North coast archive", "10:15", "Road buffer, harbor survey, oral history session"],
  ["Day 06", "Weather hold", "13:30", "Remote synthesis, file backup, consent review"]
];

export default function SuiteItinerariesPage() {
  return (
    <main className="site-shell suite-shell">
      <ScrollTheatre surface="suite-itineraries" />
      <SuiteNav active="itineraries" />
      <section className="suite-page-head">
        <p className="eyebrow">Itineraries</p>
        <h1>Field routes with buffers visible before the team leaves.</h1>
        <p>
          Build travel days around research intent, not just arrival times.
        </p>
      </section>
      <section className="itinerary-layout">
        <div className="timeline-panel" data-gsap-scale>
          {days.map(([day, title, time, detail]) => (
            <article key={day}>
              <span>{day}</span>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              <time>{time}</time>
            </article>
          ))}
        </div>
        <aside className="route-brief" data-gsap-stack>
          <BenchIcon name="MapTrifold" size={30} />
          <h2>Route risk brief</h2>
          <p>Wind advisory shifts the harbor survey indoors after 15:00. Driver rest margin is 42m.</p>
          <div className="mini-meter">
            <span style={{ width: "68%" }} />
          </div>
          <Link className="button button-primary" href="/suite/notes">
            Attach field note <BenchIcon name="ArrowRight" size={18} />
          </Link>
        </aside>
        <aside className="route-brief secondary-brief" data-gsap-stack>
          <BenchIcon name="Clock" size={30} />
          <h2>Research time protected</h2>
          <p>11.6 hours are reserved for interviews after transport, meal, and equipment buffers.</p>
        </aside>
      </section>
    </main>
  );
}
