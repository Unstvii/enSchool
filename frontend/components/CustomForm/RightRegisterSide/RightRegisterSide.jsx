import React from "react";
import styles from "./RightRegisterSide.module.scss";
import LoginForm from "../LoginForm/LoginForm";
// import SocialLogin from "../SocialLogin/SocialLogin";
import { Grid, Typography } from "@mui/material";
import ToggleForm from "../ToggleForm/ToggleForm";
const RightRegisterSide = ({ activeButton, setActiveButton }) => {
  return (
    <div className={styles.RightLoginSide}>
      <Grid sx={{ transform: "translateY(6vh)" }}>
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
            margin: "0px 0px 30px 0px",
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
    </div>
  );
};

export default RightRegisterSide;
