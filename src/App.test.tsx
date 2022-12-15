import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the forum title', () => {
  render(<App />);
  const linkElement = screen.getByText(/forum/i);
  expect(linkElement).toBeInTheDocument();
});
