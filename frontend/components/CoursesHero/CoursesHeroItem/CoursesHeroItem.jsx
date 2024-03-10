import { Button, Grid, Slider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./CustomCarouselItem.css";

SwiperCore.use([Pagination, Navigation]);

const CustomCarouselItem = ({ choiseData }) => {
  const [slides, setSlides] = useState({
    slides: 3,
    constrols: 0,
  });
  const setSlidesValue = (visibleControls, slidesPerView) => {
    let prevSlides = { ...slides };
    prevSlides.constrols = visibleControls;
    prevSlides.slides = slidesPerView;
    setSlides(prevSlides);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1350 && window.innerWidth >= 1001) {
        setSlidesValue(1, 2);
      }
      if (window.innerWidth <= 1000 && window.innerWidth >= 200) {
        setSlidesValue(1, 1);
      }
    }
  }, []);
  const [disabledButton, setDisabledButton] = useState({
    prevButton: true,
    nextButton: false,
  });
  const prevButton =
    typeof document !== "undefined"
      ? document.getElementsByClassName("swiper-button-prev-custom")
      : " ";
  const nextButton =
    typeof document !== "undefined"
      ? document.getElementsByClassName("swiper-button-next-custom")
      : " ";

  const handleRight = () => {
    if (nextButton[0].className.includes("swiper-button-disabled")) {
      let prevState = { ...disabledButton };
      prevState.nextButton = true;
      setDisabledButton(prevState);
      return;
    }
    let prevState = { ...disabledButton };
    prevState.prevButton = false;
    setDisabledButton(prevState);
  };

  const handleLeft = () => {
    if (prevButton[0].className.includes("swiper-button-disabled")) {
      let prevState = { ...disabledButton };
      prevState.prevButton = true;
      setDisabledButton(prevState);
      return;
    }
    let prevState = { ...disabledButton };
    prevState.nextButton = false;
    setDisabledButton(prevState);
  };
  return (
    <Grid
      sx={{
        width: "85%",
        ml: "10%",
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={slides.slides}
        spaceBetween={20}
        style={{
          padding: "15px",
          background: "none",
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {choiseData.map((data, index) => (
          <SwiperSlide key={index} className="customLessonContainer">
            <Grid
              item
              sx={{
                background: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                maxWidth: "520px",
                padding: "15px",
                boxShadow: "0px 0px 10px 0px rgba(38,45,118,0.08)",
                borderRadius: "15px",
              }}
            >
              <Image
                src={data.image}
                width={0}
                height={0}
                sizes="vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
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
          </SwiperSlide>
        ))}
      </Swiper>
      <Grid
        sx={{
          position: "relative",
          width: "90%",
          display: "flex",
          justifyContent: {
            xs: "center",
            lg: "flex-end",
          },
          ml: {
            xs: "5.2%",
            lg: "8.8%",
          },
          marginTop: "35px",
          gap: "20px",
        }}
      >
        <Button
          className="swiper-button-prev-custom"
          onClick={handleLeft}
          sx={{
            "&:hover": {
              background: "#49BBBD",
            },
            color: "#FFFFFF",
            background: "#49BBBD",
            opacity: disabledButton.prevButton ? "50%" : "100%",
            minWidth: "50px",
            height: "50px",
          }}
        >
          <ArrowBackIosNewRoundedIcon />
        </Button>
        <Button
          className="swiper-button-next-custom"
          onClick={handleRight}
          sx={{
            "&:hover": {
              background: "#49BBBD",
            },
            color: "#FFFFFF",
            background: "#49BBBD",
            opacity: disabledButton.nextButton ? "50%" : "100%",
            minWidth: "50px",
            height: "50px",
          }}
        >
          <ArrowForwardIosRoundedIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default CustomCarouselItem;
