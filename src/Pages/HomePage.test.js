import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the import based on your file structure
import '@testing-library/jest-dom/extend-expect';

describe('HomePage Component', () => {
  test('renders the main heading', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const heading = screen.getByText(/Welcome to the Frontend Developer Assignment/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the description paragraph', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const paragraph = screen.getByText(/Select one of the tasks below to view the corresponding widget:/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('renders the Wellbeing Widget task description', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const wellbeingHeading = screen.getByText(/Task 1: Wellbeing Widget/i);
    const wellbeingDescription = screen.getByText(/This widget allows users to select an emoji on a scale/i);
    expect(wellbeingHeading).toBeInTheDocument();
    expect(wellbeingDescription).toBeInTheDocument();
  });

  test('renders the link to the Wellbeing Widget', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    // Select the link by its role and the text content
    const wellbeingLink = screen.getByRole('link', { name: /Wellbeing Widget/i });
    expect(wellbeingLink).toHaveAttribute('href', '/feedback');
  });

  test('renders the Date and Time Slot Picker task description', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const timeSlotHeading = screen.getByText(/Task 2: Date and Time Slot Picker/i);
    const timeSlotDescription = screen.getByText(/This widget allows users to select a date and time slot/i);
    expect(timeSlotHeading).toBeInTheDocument();
    expect(timeSlotDescription).toBeInTheDocument();
  });

  test('renders the link to the Date and Time Slot Picker', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const timeSlotLink = screen.getByRole('link', { name: /View Time Slot Picker/i });
    expect(timeSlotLink).toHaveAttribute('href', '/time-slot-picker');
  });
});
