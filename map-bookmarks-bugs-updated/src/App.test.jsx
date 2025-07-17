import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const el = screen.getByText(/Hello World/i);
  expect(el).toBeInTheDocument();
});
