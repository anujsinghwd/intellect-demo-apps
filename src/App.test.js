import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import based on your file structure
import '@testing-library/jest-dom/extend-expect';

describe('App Component', () => {
  test('renders the HomePage by default', () => {
    render(
      <App />
    );
    const homePageText = screen.getByText(/Welcome to the Frontend Developer Assignment/i);
    expect(homePageText).toBeInTheDocument();
  });
});
