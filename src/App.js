// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FeedbackPage from "./Pages/Feedback";
import TimeSlotPage from "./Pages/SlotPicker";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/time-slot-picker" element={<TimeSlotPage />} />
      </Routes>
    </Router>
  );
};
export default App;
