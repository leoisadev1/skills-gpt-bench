import Link from "next/link";
import { ArrowRight, Map, Radio, Shield } from "lucide-react";
import { MotionFrame } from "../components/MotionFrame";
import { SuiteFrame } from "../components/SuiteFrame";

export default function SuiteHomePage() {
  return (
    <SuiteFrame active="/suite">
      <MotionFrame />
      <section className="suite-page suite-hero" aria-labelledby="suite-home-title">
        <div className="suite-heading">
          <h1 id="suite-home-title">Northstar Atlas keeps research travel legible.</h1>
          <p>
            Plan routes, capture field notes, and keep account controls in one service built for teams moving through real places with real constraints.
          </p>
          <div className="hero-actions">
            <Link className="dark-button" href="/suite/itineraries">
              Open itineraries <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="ghost-button" href="/suite/notes" style={{ color: "#17211d", borderColor: "rgba(23,33,29,.24)" }}>
              Review notes
            </Link>
          </div>
        </div>
        <div className="atlas-visual motion-scale">
          <div className="atlas-panel">
            <strong>Andes glacier route</strong>
            <p>Five researchers, four checkpoints, two weather holds, one consolidated source of truth.</p>
          </div>
        </div>
      </section>

      <section className="suite-page" aria-labelledby="suite-system-title">
        <div className="suite-heading">
          <h1 id="suite-system-title">One service, four working rooms.</h1>
          <p>Each room uses the same travel model but gives the team a page-specific surface for its job.</p>
        </div>
        <div className="suite-grid">
          <article className="suite-card motion-rise">
            <Map size={30} aria-hidden="true" />
            <h2>Itinerary planning</h2>
            <p>Coordinate dates, terrain, checkpoints, lodging, transfer risk, and field responsibilities.</p>
          </article>
          <article className="suite-card motion-rise">
            <Radio size={30} aria-hidden="true" />
            <h2>Field notes</h2>
            <p>Capture observations with location, confidence, source material, and follow-up tasks.</p>
          </article>
          <article className="suite-card motion-rise">
            <Shield size={30} aria-hidden="true" />
            <h2>Account controls</h2>
            <p>Manage team access, offline sync, billing, exports, and organization security.</p>
          </article>
        </div>
      </section>
    </SuiteFrame>
  );
}
