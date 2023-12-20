import { Box, Typography } from "@mui/material";
import React from "react";

const AllCard = ({ title, paragraph, icon: Icon, iconBackground }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 60px 0px rgba(38,45,118,0.08)",
        width: "450px",
        height: "430px",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: 100,
          bgcolor: `${iconBackground}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateY(-40px)",
        }}
      >
        <Icon sx={{ width: "45px", height: "45px", color: "#FFFFFF" }} />
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: "30px",
          fontWeight: 500,
          color: "#2F327D",
          textAlign: "center",
          maxWidth: "300px",
          mt: 5,
        }}
      >
        {title}
      </Typography>
      <p
        style={{
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: 400,
          color: "#696984",
          textAlign: "center",
          maxWidth: 350,
          lineHeight: "36px",
        }}
      >
        {paragraph}
      </p>
    </Box>
  );
};

export default AllCard;
