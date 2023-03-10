import { fireEvent, render, screen } from '@testing-library/react';

import PasswordTextField from '.';

describe('PasswordTextField', () => {
  it('should render without errors', () => {
    render(<PasswordTextField id="test" label="Password" />);
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();
  });

  it('should toggle visibility when the toggle button is clicked', () => {
    render(<PasswordTextField id="test" label="Password" />);
    const toggleButton = screen.getByTestId<HTMLInputElement>('toggle-password-visibility');
    const input = screen.getByLabelText<HTMLInputElement>('Password');

    fireEvent.click(toggleButton);
    expect(input.type).toBe('text');

    fireEvent.click(toggleButton!);
    expect(input.type).toBe('password');
  });

  it('should call the onChange callback when the value changes', () => {
    render(<PasswordTextField id="test" label="Password" />);
    const input = screen.getByLabelText<HTMLInputElement>('Password');

    fireEvent.change(input, { target: { value: 'password123' } });
    expect(input.value).toBe('password123');
  });

  it('should show the error when it has error param', () => {
    const passwordTextField = render(
      <PasswordTextField id="test" label="Password" error helperText="some error" />,
    );
    const errorText = screen.getByText<HTMLInputElement>(/some error/i);

    expect(errorText).toBeInTheDocument();

    const errorBorder = passwordTextField.container.getElementsByClassName('Mui-error');
    expect(errorBorder.length).toBeGreaterThanOrEqual(1);
  });
});
