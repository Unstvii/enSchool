"use client";
import CustomWave from "@/components/CustomWave/CustomWave";
import Header from "@/components/Header/Header";
import HeroHome from "@/components/HeroHome/HeroHome/HeroHome";
import OurSuccess from "@/components/OurSuccess/OurSuccess";
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
    </>
  );
}
