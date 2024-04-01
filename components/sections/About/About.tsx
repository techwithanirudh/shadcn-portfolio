import React from "react";
import MotionWrap from "@/components/MotionWrap";
import Image from "next/image";

function About() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 pt-12 md:pt-24 lg:py-32 dark:border-gray-700"
      id="about"
    >
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I am a YouTuber,speaker and blogger.Throughout my 25+ years career, have been deeply involved with Microsoft technologies,particularly the Power Platform,Dynamics 365 CE and Azure. Lately I have been playing with Microsoft Copilots and OpenAI GPTs.

            </p>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            My passion is to share my knowledge and learnings around Power Platform,Power Apps, Power Automate, Power Pages,Copilot Studio, Dynamics 365, Microsoft Copilots and Microsoft AI.

            </p>
          </div>
          <div className="grid gap-4 sm:gap-6">
            {/* <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/hero.jpg"
              sizes="100vw"
              width="550"
            /> */}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
