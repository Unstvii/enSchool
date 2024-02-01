"use client";
import Header from "@/components/Header/Header";
import React from "react";
import ChoiseFavorite from "../../components/ChoiseFavorite/ChoiseFavorite";
import OnlineCoaching from "@/components/OnlineCoaching/OnlineCoaching";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import CustomCarouselData from "../../components/CustomCarousel/CustomCarouselData";
import CoursesHero from "../../components/CoursesHero/CoursesHero";
import CourserData from "../../components/CoursesHero/CoursesData";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <CoursesHero choiseData={CourserData} />
      <ChoiseFavorite />
      <OnlineCoaching />
      <CustomCarousel
        title="Recommended for you"
        link="#"
        background="#FFFFFF"
        carouselData={CustomCarouselData}
      />
      <Footer />
    </>
  );
};

export default page;
