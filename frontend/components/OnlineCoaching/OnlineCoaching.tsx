import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const OnlineCoaching = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "450px",
        background: "#252641",
        width: "90%",
        borderRadius: "37px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "100px",
        padding: "0px 20px 50px 20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#FFFFFF",
          mt: "74px",
          textAlign: "center",
        }}
      >
        Online coaching lessons for remote learning.
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 400,
          color: "#FFFFFF",
          letterSpacing: "1px",
          textAlign: "center",
          mt: "34px",
          maxWidth: "1250px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
        eiusmod tempor
      </Typography>
      <Button
        variant="contained"
        sx={{
          height: "60px",
          padding: "0px 35px 0px 35px",
          fontSize: "16px",
          fontWeight: 700,
          color: "#FFFFFF",
          background: "#49BBBD",
          borderRadius: "12px",
          textTransform: "none",
          mt: "73px",
        }}
      >
        Start learning now
      </Button>
    </Grid>
  );
};

export default OnlineCoaching;
