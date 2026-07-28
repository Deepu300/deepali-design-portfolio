import { Inter } from "next/font/google";

/* Match reference Google Font: Inter (the reference HTML embedded it as base64).
   next/head does not inject in the App Router, so fonts were never loading. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--gc-inter",
  display: "swap",
});

export const metadata = {
  title: "Gesture-Based Human Verification — Deepali Babuta",
  description:
    "GestureCAPTCHA: a gesture-based way to prove a real person is there, swapping the CAPTCHA-and-2FA gauntlet for one quick hand sign read by a computer-vision model.",
};

export default function GestureAuthLayout({ children }) {
  return (
    <div className={`${inter.variable} ${inter.className}`}>{children}</div>
  );
}
