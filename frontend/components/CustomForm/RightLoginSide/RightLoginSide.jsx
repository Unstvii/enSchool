import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Grid, Typography } from "@mui/material";
import ToggleForm from "../ToggleForm/ToggleForm";

const RightLoginSide = ({ activeButton, setActiveButton }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateY(-60px)",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
            textAlign: "center",
          }}
        >
          Welcome to lorem..!
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "24px 0px 50px 0px",
          }}
        >
          <ToggleForm
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </Grid>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#5B5B5B",
            textAlign: "left",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <LoginForm
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </Grid>
    </Grid>
  );
};

export default RightLoginSide;
