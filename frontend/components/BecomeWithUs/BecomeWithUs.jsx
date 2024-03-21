import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const BecomeWithUs = () => {
  return (
    <Grid
      sx={{
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "150px",
        paddingBottom: "200px",
      }}
    >
      <Grid
        sx={{
          padding: "59px 30px 50px 30px",
          boxShadow: "0px 0px 60px 0px rgba(38,45,118,0.08)",
          borderRadius: "20px",
          position: "relative",
          height: "700px",
          maxWidth: "780px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src="/images/coursesHero1.png"
          alt="become teacher image"
          width={0}
          height={0}
          sizes="vw"
          style={{
            width: "100%",
            height: "380px",
            zIndex: 0,
          }}
        />
        <Grid>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 500,
              color: "#252641",
              margin: "12px 0px 13px 0px",
            }}
          >
            Become a Teacher
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#696984",
              letterSpacing: "1px",
            }}
          >
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </Typography>

          <Button
            variant="contained"
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#FFFFFF",
              background: "#49BBBD",
              borderRadius: "12px",
              position: "absolute",
              bottom: "50px",
              right: "30px",
              width: "250px",
              height: "60px",
              textTransform: "none",
            }}
          >
            Apply a Teacher
          </Button>
        </Grid>
      </Grid>
      <Grid
        sx={{
          padding: "59px 30px 50px 30px",
          boxShadow: "0px 0px 60px 0px rgba(38,45,118,0.08)",
          borderRadius: "20px",
          position: "relative",
          height: "700px",
          maxWidth: "780px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src="/images/coursesHero1.png"
          alt="become teacher image"
          width={0}
          height={0}
          sizes="vw"
          style={{
            width: "100%",
            height: "380px",
            zIndex: 0,
          }}
        />
        <Grid>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 500,
              color: "#252641",
              margin: "12px 0px 13px 0px",
            }}
          >
            Become a Coursector
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#696984",
              letterSpacing: "1px",
            }}
          >
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </Typography>

          <Button
            variant="contained"
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#FFFFFF",
              background: "#49BBBD",
              borderRadius: "12px",
              position: "absolute",
              bottom: "50px",
              right: "30px",
              width: "250px",
              height: "60px",
              textTransform: "none",
            }}
          >
            Apply a Coursector
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BecomeWithUs;
