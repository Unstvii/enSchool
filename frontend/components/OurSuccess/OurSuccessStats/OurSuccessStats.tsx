import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles({
  gradientTitle: {
    backgroundImage: "linear-gradient(to right, #136CB5 0%, #49BBBD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  gradientDescription: {
    color: "#010514CC",
    fontWeight: "400",
    transform: "translateY(-15px)",
  },
});

const OurSuccessStats = ({ title, text, special }: any) => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      item
      lg={2.4}
      md={4}
    >
      <Typography
        sx={{ fontSize: { xs: "60px", lg: "90px", xl: "96px" } }}
        className={classes.gradientTitle}
      >
        {title}
        {special}
      </Typography>
      <Typography
        sx={{ fontSize: { xs: "20px", lg: "26px", xl: "32px" } }}
        className={classes.gradientDescription}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default OurSuccessStats;
