import { render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

const validProps = {
  type: 'button',
  title: 'Testing title',
  variant: 'btn_white',
} as ButtonProps;

const fullProps = {
  ...validProps,

  full: true,
} as ButtonProps;

describe('testing Button', () => {
  /* it('testing title', () => {
    render(<Button {...props} />);

    const labelText = screen.getByLabelText(props.title);

    console.log({ labelText });
    expect(labelText).toBeInTheDocument();
  });
 */
  it('testing Button type', () => {
    render(<Button {...validProps} />);

    const button: HTMLButtonElement = screen.getByRole('button');

    expect(button.type).toBe(validProps.type);
  });

  it('testing Button className', () => {
    const { container } = render(<Button {...validProps} />);

    const button: HTMLButtonElement = screen.getByRole('button');

    expect(button).toHaveClass(validProps.variant);
  });

  it('testing Button className not prop full', () => {
    render(<Button {...validProps} />);

    const button: HTMLButtonElement = screen.getByRole('button');

    expect(button).not.toHaveClass('w-full');
  });

  it('testing Button className prop full', () => {
    render(<Button {...fullProps} />);

    const button: HTMLButtonElement = screen.getByRole('button');

    expect(button).toHaveClass('w-full');
  });

  it('Button Snapshot', () => {
    const { container } = render(<Button {...validProps} />);

    expect(container).toMatchSnapshot();
  });
});
