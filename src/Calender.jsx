import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          width: 250,
          height: 270,
          color: "black",
         "& .MuiPickersCalendarHeader-label":{
          fontSize:"12px",
          fontFamily:"sans-serif"
         },
         "& .MuiPickersYear-yearButton":{
          fontSize:"10px",
          margin:"0px 0px",
         },
         "& .css-xazc1j-MuiPickersYear-root":{
          flexBasis:"32%"
         },
         "& .css-nk89i7-MuiPickersCalendarHeader-root":{
          paddingLeft:"0px"
         },
         "& .MuiSvgIcon-root":{
          border:"1px solid #bab3b3",
          borderRadius:"50%",
         },
         "& .css-1tkx1wf-MuiSvgIcon-root-MuiPickersCalendarHeader-switchViewIcon":{
          border:"0px"
         },
        }}
      />
    </LocalizationProvider>
  );
}
