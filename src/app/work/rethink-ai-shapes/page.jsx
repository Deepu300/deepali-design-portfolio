import React from "react";
import { avigeaFont } from "@/utils/fonts";
import WorkHeading from "@/components/WorkHeading";
/* The Problem: While Adobe Illustrator has grown into one of the most advanced design tools, its Shape Tools have remained almost unchanged for years. These tools are the foundation of most designs, yet many users still struggle to create, edit, or customize even basic shapes. Despite being considered simple, shapes play a big role in the creative process — from quick sketches to complex illustrations.This project aimed to reimagine the Shape Tools experience by making it more intuitive, flexible, and aligned with how designers work today. The goal was to help users create shapes faster and explore ideas more freely without feeling limited by outdated interactions. Timeline: 10 weeks Role: UX Design Intern Team: CC Illustrator Desktop Team Location: Adobe India */

export default function page() {
  return (
    <div className="bg-main font-afacad text-sm lg:text-xl line-height-base">
      <WorkHeading
        text={"Extending the capabilities of Shape Tools | Adobe Illustrator"}
        subText={"Internship Project | May' 23 - July' 23"}
      />
      <div className="bg-gray-700 text-center flex flex-row justify-center p-4">
        <img
          src="/images/extending-the-capabilities.png"
          alt="Description of image"
          className=" h-auto w-3/4 mx-auto"
        />
      </div>
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4"
        data-aos="fade-in"
      >
        <h2 className="text-2xl lg:text-5xl text-center my-10">
          Project Overview
        </h2>
        <p className="line-height-base">
          <span className="font-bold">The Problem:</span> While Adobe
          Illustrator has grown into one of the most advanced design tools, its
          Shape Tools have remained almost unchanged for years. These tools are
          the foundation of most designs, yet many users still struggle to
          create, edit, or customize even basic shapes. Despite being considered
          simple, shapes play a big role in the creative process — from quick
          sketches to complex illustrations.This project aimed to reimagine the
          Shape Tools experience by making it more intuitive, flexible, and
          aligned with how designers work today. The goal was to help users
          create shapes faster and explore ideas more freely without feeling
          limited by outdated interactions.
        </p>

        <p className="mt-10">
          <span className="font-bold">Timeline: </span> 10 weeks
        </p>
        <p>
          <span className="font-bold">Role: </span> UX Design Intern
        </p>
        <p>
          <span className="font-bold">Team: </span> CC Illustrator Desktop Team
        </p>
        <p>
          <span className="font-bold">Location: </span>
          Adobe India
        </p>
        <img
          src="/images/rethink-ai-shapes/team.png"
          className="w-4/5 mx-auto"
          alt=""
          data-aos="fade-in"
        />
      </div>
      <img
        src="/images/rethink-ai-shapes/process.png"
        className="max-w-full"
        alt=""
        data-aos="fade-in"
      />
      <div
        className="w-full lg:p-10 grid grid-cols-1 lg:grid-cols-2 mx-auto"
        data-aos="fade-in"
      >
        <div className="flex flex-col gap-2 lg:gap-10 order-2 lg:order-1">
          <img
            src="/images/rethink-ai-shapes/youtube.png"
            alt="reddit comment 8"
            className="w-[100%]"
            data-aos="fade-in"
          />
          <div
            className=" mt-20 lg:mt-0 flex lg:flex-row flex-col gap-10 justify-between items-start pr-10"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="border lg:w-96 text-base font-medium border-gray-900 p-6 gesture-card">
              <p>
                My Reddit and YouTube deep dive{" "}
                <span className="accent-text">
                  revealed that a large percentage of users struggle to create
                  even basic shapes in Illustrator,
                </span>{" "}
                confirming that this is a widespread issue.
              </p>
              <p>
                To better understand where users face difficulties, I created a
                detailed research plan to explore the key pain points and
                problem areas.
              </p>
            </div>
            <img
              src="/images/rethink-ai-shapes/downward-arrow.png"
              alt="reddit comment 8"
              className="h-32 lg:h-96 mx-auto"
              data-aos="fade-in"
            />
          </div>
        </div>
        <img
          src="/images/rethink-ai-shapes/reddit.png"
          alt="reddit comment 8"
          className="lg:mt-60 order-1 lg:order-2"
          data-aos="fade-in"
        />
      </div>
      <div
        className="w-full mx-auto flex flex-col text-center"
        data-aos="fade-in"
      >
        <h2 className="text-4xl font-semibold my-12">Deep Dive</h2>
        <p className="text-center">The initial research was divided into</p>
        <img
          src="/images/rethink-ai-shapes/rethink-ai-shapes-deep-dive.png"
          alt="Process"
          className="w-3/4 mx-auto"
          data-aos="fade-in"
        />
        <p
          className=" text-sm lg:text-lg text-left my-20 mx-auto max-w-5xl "
          data-aos="fade-in"
        >
          I began my deep dive with an audit of Illustrator’s Shape Tools to
          experience the pain points firsthand. Next, I conducted a competitive
          analysis of four leading design tools, studying how their shape panels
          functioned and identifying features that offered a smoother
          experience. Building on these insights, I then conducted user
          interviews to understand real user frustrations, needs, and
          expectations around creating shapes.
        </p>

        <div
          className="text-center d-flex flex-col gap-4 items-center justify-center bg-secondary pb-10"
          data-aos="fade-in"
        >
          <div className="max-w-6xl mx-auto">
            <img
              src="/images/rethink-ai-shapes/avatar-wink.png"
              className="lg:w-32 mx-auto"
              alt=""
              data-aos="fade-in"
            />
            <h2 className="text-3xl font-bold my-10">
              Listing down the Problems
            </h2>
            <div>
              <p
                className="p-2 text-xl text-left my-10 px-10"
                data-aos="fade-in"
              >
                {" "}
                In the next stage of the process, I compiled all the issues
                identified during my research — combining insights from user
                interviews, competitive analysis, and the initial audit. This
                helped me clearly map out both user pain points and design
                limitations within the current Shape Tools.
              </p>
            </div>
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-finding-problems.png"
              alt=""
              className="mx-auto w-3/4"
              data-aos="fade-in"
            />
          </div>
        </div>
        <div className="bg-secondary">
          <div className="divider"></div>
        </div>
        <div
          className="text-center d-flex flex-col gap-4 items-center justify-center bg-secondary"
          data-aos="fade-in"
        >
          <div className="mx-auto max-w-6xl" data-aos="fade-in">
            <img src="/illust-3.png" className="w-32 mx-auto" alt="" />
            <h2 className="text-3xl font-bold mb-10">
              Identifying Similar Patterns
            </h2>
            <div>
              <p className="p-2 text-xl mb-10">
                {" "}
                Having identified an extensive and broad range of issues, common
                patterns emerged among the identified problems.
              </p>
            </div>
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-identifying-patterns.png"
              alt=""
              className="w-3/4 mx-auto"
              data-aos="fade-in"
            />
          </div>
        </div>
        <div className="bg-secondary flex flex-col gap-20 pb-20 p-2 lg:p-0 lg:pb-20">
          <p
            className="my-10 lg:my-20 text-center px-10 text-xl "
            data-aos="fade-in"
          >
            All these patterns that were recognized became the{" "}
            <span className="font-bold italic">
              key pillars serving as the foundation for the explorations and
              brainstorming.
            </span>
          </p>
          <img
            src="/images/rethink-ai-shapes/rethink-ai-shapes-pillars.png"
            alt=""
            className="mx-auto w-3/4 lg:max-w-4xl"
            data-aos="fade-in"
          />
          <div
            className=" p-4 py-6 flex flex-row max-w-4xl mx-auto text-left gap-4 bg-quotation border border-slate-900"
            data-aos="fade-in"
          >
            <svg
              width="47"
              height="45"
              viewBox="0 0 47 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3262 17.084L28.4385 17.4287H45.0635L31.9072 26.9873L31.6133 27.2012L31.7256 27.5459L36.749 43.0107L23.5947 33.4541L23.3008 33.2402L23.0068 33.4541L9.85156 43.0107L14.876 27.5459L14.9883 27.2012L14.6943 26.9873L1.53809 17.4287H18.1631L18.2754 17.084L23.3008 1.61719L28.3262 17.084Z"
                fill="#FFC240"
                stroke="black"
              />
            </svg>

            <p className="text-sm md:text-base">
              One key insight was that while Illustrator offers many powerful
              features, users often struggled with discoverability, finding it
              hard to access tools they needed. This challenge became the core
              focus.
            </p>
          </div>
        </div>

        <div className="divider my-20"></div>
        <div className="text-center mt-10" data-aos="fade-in">
          <h2 className="text-2xl lg:text-4xl text-center font-bold mb-20">
            Random Word Brainstorming
          </h2>
          <p className="max-w-4xl mx-auto mb-20">
            A pivotal phase in my project journey revolved around ideation and
            conceptualization. To broaden the spectrum of ideas, I engaged in
            brainstorming sessions using the Random Word or Object Prompts
            Ideation method.{" "}
          </p>
          <img
            src="/images/rethink-ai-shapes/rethink-ai-shapes-random-brainstorming.png"
            alt=""
            className="mb-20 mx-auto w-3/4 lg:max-w-6xl"
            data-aos="fade-in"
          />
          <p className="text-xl">
            During the ideation phase, so many ideas emerged that it was
            challenging to narrow them down to just one that aligned with all
            the key pillars.
          </p>
          <p className="text-xl font-bold mt-10 mb-32">
            As a result, the solution evolved into a multi-concept approach,
            designed to be easily discoverable by the user.
          </p>
          <div className="divider"></div>

          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-10">Concepts</h2>
            <p className="text-xl text-left line-height-large">
              As observed in our explorations, we encountered numerous
              challenges to address.{" "}
              <span className="font-bold accent-text">
                However, a prominent issue that stood out was the deficiency in
                discoverability.{" "}
              </span>{" "}
              Recognizing this as a central concern, I decided to anchor our
              concept around discoverability and sought to integrate other
              pillars and concepts within this framework.
            </p>

            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concepts-avatar.png"
              alt=""
              className="w-96 mx-auto my-20"
              data-aos="fade-in"
            />
            <h4 className="text-3xl font-medium mb-10">Before</h4>
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concepts-before.png"
              alt=""
              className="w-1/2 mx-auto"
              data-aos="fade-in"
            />
            <h4 className="text-3xl font-medium mb-10 mt-20">After</h4>
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concepts-after.png"
              alt=""
              className="w-3/4 mx-auto"
              data-aos="fade-in"
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-20" data-aos="fade-in">
          <p className="text-left text-xl mb-20 line-height-large">
            The Tool Properties Panel incorporates elements from 10 distinct
            solutions, organized into four sections. As we delved into the
            discussion about the pillars earlier, we formulated various concepts
            aligned with each of those pillars.
          </p>
          <img
            src="/images/rethink-ai-shapes/rethink-ai-shapes-final-concept.png"
            alt=""
            className="mb-40 w-3/4 mx-auto lg:w-auto"
            data-aos="fade-in"
          />
          <img
            src="/images/rethink-ai-shapes/rethink-ai-shapes-discoverability.png"
            alt=""
            className="w-3/4 lg:max-w-4xl mx-auto mb-40"
            data-aos="fade-in"
          />
        </div>
        <div className="mx-auto max-w-6xl" data-aos="fade-in">
          <p className="text-2xl my-20">
            <span className="font-black">Concept 01:</span>
            <span className="italic font-bold">
              {" "}
              Re-evaluating the Primary Shapes
            </span>
          </p>
          <img
            src="/images/rethink-ai-shapes/rethink-ai-shapes-concept-01.png"
            alt=""
            className="w-3/4 mx-auto"
            data-aos="fade-in"
          />
          <p>Concept 02-10</p>
          <p className="text-2xl my-20">
            <span className="font-black">Concept 02 - 10</span>
          </p>
          <div className="flex flex-col gap-20">
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concept-01.gif"
              alt="01"
              className="w-3/4 lg:w-auto mx-auto"
            />
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concept-02.gif"
              alt="02"
              className="w-3/4 lg:w-auto mx-auto"
            />

            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-concept-09.gif"
              alt="09"
              className="w-3/4 lg:w-auto mx-auto"
            />
          </div>
        </div>
        <div className="mt-40"></div>
        <div className="divider"></div>
        <div className="mx-auto max-w-6xl lg:p-0 p-2" data-aos="fade-in">
          <h2 className="text-3xl font-bold mb-20">Conclusion</h2>
          <p
            className="text-sm lg:text-xl text-left my-10 font-light line-height-large"
            data-aos="fade-in"
          >
            The artworks showcased below can be exclusively crafted utilizing
            the tool properties panel within a mere 10-minute timeframe. This
            highlights the efficiency and versatility of the panel, emphasizing
            its role as the sole tool employed in the creative process. The
            brevity of the timeframe underscores the quick and accessible nature
            of the artistic capabilities achievable through this specific tool,
            demonstrating its effectiveness in facilitating rapid and impressive
            artistic output.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-40">
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-conclusion-1.png"
              alt="01"
              className="lg:w-full w-3/4 mx-auto"
              data-aos="fade-in"
            />
            <img
              src="/images/rethink-ai-shapes/rethink-ai-shapes-conclusion-2.png"
              alt="02"
              className="lg:w-full w-3/4 mx-auto"
              data-aos="fade-in"
            />
          </div>
        </div>

        <section className="after:hidden text-center" data-aos="fade-in">
          <div
            className={`${avigeaFont.className} accent-text text-2xl lg:text-4xl capitalize`}
          >
            A heartfelt thanks to
          </div>
          <div className="section-content">
            <p className="my-10 text-base lg:text-xl">
              The @Adobe Design team :&#41;
            </p>
          </div>
        </section>
      </div>
      <div className="project-footer p-0">
        <img src={"/project-footer.png"} className="w-full block" />
      </div>
    </div>
  );
}
