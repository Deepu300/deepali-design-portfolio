import React from "react";
import StickyNote from "@/components/StickyNote";
import AffinityContentBlock from "@/components/AffinityContentBlock";
import WorkSubHeading from "@/components/WorkSubHeading";
import WorkHeading from "@/components/WorkHeading";
export const contents = [
  {
    title: "Login & Authentication Fatigue",
    points: [
      "Needing to enter one-time codes frequently is annoying.",
      "Having to enter a six-digit number every time to access applications is annoying.",
      "Needing 2FA when the phone is in another room interrupts focus and comfort.",
      "App-based 2FA (NYU Duo) adds extra steps.",
      "Frequent automatic logouts require repeated 2FA on the same device.",
      "Side tab is logged in, but new tab won’t login.",
    ],
    backgroundColor: "bg-accent-pink-2",
  },
  {
    title: "Device Dependency & Risks",
    points: [
      "Losing a phone creates a nightmare scenario: can’t log into anything, even with correct passwords.",
      "Losing a phone may require getting a new phone number to restore access.",
      "Phone-based security makes users feel “locked out” of essential services (banking, social, laundry machines).",
      "SMS OTP delays create frustration.",
      "Account locked permanently due to 2FA issues → high risk.",
    ],
    backgroundColor: "bg-accent-blue",
  },
  {
    title: "CAPTCHA Pain Points",
    points: [
      "CAPTCHAs perceived as irrelevant on low-security sites (Chegg, recipe sites).",
      "Awareness that CAPTCHAs are harder due to AI/OCR, leading to a negative feedback loop.",
      "Frustration from frequent CAPTCHA failures (70% needing multiple tries).",
      "Users sometimes abandon sessions (close browser/restart).",
      "Rotating CAPTCHAs seen as unnecessary and irritating.",
      "Desire for CAPTCHA replacement.",
      "Belief that CAPTCHAs are obsolete.",
    ],
    backgroundColor: "bg-accent-green",
  },
  {
    title: "Perceptions of Security",
    points: [
      "Some users believe 2FA and 6-digit codes are no longer secure (hackable).",
      "Phone-based 2FA (SMS OTP) is perceived as most secure because the phone is “always with them.”",
      "Preference for email OTP over SMS OTP.",
    ],
    backgroundColor: "bg-pastel-pink",
  },
  {
    title: "Trust & Reliability Issues",
    points: [
      "Sites don’t remember login info despite “keep me logged in” options.",
      "Annoyance with frequent automatic logouts.",
      "SMS OTP delays undermine trust.",
    ],
    backgroundColor: "bg-accent-tan",
  },
];

