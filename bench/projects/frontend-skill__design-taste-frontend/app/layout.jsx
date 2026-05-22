import "./globals.css";

export const metadata = {
  title: "Frontend Skill Benchmark",
  description: "Benchmark implementation for frontend-skill and design-taste-frontend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
