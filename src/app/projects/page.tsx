// stole from fumadocs, change this later lol, yes
// todo: add credit & inspiration for fumadocs
import Link from 'next/link';
import { project } from '@/app/source';
import TextReveal from '@/components/text-reveal';
import Line from '@/components/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Projects',
  description: 'Here are some projects I have worked on.'
});

export default function ProjectsPage(): React.ReactElement {
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main className="my-14 flex-1">
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextReveal delay={0.1}>Some fun things I&apos;ve built</TextReveal>
          </h1>

          <Line className={'mt-16'} />
        </div>
        {/*<motion.div*/}
        {/*  className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"*/}
        {/*  style={{ opacity }}*/}
        {/*  animate={{ y: [0, 10, 0] }}*/}
        {/*  transition={{ duration: 1.5, repeat: Infinity }}*/}
        {/*>*/}
        {/*  <ChevronDown className="h-8 w-8" />*/}
        {/*</motion.div>*/}
      </section>
      {/*className="container max-sm:px-0 md:py-12"*/}
      <section className="container grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <Link
            key={project.url}
            href={project.url}
            className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex flex-col p-4 transition-colors"
          >
            <p className="font-medium">{project.data.title}</p>
            <p className="text-fd-muted-foreground text-sm">
              {project.data.description}
            </p>

            <p className="text-fd-muted-foreground mt-auto pt-4 text-xs">
              {new Date(project.data.date ?? project.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
