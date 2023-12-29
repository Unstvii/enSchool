import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
const FeaturesImage = ({ imageSrc, fraction }: any) => {
  return (
    <Grid
      item
      xs={fraction}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={imageSrc}
        alt="lovely image"
        width={0}
        height={0}
        sizes="vw"
        style={{
          width: "55%",
          height: "auto",
          minWidth: "250px",
        }}
      />
    </Grid>
  );
};

export default FeaturesImage;
