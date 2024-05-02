import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import dayjs from "dayjs";
import { makeStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDay } from "@/components/api/lesson";

const useStyles = makeStyles({
  lessonInfo: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#696984",
    letterSpacing: "1px",
    marginTop: "15px",
  },
  lessonTime: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    maxWidth: "350px",
    paddingTop: "10px",
    borderBottom: "1px solid silver",
    "&:hover": {
      borderLeft: "1px solid silver",
      padding: "5px",
      cursor: "pointer",
      transition: "ease-in-out 0.2s  ",
      borderRadius: "2px",
    },
  },
});

const BookLesson = () => {
  const classes = useStyles();

  // const slots = [
  //   { time: "9:00 - 10:00", available: true },
  //   { time: "10:00 - 11:00", available: false },
  //   { time: "11:00 - 12:00", available: true },
  //   { time: "12:00 - 13:00", available: false },
  //   { time: "13:00 - 14:00", available: true },
  //   { time: "14:00 - 15:00", available: false },
  // ];
  const [day, setDay] = useState(dayjs());
  const [hour, setHour] = useState(null);
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    fetchDay(day.format("YYYY-MM-DD"));
  }, [day]);

  const fetchDay = async (dateString) => {
    try {
      const response = await getDay(dateString);
      if (response.data) {
        setSlots(response.data.Slots);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Помилка при отриманні даних", error);
    }
  };

  const handleChange = (newValue) => {
    setDay(newValue);
  };
  const handleClick = (slot) => {
    if (slot.available) {
      setHour(slot.time);
      return;
    }
    toast.error("The time is already taken, please choose another one ", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  return (
    <Grid
      sx={{
        padding: "50px 0px 50px 0px",
        background: "rgba(157, 204, 255, 0.2)",
      }}
    >
      <Grid sx={{ width: "80%", margin: "0 auto" }}>
        <Typography
          sx={{ fontSize: "30px", fontWeight: 600, color: "#252641" }}
        >
          Share and refer
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#696984",
            mb: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
          eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing elit,
          sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed
          do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
          do eiusmodLorem eiusmodLorem dolor sit amet, consectetur adipiscing
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          width: "80%",
          display: "flex",
          background: "#FFFFFF",
          padding: "20px 0px 20px 0px",
          margin: "0 auto",
          borderRadius: "15px",
        }}
      >
        <Grid item xs={4} sx={{ background: "#FFFFFF", minWidth: "380px" }}>
          <CustomCalendar handleChange={handleChange} day={day} />
        </Grid>
        <Grid item xs={4} sx={{ background: "#FFFFFF" }}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 400, color: "#252641" }}
          >
            {day.format("MMM D, dddd")}
          </Typography>
          <Grid>
            {slots.map((slot, index) => (
              <Grid
                key={index}
                className={classes.lessonTime}
                onClick={() => handleClick(slot)}
              >
                <Box sx={{ mt: "10px" }}>{slot.Time}</Box>
                <Box
                  sx={{ transform: "translateY(1px)" }}
                  className={`availability ${
                    slot.Available ? "available" : "occupied"
                  }`}
                >
                  {slot.Available ? (
                    <EventAvailableIcon
                      fontSize="large"
                      sx={{ color: "#22bb33" }}
                    />
                  ) : (
                    <EventBusyIcon fontSize="large" sx={{ color: "#bb2124" }} />
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={3.85}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "stretch",
            flexDirection: "column",
            background: "rgba(157, 204, 255, 0.2)",

            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "24",
              fontWeight: 600,
              color: "#252641",
              mt: "25px",
            }}
          >
            Your Lesson Start
          </Typography>
          <Grid
            sx={{
              display: "flex",
              alignItems: "self-start",
              flexDirection: "column",
              width: "290px",
            }}
          >
            <Typography className={classes.lessonInfo}>
              <span style={{ fontWeight: 700 }}> Month: </span>
              {day.format("MMMM")}
            </Typography>
            <Typography className={classes.lessonInfo}>
              <span style={{ fontWeight: 700 }}> Day: </span>
              {day.format("dddd D")}
            </Typography>
            <Typography className={classes.lessonInfo}>
              <span style={{ fontWeight: 700 }}> Hour: </span> {hour}
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontSize: "24px",
                fontWeight: 400,
                color: "#FFFFFF",
                background: "#7FCFD1",
                border: "none",
                width: "290px",
                margin: "0 auto",
                mt: "25px",
              }}
            >
              Book a lesson
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default BookLesson;
