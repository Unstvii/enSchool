import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import StudentsFeedbackItem from "./StudentsFeedbackItem/StudentsFeedbackItem";

const StudentsFeedback = ({ StudentsFeedbackData }) => {
  return (
    <Grid
      sx={{
        background: "#EBF5FF",
        width: "100%",
        pb: "200px",
      }}
    >
      <Grid sx={{ width: "90%", margin: "0 auto" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "95px 0px 50px 0px",
            width: "95%",
            ml: "4%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "30px",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "#000000",
            }}
          >
            What our students have to say
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", gap: "50px" }}
        >
          <StudentsFeedbackItem
            StudentsFeedbackData={StudentsFeedbackData}
            carouselType="customType"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StudentsFeedback;
