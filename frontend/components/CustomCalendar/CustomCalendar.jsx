import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function CustomCalendar({ handleChange, day }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={day} onChange={handleChange} />
    </LocalizationProvider>
  );
}
