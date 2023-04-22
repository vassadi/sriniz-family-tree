import { render, screen } from '@testing-library/react';
import App from './App';

test('renders family tree', () => {
  render(<App />);
  const linkElement = screen.getByText(/family tree/i);
  expect(linkElement).toBeInTheDocument();
});
