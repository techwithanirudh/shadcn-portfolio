import type { Metadata } from 'next';

import { MDXContent } from '@content-collections/mdx/react';

import { notFound } from 'next/navigation';
import { project } from '@/app/source';

import Header from './header';
import Image from 'next/image';

import { createMetadata } from '@/lib/metadata';
import { metadata as meta } from '@/app/config';
import { Heading, headingTypes, MDXLink } from '@/lib/mdx/default-components';
import { cn } from '@/lib/utils';

import { HTMLAttributes } from 'react';

export async function generateStaticParams({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // @ts-ignore
  return project.generateParams([slug]);
}

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
          className="my-12 aspect-video h-auto w-full rounded-lg object-cover"
        />
        <div className="prose min-w-full dark:prose-invert">
          <MDXContent
            code={body}
            components={{
              a: MDXLink,
              img: (props) => <img className="rounded-xl" {...props} />,
              ...Object.fromEntries(
                headingTypes.map((type) => [
                  type,
                  (props: HTMLAttributes<HTMLHeadingElement>) => (
                    <Heading as={type} {...props} />
                  )
                ])
              ),
              pre: ({ className, style: _style, ...props }) => (
                <pre
                  className={cn(
                    'max-h-[500px] overflow-auto rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-sm',
                    className
                  )}
                  {...props}
                >
                  {props.children}
                </pre>
              )
            }}
          />
        </div>
      </div>
    </main>
  );
}
