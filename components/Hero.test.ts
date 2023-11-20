import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero component', () => {
  it('renders Hero', () => {
    render(<Hero />);

    const heading = screen.getByText(/Район лагеря Путук Труно/i);

    expect(heading).toBeInTheDocument();
  });
});
