import type { Metadata } from 'next';

import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import { MDXContent } from '@content-collections/mdx/react';

import { notFound } from 'next/navigation';
import { project } from '@/app/source';

import Header from './header';
import Image from 'next/image';

import { createMetadata } from '@/lib/metadata';
import { metadata as meta } from '@/app/config';

export async function generateStaticParams({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // @ts-ignore
  return project.generateParams([slug]);
}

// todo: improve metadata generation, and also add dynamic og
// https://github.com/fuma-nama/fumadocs/blob/dev/apps/docs/utils/metadata.ts
export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = project.getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`,
          type: 'image/png'
        }
      ],
      authors: meta.author.name
      // modifiedTime: page.data.date.toISOString()
    },
    twitter: {
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: `/images/projects/${slug}/cover.jpg`
        }
      ]
    }
  }) satisfies Metadata;
}

export default async function ProjectPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const page = project.getPage([slug]);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData }
  } = page;

  return (
    <main className="my-14 flex-1">
      <div className="container mx-auto">
        <Header metadata={page.data} />
        <Image
          src={`/images/projects/${slug}/cover.jpg`}
          width={1280}
          height={832}
          alt={`Image of ${page.data.title}`}
          className="my-12 rounded-lg"
        />
        <div className="prose min-w-full dark:prose-invert">
          <MDXContent
            code={body}
            components={{ ...defaultMdxComponents, Callout }}
          />
        </div>
      </div>
    </main>
  );
}
