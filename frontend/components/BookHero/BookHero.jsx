import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
const BookHero = () => {
  return (
    <Grid
      sx={{
        height: "87vh",
        background: "#49BBBD",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{ width: "78%", margin: "0 auto", transform: "translateY(-45px)" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "54",
            fontWeight: 700,
            width: "640px",
            color: "white",
          }}
        >
          <span style={{ color: "orange" }}>Book</span> A Lesson is now much
          easier
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#FFFFFF",
            width: "590px",
            paddingTop: "15px",
          }}
        >
          Now you can book a lesson just a few clicks. Pick day hour and you
          with us!
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#FFFFFF",
            background: "#7FCFD1",
            border: "none",
            marginTop: "25px",
            width: "245px",
          }}
        >
          Book a lesson
        </Button>
      </Grid>
    </Grid>
  );
};

export default BookHero;
