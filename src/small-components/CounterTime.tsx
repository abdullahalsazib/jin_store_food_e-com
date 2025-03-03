import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  // Set the target sale end date (YYYY, MM (0-based), DD, HH, MM, SS)
  const targetDate = new Date(2025, 3, 30, 23, 59, 59); // Example: April 30, 2025

  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-center gap-2 text-xs">
      <p className="text-gray-200">Until the end of the sale:</p>
      <p className="notification_tooltip text-[10px]!">
        <span className="font-bold font-mono text-sm">{timeLeft.days}</span> days{" "}
        <span className="font-bold font-mono text-sm">{timeLeft.hours}</span> hours{" "}
        <span className="font-bold font-mono text-sm">{timeLeft.minutes}</span> minutes{" "}
        <span className="font-bold font-mono text-sm">{timeLeft.seconds}</span> seconds
      </p>
    </div>
  );
};

export default CountdownTimer;
