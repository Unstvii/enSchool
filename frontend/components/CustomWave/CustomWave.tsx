import React from "react";
import Image from "next/image";

const CustomWave = () => {
  return (
    <>
      <Image
        src="/images/customWave.svg"
        alt="lovely image"
        width={0}
        height={0}
        sizes="vw"
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: "-5vh",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default CustomWave;
