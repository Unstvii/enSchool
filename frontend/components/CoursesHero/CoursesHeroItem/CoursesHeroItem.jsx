import { Grid, Slider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CustomCarouselItem = ({ choiseData }) => {
  return (
    <>
      {choiseData.map((data, index) => (
        <Grid
          item
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "520px",
            padding: "20px",
            boxShadow: "0px 0px 60px 0px rgba(38,45,118,0.08)",
            borderRadius: "15px",
          }}
        >
          <Image
            width={486}
            height={258}
            src={data.image}
            sx={{ borderRadius: "20px" }}
            alt="article-picture"
          />

          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#252641",
              lineHeight: "30px",
              paddingTop: "20px",
            }}
          >
            {data.title}
          </Typography>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "20px",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{
                  background: "#D9D9D9",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                }}
              >
                <Image
                  width={30}
                  height={35}
                  src="/images/lovely-teenage-girl.png"
                  alt="user-icon"
                />
              </Grid>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  color: "#000000",
                }}
                ml="17px"
              >
                {data.username}
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ mt: "15px" }}>
            <Slider
              sx={{ maxWidth: "480px", color: "#49BBBD" }}
              step={1}
              max={data.lessons}
              value={data.currentLesson}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "#000000",
                opacity: "0.5",
                textAlign: "right",
              }}
            >
              Lesson {data.currentLesson} of {data.lessons}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CustomCarouselItem;
