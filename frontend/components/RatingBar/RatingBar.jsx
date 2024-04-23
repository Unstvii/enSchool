import React, { useState } from "react";
import { Grid, Typography, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  statsTitle: {
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "1px",
    color: "#000000",
    opacity: 0.5,
  },
  rateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
});

const RatingBar = ({ stars, count, allStars }) => {
  console.log(allStars);
  const classes = useStyles();
  const [value, setValue] = useState(count); // Ініціалізація стану зі значенням count

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid className={classes.rateContainer}>
      <Typography className={classes.statsTitle}>{stars} Stars</Typography>
      <Slider
        sx={{ maxWidth: "480px", color: "#49BBBD" }}
        step={1}
        max={5}
        value={value}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default RatingBar;
