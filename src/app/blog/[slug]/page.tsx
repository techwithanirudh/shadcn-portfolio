import type { Metadata } from 'next';

import defaultMdxComponents from 'fumadocs-ui/mdx';

import { Callout } from 'fumadocs-ui/components/callout';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

import { MDXContent } from '@content-collections/mdx/react';

import { notFound } from 'next/navigation';
import { blog } from '@/app/source';

import Header from './header';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export async function generateStaticParams({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // @ts-ignore
  return blog.generateParams([slug]);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description
  } satisfies Metadata;
}

export default async function BlogPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData }
  } = page;

  return (
    <>
      <div
        className="container rounded-xl border py-12 md:px-8"
        style={{
          backgroundColor: 'black',
          backgroundImage: [
            'linear-gradient(140deg, hsla(274,94%,54%,0.3), transparent 50%)',
            'linear-gradient(to left top, hsla(260,90%,50%,0.8), transparent 50%)',
            'radial-gradient(circle at 100% 100%, hsla(240,100%,82%,1), hsla(240,40%,40%,1) 17%, hsla(240,40%,40%,0.5) 20%, transparent)'
          ].join(', '),
          backgroundBlendMode: 'difference, difference, normal'
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-white">
          {page.data.title}
        </h1>
        <p className="mb-4 text-white/80">{page.data.description}</p>
        <Link
          href="/blog"
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr] lg:px-4">
        <div className="prose p-4">
          <InlineTOC items={toc} />
          <MDXContent
            code={body}
            components={{ ...defaultMdxComponents, Callout }}
          />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="text-fd-muted-foreground mb-1">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="text-fd-muted-foreground mb-1 text-sm">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          {/*<Control url={page.url} />*/}
        </div>
      </article>
    </>
  );
}
