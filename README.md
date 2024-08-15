# Frontend Developer Assignment

## Project Overview

This project is a frontend application demonstrating two main widgets:

- **Wellbeing Widget**: Allows users to select their mood from a list of emojis.
- **Time Slot Picker**: Enables users to pick a date and time slot from a scrollable list.

The application is built with React and includes routing to navigate between different pages.

## Table of Contents

1. [Installation](#installation)
2. [High-Level Design](#high-level-design)
   - [Architecture Overview](#architecture-overview)
   - [Component Structure](#component-structure)
   - [Routing](#routing)
   - [State Management](#state-management)
   - [Styling](#styling)
   - [Testing](#testing)
   - [Dependencies](#dependencies)
   - [Future Enhancements](#future-enhancements)
3. [Usage](#usage)
4. [Components](#components)
5. [Testing](#testing-1)
6. [Test Cases](#test-cases)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/anujsinghwd/intellect-demo-apps.git
    cd intellect-demo-apps
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

   Navigate to `http://localhost:3000` in your browser to view the application.

## High-Level Design

### Architecture Overview

The application is built using React and follows a component-based architecture with routing managed by `react-router-dom`. It consists of the following key components:

- **HomePage**: The landing page of the application, which provides navigation to other components.
- **WellbeingWidget**: A widget for selecting and displaying mood emojis.
- **TimeSlotPicker**: A widget for selecting a date and time slot from a scrollable list.

### Component Structure

1. **HomePage**
   - **Purpose**: Serves as the main entry point of the application, allowing users to navigate to other pages.
   - **Features**:
     - Displays a heading and a description.
     - Provides links to the WellbeingWidget and TimeSlotPicker components.

2. **WellbeingWidget**
   - **Purpose**: Allows users to select their mood by clicking on emojis.
   - **Features**:
     - Displays a list of emojis with associated labels.
     - Highlights the selected emoji.
     - Shows the currently selected emoji and its label.

3. **TimeSlotPicker**
   - **Purpose**: Enables users to pick a date and time slot.
   - **Features**:
     - Displays a scrollable list of dates with navigation buttons.
     - Shows available time slots for the selected date.
     - Displays the selected date and time slot.

### Routing

- **HomePage** (`/`): Displays the main page with links to the WellbeingWidget and TimeSlotPicker.
- **WellbeingWidget** (`/feedback`): Displays the emoji selection widget.
- **TimeSlotPicker** (`/time-slot-picker`): Displays the date and time slot picker widget.

### State Management

- **WellbeingWidget**:
  - Manages the state of the selected emoji using React's `useState` hook.
  - Updates the UI to reflect the currently selected emoji.

- **TimeSlotPicker**:
  - Manages the state of the selected date and time slot using React's `useState` hook.
  - Uses `useRef` to handle date scrolling.
  - Updates the UI to reflect the selected date and time slot.

### Styling

- **CSS**:
  - The application uses CSS for styling, with separate CSS files for each component (`feedback.css` for the WellbeingWidget and `slot.css` for the TimeSlotPicker).
  - Component-specific styles are defined to ensure a consistent look and feel.

### Testing

- **Unit Tests**:
  - Tests are written using React Testing Library and Jest.
  - Test cases cover rendering, interaction, and state updates for each component.

### Dependencies

- **React**: The core library for building the user interface.
- **react-router-dom**: Manages routing and navigation.
- **React Testing Library**: Provides utilities for testing React components.
- **Jest**: Used for running tests and providing test utilities.

### Future Enhancements

- **Improved Accessibility**: Adding ARIA roles and properties to enhance accessibility.
- **Enhanced User Experience**: Incorporating animations and transitions for a smoother user experience.
- **Responsive Design**: Ensuring the application is fully responsive across different device sizes.

## Usage

- **HomePage**:
  - Navigate to `/` to view the main page with links to the Wellbeing Widget and the Time Slot Picker.
  - Click on "Wellbeing Widget" to go to the Wellbeing Widget page.
  - Click on "View Time Slot Picker" to go to the Time Slot Picker page.

- **Wellbeing Widget**:
  - Select your mood by clicking on the emojis.
  - The selected emoji will be highlighted and displayed with its corresponding label.

- **Time Slot Picker**:
  - Pick a date using the left and right navigation buttons to scroll through available dates.
  - View and select time slots for the chosen date.
  - The selected date and time slot will be displayed.

## Components

### HomePage

- **Description**: The main page of the application with links to the Wellbeing Widget and Time Slot Picker.
- **Routes**:
  - `/` - Displays the HomePage component.

### WellbeingWidget

- **Description**: A widget for selecting an emoji representing your mood.
- **Features**:
  - Displays a list of emojis.
  - Highlights the selected emoji.
  - Shows the selected emoji and its label.

### TimeSlotPicker

- **Description**: A widget for selecting a date and time slot.
- **Features**:
  - Displays a scrollable list of dates with navigation buttons.
  - Shows available time slots for the selected date.
  - Displays the selected date and time slot.

## Testing

To run tests, ensure you have all dependencies installed and then execute:

```bash
npm test
```

## Test Cases

### HomePage Component

- **Renders the main heading and widgets links**:
  - Verifies that the main heading and the links to the Wellbeing Widget and Time Slot Picker are displayed correctly on the HomePage.

- **Navigates to FeedbackPage and TimeSlotPage using the links**:
  - Ensures that clicking on the "Wellbeing Widget" link navigates to the FeedbackPage.
  - Ensures that clicking on the "View Time Slot Picker" link navigates to the TimeSlotPage.

### WellbeingWidget Component

- **Renders all emojis and their labels**:
  - Confirms that all emojis and their corresponding labels are rendered on the WellbeingWidget.

- **Updates the selected emoji when clicked**:
  - Checks that clicking on an emoji highlights it as selected and updates the state accordingly.

- **Displays the correct selected emoji text**:
  - Verifies that the text indicating the selected emoji is displayed correctly when an emoji is selected.

### TimeSlotPicker Component

- **Navigates through dates using navigation buttons**:
  - Tests that clicking on the "Next" and "Previous" buttons scrolls through the list of dates correctly.

- **Renders time slots based on the selected date**:
  - Ensures that time slots are updated and displayed based on the currently selected date.

- **Updates the selected time slot and displays the selection**:
  - Verifies that selecting a time slot updates the state and displays the selected time slot and date correctly.
