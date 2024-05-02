"use client";
import React from "react";
import Header from "@/components/Header/Header";
import BookHero from "@/components/BookHero/BookHero";
import BookLesson from "@/components/BookLesson/BookLesson";

const page = () => {
  return (
    <div>
      <Header />
      <BookHero />
      <BookLesson />
    </div>
  );
};

export default page;
