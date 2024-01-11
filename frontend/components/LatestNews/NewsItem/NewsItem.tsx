import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
const NewsItem = ({ title, line, image, buttonText }: any) => {
  return (
    <Grid container>
      <Grid item xs={5} sx={{ position: "relative" }}>
        <Image
          src={image}
          alt="news image"
          width={0}
          height={0}
          sizes="vw"
          style={{ width: "280px", height: "200px" }}
        />
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            minWidth: "100px",
            display: "block",
            fontSize: "15px",
            fontWeight: 400,
            color: "#FFFFFF",
            background: "#49BBBD",
            letterSpacing: "1px",
            borderRadius: "100px",
            bottom: "20px",
            right: "58px",
            padding: "4px 9px 4px 9px",
          }}
        >
          {buttonText}
        </Button>
      </Grid>
      <Grid item xs={7} mt={1}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "22px",
            fontWeight: 500,
            color: "#252641",
            maxWidth: "440px",
            lineHeight: "39.6px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            color: "#696984",
            letterSpacing: "1px",
            maxWidth: "440px",
            marginTop: "18px",
            lineHeight: "36px",
          }}
        >
          {line}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NewsItem;
