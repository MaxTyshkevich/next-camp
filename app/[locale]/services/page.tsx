import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services',
};

const Services = () => {
  console.log('s', import.meta.url);
  return (
    <div>
      <h2>Page Services</h2>
    </div>
  );
};

export default Services;
