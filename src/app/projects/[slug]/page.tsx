// https://fumadocs.vercel.app/docs/headless/remote/github
// https://fumadocs.vercel.app/docs/headless/content-collections
import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { source } from '@/app/source';

const getPage = source.getPage;

import Header from './header';

type ProjectPageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, never>;
};

type ProjectMetadata = {
  name: string;
  description: string;
  website: string;
  github: string;
  techstack: Array<{ label: string }>;
  selected: boolean;
  slug: string;
};

export const generateMetadata = async (
  props: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const {
    params: { slug }
  } = props;

  const project = getPage([slug]);
  if (!project) return {};

  const {
    data: { title, description }
  } = project;
  const previousTwitter = (await parent)?.twitter ?? {};
  const previousOpenGraph = (await parent)?.openGraph ?? {};

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `/projects/${slug}`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `/projects/${slug}`,
      title: title,
      description: description,
      images: [
        {
          url: `/images/projects/${slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title: title,
      description: description,
      images: [
        {
          url: `/images/projects/${slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description
        }
      ]
    }
  };
};

const ProjectPage = (props: ProjectPageProps) => {
  const {
    params: { slug }
  } = props;

  const project = getPage([slug]);
  if (!project) notFound();

  const {
    data: { structuredData, body }
  } = project;

  return (
    <div className="container mx-auto">
      <Header metadata={structuredData} />
      <Image
        src={`/images/projects/${slug}/cover.jpg`}
        width={1280}
        height={832}
        alt={structuredData.name}
        className="my-12 rounded-lg"
      />
      {body}
    </div>
  );
};

export default ProjectPage;
