import React from "react";
import { Grid, Typography, CardMedia } from "@mui/material";

const EverythingYouCan = ({ data }) => {
  return (
    <Grid
      container
      sx={{
        paddingBottom: "50px",
        margin: "0 auto",
        mt: 15,
        width: {
          lg: "80%",
          xs: "90%",
        },
      }}
    >
      <Grid item xs={12} lg={6}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#2F327D",
            mb: 2,
            lineHeight: "57.6px",
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
        >
          {data.title}
          <span style={{ color: "#00CBB8" }}>{data.allocation}</span>
        </Typography>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "400",
            color: "#696984",
            maxWidth: {
              lg: "650px",
              sx: "auto",
            },
            lineHeight: "43.2px",
          }}
        >
          {data.description}
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
      <Grid item xs={12} lg={6} mt={{ xs: 8, lg: 0 }}>
        <CardMedia
          component="video"
          alt="video"
          image={data.video}
          title="video"
          type="video/mp4"
          muted={false}
          autoPlay={false}
          poster={data.poster}
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
