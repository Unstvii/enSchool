import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#49BBBD", paddingTop: 2 }}>
      <Box sx={{ width: "84%", ml: "10%", bgcolor: "#49BBBD" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              passHref
              sx={{
                textDecoration: "none",
                color: "inherit",
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
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              width: "55%",
              justifyContent: "space-evenly",
            }}
          >
            <Button component={Link} href="/" color="inherit">
              Home
            </Button>
            <Button component={Link} href="/about" color="inherit">
              About Us
            </Button>
            <Button component={Link} href="/careers" color="inherit">
              Careers
            </Button>
            <Button component={Link} href="/blog" color="inherit">
              Blog
            </Button>
            <Button component={Link} href="/sources" color="inherit">
              Sources
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} href="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem
                component={Link}
                href="/about"
                onClick={handleMenuClose}
              >
                About Us
              </MenuItem>
              <MenuItem
                component={Link}
                href="/careers"
                onClick={handleMenuClose}
              >
                Careers
              </MenuItem>
              <MenuItem component={Link} href="/blog" onClick={handleMenuClose}>
                Blog
              </MenuItem>
              <MenuItem
                component={Link}
                href="/sources"
                onClick={handleMenuClose}
              >
                Sources
              </MenuItem>
            </Menu>
          </Box>
          <Button
            component={Link}
            href="/login"
            sx={{
              color: "#5B5B5B",
              background: "#FFFFFF",
              fontWeight: 500,
              fontSize: "22px",
              textTransform: "none",
              borderRadius: "30px",
              mr: 3,
              width: "120px",
            }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            sx={{
              color: "#FFFFFF",
              background: "#7ECCCE",
              fontWeight: 500,
              fontSize: "22px",
              textTransform: "none",
              borderRadius: "30px",
              width: "120px",
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
