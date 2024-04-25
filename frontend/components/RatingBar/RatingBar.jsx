import React, { useEffect, useState } from "react";
import { Grid, Typography, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  statsTitle: {
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "1px",
    color: "#000000",
    width: "95px",
    opacity: 0.5,
  },
  rateContainer: {
    display: "flex",
    gap: "10px",
  },
});
const RatingBar = ({ stars, initialCount, allStars, ratingCounts }) => {
  const [count, setCount] = useState(initialCount);
  console.log(count);
  const classes = useStyles();
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <Grid className={classes.rateContainer}>
      <Typography className={classes.statsTitle}>{stars} Stars</Typography>
      <Slider
        sx={{ maxWidth: "480px", color: "#49BBBD" }}
        step={1}
        max={allStars}
        value={count}
        disabled
        marks={Array.from({ length: allStars }, (_, index) => ({
          value: index + 1,
          label: `${index + 1} (${
            ratingCounts[index] ? ratingCounts[index].count : 0
          })`,
        }))}
      />
    </Grid>
  );
};

export default RatingBar;
