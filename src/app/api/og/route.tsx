import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { ImageResponse } from 'next/og';

export async function GET() {
  const fontData = await fs.promises.readFile(
    path.join(
      fileURLToPath(import.meta.url),
      '../../../../styles/fonts/cheltenham-italic-700.ttf'
    )
  );

  const { name, description, image } = {
    name: 'John Doe',
    description: 'A young tech enthusiast who loves to code',
    image:
      'https://static01.nyt.com/images/2023/08/22/multimedia/21MARATHON-TRAINING-BUILDING1-blwc/21MARATHON-TRAINING-BUILDING1-blwc-facebookJumbo.jpg'
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          fontWeight: 600,
          color: 'white'
        }}
      >
        <h1
          style={{
            fontSize: 120,
            fontFamily: 'NYT Cheltenham',
            maxWidth: 900,
            whiteSpace: 'pre-wrap',
            letterSpacing: -1
          }}
        >
          {name}
        </h1>
        <p
          style={{
            fontSize: 40,
            fontFamily: 'NYT Cheltenham',
            maxWidth: 900,
            whiteSpace: 'pre-wrap',
            letterSpacing: -1
          }}
        >
          {description}
        </p>
      </div>
    ),
    {
      width: 1050,
      height: 549,
      fonts: [
        {
          name: 'NYT Cheltenham',
          data: fontData
        }
      ]
    }
  );
}
