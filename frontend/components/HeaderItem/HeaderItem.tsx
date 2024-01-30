import React, { useEffect } from "react";
import { Typography } from "@mui/material";
const HeaderItem = ({ title, isLargeScreen, isMainPage }: any) => {
  return (
    <Typography
      sx={{
        fontSize: "22px",
        fontWeight: "400",
        color: isMainPage ? (isLargeScreen ? "#FFFFFF" : "#5B5B5B") : "#5B5B5B",
      }}
    >
      {title}
    </Typography>
  );
};

export default HeaderItem;
