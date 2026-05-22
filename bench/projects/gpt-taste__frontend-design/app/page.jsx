import { HomeGrid } from "./components/shared";

export default function IndexPage() {
  return (
    <main className="main-shell index-page">
      <section className="index-hero">
        <div className="index-kicker">Frontend skill benchmark</div>
        <h1>Four production UI surfaces, one composed Next.js app.</h1>
        <p>
          This worker output links the required benchmark routes while keeping each surface visually distinct and
          screenshot-ready.
        </p>
      </section>
      <HomeGrid />
    </main>
  );
}
