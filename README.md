# Frontend Developer Assignment - ReactJS Application

This ReactJS application is a frontend developer assignment that includes two interactive widgets: an Emoji Scale Widget and a Date & Time Slot Picker. The application is responsive and works across various devices, including mobile phones, tablets, and desktops.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components Description](#components-description)
  - [EmojiScaleWidget](#emojiscalewidget)
  - [TimeSlotPicker](#timeslotpicker)
- [Routing and Navigation](#routing-and-navigation)
- [Styling](#styling)
- [Running the Application](#running-the-application)
- [Screenshots](#screenshots)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd <project-directory>
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

    This will start the development server and open the application in your default web browser at `http://localhost:3000`.

## Project Structure

The project is structured as follows:
```
src/
│
├── components/
│   ├── EmojiScaleWidget.js        # Component for Emoji Scale Widget
│   ├── TimeSlotPicker.js          # Component for Date & Time Slot Picker
│
├── pages/
│   ├── HomePage.js                # Homepage with descriptions and links to widgets
│   ├── EmojiScalePage.js          # Page to display Emoji Scale Widget
│   └── TimeSlotPage.js            # Page to display Date & Time Slot Picker
│
├── App.js                          # Main App component with routing
├── index.js                        # Entry point for the React application
└── styles/
   ├── EmojiScaleWidget.css        # Styles specific to Emoji Scale Widget
   └── TimeSlotPicker.css          # Styles specific to Date & Time Slot Picker
```

## Components Description

### EmojiScaleWidget

- **Purpose**: This component allows users to select an emoji on a scale, representing a range of emotions or ratings.
- **Features**:
 - Fully responsive design.
 - Interactive emoji selection with visual feedback.
- **Location**: `src/components/EmojiScaleWidget.js`
- **Styling**: The styles for this component are located in `src/styles/EmojiScaleWidget.css`.

### TimeSlotPicker

- **Purpose**: This component allows users to pick a date and select a time slot for a 30-minute session.
- **Features**:
 - Date picker with scrollable navigation for available dates.
 - Interactive time slot selection with visual feedback.
 - Responsive design across all devices.
- **Location**: `src/components/TimeSlotPicker.js`
- **Styling**: The styles for this component are located in `src/styles/TimeSlotPicker.css`.
## Routing and Navigation
The application uses `react-router-dom` for routing between different pages:
- **Homepage (`/`)**: Displays descriptions and links to both widgets.
- **Emoji Scale Widget (`/emoji-scale`)**: Renders the Emoji Scale Widget component.
- **Time Slot Picker (`/time-slot-picker`)**: Renders the Date & Time Slot Picker component.