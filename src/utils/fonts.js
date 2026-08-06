import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

export const avigeaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Avigea.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Avigea Italic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
});

export const louisGeorgeCafeFont = localFont({
  src: [
    {
      path: "../../public/fonts/Louis George Cafe.ttf",
      style: "normal",
      weight: "400",
    },
  ],
});

export const frauncesFont = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "500", "600", "700"],
  display: "swap",
  variable: "--font-fraunces",
});
