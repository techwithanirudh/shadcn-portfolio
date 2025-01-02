import Link from 'next/link';
import { project } from '@/app/source';
import TextReveal from '@/components/motion/text-reveal';
import Line from '@/components/motion/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';
import ProjectCard from '@/app/projects/_components/project-card';

import { metadata as meta } from '@/app/config';
import type { CollectionPage, WithContext } from 'schema-dts';

const title = 'Projects';
const description = 'Here are some projects I have worked on.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/projects',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

const jsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: `${meta.site.url}/projects`,
  isPartOf: {
    '@type': 'WebSite',
    name: meta.site.title,
    url: meta.site.url
  },
  hasPart: [...project.getPages()].map((project) => ({
    '@type': 'SoftwareApplication',
    name: project.data.title,
    description: project.data.description,
    url: project.url,
    applicationCategory: 'WebApplication'
  }))
};

export default function ProjectsPage(): React.ReactElement {
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            My Projects
          </TextReveal>

          <Line className={'mt-16'} />
        </div>
      </section>
      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.data.title}
            href={project.url}
            description={project.data.description}
            key={`project_${index}`}
            tags={project.data.tags}
            thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
          />
        ))}
      </section>
    </main>
  );
}
