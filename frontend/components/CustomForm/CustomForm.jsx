import React, { useState } from "react";
import MainTextSide from "./MainTextSide/MainTextSide";
import { Box, Button, Grid, Typography } from "@mui/material";
import RightRegisterSide from "./RightRegisterSide/RightRegisterSide";
import RightLoginSide from "./RightLoginSide/RightLoginSide";

const CustomForm = ({ activeButton, setActiveButton }) => {
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: "1.8fr 1fr ",
        background: "#FFFFFF",
        width: "100%",
        height: "100vh",
        maxWidth: "1440px",
        maxHeight: "900px",
        margin: "0 auto",
        padding: "38px 80px 37px 41px",
        boxShadow: "0px 0px 6px 10px rgba(38,45,118,0.08)",
        borderRadius: "30px",
      }}
    >
      <MainTextSide activeButton={activeButton} />
      {activeButton.register ? (
        <RightRegisterSide
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      ) : (
        " "
      )}
      {activeButton.login ? (
        <RightLoginSide
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      ) : (
        " "
      )}
    </Grid>
  );
};

export default CustomForm;
