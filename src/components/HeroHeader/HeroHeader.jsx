"use client";
import { avigeaFont, louisGeorgeCafeFont } from "@/utils/fonts";
import "./hero_comp.css";
import Link from "next/link";
import { motion as m } from "framer-motion";

const HeroHeader = () => {
  const svgVar = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const infinite_scroll = [
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
  ];
  return (
    <div className="flex flex-col items-center w-full m-auto my-6 hero-header">
      {/* MAIN WRAPPER: This structure is good */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-[50vh] gap-12 md:gap-16 my-12 md:my-20 hero-header__wrapper">

        {/* TEXT CONTAINER: This remains constrained for readability */}
        <div className="relative z-10 flex flex-col items-center gap-12 text-center md:gap-16">
          {/* CHANGED: Removed the outer div with the problematic fixed width. Added padding here. */}
          <div className="max-w-4xl px-4">
            {/* CHANGED: Removed the hardcoded width and height styles from this div */}
            <div className="flex-shrink-0">
              {/* CHANGED: 
                1. Removed all inline styles from the <p> tag.
                2. Added responsive Tailwind classes for font size and color.
              */}
              <p className="text-4xl text-[#363636] md:text-5xl lg:text-4xl font-normal leading-normal md:leading-snug">
                I'm <span
                  style={{
                    // This custom styling for the name is fine
                    color: '#363636',
                    fontFamily: avigeaFont.style.fontFamily,
                    fontStyle: 'italic',
                    textDecorationLine: 'underline',
                    textDecorationStyle: 'solid',
                    textDecorationSkipInk: 'none',
                    textDecorationColor: '#FFC240',
                    textDecorationThickness: '12.5%',
                    textUnderlineOffset: '19.5%',
                    textUnderlinePosition: 'from-font',
                  }}
                >
                  <a href="https://www.youtube.com/watch?v=Mvg79yrgatY&t=3s" target="_blank" className="none">Deepali Babuta</a>
                </span>— a Product Designer who bridges tech, psychology, and playful interaction.
              </p>
            </div>
          </div>
          <div>
            {/* CHANGED: Reduced font size for better hierarchy */}
            <h3 className="text-base md:text-lg leading-relaxed">
              Currently pursuing MS <Link href={"https://www.nyu.edu/"} target="_blank">@NYU</Link> <br />
              Previously <Link href={"https://www.adobe.com/in/"} target="_blank">@Adobe</Link> <Link href={"https://www.bosch.com/"} target="_blank">@Bosch</Link> <Link href={"https://www.hdfcbank.com/"} target="_blank">@HDFC</Link>
            </h3>
          </div>
        </div>

        {/* GRAPHICS CANVAS: This should now work correctly */}
        <div className="absolute top-0 left-0 z-0 w-full h-full">
          <m.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.5 }}
            className="w-full h-full"
            aria-label="Decorative graphics with the words: Creative, Coder, Curious, and Storyteller."
          >
            {/* "Creative" SVG - No changes needed here */}
            <m.svg
              width="249" height="108" viewBox="0 0 249 108" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="absolute w-32 top-3 left-0 md:w-48 lg:left-0"
            >
              <path d="M200.955 1.01159C224.566 -1.14198 245.452 16.2521 247.605 39.8623C249.759 63.4726 232.365 84.3584 208.754 86.5121L-12.4571 106.69L-20.2561 21.1896L200.955 1.01159Z" fill="#BCCBEA" stroke="#363636" strokeWidth="1.6623" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#363636"
                style={{
                  fontFamily: louisGeorgeCafeFont.style.fontFamily,
                  fontSize: '39.91px', fontWeight: 500, lineHeight: '124%', width: '186.873px',
                  height: '62.207px', transform: 'rotate(-5.212deg)', flexShrink: 0, paddingTop: '4px'
                }}
              >
                Creative
              </text>
            </m.svg>

            {/* Other SVGs remain the same... */}
            <m.svg
              xmlns="http://www.w3.org/2000/svg" width="111" height="140" viewBox="0 0 171 170" fill="none"
              className="absolute w-32 top-0 right-4 md:w-48 lg:right-[10%] lg:top-[0%]"
            >
              <path d="M67.5671 4.65409C68.5756 0.230239 74.2677 -1.04025 77.0619 2.53464L107.948 42.058C109.288 43.7728 111.417 44.6758 113.581 44.4476L164.382 39.0903C168.999 38.6034 172.028 43.7962 169.331 47.5753L140.237 88.3461C138.935 90.1704 138.699 92.5487 139.615 94.5936L159.876 139.769C161.749 143.946 157.886 148.409 153.483 147.152L104.313 133.12C102.258 132.534 100.045 133.027 98.4345 134.432L59.8995 168.042C56.449 171.051 51.0547 168.656 50.9738 164.078L50.0998 114.575C50.0602 112.335 48.8354 110.283 46.8814 109.185L3.21041 84.657C-0.837077 82.3835 -0.304157 76.3959 4.08121 74.8729L52.3382 58.1184C54.3942 57.4045 55.9371 55.6818 56.4207 53.5599L67.5671 4.65409Z" fill="#BECFBC" stroke="#363636" strokeWidth="0.923989" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#363636" style={{ fontFamily: avigeaFont.style.fontFamily, fontSize: '30.654px', fontWeight: 400, transform: 'rotate(-4deg)' }}>
                Coder
              </text>
            </m.svg>
            <m.svg
              width="200" height="194" viewBox="0 0 200 194" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="absolute w-32 bottom-0 left-6 md:w-48 lg:left-[15%]"
            >
              <path d="M110.853 36.4399L111.101 36.7118L111.426 36.5392L154.702 13.4439L151.511 61.1354L151.485 61.5183L151.854 61.622L198.818 74.8578L161.941 106.81L161.651 107.061L161.837 107.397L185.007 149.203L136.017 146.705L135.649 146.686L135.541 147.037L121.327 192.951L88.9387 157.44L88.6909 157.168L88.3664 157.341L45.0887 180.436L48.2814 132.745L48.307 132.362L47.9374 132.258L0.97343 119.021L37.8505 87.0701L38.1407 86.8192L37.9547 86.4835L14.7843 44.6766L63.775 47.1758L64.1423 47.1939L64.251 46.8425L78.4638 0.929375L110.853 36.4399Z" fill="#E3C9EB" stroke="#363636" strokeWidth="0.945979" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#363636" style={{ fontFamily: "'Calistoga', cursive", fontSize: '32.258px', fontWeight: 400, width: '118.507px', height: '54.684px', transform: 'rotate(0.854deg)' }}>
                Curious
              </text>
            </m.svg>
            <m.svg
              xmlns="http://www.w3.org/2000/svg" width="215" height="197" viewBox="0 0 203 194" fill="none"
              className="absolute w-32 bottom-8 right-8 md:w-48 lg:right-[15%]"
            >
              <path d="M111.784 4.97057C116.623 -2.51318 128.148 -0.0441884 129.506 8.76741L138.786 68.9539C139.28 72.1582 141.191 74.9698 143.989 76.6082L197.528 107.961C205.595 112.686 202.972 124.965 193.681 125.97L132.019 132.644C128.796 132.992 125.903 134.776 124.143 137.497L91.0866 188.614C86.247 196.097 74.7223 193.628 73.3638 184.817L64.0852 124.631C63.5912 121.426 61.6799 118.614 58.8822 116.975L5.3437 85.6221C-2.72352 80.8978 -0.100446 68.6189 9.19082 67.6134L70.8528 60.9399C74.075 60.5912 76.9679 58.8089 78.7278 56.0874L111.784 4.97057Z" fill="#E7DCC8" stroke="#363636" strokeWidth="1.06849" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#363636" style={{ fontFamily: "'Butler', serif", fontSize: '25.031px', fontWeight: 700, transform: 'rotate(0deg)', paddingBottom: '6px' }}>
                Storyteller
              </text>
            </m.svg>
          </m.div>
        </div>
      </div>

      {/* CHANGED: Added background and text color classes to match the new design */}
      <div className="w-full py-1 overflow-hidden md:py-5 hero-infinite-scroll bg-[#363636] text-gray-200">
        <ul className={`${avigeaFont.className} flex text-xs md:text-2xl gap-4 md:gap-12 tracking-wider w-max`}>
          {infinite_scroll.map((item, idx) => (
            <li key={`${idx}`} className="flex items-center gap-4 md:gap-12 whitespace-nowrap">
              {item}
              <svg
                width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-3 md:w-6"
              >
                {/* CHANGED: Fill color to match new text color */}
                <path d="M13.5 6.10352e-05L16.7031 5.76719L23.0459 3.95412L21.2329 10.297L27 13.5001L21.2329 16.7031L23.0459 23.046L16.7031 21.2329L13.5 27.0001L10.2969 21.2329L3.95406 23.046L5.76713 16.7031L0 13.5001L5.76713 10.297L3.95406 3.95412L10.2969 5.76719L13.5 6.10352e-05Z" fill="currentColor" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroHeader;