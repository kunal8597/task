import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure this CSS contains the styles you've provided

function App() {
  // Countdown state
  const [seconds, setSeconds] = useState(10); // Set this to the desired countdown start

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  return (
    <div className="launch-page">
      {/* Background Animation */}
      <div className="bg-animation">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>

      {/* Header Section */}
      <div className="header">
        <div className="black-white-logo">
          <span className="the">THE</span>
          <div className="frame">
            <span className="product">PRODUCT</span>
          </div>
          <span className="platform">PLATFORM</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header2">
        <div className="title-icon">
            <img
              src="rocket.png"
              alt="Dark mode rocket"
              className="rocket-icon"
            />
          </div>
        <h1 className="title" >Launching New Module Soon!</h1>
          
        </div>
       
        

        <p className="description">Exciting things are in the works! We're currently crafting a new feature for you. Keep an eye out for updates – we're working to make it available soon!</p>

        <h2 className="reveal-text">GET READY FOR THE REVEAL!</h2>

        {/* Countdown Timer */}
        <div className="timer">
          <div className="minutes">
            <div className="min-number">00</div>
            <div className="minutes-label"> Minutes</div>
          </div>
          <span className="colon">:</span>
          <div className="seconds">
            <div className="sec-number">{seconds < 10 ? `0${seconds}` : seconds}</div>
            <div className="seconds-label">Seconds</div>
          </div>
        </div>

        {/* Notification Section */}
        <div className="notify-section-valid">
          <p className="notify-description">Be the first to know! Share your email and we’ll notify you when it’s live </p>
          <div className="notify-field">
            <input type="email" placeholder="Please enter your email id" className="text-field" />
            <button className="notify-button">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



