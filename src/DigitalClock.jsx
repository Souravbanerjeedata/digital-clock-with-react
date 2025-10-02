import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());

      return () => {
        clearInterval(intervalId);
      };
    }, 1000);
  }, []);

  function formatTime() {
    return `00:00:00`;
  }

  return <div>{formatTime()}</div>;
}
