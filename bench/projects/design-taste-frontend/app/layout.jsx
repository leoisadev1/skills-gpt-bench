import "./globals.css";

export const metadata = {
  title: "Design Taste Frontend Benchmark",
  description: "Self-contained benchmark implementation for the design-taste-frontend profile."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
