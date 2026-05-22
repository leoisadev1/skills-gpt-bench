import { ButtonLink, TopNav, WordReveal, icons } from "../components";

const proof = [
  ["18.7m", "ledger events reconciled monthly"],
  ["43", "jurisdictions monitored"],
  ["7 min", "average close exception triage"]
];

const depth = [
  {
    title: "Policy-aware invoice routing",
    text: "Every approval path carries its controls, delegation logic, and evidence requests beside the payable."
  },
  {
    title: "Close packets without archaeology",
    text: "Lumen collects screenshots, journal links, and variance notes into a review trail finance can defend."
  },
  {
    title: "Operator-grade controls",
    text: "Thresholds, reviewer rotations, and audit holds are editable by finance operations without engineering tickets."
  }
];

export default function LandingPage() {
  const { SealCheck, ShieldCheck, CheckCircle } = icons;

  return (
    <main className="landing-page">
      <TopNav
        brand="Lumen Ledger"
        tone="dark"
        links={[
          { href: "/dashboard", label: "Harbor Desk" },
          { href: "/product", label: "Meridian" },
          { href: "/suite", label: "Northstar" }
        ]}
        cta={{ href: "#conversion", label: "Book review" }}
      />

      <section className="lumen-hero">
        <div className="lumen-hero__copy" data-reveal>
          <p className="brand-kicker">Lumen Ledger</p>
          <h1>Finance automation that keeps the audit trail awake.</h1>
          <p>
            Compliance-focused close, payables, and approval workflows for operators who need speed without losing evidence.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#conversion" variant="light">
              Schedule control review
            </ButtonLink>
            <ButtonLink href="#product-depth" variant="secondary">
              Inspect workflow
            </ButtonLink>
          </div>
        </div>
        <div className="ledger-visual" aria-label="Lumen Ledger product workflow visual" data-scale>
          <div className="ledger-orbit" aria-hidden="true" />
          <div className="ledger-panel ledger-panel--main">
            <div className="ledger-panel__header">
              <span>Control run</span>
              <strong>AP-4821</strong>
            </div>
            {["Policy match", "Reviewer evidence", "Variance reason", "Archive packet"].map((item, index) => (
              <div className="ledger-row" key={item} style={{ "--row": index }}>
                <CheckCircle size={18} weight="fill" aria-hidden="true" />
                <span>{item}</span>
                <b>{index === 2 ? "Hold" : "Clear"}</b>
              </div>
            ))}
          </div>
          <div className="ledger-panel ledger-panel--audit">
            <SealCheck size={34} weight="duotone" aria-hidden="true" />
            <span>Evidence sealed</span>
          </div>
          <div className="ledger-panel ledger-panel--risk">
            <ShieldCheck size={30} weight="duotone" aria-hidden="true" />
            <span>SOX ready</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Lumen Ledger proof points">
        {proof.map(([value, label]) => (
          <div key={label} data-reveal>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="lumen-product" id="product-depth">
        <div className="section-copy" data-reveal>
          <p className="eyebrow">Product depth</p>
          <h2>Controls travel with the transaction, not in a forgotten spreadsheet.</h2>
        </div>
        <div className="lumen-bento">
          <article className="lumen-tile lumen-tile--wide" data-reveal>
            <div>
              <h3>{depth[0].title}</h3>
              <p>{depth[0].text}</p>
            </div>
            <div className="approval-rail" aria-hidden="true">
              <span>Vendor risk</span>
              <span>Budget owner</span>
              <span>Controller</span>
              <span>Archive</span>
            </div>
          </article>
          {depth.slice(1).map((item) => (
            <article className="lumen-tile" key={item.title} data-reveal>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <article className="lumen-tile lumen-tile--dark" data-reveal>
            <h3>Exceptions become accountable work.</h3>
            <p>
              Owners, timestamps, and required evidence sit in one queue so review does not vanish into email.
            </p>
          </article>
        </div>
      </section>

      <section className="lumen-desire" data-scale>
        <div className="desire-image" role="img" aria-label="Finance operators reviewing compliance automation" />
        <p>
          <WordReveal text="Built for finance teams who want the close to move faster while every decision remains inspectable, routed, and ready for the next audit request." />
        </p>
      </section>

      <section className="final-conversion" id="conversion" data-reveal>
        <div>
          <p className="eyebrow">Close the loop</p>
          <h2>Bring payables, approvals, and evidence into one operating layer.</h2>
        </div>
        <ButtonLink href="/dashboard" variant="primary">
          View another surface
        </ButtonLink>
      </section>
    </main>
  );
}
