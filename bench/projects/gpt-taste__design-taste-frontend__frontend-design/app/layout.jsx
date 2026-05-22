import { MotionLayer } from "../components/MotionLayer";
import "./globals.css";

export const metadata = {
  title: "Frontend Skill Benchmark",
  description: "A multi-surface Next.js benchmark project for premium frontend skill evaluation."
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
