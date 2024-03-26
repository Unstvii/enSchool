import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
const AppDownload = () => {
  return (
    <Grid
      sx={{
        width: "90%",
        height: "220px",
        borderRadius: "37px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#252641",
        transform: "translateY(-115px)",
      }}
    >
      <Grid
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <Typography
          sx={{ fontSize: "36px", fontWeight: 600, color: "#FFFFFF" }}
        >
          APP is available for free
        </Typography>
        <Grid>
          <Button
            variant="contained"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#29B9E7",
              width: "254px",
              height: "63px",
              borderRadius: "12px",
              marginRight: "24px",
              gap: "17px",
              textTransform: "none",
            }}
          >
            <AndroidIcon sx={{ width: "34px", height: "35px" }} />
            Android APP
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#49BBBD",
              width: "254px",
              height: "63 px",
              borderRadius: "12px",
              textTransform: "none",
              gap: "10px",
            }}
          >
            <AppleIcon sx={{ width: "27px", height: "50px" }} />
            IOS APP
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppDownload;
