import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderItem from "../HeaderItem/HeaderItem";
import { makeStyles } from "@mui/styles";
import CustomForm from "../CustomForm/CustomForm";

const useStyles: any = makeStyles({
  LoginButton: {
    "&:hover": {
      backgroundColor: "#5B5B5B",
      color: "#FFFFFF",
    },
  },
  SignButton: {
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#7ECCCE",
    },
  },
});
const Header = ({ isMainPage }: any) => {
  const [activeButton, setActiveButton] = useState({
    login: false,
    register: true,
  });

  const classes = useStyles();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let isLargeScreen = true;
  isLargeScreen = useMediaQuery("(min-width:1200px)");

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const handleRegisterFormOpen = () => {
    setActiveButton({
      login: false,
      register: true,
    });
    setIsFormOpen(true);
  };
  const handleLoginFormOpen = () => {
    setActiveButton({
      login: true,
      register: false,
    });
    setIsFormOpen(true);
  };

  const menuItems = (
    <List
      sx={{
        display: "flex",
        width: "72%",
        flexDirection: isLargeScreen ? "row" : "column",
      }}
    >
      <ListItem component={Link} href="/" onClick={handleDrawerClose}>
        <HeaderItem
          title="Home"
          isLargeScreen={isLargeScreen}
          isMainPage={isMainPage}
        />
      </ListItem>
      <ListItem component={Link} href="/courses" onClick={handleDrawerClose}>
        <HeaderItem
          title="Courses"
          isLargeScreen={isLargeScreen}
          isMainPage={isMainPage}
        />
      </ListItem>
      <ListItem component={Link} href="/about" onClick={handleDrawerClose}>
        <HeaderItem
          title="Careers"
          isLargeScreen={isLargeScreen}
          isMainPage={isMainPage}
        />
      </ListItem>
      <ListItem component={Link} href="/about" onClick={handleDrawerClose}>
        <HeaderItem
          title="Blog"
          isLargeScreen={isLargeScreen}
          isMainPage={isMainPage}
        />
      </ListItem>

      <ListItem
        component={Link}
        href="/about"
        onClick={handleDrawerClose}
        sx={{ minWidth: "150px" }}
      >
        <HeaderItem
          title="About Us"
          isLargeScreen={isLargeScreen}
          isMainPage={isMainPage}
        />
      </ListItem>
      <ListItem
        // component={Link}
        // href="/login"
        // passHref
        onClick={handleDrawerClose}
      >
        <Button
          onClick={handleLoginFormOpen}
          sx={{
            color: "#5B5B5B",
            background: "#FFFFFF",
            fontWeight: 500,
            fontSize: "22px",
            textTransform: "none",
            borderRadius: "30px",
            mr: 0,
            minWidth: "120px",
          }}
          className={classes.LoginButton}
          variant="contained"
        >
          Login
        </Button>
      </ListItem>
      <ListItem
        // component={Link}
        // href="/register"
        // passHref
        onClick={handleDrawerClose}
      >
        <Button
          onClick={handleRegisterFormOpen}
          variant="contained"
          sx={{
            color: "#FFFFFF",
            background: "#7ECCCE",
            fontWeight: 500,
            fontSize: "22px",
            textTransform: "none",
            borderRadius: "30px",
            minWidth: "120px",
          }}
          className={classes.SignButton}
        >
          Sign Up
        </Button>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: isMainPage ? "#49BBBD" : "#FFFFFF",
          padding: "16px 0px 16px 0px",
        }}
      >
        <Box
          sx={{
            width: "90%",
            ml: "10%",
            bgcolor: isMainPage ? "#49BBBD" : "#FFFFFF",
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component={Link}
                href="/"
                passHref
                sx={{
                  textDecoration: "none",
                  color: isMainPage ? "#FFFFFF" : "#5B5B5B",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/path/to/logo.png"
                  alt="Logo"
                  style={{ marginRight: "8px" }}
                />
                LOGO TITLE
              </Typography>
            </Box>
            {isLargeScreen ? (
              menuItems
            ) : (
              <Box sx={{ display: "flex" }}>
                <IconButton
                  size="large"
                  edge="end"
                  color={isMainPage ? "inherit" : "default"}
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={isDrawerOpen}
                  onClose={handleDrawerClose}
                >
                  {menuItems}
                </Drawer>
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
      {isFormOpen ? (
        <CustomForm
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      ) : (
        " "
      )}
    </>
  );
};

export default Header;
