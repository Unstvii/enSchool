"use client";
import Header from "@/components/Header/Header";
import React from "react";
import ChoiseFavorite from "../../components/ChoiseFavorite/ChoiseFavorite";
import OnlineCoaching from "@/components/OnlineCoaching/OnlineCoaching";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import CustomCarouselData from "../../components/CustomCarousel/CustomCarouselData";
import CustomCarouselLargerData from "../../components/CustomCarousel/CustomCarouselLargerData";
import CoursesHero from "../../components/CoursesHero/CoursesHero";
import CourserData from "../../components/CoursesHero/CoursesData";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <CoursesHero choiseData={CourserData} />
      <ChoiseFavorite />
      <CustomCarousel
        title="Recommended for you"
        link="#"
        background="rgba(157, 204, 255, 0.2)"
        carouselData={CustomCarouselLargerData}
        carouselType="recomended"
      />
      <CustomCarousel
        title="Recommended for you"
        link="#"
        background="#FFFFFF"
        carouselData={CustomCarouselData}
        carouselType="choiseCourse"
      />
      <OnlineCoaching />
      <CustomCarousel
        title="Recommended for you"
        link="#"
        background="#FFFFFF"
        carouselData={CustomCarouselData}
        carouselType="personalDevelopment"
      />
      <CustomCarousel
        title="Recommended for you"
        link="#"
        background="rgba(157, 204, 255, 0.2)"
        carouselData={CustomCarouselData}
        carouselType="studentViewing"
      />
    </>
  );
};

export default page;
