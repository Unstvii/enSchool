import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
const ToggleForm = ({ activeButton, setActiveButton }) => {
  const handleLoginButton = () => {
    setActiveButton({
      login: true,
      register: false,
    });
  };
  const handleRegisterButton = () => {
    setActiveButton({
      login: false,
      register: true,
    });
  };

  return (
    <Grid
      sx={{
        width: "320px",
        height: "58px",
        background: "#92D6D6",
        borderRadius: "32px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "140px",
          height: "40px",
          borderRadius: "25px",
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: 500,
          boxShadow: "none",
          border: "none",
          textTransform: "none",
          background: activeButton.login ? "#49BBBD" : "none",
        }}
        onClick={handleLoginButton}
      >
        Login
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "140px",
          height: "40px",
          borderRadius: "25px",
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: 500,
          boxShadow: "none",
          border: "none",
          textTransform: "none",
          background: activeButton.register ? "#49BBBD" : "none",
        }}
        onClick={handleRegisterButton}
      >
        Register
      </Button>
    </Grid>
  );
};

export default ToggleForm;
