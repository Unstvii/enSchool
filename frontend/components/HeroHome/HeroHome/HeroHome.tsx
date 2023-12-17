import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const HeroHome = () => {
  return (
    <Box
      sx={{
        background: "#49BBBD",
        height: "94.5vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          ml: "10%",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              width: 550,
              paddingTop: 23,
              color: "white",
              fontSize: "54px",
            }}
          >
            <span style={{ color: "orange" }}>Studying </span>
            Online is now much easier
          </Typography>
          <Typography
            sx={{ color: "white", width: "510px", mt: 5, fontSize: "24px" }}
          >
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Button
              sx={{
                background: "#7FCFD1",
                pt: "10px",
                pb: "10px",
                pr: "15px",
                pl: "15px",
                mr: 3,
                borderRadius: "100px",
                textTransform: "none",
                color: "white",
                fontWeight: 100,
                fontSize: "24px",
              }}
            >
              Join for Free
            </Button>
            <Button
              sx={{ fontSize: "24px", color: "#252641", textTransform: "none" }}
            >
              <PlayArrowIcon
                sx={{
                  color: "#49BBBD",
                  borderRadius: "100px",
                  width: "62px",
                  height: "62px",
                  background: "white",
                  mr: 4,
                }}
              />
              Watch how it works
            </Button>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: {
                xs: 0,
                md: "15%",
              },
            }}
          >
            <Box
              sx={{
                padding: "10px",
                background: "#FFFFFF",
                borderRadius: "20px",
                width: "250px",
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                pr: "22px",
                opacity: "80%",
                position: "absolute",
                left: "-30%",
                top: "31vh",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "#23BDEE",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                  ml: 2,
                }}
              >
                <CalendarMonthIcon
                  sx={{
                    color: "#FFFFFF",
                    borderRadius: "100px",
                    width: "33.5px",
                    height: "33.5px",
                  }}
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    color: "#595959",
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "24px",
                      display: "block",
                    }}
                  >
                    250k
                  </span>
                  Assisted Student
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "10px",
                background: "#FFFFFF",
                borderRadius: "20px",
                width: "350px",
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                pr: "22px",
                opacity: "80%",
                position: "absolute",
                right: "-30%",
                top: "45vh",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "#23BDEE",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                  ml: 2,
                }}
              >
                <MailIcon
                  sx={{
                    color: "#FFFFFF",
                    borderRadius: "100px",
                    width: "33.5px",
                    height: "33.5px",
                  }}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    color: "#595959",
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "24px",
                      display: "block",
                    }}
                  >
                    Congratulations
                  </span>
                  Your admission completed
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "10px",
                background: "#FFFFFF",
                borderRadius: "20px",
                width: "350px",
                height: "150px",
                display: "flex",
                pr: "22px",
                opacity: "80%",
                position: "absolute",
                left: "-30%",
                bottom: "15vh",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  background: "#23BDEE",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                  ml: 2,
                  mr: 2,
                }}
              >
                <MailIcon
                  sx={{
                    color: "#FFFFFF",
                    borderRadius: "100px",
                    width: "33.5px",
                    height: "33.5px",
                  }}
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    color: "#595959",
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "24px",
                      display: "block",
                    }}
                  >
                    User Experience Class
                  </span>
                  Today at 12.00 PM
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "20px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      width: 150,
                      marginTop: 20,
                      fontWeight: "700",
                      background: "#D8587E",
                    }}
                  >
                    Join Now
                  </Button>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                background: "#F25471",
                borderRadius: "5px",
                width: "58px",
                height: "60px",
                position: "absolute",
                right: "0",
                top: "18vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MenuOpenIcon
                sx={{
                  color: "#FFFFFF",
                  borderRadius: "100px",
                  width: "58.5px",
                  height: "58.5px",
                  transform: "rotate(-90deg)",
                }}
              />
            </Box>
            <Image
              src="/images/lovely-teenage-girl.png"
              alt="lovely image"
              width={544}
              height={892}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroHome;
