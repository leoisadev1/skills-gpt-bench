import "./globals.css";

export const metadata = {
  title: "GPT Taste + Design Taste Benchmark",
  description: "A benchmark app with landing, dashboard, product, and suite surfaces."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
