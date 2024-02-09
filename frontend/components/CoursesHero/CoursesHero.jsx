import { Grid, Typography } from "@mui/material";
import React from "react";
import CourserHeroItem from "./CoursesHeroItem/CoursesHeroItem";

const CoursesHero = ({ choiseData }) => {
  return (
    <Grid
      sx={{ background: "rgba(157, 204, 255, 0.2)", paddingBottom: "60px" }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "83%",
          ml: "11%",
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

      <Grid>
        <CourserHeroItem choiseData={choiseData} />
      </Grid>
    </Grid>
  );
};

export default CoursesHero;
