import { Grid, Typography } from "@mui/material";
import React from "react";
import CourserHeroItem from "./CoursesHeroItem/CoursesHeroItem";

const CoursesHero = ({ choiseData }) => {
  return (
    <Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#252641",
            padding: "50px 0px 50px 0px",
          }}
        >
          Welcome back, ready for your next lesson?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#49BBBD",
            cursor: "pointer",
          }}
        >
          View history
        </Typography>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        <CourserHeroItem choiseData={choiseData} />
      </Grid>
    </Grid>
  );
};

export default CoursesHero;
