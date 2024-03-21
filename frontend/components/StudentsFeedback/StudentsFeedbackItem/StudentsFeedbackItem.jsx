import { Button, Grid, Slider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import "./CustomCarouselItem.css";

SwiperCore.use([Pagination, Navigation]);

const StudentsFeedbackItem = ({ StudentsFeedbackData, carouselType }) => {
  const [slides, setSlides] = useState({
    slides: 4,
    constrols: 1,
  });
  const setSlidesValue = (visibleControls, slidesPerView) => {
    let prevSlides = { ...slides };
    prevSlides.constrols = visibleControls;
    prevSlides.slides = slidesPerView;
    setSlides(prevSlides);
  };
  const clicki = () => {
    console.log(carouselData);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1650 && window.innerWidth >= 1251) {
        setSlidesValue(1, 3);
      }
      if (window.innerWidth <= 1250 && window.innerWidth >= 851) {
        setSlidesValue(1, 2);
      }
      if (window.innerWidth <= 850 && window.innerWidth >= 200) {
        setSlidesValue(1, 1);
      }
    }
  }, []);

  const [disabledButton, setDisabledButton] = useState({
    prevButton: true,
    nextButton: false,
  });

  const swiperButtons = {
    prev: "swiper-button-prev-" + carouselType,
    next: "swiper-button-next-" + carouselType,
  };

  const prevButton =
    typeof document !== "undefined"
      ? document.getElementsByClassName(swiperButtons.prev)
      : " ";
  const nextButton =
    typeof document !== "undefined"
      ? document.getElementsByClassName(swiperButtons.next)
      : " ";

  const handleRight = () => {
    if (nextButton[0].className.includes("swiper-button-disabled")) {
      let prevState = { ...disabledButton };
      prevState.nextButton = true;
      prevState.prevButton = false;
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
      prevState.nextButton = false;
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
        width: "100%",
        ml: "5%",
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={slides.slides}
        spaceBetween={30}
        style={{
          padding: "15px",
          background: "none",
        }}
        navigation={{
          nextEl: "." + swiperButtons.next,
          prevEl: "." + swiperButtons.prev,
        }}
      >
        {StudentsFeedbackData.map((data, index) => (
          <SwiperSlide key={index} className="customSwiperContainer">
            <Link
              href={`/courses/${data.ID}`}
              style={{ textDecoration: "none" }}
            >
              <Grid
                item
                sx={{
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "374px",
                  padding: "35px 27px 30px 28px",
                  boxShadow: "0px 0px 20px 0px rgba(38,45,118,0.08)",
                  borderRadius: "15px",
                }}
              >
                <Image
                  width={118}
                  height={118}
                  style={{ borderRadius: "6px" }}
                  src={data.image}
                  alt="student-picture"
                />

                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#2D3436",
                    paddingTop: "20px",
                  }}
                >
                  {data.name} {data.surname}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    color: "#696984",
                    paddingTop: "19px",
                    textAlign: "center",
                  }}
                >
                  {data.feedback}
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
                  ></Grid>
                </Grid>
              </Grid>
            </Link>
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
            xs: "5%",
            lg: "7.5%",
          },
          marginTop: "35px",
          gap: "20px",
          display: slides.constrols ? "flex" : "none",
        }}
      >
        <Button
          className={swiperButtons.prev}
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
          className={swiperButtons.next}
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

export default StudentsFeedbackItem;
