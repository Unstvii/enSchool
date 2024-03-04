import React from "react";
import { Grid, Typography, Rating } from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Feedback = ({ author, rate, image, date, title }) => {
  return (
    <Grid mt="20px">
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7px",
          }}
        >
          <Image
            src={image}
            alt="author image"
            width="70"
            height="70"
            style={{
              borderRadius: "100px",
            }}
          />
          <Grid sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <Typography ml="3px"> {author}</Typography>
            <Rating name="read-only" value={rate} readOnly />
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <AccessTimeIcon sx={{ color: "#D9D9D9", fontSize: "25px" }} />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#696984",
              letterSpacing: "1px",
            }}
          >
            {date} Month
          </Typography>
        </Grid>
      </Grid>
      <Grid sx={{ mt: "20px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            color: "#696984",
            letterSpacing: "1px",
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Feedback;
