import "./globals.css";
import { MotionClient } from "./components/MotionClient";

export const metadata = {
  title: "GPT Taste + Frontend Skill Benchmark",
  description: "Self-contained benchmark implementation for landing, dashboard, product, and suite surfaces."
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
