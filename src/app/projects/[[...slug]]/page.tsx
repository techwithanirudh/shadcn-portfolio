import type { Metadata } from 'next';

import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import { MDXContent } from '@content-collections/mdx/react';

import { notFound } from 'next/navigation';
import { source } from '@/app/source';

import Header from './header';
import Image from 'next/image';

const getPage = source.getPage;
// const getPageList = source.getPageList;

// todo: fix generateStaticParams
// export async function generateStaticParams() {
//   return await getPageList().map((page) => ({
//     slug: page.slugs
//   }));
// }

export async function generateMetadata({
  params
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);
  if (!page) return {};

  return {
    title: page.data.title
  } satisfies Metadata;
}

export default async function ProjectPage({
  params
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData }
  } = page;

  return (
    <div className="container mx-auto">
      <Header metadata={page.data} />
      <Image
        src={`/images/projects/${params.slug.join('/')}/cover.jpg`}
        width={1280}
        height={832}
        alt={structuredData.name}
        className="my-12 rounded-lg"
      />
      <MDXContent
        code={body}
        components={{ ...defaultMdxComponents, Callout }}
      />
    </div>
  );
}
