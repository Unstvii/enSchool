import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
const CourseHero = ({ image }) => {
  return (
    <Grid>
      <Grid>
        <Image
          src={image}
          alt="course image"
          width={0}
          height={0}
          sizes="vw"
          style={{
            width: "100%",
            height: "650px",
            zIndex: 0,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CourseHero;
