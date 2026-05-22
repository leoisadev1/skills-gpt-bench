import "./globals.css";

export const metadata = {
  title: "Frontend Skill Benchmark",
  description: "Production UI surfaces for the frontend skill benchmark.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
