import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "../../data/slots.json";
import "./slot.css";

const TimeSlotPicker = () => {
  const [selectedDate, setSelectedDate] = useState(data[0].date);
  const [timeSlots, setTimeSlots] = useState(data[0].slots);
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

  const handleSelectedDate = (slot) => {
    setSelectedDate(slot.date);
    setTimeSlots(slot.slots);
    setSelectedTimeSlot(null);
  };

  return (
    <>
      <div className="time-slot-picker">
        <h3>Pick a date</h3>
        <div className="date-picker">
          <button className="nav-button" onClick={handlePrevClick} aria-label="left arrow">
            <FaArrowLeft />
          </button>
          <div className="date-list" ref={dateListRef}>
            {data.map((slot, index) => (
              <div
                key={index}
                className={`date-item ${
                  selectedDate.day === slot.date.day ? "selected" : ""
                }`}
                onClick={() => handleSelectedDate(slot)}
              >
                <div className="day">{slot.date.day}</div>
                <div className="dayName">{slot.date.name}</div>
              </div>
            ))}
          </div>
          <button className="nav-button" onClick={handleNextClick} aria-label="right arrow">
            <FaArrowRight />
          </button>
        </div>
        <h4>Available time slots</h4>
        <p className="session-duration">Each session lasts for 30 minutes</p>
        <div className="time-slot-list">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className={`time-slot-item ${
                selectedTimeSlot === slot ? "selected-time" : ""
              }`}
              onClick={() => setSelectedTimeSlot(slot)}
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        {selectedDate &&
          selectedTimeSlot &&
          (<h3>{`You selected: ${selectedDate.day} at ${selectedTimeSlot}`}</h3>)}
      </div>
    </>
  );
};
export default TimeSlotPicker;
