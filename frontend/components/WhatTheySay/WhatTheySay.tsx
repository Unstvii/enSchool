import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Image from "next/image";

const useStyles: any = makeStyles({
  WhatLine: {
    fontWeight: 400,
    letterSpacing: "1px",
    color: "#696984",
    maxWidth: "600px",
  },
});
const feedbackData = [
  {
    name: "Gloria Rose",
    rate: 5,
    reviews: 12,
    feedback:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
  },
  {
    name: "Joe 1",
    rate: 3,
    reviews: 12,
    feedback:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
  },
  {
    name: "Joe 2",
    rate: 1,
    reviews: 12,
    feedback:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
  },
];

const WhatTheySay = () => {
  const styles = useStyles();
  return (
    <Grid
      container
      sx={{ width: { xs: "95%", lg: "80%" }, margin: "0 auto", marginTop: 20 }}
    >
      <Grid item xs={6}>
        <Grid sx={{ display: "flex" }}>
          <Grid
            sx={{
              width: "80px",
              height: "1px",
              background: "#525596",
              transform: "translateY(14px)",
              marginRight: "30px",
            }}
          ></Grid>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "5px",
              color: "#525596",
            }}
          >
            TESTIMONIAL
          </Typography>
        </Grid>
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "45px",
              lg: "60px",
            },

            fontWeight: 700,
            color: "#2F327D",
            marginTop: "30px",
          }}
        >
          What They Say?
        </Typography>
        <Typography
          sx={{ marginTop: "29px", fontSize: { xs: "20px", lg: "26px" } }}
          className={styles.WhatLine}
        >
          TOTC has got more than 100k positive ratings from our users around the
          world.
        </Typography>
        <Typography
          sx={{ marginTop: "26px", fontSize: { xs: "20px", lg: "26px" } }}
          className={styles.WhatLine}
        >
          Some of the students and teachers were greatly helped by the Skilline.
        </Typography>
        <Typography
          sx={{ marginTop: "46px", fontSize: { xs: "20px", lg: "26px" } }}
          className={styles.WhatLine}
        >
          Are you too? Please give your assessment
        </Typography>
        <Button
          sx={{
            marginTop: "43px",
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "1px",
            color: "#49BBBD",
            border: "1px solid #49BBBD",
            borderRadius: "80px",
            width: "403px",
            height: "80px",
            paddingLeft: "38px",
            textTransform: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
          variant="outlined"
        >
          Write your assessment
          <EastRoundedIcon
            sx={{
              border: "1px solid #49BBBD",
              borderRadius: "100px",
              padding: "21px",
              transform: "translateX(16px)",
              fontSize: "35px",
            }}
          />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Image
          src="/images/smiling-woman.png"
          alt="user image"
          width={0}
          height={0}
          sizes="vw"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "560px",
            maxHeight: "700px",
            borderRadius: "20px",
          }}
        />
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default WhatTheySay;
