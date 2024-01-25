import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
const NewsItem = ({ title, line, image, buttonText, special }: any) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        md={4}
        xl={5}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
            position: "relative",
            minWidth: "100px",
            display: "block",
            fontSize: "15px",
            fontWeight: 400,
            color: "#FFFFFF",
            background: "#49BBBD",
            letterSpacing: "1px",
            borderRadius: "100px",
            bottom: "50px",
            right: special ? "-45px" : "-65px",
            padding: "4px 9px 4px 9px",
          }}
        >
          {buttonText}
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        xl={6}
        mt={1}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
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
