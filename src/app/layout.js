import "./globals.css";
import Script from "next/script";
import { Footer } from "@/components";
import RootNavbar from "@/components/RootNavbar";
import Provider from "./provider";
import { louisGeorgeCafeFont, frauncesFont } from "@/utils/fonts";
import PageTransition from "../components/PageTransition";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata = {
  title: "Deepali Babuta | Experience Designer",
  description:
    "Hi, I'm a 21 year old Experience Designer based in New Delhi. Passionate about crafting meaningful, emotion-stirring experiences, I'm also a dedicated storyteller with a focus on emotional design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/theme-boot.js" strategy="beforeInteractive" />
        <style
          dangerouslySetInnerHTML={{
            __html: "html.dark,html.dark body{background-color:#00262b;transition:background-color .8s cubic-bezier(.4,0,.2,1)}",
          }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-59LCYSWBN1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-59LCYSWBN1');
`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad:wght@400;500;600;700&family=AR+One+Sans:wght@400..700&family=Aboreto&family=Cousine:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${louisGeorgeCafeFont.className} ${frauncesFont.variable} bg-main`}>
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
