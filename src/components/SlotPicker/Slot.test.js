import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimeSlotPicker from '.'; // Adjust the import based on your file structure
import '@testing-library/jest-dom/extend-expect';

// Mock the data import
jest.mock('../../data/slots.json', () => [
  {
    date: { day: '02', name: 'Fri' },
    slots: ["07:30AM", "08:00AM", "08:30AM", "09:00AM", "09:30AM", "10:00AM"]
  },
  {
    date: { day: '03', name: 'Sat' },
    slots: ["10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM", "01:00PM"]
  },
]);

describe('TimeSlotPicker Component', () => {
  test('renders the heading and session duration', () => {
    render(<TimeSlotPicker />);
    expect(screen.getByText(/Pick a date/i)).toBeInTheDocument();
    expect(screen.getByText(/Available time slots/i)).toBeInTheDocument();
    expect(screen.getByText(/Each session lasts for 30 minutes/i)).toBeInTheDocument();
  });

  test('renders the dates from data and handles date selection', () => {
    render(<TimeSlotPicker />);

    // Check initial date rendering
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();

    // Select the second date
    fireEvent.click(screen.getByText('03'));

    // Check if time slots are updated
    expect(screen.getByText('10:30AM')).toBeInTheDocument();
    expect(screen.getByText('01:00PM')).toBeInTheDocument();

    // Check if the selected date is updated
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();
  });

  test('selects a time slot and displays the selected information', () => {
    render(<TimeSlotPicker />);

    // Select a date
    fireEvent.click(screen.getByText('03'));

    // Select a time slot
    fireEvent.click(screen.getByText('10:30AM'));

    // Check the selected information
    expect(screen.getByText(/You selected: 03 at 10:30AM/i)).toBeInTheDocument();
  });

  test('applies selected styles to selected date and time slot', () => {
    render(<TimeSlotPicker />);

    // Select a date
    fireEvent.click(screen.getByText('03'));
    expect(screen.getByText('03')).toHaveClass('day');

    // Select a time slot
    fireEvent.click(screen.getByText('10:30AM'));
    expect(screen.getByText('10:30AM')).toHaveClass('selected-time');
  });
});
