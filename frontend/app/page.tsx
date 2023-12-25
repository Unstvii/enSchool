"use client";
import AllInOne from "@/components/AllInOne/AllInOne";
import CustomWave from "@/components/CustomWave/CustomWave";
import EverythingYouCan from "@/components/EverythingYouCan/EverythingYouCan";
import Header from "@/components/Header/Header";
import HeroHome from "@/components/HeroHome/HeroHome/HeroHome";
import OurSuccess from "@/components/OurSuccess/OurSuccess";
import WhatIs from "@/components/WhatIs/WhatIs";
export default function Home() {
  return (
    <>
      {/* <h1 onClick={handleClick}>Hello world</h1> */}
      {/* <MyForm/> */}
      {/* <CustomForm/> */}
      <Header />
      <HeroHome />
      <CustomWave />
      <OurSuccess />
      <AllInOne />
      <WhatIs />
      <EverythingYouCan />
    </>
  );
}
