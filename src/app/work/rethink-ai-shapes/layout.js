import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";

/* Editorial pairing for the case study: a transitional serif for the claims,
   a neutral sans for body copy, and a mono for the small labels. */
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--tp-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--tp-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--tp-mono",
  display: "swap",
});

export const metadata = {
  title: "The Tool Properties Panel · Deepali Babuta",
  description:
    "Extending the capabilities of Shape Tools in Adobe Illustrator. A ten week internship project with the CC Illustrator Desktop team.",
};

export default function ToolPanelLayout({ children }) {
  return (
    <div
      className={`${serif.variable} ${sans.variable} ${mono.variable} ${sans.className}`}
    >
      {children}
    </div>
  );
}
