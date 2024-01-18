import React, { useState, useEffect } from "react";

const CountDown = () => {
  const calculateTimeRemaining = () => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      total: difference,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Time left to take part!</h2>
      <div className="flex justify-center space-x-4">
        <div>
          <span className="text-3xl font-bold">{days}</span>{" "}
          <span className="text-gray-600">Days</span>
        </div>
        <div>
          <span className="text-3xl font-bold">{hours}</span>{" "}
          <span className="text-gray-600">Hours</span>
        </div>
        <div>
          <span className="text-3xl font-bold">{minutes}</span>{" "}
          <span className="text-gray-600">Minutes</span>
        </div>
        <div>
          <span className="text-3xl font-bold">{seconds}</span>{" "}
          <span className="text-gray-600">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
