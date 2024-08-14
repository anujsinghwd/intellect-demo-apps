// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Frontend Developer Assignment</h1>
      <p>Select one of the tasks below to view the corresponding widget:</p>

      <div style={styles.taskContainer}>
        <h2>Task 1: Emoji Scale Widget</h2>
        <p>
          This widget allows users to select an emoji on a scale. It is fully
          responsive across mobile, desktop, and tablet devices.
        </p>
        <Link to="/feedback" style={styles.linkButton}>
          View Feedback Widget
        </Link>
      </div>

      <div style={styles.taskContainer}>
        <h2>Task 2: Date and Time Slot Picker</h2>
        <p>
          This widget allows users to select a date and time slot. The date
          picker includes a scrolling feature to navigate through available
          dates.
        </p>
        <Link to="/time-slot-picker" style={styles.linkButton}>
          View Time Slot Picker
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },

  taskContainer: {
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },

  linkButton: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
};

export default HomePage;
