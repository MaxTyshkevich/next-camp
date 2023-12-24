import { Metadata } from 'next';
import React from 'react';
import ogImage from '@/public/opengraph-image.png';
import ogImageTwitter from '@/public/twitter-image.png';
export const metadata: Metadata = {
  title: 'Services',
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImageTwitter.src,
        width: ogImageTwitter.width,
        height: ogImageTwitter.height,
      },
    ],
  },
};

const Services = () => {
  return (
    <div>
      <h2>Page Services</h2>
    </div>
  );
};

export default Services;
