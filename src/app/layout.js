import "./globals.css";
import { Footer, Navbar } from "@/components";
import Provider from "./provider";
import { louisGeorgeCafeFont } from "@/utils/fonts";

export const metadata = {
  title: "Deepali Babuta | Experience Designer",
  description:
    "Hi, I'm a 21 year old Experience Designer based in New Delhi. Passionate about crafting meaningful, emotion-stirring experiences, I'm also a dedicated storyteller with a focus on emotional design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={louisGeorgeCafeFont.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
