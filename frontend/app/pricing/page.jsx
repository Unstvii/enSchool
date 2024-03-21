"use client";
import React from "react";
import Header from "../../components/Header/Header";
import Pricing from "../../components/Pricing/Pricing";
import OnlineCoaching from "@/components/OnlineCoaching/OnlineCoaching";
import OnlineLessonsList from "@/components/OnlineLessonsList/OnlineLessonsList";
import AppDownload from "@/components/AppDownload/AppDownload";
import BecomeWithUs from "@/components/BecomeWithUs/BecomeWithUs";
import StudentsFeedback from "@/components/StudentsFeedback/StudentsFeedback";
import StudentsFeedbackData from "@/components/StudentsFeedback/StudentsFeedbackData";
const page = () => {
  return (
    <>
      <Header />
      <Pricing />
      <OnlineCoaching />
      <OnlineLessonsList />
      <StudentsFeedback StudentsFeedbackData={StudentsFeedbackData} />
      <AppDownload />
      <BecomeWithUs />
    </>
  );
};

export default page;
