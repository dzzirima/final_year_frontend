/** This is a custome hook for greeting people based on the time of the day */

import { useEffect, useState } from "react";

export  function useTime() {
  const [time, settime] = useState("):((");

  /** function to check  the time */

  function checkTime() {
    let currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour <= 12) return "Morning";
    if (currentHour > 12 && currentHour <= 17) return "After Noon";
    if (currentHour > 17 && currentHour <= 24) return "After Noon";
  }

  /**This function should run when ever we looad the componet */
  useEffect(() => {
    settime(checkTime);
    return () => {};
  }, []);

  return time;
}
