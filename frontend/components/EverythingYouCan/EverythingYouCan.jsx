import React from "react";
import { Grid, Typography, CardMedia } from "@mui/material";

const EverythingYouCan = () => {
  return (
    <Grid container sx={{ margin: "0 auto", mt: 15, width: "80%" }}>
      <Grid item xs={6}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#2F327D",
            mb: 2,
            lineHeight: "57.6px",
          }}
        >
          Everything you can do in a physical classroom,
          <span style={{ color: "#00CBB8" }}>you can do with TOTC</span>
        </Typography>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "400",
            color: "#696984",
            maxWidth: "650px",
            lineHeight: "43.2px",
          }}
        >
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
        </p>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#696984",
            borderBottom: "1px solid #696984",
            width: "115px",
            pb: 0,
            mt: 5,
            lineHeight: "20px",
            cursor: "pointer",
          }}
        >
          Learn more
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{}}>
        <CardMedia
          component="video"
          alt="video"
          image="/videos/mainVideo.mp4"
          title="video"
          type="video/mp4"
          muted=""
          autoPlay=""
          poster="/images/confident-teacher.png"
          controls
          height="auto"
          width="auto"
          sx={{ objectFit: "cover", borderRadius: "20px" }}
        />
      </Grid>
    </Grid>
  );
};

export default EverythingYouCan;
