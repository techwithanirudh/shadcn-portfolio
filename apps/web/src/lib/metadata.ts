import type { Metadata } from 'next/types';
import { metadata as meta } from '@/app/config';

export const baseUrl = meta.site.url;

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      type: 'website',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      locale: 'en-US',
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: '/og',
          type: 'image/png'
        }
      ],
      siteName: 'Portfolio',
      ...override.openGraph
    },
    twitter: {
      card: 'summary_large_image',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: '/og'
        }
      ],
      ...override.twitter
    },
    icons: {
      icon: '/favicon/favicon.svg',
      shortcut: '/favicon/favicon.svg',
      apple: [
        {
          url: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png'
        }
      ],
      other: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          url: '/favicon/favicon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          url: '/favicon/favicon-32x32.png'
        }
      ]
    },
    keywords: [
      ...meta.site.keywords,
      ...(Array.isArray(override?.keywords)
        ? override.keywords
        : override?.keywords
          ? [override.keywords]
          : [])
    ],
    creator: meta.author.username,
    metadataBase: new URL(baseUrl)
  };
}
