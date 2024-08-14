import React, { useRef, useState } from "react";
import "./slot.css";
const dates = [
  { day: "02", weekDay: "Fri" },
  { day: "05", weekDay: "Mon" },
  { day: "16", weekDay: "Fri" },
  { day: "19", weekDay: "Mon" },
  { day: "22", weekDay: "Fri" },
  { day: "25", weekDay: "Mon" },
  { day: "28", weekDay: "Thu" },
];
const timeSlots = [
  "07:30AM",
  "08:00AM",
  "08:30AM",
  "09:00AM",
  "09:30AM",
  "10:00AM",
];
const TimeSlotPicker = () => {
  const [selectedDate, setSelectedDate] = useState(dates[2]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const dateListRef = useRef(null);
  const handleNextClick = () => {
    if (dateListRef.current) {
      dateListRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };
  const handlePrevClick = () => {
    if (dateListRef.current) {
      dateListRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };
  return (
    <div className="time-slot-picker">
      <h3>Pick a date</h3>
      <div className="date-picker">
        <button className="nav-button" onClick={handlePrevClick}>
          &lt;
        </button>
        <div className="date-list" ref={dateListRef}>
          {dates.map((date, index) => (
            <div
              key={index}
              className={`date-item ${
                selectedDate.day === date.day ? "selected" : ""
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <div className="day">{date.day}</div>
              <div className="weekDay">{date.weekDay}</div>
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
      <h4>Available time slots</h4>
      <p className="session-duration">Each session lasts for 30 minutes</p>
      <div className="time-slot-list">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`time-slot-item ${
              selectedTimeSlot === slot ? "selected" : ""
            }`}
            onClick={() => setSelectedTimeSlot(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TimeSlotPicker;
