import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import CheckIcon from "@mui/icons-material/Check";

const useStyles = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#49BBBD",
    display: "flex",
    alignContent: "center",
  },
  price: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#2D3436",
    margin: "10px 0px 14px 0px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "32px 50px 32px 35px",
    height: "500px",
    position: "relative",
    "&:hover": {
      boxShadow: "10px 10px 30px 10px rgba(38, 50, 56, 0.08)",
      borderRadius: "16px",
      transition: "400ms linear",
    },
  },
  checkContainer: {
    borderRadius: "100px",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  checkTitle: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#2D3436",
  },
  button: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#49BBBD",
    borderRadius: "16px",
    background: "#FFFFFF",
    textTransform: "none",
    width: "306px",
    height: "64px",
    border: "1px solid #ADADAD",
    position: "absolute",
    bottom: "32px",
    "&:hover": {
      background: "#49BBBD",
      color: "#FFFFFF",
    },
  },
});
const Pricing = () => {
  const classes = useStyles();
  return (
    <Grid sx={{ paddingBottom: "60px" }}>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#49BBBD",
            letterSpacing: "-1px",
            margin: "110px 0px 70px 0px",
          }}
        >
          Affordable pricing
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Grid className={classes.container}>
          <Grid>
            <Grid>
              <Typography className={classes.title}>Free</Typography>
              <Typography className={classes.price}>
                Free
                <span style={{ fontSize: "12px", fontWeight: 800 }}>
                  / EDITOR
                </span>
              </Typography>
              <Grid
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#E2E2E2",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Components-driven system
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#E2E2E2",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Sales-boosting landing pages
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#E2E2E2",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Awesome Feather icons pack
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Button className={classes.button}>Try for free</Button>
          </Grid>
        </Grid>
        <Grid className={classes.container}>
          <Grid>
            <Grid>
              <Typography className={classes.title}>
                <GroupIcon />
                Individual
              </Typography>
              <Typography className={classes.price}>
                $24
                <span style={{ fontSize: "12px", fontWeight: 800 }}>
                  / EDITOR
                </span>
              </Typography>
              <Grid
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#FDCB6E",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Components-driven system
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#FDCB6E",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Sales-boosting landing pages
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#FDCB6E",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Awesome Feather icons pack
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#FDCB6E",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Themed into 3 different styles
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#FDCB6E",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Will help to learn Figma
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Button className={classes.button}>Regular license</Button>
          </Grid>
        </Grid>
        <Grid className={classes.container}>
          <Grid>
            <Grid>
              <Typography className={classes.title}>
                <GroupIcon />
                Corporate
              </Typography>
              <Typography className={classes.price}>
                $12
                <span style={{ fontSize: "12px", fontWeight: 800 }}>
                  / EDITOR
                </span>
              </Typography>
              <Grid
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#ADF7E3",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Components-driven system
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#ADF7E3",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Sales-boosting landing pages
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#ADF7E3",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Awesome Feather icons pack
                  </Typography>
                </Grid>
                <Grid className={classes.line}>
                  <Box
                    className={classes.checkContainer}
                    sx={{
                      background: "#ADF7E3",
                    }}
                  >
                    <CheckIcon sx={{ width: "18px", height: "18px" }} />
                  </Box>
                  <Typography className={classes.checkTitle}>
                    Themed into 3 different styles
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Button className={classes.button}>Extended license</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pricing;
