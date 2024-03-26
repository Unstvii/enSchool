import React from "react";
import NavPanel from "../NavPanel/NavPanel";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
const MainTextSide = ({ activeButton }) => {
  return (
    <Grid sx={{ width: "720px", position: "relative" }}>
      <Grid>
        <Image
          src={
            activeButton.login
              ? "/images/RegisterFormImage.png"
              : "/images/LoginFormImage.png"
          }
          alt="happy people"
          width={0}
          height={0}
          sizes="vw"
          style={{
            width: "100%",
            maxHeight: "820px",
            height: "100vh",
            zIndex: 0,
            borderRadius: "29px",
          }}
        />
        <Grid sx={{ position: "absolute", bottom: "70px", left: "10%" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: "37px", fontWeight: 700, color: "#FFFFFF" }}
          >
            Lorem Ipsum is simply{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "25px", fontWeight: 400, color: "#FFFFFF" }}
          >
            Lorem Ipsum is simply
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainTextSide;
