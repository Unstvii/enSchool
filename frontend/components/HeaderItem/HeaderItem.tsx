import React, { useEffect } from "react";
import { Typography } from "@mui/material";
const HeaderItem = ({ title, isLargeScreen }: any) => {
  return (
    <Typography
      sx={{
        fontSize: "22px",
        fontWeight: "400",
        color: isLargeScreen ? "#FFFFFF" : "black",
      }}
    >
      {title}
    </Typography>
  );
};

export default HeaderItem;
