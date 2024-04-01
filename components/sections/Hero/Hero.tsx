import React from "react";
import MotionWrap from "@/components/MotionWrap";
import Image from "next/image";

function Hero() {
  return (
    <MotionWrap className="mt-14 w-full py-12 md:mt-0 md:pt-24 lg:pt-32 xl:pt-48">
      <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          
          {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Designer & Developer
          </div>
           */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hi, I&apos;m Sriram Balaji.  
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
           I am passionate about Power Platform. Lately I have been tinkering with Microsoft Copilots.

          </p>

        
        </div>
        {/* <Image
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          height="450"
          sizes="100vw"
          src={"/hero.jpg"}
          width="800"
        /> */}
      </div>
    </MotionWrap>
  );
}

export default Hero;
