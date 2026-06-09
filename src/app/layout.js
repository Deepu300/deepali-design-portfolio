import "./globals.css";
import { Footer } from "@/components";
import RootNavbar from "@/components/RootNavbar";
import Provider from "./provider";
import { louisGeorgeCafeFont } from "@/utils/fonts";
import PageTransition from "../components/PageTransition";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata = {
  title: "Deepali Babuta | Experience Designer",
  description:
    "Hi, I'm a 21 year old Experience Designer based in New Delhi. Passionate about crafting meaningful, emotion-stirring experiences, I'm also a dedicated storyteller with a focus on emotional design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={louisGeorgeCafeFont.className + " bg-main"}>
        <Provider>
          <RootNavbar />
          <AOSWrapper />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
