import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services',
};

const Services = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <h2>Page Services</h2>
    </div>
  );
};

export default Services;
