"use client"

import { useState, useEffect } from "react";

export default function DateInput() {
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    // Set the default date to the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0]; 
    setSelectedDate(currentDate);
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border border-gray-300 rounded-lg p-2 mr-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  );
}
