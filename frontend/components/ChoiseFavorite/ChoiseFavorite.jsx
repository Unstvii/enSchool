import { Grid, Typography } from "@mui/material";
import React from "react";
import ChoiseData from "./ChoiseData";
import ChoiseFavoriteCard from "./ChoiseFavoriteCard/ChoiseFavoriteCard";
const ChoiseFavorite = () => {
  return (
    <Grid
      container
      sx={{
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#252641",
          margin: {
            xs: "80px 0px 50px 0px",
          },
          textAlign: {
            xs: "center",
          },
        }}
      >
        Choice favourite course from top category
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "20px", lg: "80px" },
        }}
      >
        {ChoiseData.map((item, index) => (
          <ChoiseFavoriteCard
            title={item.title}
            description={item.description}
            key={index}
            icon={item.icon}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ChoiseFavorite;
