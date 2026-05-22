import "./globals.css";
import MotionClient from "./components/MotionClient";

export const metadata = {
  title: "GPT Taste Frontend Design Benchmark",
  description: "Self-contained benchmark surfaces for landing, dashboard, product, and suite routes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionClient />
        {children}
      </body>
    </html>
  );
}
