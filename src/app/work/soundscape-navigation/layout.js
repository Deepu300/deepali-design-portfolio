import { Fraunces } from "next/font/google";

/* Fraunces for the Soundscapes title lockup — appearance must stay unchanged. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ss-fraunces",
  display: "swap",
});

export const metadata = {
  title: "Soundscape Navigation — Deepali Babuta",
};

export default function SoundscapeLayout({ children }) {
  return <div className={fraunces.variable}>{children}</div>;
}
