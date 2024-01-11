import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import FooterInput from "./FooterInput/FooterInput";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles({
  PolicyTitle: {
    fontSize: "22px",
    fontWeight: 400,
    letterSpacing: "2px",
    color: "#B2B3CF",
    display: "block",
  },
  PolicyLine: {
    width: "1px",
    height: "18px",
    background: "#626381",
    transform: "translateY(8px)",
  },
});
const Footer = () => {
  const styles = useStyles();
  return (
    <Grid container sx={{ background: "#252641", height: "580px" }}>
      <Grid container mt={8} sx={{ height: "0px" }}>
        <Grid item xs={6} sx={{ textAlign: "right", paddingRight: "100px" }}>
          <Image
            src="/images/lovely-teenage-girl.png"
            alt="lovely image"
            width={60}
            height={60}
            sizes="vw"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "22px",
              letterSpacing: "1px",
              maxWidth: "156px",
              borderLeft: "2px solid #626381",
              paddingLeft: "30px",
            }}
          >
            Virtual Class for Zoom
          </Typography>
        </Grid>
      </Grid>
      <Grid container mt={8}>
        <Grid item xs={12} sx={{ height: "0px" }}>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "#B2B3CF",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Subscribe to get our Newsletter
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FooterInput />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            height: "0px",
            mt: 3,
          }}
          xs={12}
        >
          <Typography className={styles.PolicyTitle}>Careers</Typography>
          <Grid className={styles.PolicyLine}></Grid>
          <Typography className={styles.PolicyTitle}>Privacy Policy</Typography>
          <Grid className={styles.PolicyLine}></Grid>
          <Typography className={styles.PolicyTitle}>
            Terms & Conditions
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ textAlign: "center", transform: "translateY(-15px)" }}
        >
          <Typography className={styles.PolicyTitle}>
            © 2021 Class Technologies Inc.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
