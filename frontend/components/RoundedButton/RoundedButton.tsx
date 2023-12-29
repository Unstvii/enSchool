import { Button } from "@mui/material";
import React from "react";

const RoundedButton = ({
  title,
  color,
  background,
  fontWeight,
  fontSize,
}: any) => {
  return (
    <Button
      sx={{
        background: background,
        borderRadius: "100px",
        textTransform: "none",
        color: color,
        fontWeight: fontWeight,
        fontSize: fontSize,
        width: "100%",
      }}
    >
      {title}
    </Button>
  );
};

export default RoundedButton;
