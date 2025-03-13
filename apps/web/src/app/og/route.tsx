import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ImageResponse } from 'next/og';

import { headers } from 'next/headers';

import LightSvg from './patterns/light-svg';
import DarkSvg from './patterns/dark-svg';

import { metadata as meta } from '@/app/config';

export const runtime = 'edge';

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const headersList = await headers();
    const isLight = headersList.get('Sec-CH-Prefers-Color-Scheme') === 'light';

    const inter = await fetch(
      new URL('../../../public/fonts/Inter-SemiBold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

    const { title, description } = {
      title: meta.author.name,
      description: meta.site.description
    };

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {isLight ? <LightSvg /> : <DarkSvg />}
          <div
            style={{
              position: 'absolute',
              fontFamily: 'Inter',
              fontSize: '48px',
              fontWeight: '600',
              letterSpacing: '-0.04em',
              color: isLight ? 'black' : 'white',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'pre-wrap',
              maxWidth: '750px',
              textAlign: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: 'absolute',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: '600',
              letterSpacing: '-0.04em',
              color: isLight ? 'black' : 'white',
              top: '58%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'pre-wrap',
              maxWidth: '750px',
              textAlign: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            {description}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await inter,
            style: 'normal',
            weight: 400
          }
        ]
      }
    );
  } catch (error) {
    if (!(error instanceof Error)) throw error;
    console.log(error.message);

    return NextResponse.json(
      {
        error: 'Failed to generate image'
      },
      {
        status: 500
      }
    );
  }
}
