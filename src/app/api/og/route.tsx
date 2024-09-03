import type { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';

import { headers } from 'next/headers';

import LightSvg from './patterns/light-svg';
import DarkSvg from './patterns/dark-svg';

import { metadata as meta } from '@/app/config';

export const runtime = 'edge';

const interSemiBold = fetch(
  new URL('./Inter-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const headersList = headers();
    const isLight = headersList.get('Sec-CH-Prefers-Color-Scheme') === 'light';

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
              top: '260px',
              left: '50%',
              transform: 'translateX(-50%)',
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
        width: 843,
        height: 441,
        fonts: [
          {
            name: 'Inter',
            data: await interSemiBold,
            style: 'normal',
            weight: 400
          }
        ]
      }
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    // eslint-disable-next-line no-console
    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
