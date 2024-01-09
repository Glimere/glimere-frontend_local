import React from 'react'

import { useState, useEffect } from 'react';

const CountdownTimer = (props) => {
  const countDownDate = new Date("August 25, 2023 00:00:00").getTime();
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (props.headerType === "timeline") {
      setTimerActive(true);
    }
  }, [props.headerType]);

  useEffect(() => {
    if (timerActive) {
      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").style.setProperty("--value", days);
        document.getElementById("hours").style.setProperty("--value", hours);
        document.getElementById("mins").style.setProperty("--value", minutes);
        document.getElementById("secs").style.setProperty("--value", seconds);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("mins").textContent = minutes;
        document.getElementById("secs").textContent = seconds;

        if (distance < 0 || !timerActive) {
          clearInterval(countdownInterval);
        }
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [timerActive]);

  return (
    <div className="flex items-center pt-[3px] sm:pt-0 pr-0 sm:pr-[40px]">
                <h1 className='text-[14px] sm:text-[18px] font-medium text-white-100 mr-[10px]'>Time Left:</h1>
                <div className="flex gap-3 items-center text-center auto-cols-max">

                  <span className="countdown flex-[1] text-white-100 font-mono text-[14px] sm:text-[18px] relative">
                    <span id="days" style={{ "--value": 15 }}></span>
                    <span>d</span>
                  </span>
                  <span className="countdown flex-[1] text-white-100 font-mono text-[14px] sm:text-[18px] relative">
                    <span id="hours" style={{ "--value": 10 }}></span>
                    <span>h</span>
                  </span>

                  <span className="countdown flex-[1] text-white-100 font-mono text-[14px] sm:text-[18px] relative">
                    <span id="mins" style={{ "--value": 24 }}></span>
                    <span>m</span>
                  </span>

                  <span className="countdown flex-[1] text-white-100 font-mono text-[14px] sm:text-[18px] relative">
                    <span id="secs" style={{ "--value": 22 }}></span>
                    <span>s</span>
                  </span>

                </div>
              </div>
  );
};

export default CountdownTimer;
