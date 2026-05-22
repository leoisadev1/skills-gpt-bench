import "./globals.css";

export const metadata = {
  title: "Frontend Design Benchmark",
  description: "A self-contained Next.js app-router benchmark project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
