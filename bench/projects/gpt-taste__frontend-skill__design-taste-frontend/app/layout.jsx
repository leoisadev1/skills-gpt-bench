import "./globals.css";

export const metadata = {
  title: "Skill Benchmark Composite",
  description: "Self-contained benchmark surfaces for landing, dashboard, product, and suite routes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
