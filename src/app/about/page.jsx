import { avigeaFont } from "@/utils/fonts";
import "./about.css";
import ImageStackSlideshow from "@/components/ImageStack";
import { Footer } from "@/components";

const About = () => {
  return (
    <>
      <main className="m-auto max-w-screen-2xl text-afacad pb-40  lg:px-0 font-afacad">
        <div className=" flex flex-col-reverse items-center justify-center gap-3 mx-auto md:my-8 md:max-lg:w-11/12 md:w-9/12  md:flex-row md:gap-0">
          <div className="flex flex-col lg:gap-8 p-8 lg:p-0 md:w-1/2 ">
            <h2
              className={`${avigeaFont.className} text-2xl md:text-4xl italic`}
            >
              Hey fellow
              <br />
              human bean!
            </h2>
            <div className="flex flex-col gap-4 text-xs md:gap-6 md:w-3/4 md:text-xl">
              <p>
                I&apos;m Deepali Babuta&#44; a Product Designer based in New
                York&#44; currently in my final year of MS in Integrated Design
                and Media at NYU.
              </p>
              <p>
                I&apos;m a creative individual passionate about crafting
                meaningful experiences that stir emotions. When not designing
                you’ll find me hanging out at an overpriced coffee place,
                petting dogs or painting eyes (yes v specific :) )
              </p>

              <div className="mt-4">
                <p>
                  <span className="font-bold text-2xl">Email:</span>{" "}
                  <span className="font-thin text-xl">
                    deepalibabuta@gmail.com
                  </span>
                </p>
                <p>
                  <span className="font-bold text-2xl">Phone no:</span>{" "}
                  <span className="font-thin text-xl">+1 201-993-6070</span>
                </p>
              </div>
            </div>
          </div>
          <ImageStackSlideshow />
        </div>
        {/* <section className="flex flex-col w-9/12 m-auto my-24 text-base border md:max-lg:w-11/12 about__background md:flex-row">
        <div className="flex flex-col w-full md:border-r md:w-2/5 md:max-lg:w-43 section-item grow">
          <div className="px-10 py-8 text-2xl border-b md:max-lg:py-6 md:max-lg:px-7 md:py-12 md:px-14 section-title">
            <h3 className={`${avigeaFont.className}`}>Skills and Interests</h3>
          </div>
          <div className="flex flex-col gap-8 px-10 py-10 text-xs md:py-20 md:max-lg:py-10 md:max-lg:px-7 md:px-14 section-description md:text-base">
            <p>
              I like exploring the emotional versatality of humans with
              technology&#44; aiming to explore the profound impact that
              technology can have on our emotional experiences. Through my
              projects&#44; I seek to unravel the intricate ways in which
              technology can augment&#44; enhance&#44; or even reshape the
              emotional landscape of individuals.
            </p>
            <p>
              I navigate challenges with ease. My unique skill set spans product
              and visual design&#44; research&#44; branding&#44; graphic design
              and storytelling.
            </p>
            <p>
              In my free time&#44; i just like to go back to my basics and paint
              :&#41;
            </p>
          </div>
        </div>
        <div className="flex flex-col md:border-r section-item grow">
          <div className="px-10 py-8 text-2xl border-t border-b md:py-12 md:border-t-0 md:px-14 md:max-lg:py-6 md:max-lg:px-7 section-title">
            <h3 className={`${avigeaFont.className}`}>Education</h3>
          </div>
          <div className="px-10 py-10 text-xs md:py-20 md:px-14 md:max-lg:py-10 md:max-lg:px-7 section-description md:text-base">
            <div className="description-item">
              <div className="title">Delhi Technological University</div>
              <div className="mb-8 details">
                <p>2020-2024</p> <p>B.des in Product and Interaction Design</p>
              </div>
            </div>
            <div className="description-item">
              <div className="title">St. Marks Sr. Sec. School </div>
              <div className="mb-8 details">
                <p>2017-2019</p>
                <p>PCMB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col section-item grow">
          <div className="px-10 py-8 text-2xl border-t border-b md:py-12 md:px-14 md:border-t-0 md:max-lg:py-6 md:max-lg:px-7 section-title">
            <h3 className={`${avigeaFont.className}`}>Experience</h3>
          </div>
          <div className="px-10 py-10 text-xs md:py-20 md:px-14 md:max-lg:py-10 md:max-lg:px-7 section-description md:text-base">
            <div className="description-item">
              <div className="title">HDFC</div>
              <div className="mb-8 details">
                <p>Feb&apos;24 - Present</p>
                <p>Experience Design Intern</p>
              </div>
            </div>
            <div className="description-item">
              <div className="title">Adobe</div>
              <div className="mb-8 details">
                <p>May&apos;23 - Jul&apos;23</p>
                <p>Experience Design Intern</p>
              </div>
            </div>
            <div className="description-item">
              <div className="title">Convert IAS</div>
              <div className="mb-8 details">
                <p>Aug&apos;22 - Dec&apos;22</p>
                <p>UX/UI Intern</p>
              </div>
            </div>
            <div className="description-item">
              <div className="title">Pvrvdox</div>
              <div className="mb-8 details">
                <p>Sep&apos;21 - Mar&apos;22</p>
                <p>UX/UI Intern</p>
              </div>
            </div>
            <div className="description-item">
              <div className="title">Kryptonas Innovatios Pvt. Ltd.</div>
              <div className="mb-8 details">
                <p>May&apos;21 - Aug&apos;21</p>
                <p>Graphic Design Intern</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* <section className="flex flex-col w-9/12 m-auto my-4 text-base md:max-lg:w-11/12 about__background md:flex-row">
      <h2 className={`${avigeaFont.className} text-2xl md:text-4xl italic`}>
            What Differentiates me as a Designer ?
          </h2>
      </section> */}

        <div className="max-w-5xl flex flex-col gap-20 mx-auto lg:p-0 p-8">
          <h2 className={`${avigeaFont.className} text-2xl md:text-4xl italic`}>
            What Differentiates me as a Designer ?
          </h2>
          <div className="relative w-fit" data-aos="fade-in">
            {/* Speech Bubble */}
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#BECFBC] rounded-2xl p-8 relative z-20 lg:gap-0 gap-2">
              <div className="flex flex-row items-center gap-4">
                {/* Star Icon */}
                <svg
                  width="78"
                  height="75"
                  viewBox="0 0 78 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.5439 2.05762C37.2742 -0.188918 40.4523 -0.188916 41.1826 2.05762L48.4297 24.3604C48.8561 25.6724 50.0784 26.5613 51.458 26.5615H74.9082C77.2709 26.5615 78.2532 29.5849 76.3418 30.9736L57.3711 44.7568C56.2549 45.5678 55.7876 47.0052 56.2139 48.3174L63.46 70.6201C64.1901 72.8671 61.6185 74.7354 59.707 73.3467L40.7354 59.5635C39.6191 58.7524 38.1075 58.7524 36.9912 59.5635L18.0195 73.3467C16.1081 74.7354 13.5365 72.8671 14.2666 70.6201L21.5127 48.3174C21.9389 47.0052 21.4717 45.5678 20.3555 44.7568L1.38477 30.9736C-0.526673 29.5849 0.455691 26.5615 2.81836 26.5615H26.2686C27.6482 26.5613 28.8705 25.6724 29.2969 24.3604L36.5439 2.05762Z"
                    fill="#FFEFAF"
                    stroke="black"
                    strokeWidth="0.746032"
                  />
                </svg>

                <h2 className="text-black text-3xl font-semibold">
                  I design for emotion.
                </h2>
              </div>

              <div className="text-black leading-relaxed text-lg">
                <p>
                  I design to evoke emotion and reflection — creating moments
                  that feel as much as they function. From mapping emotions
                  through texture to crafting wellness-centered interactions
                  that pull people away from screens, I’m drawn to how design
                  can deepen our connection with ourselves and the world around
                  us.
                </p>
              </div>
            </div>

            {/* Tail SVG */}
            <svg
              className="absolute -bottom-6 -left-8 z-10"
              width="94"
              height="52"
              viewBox="0 0 94 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 51.5C25.6 39.9 38.3333 12.3333 41.5 0C64.3333 1.16667 106 8 90 26C74 44 23.3333 50.5 0 51.5Z"
                fill="#BECFBC"
              />
            </svg>
          </div>
          <div className="relative w-fit" data-aos="fade-in">
            {/* Speech Bubble */}
            <div className="grid  grid-cols-1 lg:grid-cols-2 bg-[#DEC2C2] rounded-2xl p-8 relative z-20  lg:gap-0 gap-2">
              <div className="flex flex-row items-center gap-4">
                {/* Star Icon */}
                <svg
                  width="78"
                  height="75"
                  viewBox="0 0 78 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.5439 2.05762C37.2742 -0.188918 40.4523 -0.188916 41.1826 2.05762L48.4297 24.3604C48.8561 25.6724 50.0784 26.5613 51.458 26.5615H74.9082C77.2709 26.5615 78.2532 29.5849 76.3418 30.9736L57.3711 44.7568C56.2549 45.5678 55.7876 47.0052 56.2139 48.3174L63.46 70.6201C64.1901 72.8671 61.6185 74.7354 59.707 73.3467L40.7354 59.5635C39.6191 58.7524 38.1075 58.7524 36.9912 59.5635L18.0195 73.3467C16.1081 74.7354 13.5365 72.8671 14.2666 70.6201L21.5127 48.3174C21.9389 47.0052 21.4717 45.5678 20.3555 44.7568L1.38477 30.9736C-0.526673 29.5849 0.455691 26.5615 2.81836 26.5615H26.2686C27.6482 26.5613 28.8705 25.6724 29.2969 24.3604L36.5439 2.05762Z"
                    fill="#FFEFAF"
                    stroke="black"
                    strokeWidth="0.746032"
                  />
                </svg>

                <h2 className="text-black text-3xl font-semibold">
                  I actively seek feedback.{" "}
                </h2>
              </div>

              <div className="text-black leading-relaxed text-lg">
                <p>
                  I see feedback as collaboration, not critique. I actively seek
                  out different perspectives — from mentors, peers, and users —
                  because they challenge my assumptions and help my work grow in
                  directions I might not have seen on my own.
                </p>
              </div>
            </div>

            {/* Tail SVG */}
            <svg
              width="94"
              height="52"
              viewBox="0 0 94 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-6 -right-8 z-10"
            >
              <path
                d="M93.5684 51.5C67.9684 39.9 55.235 12.3333 52.0684 0C29.235 1.16667 -12.4316 8 3.56836 26C19.5684 44 70.235 50.5 93.5684 51.5Z"
                fill="#DEC2C2"
              />
            </svg>
          </div>
          <div className="relative w-fit" data-aos="fade-in">
            {/* Speech Bubble */}
            <div className="grid  grid-cols-1 lg:grid-cols-2 bg-[#BECFBC] rounded-2xl p-8 relative z-20  lg:gap-0 gap-2">
              <div className="flex flex-row items-center gap-4">
                {/* Star Icon */}
                <svg
                  width="78"
                  height="75"
                  viewBox="0 0 78 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.5439 2.05762C37.2742 -0.188918 40.4523 -0.188916 41.1826 2.05762L48.4297 24.3604C48.8561 25.6724 50.0784 26.5613 51.458 26.5615H74.9082C77.2709 26.5615 78.2532 29.5849 76.3418 30.9736L57.3711 44.7568C56.2549 45.5678 55.7876 47.0052 56.2139 48.3174L63.46 70.6201C64.1901 72.8671 61.6185 74.7354 59.707 73.3467L40.7354 59.5635C39.6191 58.7524 38.1075 58.7524 36.9912 59.5635L18.0195 73.3467C16.1081 74.7354 13.5365 72.8671 14.2666 70.6201L21.5127 48.3174C21.9389 47.0052 21.4717 45.5678 20.3555 44.7568L1.38477 30.9736C-0.526673 29.5849 0.455691 26.5615 2.81836 26.5615H26.2686C27.6482 26.5613 28.8705 25.6724 29.2969 24.3604L36.5439 2.05762Z"
                    fill="#FFEFAF"
                    stroke="black"
                    strokeWidth="0.746032"
                  />
                </svg>

                <h2 className="text-black text-3xl font-semibold">
                  I adapt to the situation.{" "}
                </h2>
              </div>

              <div className="text-black leading-relaxed text-lg">
                <p>
                  I’ve learned to forgo the “perfect” design process — embracing
                  uncertainty, making the most of what’s at hand, and carrying a
                  get-started-and-figure-it-out energy.
                </p>
              </div>
            </div>

            {/* Tail SVG */}
            <svg
              className="absolute -bottom-6 -left-8 z-10"
              width="94"
              height="52"
              viewBox="0 0 94 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 51.5C25.6 39.9 38.3333 12.3333 41.5 0C64.3333 1.16667 106 8 90 26C74 44 23.3333 50.5 0 51.5Z"
                fill="#BECFBC"
              />
            </svg>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
