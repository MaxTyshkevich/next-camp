import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '@/messages/ru.json';
import Hero from './Hero';

describe('Hero component', () => {
  it('renders Hero', () => {
    render(
      <NextIntlClientProvider locale="ru" messages={messages}>
        <Hero />
      </NextIntlClientProvider>
    );

    const heading = screen.getByText(/Район лагеря Путук Труно/i);

    expect(heading).toBeInTheDocument();
  });
});
