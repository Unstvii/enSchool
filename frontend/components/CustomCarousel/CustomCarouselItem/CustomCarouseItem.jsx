import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GridViewIcon from "@mui/icons-material/GridView";

const CustomCarouselItem = ({ carouselData }) => {
  return (
    <>
      {carouselData.map((data, index) => (
        <Grid
          item
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "374px",
            padding: "20px",
            boxShadow: "0px 0px 60px 0px rgba(38,45,118,0.08)",
            borderRadius: "15px",
          }}
        >
          <Image
            width={335}
            height={239}
            src={data.image}
            sx={{ borderRadius: "20px" }}
            alt="article-picture"
          />
          <Grid
            sx={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  color: "#696984",
                }}
              >
                <GridViewIcon
                  sx={{
                    color: "#D9D9D9",
                    transform: "translateY(7px)",
                    mr: "6px",
                  }}
                />
                {data.category}
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  color: "#696984",
                }}
              >
                <AccessTimeIcon
                  sx={{ transform: "translate(-6px, 6px)", color: "#D9D9D9" }}
                />
                {data.duration}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#252641",
              lineHeight: "30px",
              paddingTop: "20px",
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              letterSpacing: "1px",
              color: "#696984",
              paddingTop: "22px",
            }}
          >
            {data.description}
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "20px",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{
                  background: "#D9D9D9",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                }}
              >
                <Image
                  width={30}
                  height={35}
                  src="/images/lovely-teenage-girl.png"
                  alt="user-icon"
                />
              </Grid>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  color: "#000000",
                }}
                ml="17px"
              >
                Lina
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "18px",
                  fontWeight: 300,
                  letterSpacing: "1px",
                  fontStyle: "italic",
                  color: "#000000",
                  opacity: "0.5",
                  textDecorationLine: "line-through",
                  mr: "12px",
                  transform: "translateY(6px)",
                }}
              >
                ${data.oldPrice}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "24px", fontWeight: 700, color: "#49BBBD" }}
              >
                ${data.pricing}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CustomCarouselItem;
