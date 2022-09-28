import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherAppPage from '../screens/WeatherAppPage';

test('renders learn react link', () => {
  render(<WeatherAppPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
