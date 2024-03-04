import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import TopEducationItem from "./TopEducationItem/TopEducationItem";

const TopEducation = ({
  title,
  link,
  background,
  carouselData,
  carouselType,
}) => {
  return (
    <Grid
      sx={{
        background: background,
        width: "100%",
        pb: "50px",
      }}
    >
      <Grid sx={{ width: "90%", margin: "0 auto" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "95px 0px 50px 0px",
            width: "95%",
            ml: "4%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "30px",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "#000000",
            }}
          >
            {title}
          </Typography>

          <Link
            href={link}
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#49BBBD",
              textDecoration: "none",
            }}
          >
            See all
          </Link>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", gap: "50px" }}
        >
          <TopEducationItem
            carouselData={carouselData}
            carouselType={carouselType}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopEducation;
