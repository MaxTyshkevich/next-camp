import { ImageResponse } from 'next/og';
import OgImage from '@/public/opengraph-image.png';
export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={OgImage.src} alt="lala" style={{ width: 256, height: 256 }} />
        my Text
      </div>
    ),
    {
      ...size,
    }
  );
}
