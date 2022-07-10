import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SignUpForm from 'components/elements/SignUpForm';

describe('Sign Up Form', () => {
  it('renders correct copy', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    expect(screen.getByText(/Username or email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
  });
});