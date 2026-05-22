import "./globals.css";
import { MotionLayer } from "./motion-layer";

export const metadata = {
  title: "Frontend Skill Benchmark",
  description: "Responsive app-router surfaces for the frontend skill benchmark."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionLayer />
        {children}
      </body>
    </html>
  );
}
