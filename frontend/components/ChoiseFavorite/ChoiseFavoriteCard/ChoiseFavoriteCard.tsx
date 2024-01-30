import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ChoiseFavoriteCard = ({
  title,
  icon: IconComponent,
  description,
}: any) => {
  return (
    <Grid
      sx={{
        background: "#FFFFFF",
        borderRadius: "20px",
        height: "350px",
        maxWidth: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 0px 60px 0px rgba(38,45,118,0.08)",
      }}
    >
      <Grid
        sx={{
          width: "90px",
          height: "90px",
          background: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <IconComponent />
      </Grid>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "30px",
          fontWeight: 600,
          color: "#000000",
          letterSpacing: "1px",
          marginTop: "10px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: "18px",
          fontWeight: 400,
          color: "#696984",
          letterSpacing: "1px",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        {description}
      </Typography>
    </Grid>
  );
};

export default ChoiseFavoriteCard;
