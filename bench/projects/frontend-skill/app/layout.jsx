import "./globals.css";

export const metadata = {
  title: "Frontend Skill Benchmark",
  description: "Production UI surfaces for the frontend-skill benchmark profile.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
