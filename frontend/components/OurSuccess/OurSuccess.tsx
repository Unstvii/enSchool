import { Box, Container, Typography } from "@mui/material";
import React from "react";
import OurSuccessStats from "./OurSuccessStats/OurSuccessStats";
const OurSuccess = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "48px", fontWeight: "700", color: "#010514" }}
        >
          Our Success
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#010514",
            width: "700px",
            textAlign: "center",
          }}
        >
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          pt: 10,
          width: "90%",
          margin: "0 auto",
        }}
      >
        <OurSuccessStats title="15" text="Students" special="K+" />
        <OurSuccessStats title="75" text="Total success" special="%" />
        <OurSuccessStats title="35" text="Main questions" special="" />
        <OurSuccessStats title="26" text="Chief experts" special="" />
        <OurSuccessStats title="16" text="Years of experience" special="" />
      </Box>
    </Box>
  );
};

export default OurSuccess;
