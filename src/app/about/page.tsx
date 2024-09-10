import { Header } from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import TextReveal from '@/components/text-reveal';

export default function About() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="my-14 flex-1 px-12">
          <div className="flex min-h-[calc(100dvh-112px)] items-center px-44">
            <div className="max-w-7xl	">
              <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                <TextReveal delay={0.1}>
                  A young tech enthusiast who loves to code
                </TextReveal>
              </h1>
            </div>
          </div>
        </main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
