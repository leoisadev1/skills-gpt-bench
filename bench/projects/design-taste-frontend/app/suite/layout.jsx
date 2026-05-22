import { SuiteNav } from "../components/SuiteNav";

export default function SuiteLayout({ children }) {
  return (
    <main id="main-content" className="suite-page">
      <SuiteNav />
      {children}
    </main>
  );
}
