import type { Metadata } from 'next';

import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import { MDXContent } from '@content-collections/mdx/react';

import { notFound } from 'next/navigation';
import { blog, projects } from '@/app/source';

import Header from './header';
import Image from 'next/image';

export async function generateStaticParams({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // @ts-ignore
  return blog.generateParams([slug]);
}

// todo: improve metadata generation, and also add dynamic og
// https://github.com/fuma-nama/fumadocs/blob/dev/apps/docs/utils/metadata.ts
export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = projects.getPage([slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description
  } satisfies Metadata;
}

export default async function ProjectPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const page = projects.getPage([slug]);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData }
  } = page;

  return (
    <div className="container mx-auto">
      <Header metadata={page.data} />
      <Image
        src={`/images/projects/${slug}/cover.jpg`}
        width={1280}
        height={832}
        alt={structuredData.name}
        className="my-12 rounded-lg"
      />
      <div className="prose p-4 dark:prose-invert">
        <MDXContent
          code={body}
          components={{ ...defaultMdxComponents, Callout }}
        />
      </div>
    </div>
  );
}
