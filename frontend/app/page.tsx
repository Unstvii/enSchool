"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MyForm from "../components/MyForm/MyForm";
import CustomForm from "../components/CustomForm/CustomForm";
import Header from "@/components/Header/Header";
import HeroHome from "@/components/HeroHome/HeroHome/HeroHome";
export default function Home() {
  const handleClick = () => {
    fetch("http://localhost:4000/api/hello")
      .then((response) => response.text())
      .then((data) => console.log(data));
  };
  return (
    <>
      {/* <h1 onClick={handleClick}>Hello world</h1> */}
      {/* <MyForm/> */}
      {/* <CustomForm/> */}
      <Header />
      <HeroHome />
    </>
  );
}
