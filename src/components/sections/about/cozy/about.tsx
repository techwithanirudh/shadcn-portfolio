import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import TextReveal from '@/components/motion/text-reveal';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              <TextReveal>About Me</TextReveal>
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <TextReveal>
                  I am a passionate and creative Web Developer with a love for
                  beautiful and functional websites. I have experience working
                  with a variety of web technologies and frameworks and I am
                  always eager to learn new things and take on new challenges.
                </TextReveal>
              </p>
              <div className="flex gap-2">
                <Button asChild variant={'outline'}>
                  <a href="resume.pdf" target="_blank">
                    View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
