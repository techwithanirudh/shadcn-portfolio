import { Header } from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'About',
  description: 'Learn mroe about me and how I do things'
});

export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        {children}
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
