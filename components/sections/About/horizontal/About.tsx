import React from "react";
import MotionWrap from "@/components/MotionWrap";
import Image from "next/image";

function About() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="about"
    >
      <div className=" px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            TODO
          </p>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
