import type { AboutPage, WithContext } from "schema-dts";
import { metadata as meta } from "@/app/config";
import Cursor from "@/components/cursor/cursor";
import { Footer, Header } from "@/components/sections";
import { contact } from "@/components/sections/contact/config";
import SmoothScroll from "@/components/smooth-scroll";
import { createMetadata } from "@/lib/metadata";

const title = "About";
const description = "Learn more about me and how I do things";

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: "/about",
    type: "profile",
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
});

const jsonLd: WithContext<AboutPage> = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  url: `${meta.site.url}/about`,
  mainEntity: {
    "@type": "Person",
    name: meta.author.name,
    description: meta.site.description,
    url: meta.site.url,
    sameAs: contact.socials.map((social) => social.href),
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
