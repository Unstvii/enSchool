"use client";
import ChoiseFavoriteCard from "@/components/ChoiseFavorite/ChoiseFavoriteCard/ChoiseFavoriteCard";
import Header from "@/components/Header/Header";
import React from "react";
import ChoiseFavorite from "../../components/ChoiseFavorite/ChoiseFavorite";
import OnlineCoaching from "@/components/OnlineCoaching/OnlineCoaching";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import CustomCarouselData from "../../components/CustomCarousel/CustomCarouselData";
const page = () => {
  return (
    <>
      <Header />
      <ChoiseFavorite />
      <OnlineCoaching />
      <CustomCarousel
        title="Recommended for you"
        link="#"
        background="#FFFFFF"
        carouselData={CustomCarouselData}
      />
    </>
  );
};

export default page;
