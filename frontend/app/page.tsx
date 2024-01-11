"use client";
import AllInOne from "@/components/AllInOne/AllInOne";
import CustomWave from "@/components/CustomWave/CustomWave";
import EverythingYouCan from "@/components/EverythingYouCan/EverythingYouCan";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroHome from "@/components/HeroHome/HeroHome/HeroHome";
import LatestNews from "@/components/LatestNews/LatestNews";
import OurFeatures from "@/components/OurFeatures/OurFeatures";
import OurSuccess from "@/components/OurSuccess/OurSuccess";
import WhatIs from "@/components/WhatIs/WhatIs";
export default function Home() {
  return (
    <>
      {/* <MyForm/>
      <CustomForm/> */}
      <Header />
      <HeroHome />
      <CustomWave />
      <OurSuccess />
      <AllInOne />
      <WhatIs />
      <EverythingYouCan />
      <OurFeatures />
      <LatestNews />
      <Footer />
    </>
  );
}
