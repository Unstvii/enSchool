import React, { useEffect, useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function CustomCalendar({ handleChange, day }) {
  const [today, setToday] = useState(day);

  const shouldDisableDate = (date) => {
    // Відключити всі дні до сьогоднішнього дня
    return date.isBefore(today, "day");
  };

  const shouldDisableMonth = (date) => {
    // Відключити всі місяці до поточного місяця
    return date.isBefore(today, "month");
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={day}
        onChange={handleChange}
        shouldDisableDate={shouldDisableDate}
        shouldDisableMonth={shouldDisableMonth}
      />
    </LocalizationProvider>
  );
}
