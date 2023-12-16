import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Image from "next/image";

const HeroHome = () => {
  return (
    <Box
      sx={{
        background: "#49BBBD",
        height: "94.5vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              width: 550,
              paddingTop: 23,
              color: "white",
              fontSize: "54px",
            }}
          >
            <span style={{ color: "orange" }}>Studying </span>
            Online is now much easier
          </Typography>
          <Typography
            sx={{ color: "white", width: "510px", mt: 5, fontSize: "24px" }}
          >
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Button
              sx={{
                background: "#7FCFD1",
                pt: "10px",
                pb: "10px",
                pr: "15px",
                pl: "15px",
                mr: 3,
                borderRadius: "100px",
                textTransform: "none",
                color: "white",
                fontWeight: 100,
                fontSize: "24px",
              }}
            >
              Join for Free
            </Button>
            <Button
              sx={{ fontSize: "24px", color: "#252641", textTransform: "none" }}
            >
              <PlayArrowIcon
                sx={{
                  color: "#49BBBD",
                  borderRadius: "100px",
                  width: "62px",
                  height: "62px",
                  background: "white",
                  mr: 4,
                }}
              />
              Watch how it works
            </Button>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: {
                xs: 0,
                md: "10%",
              },
            }}
          >
            <Image
              src="/images/lovely-teenage-girl.png"
              alt="lovely image"
              width={444}
              height={792}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroHome;
