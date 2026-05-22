import { ArrowRight, Bank, CheckCircle, FileMagnifyingGlass, LockKey } from "@phosphor-icons/react/dist/ssr";
import { HorizontalAccordion, MagneticAnchor, RevealWords } from "../components/Interactive";
import { SiteNav } from "../components/Navigation";
import { ledgerRows } from "../lib/content";

const depthItems = [
  {
    title: "Controls sit beside the work",
    body: "Operators see approvals, policy links, and ownership in the same motion as close tasks.",
    image: "https://picsum.photos/seed/lumen-controls/1200/900",
  },
  {
    title: "Every exception keeps its trail",
    body: "Evidence, reviewer notes, and payment status stay bound to the transaction.",
    image: "https://picsum.photos/seed/lumen-ledger/1200/900",
  },
  {
    title: "Finance can move without drift",
    body: "Daily runs land in a ledger view that auditors can inspect without slowing the team.",
    image: "https://picsum.photos/seed/lumen-operator/1200/900",
  },
];

export default function LandingPage() {
  return (
    <main className="landing-page overflow-guard">
      <SiteNav brand="Lumen Ledger" />
      <section className="lumen-hero">
        <div className="hero-visual-plane" aria-hidden="true">
          <div className="ledger-board">
            {ledgerRows.map((row) => (
              <div className="ledger-row" key={row.join("-")}>
                <span>{row[0]}</span>
                <strong>{row[1]}</strong>
                <small>{row[2]}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Compliance finance automation</p>
          <h1>Lumen Ledger keeps finance work fast, controlled, and audit-ready.</h1>
          <p>
            A single operator workspace for approval evidence, policy checks, payment runs, and the close calendar.
          </p>
          <div className="hero-actions">
            <MagneticAnchor href="#conversion" className="button-light">
              Request a walkthrough <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </MagneticAnchor>
            <MagneticAnchor href="#proof" className="button-ghost-light">See the proof</MagneticAnchor>
          </div>
        </div>
      </section>

      <section id="proof" className="proof-band section-space">
        <div className="section-kicker">
          <Bank size={24} weight="duotone" aria-hidden="true" />
          <span>Used when finance cannot trade speed for control.</span>
        </div>
        <div className="proof-grid">
          {[
            ["47.2%", "fewer close blockers after the first policy pass"],
            ["18 min", "median audit packet assembly time"],
            ["6,420", "linked approval events retained this quarter"],
          ].map(([metric, copy]) => (
            <div className="proof-stat" key={metric}>
              <strong className="mono">{metric}</strong>
              <span>{copy}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="depth-section section-space">
        <div className="section-copy wide">
          <p className="eyebrow">Product depth</p>
          <h2>
            Approval work, policy evidence, and payment context live in the same operational surface.
          </h2>
        </div>
        <HorizontalAccordion items={depthItems} />
      </section>

      <section className="sticky-story section-space">
        <div className="sticky-title">
          <p className="eyebrow">Operational clarity</p>
          <h2>Every handoff leaves a useful trace.</h2>
        </div>
        <div className="story-stack">
          {[
            [FileMagnifyingGlass, "Evidence packets", "Invoices, comments, approvals, and policy references stay joined."],
            [LockKey, "Control owners", "Reviewers see the next action and the exact reason it exists."],
            [CheckCircle, "Clean close", "Resolved exceptions move into the close calendar with history intact."],
          ].map(([Icon, title, body]) => (
            <article className="story-card" key={title}>
              <Icon size={28} weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="conversion" className="conversion-section section-space">
        <RevealWords
          className="reveal-statement"
          text="Lumen Ledger gives operators a finance system that can move at daily speed while keeping the evidence trail clear enough for the next audit."
        />
        <MagneticAnchor href="/dashboard" className="button-dark">
          Explore another surface <ArrowRight size={18} weight="bold" aria-hidden="true" />
        </MagneticAnchor>
      </section>
    </main>
  );
}
