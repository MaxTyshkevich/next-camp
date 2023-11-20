import { render, screen } from '@testing-library/react';
import Guide from './Guide';

describe('Component Guide', () => {
  it('render text', () => {
    render(<Guide />);

    const text = screen.getByText(/WE ARE HERE FOR YOU/i);

    expect(text).toBeInTheDocument();
  });
  it('snapshot component', () => {
    const { container } = render(<Guide />);

    expect(container).toMatchSnapshot();
  });
});
