"use client";
import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import ChoiseFavorite from "../../components/ChoiseFavorite/ChoiseFavorite";
import OnlineCoaching from "@/components/OnlineCoaching/OnlineCoaching";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import CustomCarouselData from "../../components/CustomCarousel/CustomCarouselData";
import CustomCarouselLargerData from "../../components/CustomCarousel/CustomCarouselLargerData";
import CoursesHero from "../../components/CoursesHero/CoursesHero";
import CourserData from "../../components/CoursesHero/CoursesData";
import { getCourses } from "../../components/api/course";

const page = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses("Hard IT");
        setCourses(response.data);
      } catch (error) {
        console.error("Помилка при отриманні даних", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <>
      <Header />
      <CoursesHero choiseData={CourserData} />
      <ChoiseFavorite />
      <CustomCarousel
        title="Recommended for you"
        link="#"
        background="rgba(157, 204, 255, 0.2)"
        carouselData={courses}
        carouselType="recomended"
      />
      <CustomCarousel
        title="Get choice of your course"
        link="#"
        background="#FFFFFF"
        carouselData={CustomCarouselData}
        carouselType="choiseCourse"
      />
      <OnlineCoaching />
      <CustomCarousel
        title="The course in personal development"
        link="#"
        background="#FFFFFF"
        carouselData={CustomCarouselData}
        carouselType="personalDevelopment"
      />
      <CustomCarousel
        title="Student are viewing"
        link="#"
        background="rgba(157, 204, 255, 0.2)"
        carouselData={CustomCarouselData}
        carouselType="studentViewing"
      />
    </>
  );
};

export default page;
