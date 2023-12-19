import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles({
  gradientTitle: {
    backgroundImage: "linear-gradient(to right, #136CB5 0%, #49BBBD 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "96px",
  },
  gradientDescription: {
    fontSize: "32px",
    color: "#010514CC",
    fontWeight: "400",
  },
});

const OurSuccessStats = ({ title, text, special }: any) => {
  const classes = useStyles();
  return (
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span className={classes.gradientTitle}>
        {title}
        {special}
      </span>
      <span className={classes.gradientDescription}>{text}</span>
    </Typography>
  );
};

export default OurSuccessStats;
