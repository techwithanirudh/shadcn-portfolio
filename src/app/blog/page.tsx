import Link from 'next/link';
import { blog } from '@/app/source';
import TextReveal from '@/components/text-reveal';
import Line from '@/components/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';
import PostCard from '@/app/blog/_components/post-card';

export const metadata = createMetadata({
  title: 'Blog',
  description: 'My thoughts on technology.'
});

export default function BlogPage(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
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
          <h1 className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            <TextReveal delay={0.2}>Blog</TextReveal>
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
      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard
            title={post.data.title}
            href={post.url}
            description={post.data.description}
            key={`post_${index}`}
            date={new Date(post.data.date ?? post.file.name)}
            thumbnail={`/images/blog/${post.slugs[0]}/cover.jpg`}
          />
        ))}
      </section>
    </main>
  );
}
