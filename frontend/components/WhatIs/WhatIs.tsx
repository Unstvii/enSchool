import React from "react";
import { Box, Button, Typography } from "@mui/material";

const WhatIs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "90%",
        margin: "0 auto",
        mt: 15,
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#2F327D", fontSize: "44px", fontWeight: 600 }}
        >
          What is <span style={{ color: "#00CBB8" }}>TOTC?</span>
        </Typography>
        <p
          style={{
            textAlign: "center",
            color: "#696984",
            fontSize: "24px",
            fontWeight: 400,
            maxWidth: "1050px",
          }}
        >
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",

          width: "85%",
          mt: 8,
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: {
            xs: 8,
            lg: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage: `linear-gradient(rgba(23, 27, 65, 0.4), rgba(23, 27, 65, 0.5)),url(/images/what-is-women.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: 600,
            height: 400,
            borderRadius: "16px",
            border: "1px solid #000000",
          }}
        >
          <Typography
            sx={{ fontSize: "32px", color: "#FFFFFF", fontWeight: 600 }}
          >
            FOR INSTRUCTORS
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#FFFFFF",
              borderRadius: "100px",
              fontSize: "22px",
              fontWeight: "500",
              padding: "15px 25px 15px 25px",
              textTransform: "none",
              border: "1px solid #FFFFFF",
              mt: 2,
            }}
          >
            Start a class today
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage: `linear-gradient(rgba(23, 27, 65, 0.4), rgba(23, 27, 65, 0.5)), url(/images/what-is-people.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: 600,
            height: 400,
            borderRadius: "16px",
            border: "1px solid #171B4173",
          }}
        >
          <Typography
            sx={{ fontSize: "32px", color: "#FFFFFF", fontWeight: 600 }}
          >
            FOR STUDENTS
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "#FFFFFF",
              background: "#23BDEEE5",
              fontSize: "22px",
              fontWeight: 500,
              borderRadius: "100px",
              padding: "15px 25px 15px 25px",
              textTransform: "none",
              mt: 2,
            }}
          >
            Enter access code
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatIs;
