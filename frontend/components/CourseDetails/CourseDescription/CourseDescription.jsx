import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";

const CourseDescription = ({ course }) => {
  return (
    <Grid>
      <Grid
        sx={{
          width: "440px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "translateY(-30vh)",
          background: "#FFFFFF",
          borderRadius: "15px",
        }}
      >
        <Image
          src={course.image}
          alt="lovely image"
          width={0}
          height={0}
          sizes="vw"
          style={{
            width: "400px",
            height: "260px",
            zIndex: 0,
            marginTop: "20px",
          }}
        />
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            mt: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: 600,
              color: "#000000",
              letterSpacing: "1px",
            }}
          >
            ${course.price}
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#000000",
              letterSpacing: "1px",
              opacity: "0.5",
              textDecorationLine: "line-through",
            }}
          >
            ${course.oldPrice}
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#000000",
              letterSpacing: "1px",
              opacity: "0.5",
            }}
          >
            50% Off
          </Typography>
        </Grid>
        <Grid>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#49BBBD",
              letterSpacing: "1px",
              margin: "10px 0px 30px 0px",
            }}
          >
            11 hour left at this price
          </Typography>
        </Grid>
        <Grid sx={{ width: "90%", margin: "0 auto" }}>
          <Button
            variant="contianed"
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              background: "#49BBBD",
              color: "#FFFFFF",
              textTransform: "none",
              width: "100%",
              borderRadius: "12px",
            }}
          >
            Buy Now
          </Button>
          <Box
            sx={{
              background: "#696984",
              height: "1px",
              width: "100%",
              margin: "25px 0px 25px 0px",
            }}
          >
            {" "}
          </Box>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "#000000",
                mb: "5px",
              }}
            >
              This Course included
            </Typography>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <WbSunnyIcon sx={{ color: "#49BBBD" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#000000",
                  opacity: "0.5",
                }}
              >
                Money Back Guarantee
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <CameraAltIcon sx={{ color: "#49BBBD" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#000000",
                  opacity: "0.5",
                }}
              >
                Access on all devices
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <DescriptionIcon sx={{ color: "#49BBBD" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#000000",
                  opacity: "0.5",
                }}
              >
                Certification of completion
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <AutoGraphIcon sx={{ color: "#49BBBD" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#000000",
                  opacity: "0.5",
                }}
              >
                32 Moduls
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              background: "#696984",
              height: "1px",
              width: "100%",
              margin: "25px 0px 25px 0px",
            }}
          >
            {" "}
          </Box>
          <Grid>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "#000000",
                mb: "12px",
              }}
            >
              Training 5 or more people
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "1px",
                color: "#696984",
              }}
            >
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </Typography>
          </Grid>
          <Box
            sx={{
              background: "#696984",
              height: "1px",
              width: "100%",
              margin: "25px 0px 25px 0px",
            }}
          >
            {" "}
          </Box>
          <Grid>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "#000000",
              }}
            >
              Share this course
            </Typography>
            <Grid sx={{ display: "flex", gap: "25px", mt: "35px", pb: "15px" }}>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  background: "#696984",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                }}
              >
                <TwitterIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  background: "#696984",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                }}
              >
                <XIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  background: "#FF0000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                }}
              >
                <YouTubeIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  background: "#696984",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                }}
              >
                <TelegramIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  background: "#696984",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                }}
              >
                <InstagramIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  background: "#696984",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                }}
              >
                <FacebookIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CourseDescription;
