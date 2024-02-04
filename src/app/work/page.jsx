import Image from "next/image";
import "./work.css";
import { avigeaFont } from "@/utils/fonts";

const Work = () => {
  return (
    <div className="my-16 text-center work">
      <div className="project">
        <div className="mb-10 project__title">
          <div className="mb-3 text-lg font-bold md:mb-6 md:text-3xl">
            Extending the capabilities of Shape Tools | Adobe Illustrator
          </div>
          <div className="text-base md:text-2xl opacity-60">
            Internship Project | May&apos;23 - July&apos;23
          </div>
        </div>
        <Image className="project-header-img" src={"/project-header.png"} width={1968.01} height={678.55} />

        <section className="pb-12 after:w-1/6">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            Project Overview
          </div>
          <div className="section-content">
            <p className="mb-6 text-sm md:text-xl">
              Exploring how we can extend the capabilities of existing shape
              tools in Illustrator
            </p>
            <p className="text-xs italic md:text-base opacity-60">
              Note: This project falls under a{" "}
              <u>Non-Disclosure Agreement with Adobe Design</u>, some of the
              content has been omitted due to the same.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            <Image
              className="m-auto"
              src={"/illust-1.png"}
              width={80}
              height={80}
            />
            But why extend the capabilities of shape tools?
          </div>
          <div className="text-sm text-justify md:text-xl section-content">
            <p>
              Over the years, shape tools haven't looked much different from MS
              Paint days, but technology has changed a lot. We now want these
              advanced technologies to make our creative work faster and better
              with improved tools. It's time to upgrade and add new features to
              the shape tools we're used to.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            Process
          </div>
          <div className="text-sm md:text-xl section-content">
            <p>The project was divided into 2 phases.</p>
            <Image
              src={"/project-img-1.png"}
              className="m-auto my-10"
              width={700}
              height={243}
            />
            <p className="text-justify">
              Initially, we embarked on a journey of exploration and
              comprehension, diving deep into the problem and discerning user
              needs. Subsequently, we fostered a plethora of innovative ideas to
              address the issue at hand. Finally, we meticulously refined and
              selected the most promising concepts, ultimately translating them
              into tangible prototypes.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            Deep Dive
          </div>
          <div className="text-sm md:text-xl section-content">
            <p>The initial research was divided into</p>
            <Image
              src={"/project-img-2.png"}
              className="m-auto my-10"
              width={700}
              height={243}
            />
            <p className="text-justify">
              The initial phase of our research involved an extensive
              exploration to comprehend both the problem areas and the user
              base. This journey commenced with a meticulous software audit,
              followed by a thorough analysis of the competition, and culminated
              in conducting four in-depth user interviews. These sequential
              steps provided us with clarity and a foundational understanding of
              the project's landscape, setting a strong groundwork for our
              design endeavors.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            Insights
          </div>
          <div className="text-sm md:text-xl section-content">
            <p>We categorized the insights gathered into three main areas.</p>
            <Image
              src={"/project-img-3.png"}
              className="m-auto my-10"
              width={1024}
              height={243}
            />
            <p className="mb-8 text-justify">
              The first pertains to <span>DISCOVERABILITY</span>. Our research
              highlighted a significant concern regarding the difficulty users
              face in locating advanced features within the Shapes Panel.
              Despite the wide array of available tools and effects, users often
              encounter challenges when trying to locate and utilize them
              effectively.
            </p>
            <p className="mb-8 text-justify">
              The second category revolves around <span>ENHANCEMENT</span>. In
              addition to addressing discoverability issues, it is imperative to
              improve the functionality of the shapes provided in the Shapes
              Panel. Users are expressing a desire for greater versatility and
              the ability to create intricate shapes effortlessly.
            </p>
            <p className="mb-8 text-justify">
              Moreover, the rapidly advancing pace of <span>TECHNOLOGY</span> is
              reshaping the way we engage with digital tools and conduct our
              work. Consequently, there is a growing demand to integrate these
              technological advancements into the Shapes Panel to expedite and
              streamline the design process.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            <Image
              className="m-auto"
              src={"/illust-2.png"}
              width={80}
              height={80}
            />
            Finding Problems
          </div>
          <div className="text-sm md:text-xl section-content">
            <p className="text-justify">
              The most critical phase was the process of pinpointing the diverse
              challenges and obstacles encountered by users. This step was of
              paramount importance as it laid the foundation for the project's
              final stages setting the stage for a comprehensive understanding
              of the issues users were facing.
            </p>
            <Image
              src={"/project-img-4.png"}
              className="m-auto my-10"
              width={1024}
              height={243}
            />
          </div>
        </section>

        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            <Image
              className="m-auto"
              src={"/illust-3.png"}
              width={80}
              height={80}
            />
            Identifying Similar Patterns
          </div>
          <div className="text-sm md:text-xl section-content">
            <p className="">
              Having identified an extensive and broad range of issues, common
              patterns emerged among the identified problems.
            </p>
            <Image
              src={"/project-img-5.png"}
              className="m-auto my-10"
              width={1024}
              height={243}
            />
            <p className="mb-6 text-justify">
              All these patterns that were recognized became the key pillars
              serving as the foundation for the solution:
            </p>
            <ol className="pl-8 text-justify list-decimal marker:font-bold">
              <li>
                <div className="inline-block font-bold">
                  Future Technologies:
                </div>{" "}
                Exploring technologies and trends to ensure our solution stays
                relevant and adaptable to upcoming advancements.
              </li>
              <li>
                <div className="inline-block font-bold">
                  Discoverability of Current Capabilities:
                </div>{" "}
                Focusing on making existing shape creation tools more intuitive
                and easier to find. Bridging Gaps in Existing Functionality:
                Addressing any shortcomings or limitations in the current tools.
              </li>
              <li>
                <div className="inline-block font-bold">
                  Coming Up with Newer Capabilities:
                </div>{" "}
                Aiming to introduce innovative features and tools, expanding the
                possibilities for shape creation.
              </li>
              <li>
                <div className="inline-block font-bold">
                  Small Help and Nudges:
                </div>{" "}
                Recognizing the importance of user assistance, we integrated
                subtle yet valuable nudges and helpful tips to guide users and
                provide delightful surprises during idle moments.
              </li>
            </ol>
          </div>
        </section>

        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            Explorations
          </div>
          <div className="text-sm md:text-xl section-content">
            <p className="">
              A pivotal phase in my project journey revolved around ideation and
              conceptualization. To broaden the spectrum of ideas, we engaged in
              a dynamic brainstorming session using the Random Word or Object
              Prompts Ideation method.
            </p>
            <Image
              src={"/project-img-6.png"}
              className="m-auto my-10"
              width={1024}
              height={243}
            />
          </div>
        </section>

        {/* NEEDS SOME CHANGES */}
        <section className="pb-24">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            Concepts
          </div>
          <div className="text-sm md:text-xl section-content">
            <p className="text-justify">
              As observed in our explorations, we encountered numerous
              challenges to address.{" "}
              <span>
                However, a prominent issue that stood out was the deficiency in
                discoverability
              </span>
              . Recognizing this as a central concern, we decided to anchor our
              concept around discoverability and sought to integrate other
              pillars and concepts within this framework.
            </p>
            <Image
              src={"/illust-4.png"}
              className="m-auto"
              width={400}
              height={400}
            />
            <Image
              src={"/project-img-7.png"}
              className="m-auto my-10"
              width={1024}
              height={243}
            />
            <p className="text-justify">
              The Tool Properties Panel incorporates elements from 10 distinct
              solutions, organized into four sections. As we delved into the
              discussion about the pillars earlier, we formulated various
              concepts aligned with each of those pillars.
            </p>
            <Image
              src={"/project-img-8.png"}
              className="m-auto my-10"
              width={1024}
              height={243}
            />
            <p className="text-xs italic md:text-base opacity-60">
              Note: The details of each of the concept in the Tool Properties
              Panel has been omitted as it falls under NDA. For further
              discussion on the solutions, feel free to reach out :&#41;
            </p>
          </div>
        </section>

        <section className="pb-24 after:hidden">
          <div className="mt-12 mb-5 text-lg font-bold md:mb-10 md:text-3xl section-title">
            Conclusion
          </div>
          <div className="text-sm md:text-xl section-content">
            <p className="text-justify">
              The artworks showcased below can be exclusively crafted utilizing
              the tool properties panel within a mere 10-minute timeframe. This
              highlights the efficiency and versatility of the panel,
              emphasizing its role as the sole tool employed in the creative
              process. The brevity of the timeframe underscores the quick and
              accessible nature of the artistic capabilities achievable through
              this specific tool, demonstrating its effectiveness in
              facilitating rapid and impressive artistic output.
            </p>
            <div className="flex w-full gap-2 md:gap-8">
              <Image
                src={"/project-img-9.png"}
                className="m-auto avatar"
                width={500}
                height={243}
              />
              <Image
                src={"/project-img-10.png"}
                className="m-auto my-10 avatar"
                width={500}
                height={243}
              />
            </div>
          </div>
        </section>

        <section className="after:hidden">
          <div className={`${avigeaFont.className} thanks text-2xl md:text-4xl capitalize`}>
            A heartfelt thanks to
          </div>
          <div className="section-content">
            <p className="my-10 text-base md:text-xl">
              The @Adobe Design team :&#41;
              <br />
              Especially
            </p>
            <div className="flex justify-around text-sm md:text-lg my-18">
              <div className="flex flex-col gap-1 md:gap-3">
                <Image
                  src={"/rakesh.jpeg"}
                  width={300}
                  height={300}
                  className="m-auto mb-5 border-2 rounded-full grayscale brightness-100 contrast-150 avatar"
                  style={{borderColor: 'var(--secondary-color)'}}
                />
                <p className="font-bold">RAKESH BAIDYA</p>
                <p>Staff Experience Designer</p>
                <p>Project Mentor</p>
              </div>
              <div className="flex flex-col gap-1 md:gap-3">
                <Image
                  src={"/mrin.jpeg"}
                  width={300}
                  height={300}
                  className="m-auto mb-5 border-2 rounded-full grayscale avatar"
                  style={{borderColor: 'var(--secondary-color)'}}
                />
                <p className="font-bold">MRINALINI SARDAR</p>
                <p>Design Leadership</p>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </section>

        <div className="project-footer">
          <Image src={'/project-footer.png'} width={1920} height={250} />
        </div>
      </div>
    </div>
  );
};

export default Work;
