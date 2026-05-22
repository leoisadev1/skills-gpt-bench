import "./globals.css";

export const metadata = {
  title: "Design Taste Frontend Benchmark",
  description: "Next.js benchmark surfaces for frontend design skill evaluation."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
