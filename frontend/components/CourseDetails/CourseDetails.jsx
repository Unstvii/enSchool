import React from "react";
import { Grid, Typography } from "@mui/material";
import CourseHero from "./CourseHero/CourseHero";
import Header from "../Header/Header";
import CourseDescription from "./CourseDescription/CourseDescription";
import Overview from "./Overview/Overview";
const CourseDetails = ({ course, feedbacks, ratingData }) => {
  return (
    <Grid>
      <Header />
      <CourseHero image={course.image} />
      <Overview course={course} feedbacks={feedbacks} ratingData={ratingData} />
    </Grid>
  );
};

export default CourseDetails;
