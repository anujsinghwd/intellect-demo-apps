import React, { useState } from "react";
import "./feedback.css";

const emojiData = [
  { name: "Terrible", emoji: "😢" },
  { name: "Bad", emoji: "😞" },
  { name: "Alright", emoji: "😐" },
  { name: "Pretty Good", emoji: "😊" },
  { name: "Fantastic", emoji: "😁" },
];

const WellbeingWidget = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const handleEmojiClick = (index) => {
    setSelectedEmoji(index);
  };

  const handleBtnClick = () => {
    alert("Continue.......");
  };
  return (
    <>
      <div className="emoji-widget">
        <h2>Select Your Mood</h2>
        <div className="emoji-scale">
          {emojiData.map((emoji, index) => (
            <div className="emoji-container" key={emoji.name}>
              <div
                className={`emoji-item ${
                  selectedEmoji === index ? "selected" : ""
                }`}
                onClick={() => handleEmojiClick(index)}
              >
                {emoji.emoji}
              </div>
              <div>{emoji.name}</div>
            </div>
          ))}
        </div>
        {selectedEmoji !== null && (
          <div className="selected-emoji-text">
            You selected: <span>{emojiData[selectedEmoji]["emoji"]}</span>
          </div>
        )}
      </div>
      <div className="btn-container">
        <button className="continue-btn" onClick={handleBtnClick}>
          Continue
        </button>
      </div>
    </>
  );
};
export default WellbeingWidget;
