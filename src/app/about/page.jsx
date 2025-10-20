import { avigeaFont } from "@/utils/fonts";
import "./about.css";
// import about from "../../assets/about.png";

const About = () => {
  return (
    <main className="m-auto about max-w-screen-2xl">
      <div className="flex flex-col-reverse items-center justify-center w-10/12 gap-3 mx-auto md:my-8 md:max-lg:w-11/12 md:w-9/12 about__content md:flex-row md:gap-0">
        <div className="flex flex-col gap-8 pl-8 md:w-1/2 about__text">
          <h2 className={`${avigeaFont.className} text-2xl md:text-4xl italic`}>
            Hey fellow
            <br />
            human bean!
          </h2>
          <div className="flex flex-col gap-4 text-xs md:gap-6 md:w-3/4 md:text-lg">
            <p>
              I&apos;m <a href="https://www.youtube.com/watch?v=Mvg79yrgatY&t=3s" target="_blank">Deepali Babuta</a>&#44; a Product Designer based in New
              York&#44; currently in my final year of MS in Integrated Design and Media at NYU.

            </p>
            <p>
              I&apos;m a creative individual passionate about crafting
              meaningful experiences that stir emotions. When not designing you’ll find me hanging out at an  overpriced coffee place, petting dogs or painting eyes (yes v specific :) )
            </p>

          </div>
        </div>
        <div className="relative w-full h-full mt-10 md:w-1/2 about__img md:mt-0">
          <img src="/img-1.png" className="" alt="Hi&#44; this is Deepali." />
          <img src="/img-2.png" className="" alt="Hi&#44; this is Deepali." />
          <img src="/img-3.png" className="" alt="Hi&#44; this is Deepali." />
        </div>
      </div>

      {/* <section className="flex flex-col gap-8 pl-8 md:w-1/2 about__text differentiators-section"> */}

        {/* <h2 className={`${avigeaFont.className} text-2xl md:text-4xl italic`}>What Differentiates me as a Designer?</h2> */}

        {/* <img src="/about.png" alt="about bubbles" /> */}
      {/* </section> */}


      <section className="flex flex-col w-9/12 m-auto my-24 text-base border md:max-lg:w-11/12 about__background md:flex-row">
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
      </section>
    </main>
  );
};

export default About;
