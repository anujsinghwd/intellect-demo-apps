import React, { useState } from "react";
import "./feedback.css";

const emojis = ["😢", "😞", "😐", "😊", "😁"];

const EmojiWidget = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const handleEmojiClick = (index) => {
    setSelectedEmoji(index);
  };
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Wellbeing Check-in</h2>
      <div className="emoji-widget">
        <h2>Select Your Mood</h2>
        <div className="emoji-scale">
          {emojis.map((emoji, index) => (
            <div className="emoji-container">
              <div
                key={index}
                className={`emoji-item ${
                  selectedEmoji === index ? "selected" : ""
                }`}
                onClick={() => handleEmojiClick(index)}
              >
                {emoji}
              </div>
              <div>{`Terrible`}</div>
            </div>
          ))}
        </div>
        {selectedEmoji !== null && (
          <div className="selected-emoji-text">
            You selected: <span>{emojis[selectedEmoji]}</span>
          </div>
        )}
      </div>
    </>
  );
};
export default EmojiWidget;
