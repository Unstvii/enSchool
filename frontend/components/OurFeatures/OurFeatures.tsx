import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import SquareIcon from "@mui/icons-material/Square";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import GroupsIcon from "@mui/icons-material/Groups";
import FeaturesImage from "./FeaturesImage/FeaturesImage";

const useStyles: any = makeStyles({
  CustomPar: {
    fontSize: "22px",
    fontWeght: 400,
    color: "#696984",
    display: "flex",
    alignItems: "center",
    gap: "40px",
    maxWidth: "480px",
    letterSpacing: "1px",
  },
  IconWrapper: {
    minWidth: "60px",
    minHeight: "60px",
    borderRadius: "100px",
    boxShadow: "0px 0px 5px 0px rgba(38,45,118,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const OurFeatures = () => {
  const classes = useStyles();
  return (
    <Grid container sx={{ mt: 20 }}>
      <Grid item xs={12} sx={{ margin: "0 auto", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontSize: "36px", fontWeight: "700", color: "#2F327D" }}
        >
          Our <span style={{ color: "#00CBB8" }}>Features</span>
        </Typography>
        <Typography
          sx={{ fontSize: "24px", fontWeight: 400, color: "#696984" }}
        >
          This very extraordinary feature, can make learning activities more
          efficient
        </Typography>
      </Grid>
      <FeaturesImage
        imageSrc={"/images/lovely-teenage-girl.png"}
        fraction={7}
        sx={{ display: "none" }}
      />
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            lg: "left",
          },
          mt: {
            xs: 10,
            lg: 0,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#2F327D",
            maxWidth: "500px",
            mb: "10px",
          }}
        >
          A <span style={{ color: "#00CBB8" }}>user interface</span> designed
          for the classroom
        </Typography>
        <Grid item sx={{ display: "flex", gap: "30px" }}>
          <span className={classes.IconWrapper}>
            <WidgetsTwoToneIcon sx={{ color: "#2F327D", fontSize: "27px" }} />
          </span>
          <Typography className={classes.CustomPar}>
            Teachers don’t get lost in the grid view and have a dedicated Podium
            space.
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", gap: "30px" }}>
          <span className={classes.IconWrapper}>
            <SquareIcon
              sx={{
                color: "#F48C06",
                boxShadow: " 5px 5px 0px 0px rgba(47,50,125,1)",
                fontSize: "18px",
              }}
            />
          </span>
          <Typography className={classes.CustomPar}>
            TA’s and presenters can be moved to the front of the class.
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", gap: "30px" }}>
          <span className={classes.IconWrapper}>
            <GroupsIcon sx={{ color: "#2F327D", fontSize: "32px" }} />
          </span>
          <Typography className={classes.CustomPar}>
            Teachers can easily see all students and class data at one time.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
          alignItems: {
            xs: "center",
            lg: "flex-end",
          },
          mt: {
            xs: 10,
            lg: 0,
          },
        }}
      >
        <Grid item sx={{ mr: 18 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#2F327D",
              maxWidth: "350px",
            }}
          >
            <span style={{ color: "#00CBB8" }}>Tools</span> For Techers And
            Learners
          </Typography>
        </Grid>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#696984",
            maxWidth: "500px",
          }}
        >
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </Typography>
      </Grid>
      <FeaturesImage
        imageSrc={"/images/lovely-teenage-girl.png"}
        fraction={5}
      />
      <FeaturesImage
        imageSrc={"/images/lovely-teenage-girl.png"}
        fraction={6}
      />
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",

          alignItems: {
            xs: "center",
            lg: "flex-start",
          },
          mt: {
            xs: 10,
            lg: 0,
          },
          gap: "20px",
        }}
      >
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#2F327D",
              maxWidth: "350px",
            }}
          >
            Assessments,<span style={{ color: "#00CBB8" }}> Quizzes</span>,
            Tests
          </Typography>
        </Grid>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#696984",
            maxWidth: "500px",
          }}
        >
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            lg: "flex-end",
          },
          mt: {
            xs: 10,
            lg: 0,
          },
          gap: "20px",
        }}
      >
        <Grid item sx={{ mr: 14 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#2F327D",
              maxWidth: "390px",
            }}
          >
            <span style={{ color: "#00CBB8" }}>Class Management </span> Tools
            for Educators
          </Typography>
        </Grid>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#696984",
            maxWidth: "500px",
          }}
        >
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </Typography>
      </Grid>
      <FeaturesImage
        imageSrc={"/images/lovely-teenage-girl.png"}
        fraction={6}
      />
      <FeaturesImage
        imageSrc={"/images/lovely-teenage-girl.png"}
        fraction={6}
      />
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            lg: "flex-start",
          },
          mt: {
            xs: 10,
            lg: 0,
          },
          gap: "20px",
        }}
      >
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#2F327D",
              maxWidth: "350px",
            }}
          >
            One-on-One <span style={{ color: "#00CBB8" }}>Discussions</span>
          </Typography>
        </Grid>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#696984",
            maxWidth: "500px",
          }}
        >
          Teachers and teacher assistants can talk with students privately
          without leaving the Zoom environment.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OurFeatures;
