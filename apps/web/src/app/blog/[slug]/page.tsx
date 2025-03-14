import type { TOCItemType } from "fumadocs-core/server";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { metadata as meta } from "@/app/config";
import { blog } from "@/app/source";
import { Heading, headingTypes, MDXLink } from "@/lib/mdx/default-components";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { MDXContent } from "@content-collections/mdx/react";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";

import { buttonVariants } from "@repo/ui/button";
import { PostComments } from "./page.client";

export async function generateStaticParams({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // @ts-expect-error issue with fumadocs
  return blog.generateParams([slug]);
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: "article",
      // todo: add custom dynamic og image
      authors: meta.author.name,
      modifiedTime: new Date(page.data.date ?? page.file.name).toISOString(),
    },
  }) satisfies Metadata;
}

export default async function BlogPage(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData },
  } = page;

  return (
    <main className="my-24 flex-1 px-4">
      <div className="bg-muted/30 container rounded-xl border py-12 md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="text-muted-foreground mb-4">{page.data.description}</p>
        <Link
          href="/blog"
          className={buttonVariants({ size: "sm", variant: "secondary" })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr]">
        <div className="prose flex-1 space-y-4 p-4">
          {/*todo: refer inlinetoc from fumadocs and create custom component using fumadoc core's toc components*/}
          <InlineTOC items={toc as TOCItemType[]} />
          {/*todo: refer to fumadocs's content of defaultMdxComponents to add extra components which are missing*/}
          {/*todo: add code functionality which means syntax highlighting using remark*/}
          {/*todo: add remark-image*/}
          <MDXContent
            code={body}
            components={{
              ...defaultMdxComponents,
              a: MDXLink,
            }}
          />
        <PostComments />

        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-sm">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          {/*<Control url={page.url} />*/}
        </div>
      </article>
    </main>
  );
}
