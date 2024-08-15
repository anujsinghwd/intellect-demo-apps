// src/pages/TimeSlotPage.js
import React from "react";
import TimeSlotPicker from "../components/SlotPicker";

const TimeSlotPage = () => {
  return (
    <div>
      <h2 className="text-center">Date and Time Slot Picker</h2>
      <TimeSlotPicker />
    </div>
  );
};
export default TimeSlotPage;
