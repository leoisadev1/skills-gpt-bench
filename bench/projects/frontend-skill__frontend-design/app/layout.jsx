import "./globals.css";

export const metadata = {
  title: "Frontend Skill Benchmark",
  description: "Benchmark surfaces for frontend-skill plus frontend-design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
