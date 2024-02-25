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
import "./CustomCarouselItem.css";

SwiperCore.use([Pagination, Navigation]);

const CustomCarouselItem = ({ carouselData, carouselType }) => {
  const [slides, setSlides] = useState({
    slides: 4,
    constrols: 0,
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
    if (window.innerWidth <= 1650 && window.innerWidth >= 1251) {
      setSlidesValue(1, 3);
    }
    if (window.innerWidth <= 1250 && window.innerWidth >= 851) {
      setSlidesValue(1, 2);
    }
    if (window.innerWidth <= 850 && window.innerWidth >= 200) {
      setSlidesValue(1, 1);
    }
  }, [window.innerWidth]);

  const [disabledButton, setDisabledButton] = useState({
    prevButton: true,
    nextButton: false,
  });

  const swiperButtons = {
    prev: "swiper-button-prev-" + carouselType,
    next: "swiper-button-next-" + carouselType,
  };

  const prevButton = document.getElementsByClassName(swiperButtons.prev);
  const nextButton = document.getElementsByClassName(swiperButtons.next);

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
        {carouselData.map((data, index) => (
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
                  width: "374px",
                  padding: "20px",
                  boxShadow: "0px 0px 20px 0px rgba(38,45,118,0.08)",
                  borderRadius: "15px",
                }}
              >
                <Image
                  width={335}
                  height={239}
                  style={{ borderRadius: "20px" }}
                  src={data.image}
                  alt="article-picture"
                />
                <Grid
                  sx={{
                    paddingTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        color: "#696984",
                      }}
                    >
                      <GridViewIcon
                        sx={{
                          color: "#D9D9D9",
                          transform: "translateY(7px)",
                          mr: "6px",
                        }}
                      />
                      {data.category}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        color: "#696984",
                      }}
                    >
                      <AccessTimeIcon
                        sx={{
                          transform: "translate(-6px, 6px)",
                          color: "#D9D9D9",
                        }}
                      />
                      {data.lessons + " "}hours
                    </Typography>
                  </Grid>
                </Grid>
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
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    color: "#696984",
                    paddingTop: "22px",
                  }}
                >
                  {data.description}
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
                      onClick={clicki}
                    >
                      Lina
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: "flex" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: "18px",
                        fontWeight: 300,
                        letterSpacing: "1px",
                        fontStyle: "italic",
                        color: "#000000",
                        opacity: "0.5",
                        textDecorationLine: "line-through",
                        mr: "12px",
                        transform: "translateY(6px)",
                      }}
                    >
                      ${data.oldPrice}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#49BBBD",
                      }}
                    >
                      ${data.price}
                    </Typography>
                  </Grid>
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

export default CustomCarouselItem;