export default function page() {
  return (
    <main className="bg-main min-h-svh font-afacad mb-20">
      <WorkHeading
        text={"Gesture Based Authentication System"}
        subText={"UX & AI Class Project | Jan’25 - May’25"}
      />
      <div className="w-full bg-pastel-sage flex justify-center py-2">
        <img
          src="/images/gesture-based-authentication/cover.gif"
          alt="Gesture Based Authentication System Cover Image"
          className="w-3/5 h-auto"
        />
      </div>
      <div className="flex flex-row justify-center mt-4 text-xl text-blue-500">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Click to test the AI Model
        </a>
      </div>

      <div
        className="max-w-4xl mx-auto py-10 text flex flex-col gap-10 lg:p-0 lg:py-20 p-8"
        data-aos="fade-in"
      >
        <h2 className="text-3xl text-center font-bold fs-regular">
          Project Overview
        </h2>
        <p className="mt-4">
          <span className="font-black">Project: </span>
          <span>
            A gesture based authentication system that allows users to
            seamlessly login using hand gestures without the hassle of typing in
            annoying captchas or double factor authentication.
          </span>
        </p>
        <p>
          <span className="font-black">Goal: </span>
          <span>
            Designing AI-driven, password less security that feels human.
          </span>
        </p>
        <p>
          <span className="font-black">Role: </span>
          <span>This was my final project for my UX and AI class</span>
        </p>
        <p>
          <span className="font-black">Location: </span>
          <span>New York</span>
        </p>
      </div>
      <div className="bg-secondary py-10 lg:px-0 p-8">
        <WorkSubHeading headingText={"Problem Area"} />

        <div className="max-w-5xl mx-auto gap-4 flex flex-col mt-8">
          <p className="font-afacad text" data-aos="fade-in">
            We live in a world where our identities are constantly being
            verified — logging into work accounts, university portals, or even
            recipe websites. Each time, we face the same digital gatekeepers:
            passwords, CAPTCHAs, and Two-Factor Authentication (2FA). Whether
            it’s searching frantically for your phone to enter a six-digit code,
            or squinting at a CAPTCHA that can’t decide whether an image
            contains a “motorcycle” or not, the process feels exhausting.
          </p>
          <img
            src="/images/gesture-based-authentication/gesture-based-authentication-illustration-1.png"
            alt="gesture-based-authentication"
            className="w-2/3 ml-auto mt-2"
            data-aos="fade-in"
          />
          <div
            className="bg-pastel-green my-10 w-2/3 p-4 rounded-lg flex flex-col gap-2"
            data-aos="fade-in"
          >
            <p className="font-bold font-afacad text-xl" data-aos="fade-in">
              As a designer, I began to ask:
            </p>
            <p className="font-medium italic underline font-afacad text-xl">
              "If security is supposed to make us feel safe, why does it make us
              feel so frustrated?”
            </p>
          </div>
        </div>
        <WorkSubHeading headingText={"Problem Statement"} />
        <div className="max-w-5xl mx-auto flex flex-col gap-8 my-10">
          <div
            className="bg-pastel-pink p-8 text-2xl rounded-lg"
            data-aos="fade-in"
          >
            <p className="font-afacad">
              How might we design an{" "}
              <span className="font-bold">AI based authentication system</span>{" "}
              that ensures security while reducing user friction?
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <h2
        className="text-3xl my-10 font-afacad  text-center font-bold"
        data-aos="fad-in"
      >
        Timeline
      </h2>
      <p className="text-center font-afacad text-xl" data-aos="fade-in">
        The project was divided into 2 phases
      </p>
      <img
        className="mx-auto max-w-3xl my-20 w-3/4 lg:w-auto"
        src="/images/gesture-based-authentication/timeline.png"
        alt=""
        data-aos="fade-in"
      />
      <p
        className="text text-xl max-w-4xl mx-auto mb-32 lg:p-0 p-8"
        data-aos="fade-in"
      >
        The project was divided into two big phases- The UX Research Phase and
        the AI Model Development Phase. In the Research Phase, I did user
        research on security authentication systems and users frustration points
        around it. I also brainstormed different solutions and prototyped the
        final solution. In the second phase, I researched about existing AI
        gesture based models and built on them for my final soution.{" "}
      </p>
      <WorkSubHeading headingText={"Research"} />
      <p className="max-w-4xl mx-auto mt-20 text  lg:p-0 p-8">
        To understand the emotional and functional pain points, I combined user
        interviews, sentiment analysis of online forums (like Reddit), and
        observation studies during login sessions.
      </p>
      <p className="max-w-4xl mx-auto mb-20 text lg:p-0 p-8">
        I wasn’t just looking for what people struggled with — but how they felt
        when systems failed them.
      </p>
      <img
        className="mx-auto lg:max-w-7xl "
        src="/images/gesture-based-authentication/reddit.png"
        alt=""
        data-aos="fade-in"
      />
      <div className="relative w-full lg:max-w-8xl mb-20 min-h-screen mx-auto grid grid-cols-2 p-8 gap-2 lg:p-0 lg:flex items-center justify-center">
        <p className=" text-2xl lg:text-4xl font-semibold text-center lg:flex col-span-2">
          Mapping problems faced by Users
        </p>
        <StickyNote
          classes={"lg:top-0 lg:left-72"}
          content={
            "Needing to enter 'one-time codes' frequently is annoying, especially when sites don't remember login information despite claiming to keep users logged in"
          }
        />
        <StickyNote
          classes={"lg:top-40 lg:left-20"}
          content={
            "Needing 2FA when the phone is in another room interrupts the user's focus and comfort"
          }
        />
        <StickyNote
          classes={"lg:top-80 lg:left-28"}
          content={
            "Having to enter a six-digit number every time to access applications is annoying"
          }
        />
        <StickyNote
          classes={"lg:left-8 lg:bottom-40"}
          content={
            "Rotating CAPTCHAs: Perceived as unnecessary and irritating."
          }
        />

        <StickyNote
          classes={"lg:bottom-56 lg:left-72"}
          content={
            "Frustration arises from having to complete CAPTCHAs too often, especially when they fail on the first try. Multiple attempts are common (up to 70% needing a second try). This leads to closing the browser and restarting."
          }
        />
        <StickyNote
          classes={"lg:bottom-12 lg:left-52"}
          content={
            "Account Locked: Experienced with a Facebook account being permanently locked due to 2FA issues, creating caution about choosing 2FA methods."
          }
        />
        <StickyNote
          classes={"lg:left-80 lg:top-52"}
          content={
            "Losing your phone can prevent you from logging into anything that requires a code, including banking, social media, and even topping up a card to use laundry machines"
          }
        />
        <StickyNote
          classes={"lg:top-40 lg:left-96 lg:ml-32"}
          content={
            "Email OTP Preference: Generally prefers email OTP over SMS OTP."
          }
        />
        <StickyNote
          classes={"lg:bottom-0 lg:left-80 lg:ml-32"}
          content={
            "CAPTCHA Replacement Desire: Prefers 2FA over CAPTCHAs, despite the noted drawbacks."
          }
        />
        <StickyNote
          classes={"lg:top-8 lg:ml-12"}
          content={
            "Needing to enter 'one-time codes' frequently is annoying, especially when sites don't remember login information despite claiming to keep users logged in."
          }
        />
        <StickyNote
          classes={"lg:ml-32 lg:top-52"}
          content={
            "Awareness that CAPTCHAs are becoming more difficult due to advances in AI and OCR, leading to a negative feedback loop."
          }
        />
        <StickyNote
          classes={"lg:left-96 lg:ml-32 lg:bottom-48"}
          content={
            "Login Issue - Side tab is logged in and new tab won't login"
          }
        />
        <StickyNote
          classes={"lg:bottom-8 lg:right-96 lg:mr-48"}
          content={"Captchas have become obsolete"}
        />
        <StickyNote
          classes={"lg:top-4 lg:right-96"}
          content={
            "Irrelevant Security: The interviewee questions the need for CAPTCHAs on sites where security seems unnecessary (e.g., Chegg, recipe sites)."
          }
        />
        <StickyNote
          classes={"lg:ml-24 lg:bottom-52"}
          content={
            "Annoyance with frequent automatic logouts, requiring repeated 2FA authentication, even on the same device."
          }
        />
        <StickyNote
          classes={"lg:bottom-64 lg:right-64"}
          content={
            "Phone-Based Security: Believes phone-based 2FA (SMS OTP) is the most secure method because the phone is always with them."
          }
        />
        <StickyNote
          classes={"lg:top-48 lg:right-72"}
          content={
            "App-Based 2FA (e.g., NYU Duo): While preferred over CAPTCHAs, still seen as tedious. The need to switch to a separate app (Duo Mobile) for approval adds an extra step."
          }
        />
        <StickyNote
          classes={"lg:right-80 lg:mr-10 lg:bottom-24"}
          content={"SMS OTP Delays: OTP delays are a significant frustration."}
        />
        <StickyNote
          classes={"lg:right-4"}
          content={
            "Some users believe that 2FA and 6-digit codes are no longer secure and can be bypassed by attackers"
          }
        />

        <StickyNote
          classes={"lg:top-16 lg:right-8"}
          content={
            "Losing a phone can create a nightmare scenario where it's impossible to log into anything, even with the correct passwords, and can require getting a new phone number if the phone is lost"
          }
        />
        <img
          src="/images/gesture-based-authentication/interviews-illustration.png"
          className="lg:w-40 col-span-2 mx-auto lg:absolute lg:right-12 lg:bottom-12 lg:mt-0 mt-10"
          alt=""
          srcset=""
        />
      </div>
      <WorkSubHeading headingText={"Affinity Mapping"} />
      <div className="max-w-8xl mx-auto flex flex-row flex-wrap justify-center gap-4 mb-20">
        {contents.map((content, index) => (
          <AffinityContentBlock
            key={index}
            title={content.title}
            points={content.points}
            backgroundColor={content.backgroundColor}
          />
        ))}
      </div>
      <WorkSubHeading headingText={"Emerging Themes"} />
      <div className="max-w-4xl mx-auto text-center mt-10 flex flex-col gap-4">
        <p className="text-xl font-afacad">
          <span className="accent-text font-normal">
            Over-friction in authentication
          </span>{" "}
          → logins feel like a constant chore.
        </p>
        <p className="text-xl font-afacad">
          <span className="accent-text font-normal">Device fragility</span> → if
          phone is lost/dead, digital life is locked.
        </p>
        <p className="text-xl font-afacad">
          <span className="accent-text font-normal">CAPTCHA frustration </span>{" "}
          → seen as unnecessary, outdated, and ineffective.
        </p>
        <p className="text-xl font-afacad">
          <span className="accent-text font-normal">Security paradox</span> →
          users want safety but don’t trust current methods.
        </p>
        <p className="text-xl font-afacad">
          <span className="accent-text font-normal">Reliability gaps</span> →
          ldelays, failed CAPTCHAs, and unkept “remember me” promises create
          distrust.
        </p>
      </div>
      <img
        src="/images/gesture-based-authentication/convsec-illustration.png"
        alt=""
        className="w-1/2 mx-auto"
        data-aos="fade-in"
      />
      <WorkSubHeading headingText={"Cognitive Offloading Map"} />
      <p className="text-center mt-20 font-afacad text-xl font-normal my-20  lg:p-0 p-8">
        To understand how to balance control between humans and AI in the
        authentication process, I used <br />
        <span className="font-medium text-[#4D5F86]">
          the Cognitive Offloading Map .
        </span>
      </p>
      <img
        src="/images/gesture-based-authentication/cognititvemap.png"
        alt=""
        className="w-4/5 lg:w-1/2 mx-auto"
        data-aos="fade-in"
      />
      <p className="font-afacad max-w-4xl mx-auto text mt-20  lg:p-0 p-8">
        Through this mapping, I explored how AI can handle repetitive
        verification tasks while humans provide emotional and situational
        input. 
      </p>
      <p className="font-afacad max-w-4xl mx-auto text mb-20  lg:p-0 p-8">
        AI’s role becomes one of contextual intelligence — learning when to
        trust, while humans remain in charge of final consent.
      </p>
      <WorkSubHeading headingText={"Ideation"} />
      <p className="max-w-3xl font-afacad text-xl mx-auto  lg:p-0 p-8 text-center ">
        Since this project is part of my UX and AI class, I needed to develop an
        AI-driven solution. The following ideation outlines the concepts
        generated for this solution.
      </p>
      <div
        className="mx-auto max-w-5xl flex flex-col gap-10 mt-20 lg:p-0 p-8"
        data-aos="fade-in"
      >
        <h3 className="text-2xl font-bold font-afacad">
          Gesture Based Security Authentication System
        </h3>
        <p className="text-lg">
          Gesture-based security authentication system that allows users to
          verify their identity using intuitive gestures, reducing reliance on
          passwords and traditional two-factor authentication. By leveraging
          computer vision and motion detection, the system could recognize
          predefined gestures—such as peace sign, thumbs up, etc in a specific
          pattern.
        </p>
        <img
          src="/images/gesture-based-authentication/gesturemap1.png"
          alt=""
          className="w-full mx-auto mb-20"
          data-aos="fade-in"
        />
      </div>

      <div className="max-w-5xl mx-auto mt-20 flex flex-col gap-20 lg:p-0 p-8">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
          <div className="w-full lg:w-3/4 lg:pr-24">
            <h2 className="text-2xl font-bold mb-10">
              Haptics Based Security Authentication System
            </h2>
            <p className="text-lg">
              Using advanced Haptic Rendering Models, the system generates
              personalized vibration sequences based on pressure, motion, and
              intensity, ensuring each user experiences a distinct pattern. To
              log in, the user must mimic the exact feedback sequence through
              touch gestures, much like repeating a rhythm in a memory-based
              game. This approach transforms authentication into an intuitive
              and engaging process, replacing traditional passwords with a
              tactile signature that is both secure and playful.
            </p>
          </div>
          <div className="w-full lg:w-1/4">
            <p className="text-sm">
              ML5.js (for gesture recognition and training models) WebHaptics
              API / Vibration API (for haptic feedback on supported devices)
            </p>
          </div>
        </div>
        <img
          src="/images/gesture-based-authentication/gesturemap2.png"
          alt=""
          className="w-full mx-auto mb-20"
          data-aos="fade-in"
        />
      </div>
      <div className="max-w-5xl mx-auto flex flex-col gap-10 lg:p-0 p-8">
        <div className="flex flex-col lg:flex-row  gap-4 lg:gap-0 justify-between">
          <div className="w-full lg:w-3/4 lg:pr-24">
            <h2 className="text-2xl mb-10 font-bold">
              AI-Based Adaptive Authentication System{" "}
            </h2>
            <p className="text-lg">
              An AI-driven contextual authentication system that automatically
              logs in users based on trusted locations, network patterns, and
              behavioral biometrics—eliminating the need for traditional 2FA
              while maintaining security. Using Federated Learning: Allows AI to
              learn user patterns across devices without compromising privacy.
              Gait & Keystroke Dynamics Recognition: Machine learning models
              analyze user-specific behavior patterns.
            </p>
          </div>
          <div className="w-full lg:w-1/4">
            <p className="text-sm">
              TensorFlow
              <br />
              Google Cloud Vision API for landmark recognition
              <br />
              Google Maps API / OpenStreetMap (for GPS-based detection)
              <br />
              WiFi Fingerprinting with ML (for indoor location tracking)
              TensorFlow / Scikit-Learn (for training the model)
            </p>
          </div>
        </div>
        <img
          src="/images/gesture-based-authentication/gesturemap3.png"
          alt=""
          className="w-full mx-auto mb-20"
          data-aos="fade-in"
        />
      </div>
      <WorkSubHeading headingText={"Final Solution"} />
      <div className="flex justify-center lg:p-0 p-8">
        <h2 className="font-afacad font-bold p-8 bg-[#DEC2C2] text-[#8C3232] rounded-xl text-2xl">
          Gesture Based Authentication System
        </h2>
      </div>
      <div className="text-center flex flex-row justify-center gap-2 items-center my-10">
        <h3 className="font-afacad text-4xl font-bold text-[#39666A]">
          Why Gestures?
        </h3>
        <img
          src="/images/gesture-based-authentication/thinking.png"
          className="w-12"
          alt=""
          data-aos="fade-in"
        />
      </div>
      <div
        className="bg-accent-green p-12 max-w-6xl rounded-3xl mx-auto font-afacad font-medium"
        data-aos="fade-in"
      >
        <p>
          My approach to this project stems from a strong interest in
          observational user research, specifically analyzing how individuals
          naturally interact with their environment and leveraging those
          insights to develop intuitive and user-friendly technological
          solutions. I think if you really get that, you can make tech way
          easier and less annoying. So, when I was brainstorming about security,
          I wanted to find ways to prove you're a real person and not a bot, but
          also that doesn't drive users crazy.
        </p>
        <p>
          And, you know, as someone from Gen Z, we use gestures all the time to
          communicate – like the peace sign or thumbs up. Plus, I'm seeing
          gesture recognition pop up in more and more tech. So, I thought, 'Why
          not use gestures for security?' It could be kind of fun and playful,
          but also really secure, since robots can't really do human gestures
          convincingly. For me, it was a perfect match – solving the security
          problem while also making things more accessible.
        </p>
      </div>
      <div className=" max-w-5xl mx-auto flex flex-col gap-10 mt-20">
        <h2 className=" text-center font-afacad font-bold text-3xl">
          Building the Final Model
        </h2>
        <div className="flex lg:p-0 p-2">
          <div className=" sub-title-container font-afacad font-bold text-xl ">
            <p>Understanding the Mental Models of Users</p>
          </div>
        </div>
        <div className="max-w-5xl flex flex-col gap-10 mx-auto">
          <img
            src="/images/gesture-based-authentication/mentalmodel1.png"
            alt=""
          />

          <img
            src="/images/gesture-based-authentication/mentalmodel2.png"
            alt=""
            data-aos="fade-in"
          />
          <img
            src="/images/gesture-based-authentication/mentalmodel3.png"
            alt=""
            data-aos="fade-in"
          />
          <img
            src="/images/gesture-based-authentication/mentalmodel4.png"
            alt=""
            data-aos="fade-in"
          />
          <img
            src="/images/gesture-based-authentication/mentalmodel5.png"
            alt=""
            data-aos="fade-in"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col gap-10  lg:p-0 p-2">
        <div className="flex my-10">
          <div className=" sub-title-container font-afacad font-bold text-2xl">
            <p>UI Sketches</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col p-2 lg:p-0">
            <h3 className="font-afacad font-semibold text-xl">
              {" "}
              Dividing AI and Human
            </h3>
            <img
              src="/images/gesture-based-authentication/sketch1.png"
              alt=""
              srcset=""
              data-aos="fade-in"
            />
            <img
              src="/images/gesture-based-authentication/sketch1.png"
              alt=""
              srcset=""
              data-aos="fade-in"
            />
          </div>
          <div className="flex flex-col lg:p-0 p-2">
            <h3 className="font-afacad font-semibold text-xl">Pop Up</h3>
            <img
              src="/images/gesture-based-authentication/sketch1.png"
              alt=""
              srcset=""
              className="lg:w-auto w-4/5 mx-auto"
              data-aos="fade-in"
            />
            <img
              src="/images/gesture-based-authentication/sketch1.png"
              alt=""
              srcset=""
              className="lg:w-auto w-4/5 mx-auto"
              data-aos="fade-in"
            />
          </div>
          <div className="flex flex-col lg:p-0 p-2">
            <h3 className="font-afacad font-semibold text-xl">
              User on Full Screen
            </h3>
            <img
              src="/images/gesture-based-authentication/sketch1.png"
              alt=""
              srcset=""
              className="lg:w-auto w-4/5 mx-auto"
              data-aos="fade-in"
            />
            <img
              src="/images/gesture-based-authentication/sketch1.png"
              alt=""
              srcset=""
              className="lg:w-auto w-4/5 mx-auto"
              data-aos="fade-in"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex my-10 lg:p-0 p-2">
          <div className=" sub-title-container font-afacad font-bold text-2xl">
            <p>Prototype</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <img
            src="/images/gesture-based-authentication/proto1.png"
            className="lg:w-auto w-4/5 mx-auto"
            data-aos="fade-in"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto2.png"
            className="lg:w-auto w-4/5 mx-auto"
            data-aos="fade-in"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto3.png"
            className="lg:w-auto w-4/5 mx-auto"
            data-aos="fade-in"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto4.png"
            className="lg:w-auto w-4/5 mx-auto"
            data-aos="fade-in"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto5.png"
            className="lg:w-auto w-4/5 mx-auto"
            data-aos="fade-in"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto6.png"
            className="lg:w-auto w-4/5 mx-auto"
            data-aos="fade-in"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto7.png"
            data-aos="fade-in"
            className="lg:w-auto w-4/5 mx-auto"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto8.png"
            data-aos="fade-in"
            className="lg:w-auto w-4/5 mx-auto"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto9.png"
            data-aos="fade-in"
            className="lg:w-auto w-4/5 mx-auto"
            alt=""
          />
          <img
            src="/images/gesture-based-authentication/proto10.png"
            data-aos="fade-in"
            className="lg:w-auto w-4/5 mx-auto"
            alt=""
          />
        </div>
      </div>
      <img
        src="/images/gesture-based-authentication/proto11.png"
        className="mx-auto max-w-5xl my-40 w-4/5"
        data-aos="fade-in"
        alt=""
      />
      <img
        src="/images/gesture-based-authentication/proto12.png"
        data-aos="fade-in"
        className="mx-auto max-w-5xl my-40 w-4/5"
        alt=""
      />
      <div>
        <h2 className="text-center text-4xl font-bold my-10 font-afacad">
          Final Working Model
        </h2>
        <img
          src="/images/gesture-based-authentication/cover.gif"
          className="w-full lg:w-1/2 mx-auto"
          data-aos="fade-in"
          alt=""
        />
      </div>
    </main>
  );
}
