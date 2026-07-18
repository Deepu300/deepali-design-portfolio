import { Fraunces, Nunito_Sans } from "next/font/google";

/* Match reference Google Fonts: Fraunces (display) + Nunito Sans (body).
   next/head does not inject in the App Router, so fonts were never loading. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ss-fraunces",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--ss-nunito",
  display: "swap",
});

export const metadata = {
  title: "Soundscape Navigation — Deepali Babuta",
};

export default function SoundscapeLayout({ children }) {
  return (
    <div
      className={`${fraunces.variable} ${nunitoSans.variable} ${nunitoSans.className}`}
    >
      {children}
    </div>
  );
}
