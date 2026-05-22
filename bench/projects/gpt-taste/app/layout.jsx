import { MotionField } from "../components/MotionField";
import "./globals.css";

export const metadata = {
  title: "GPT Taste Benchmark",
  description: "Frontend benchmark surfaces for the gpt-taste skill profile.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionField />
        {children}
      </body>
    </html>
  );
}
