"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';
import "./Nav.css";
import Image from "next/image";
import LOGO from "../../../assets/images/logo02.png";
import Link from "next/link";

// Array of pages and settings for navigation
const pages = [
  {
    nav: "Home",
    route: "/"
  },
  {
    nav: "Challenges",
    route: "/challenges",
  },
  {
    nav: "Accessories",
    route: "/accessories"
  },
  {
    nav: "Pricing",
    route: "/pricing",
  },
  {
    nav: "Blog",
    route: "/blog",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  // State variables to manage menu anchor elements
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  // Event handlers for opening and closing navigation menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className=" absolute w-[100%] z-50 top-0">
      <div className="bg-transparent hidden lg:flex justify-center items-center max-w-[1536px] mx-auto px-8">

       <Link href='/'><Image src={LOGO} width={120} sx={{ height: "auto" }} alt="Logo" /></Link> 

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <Link href={page?.route} key={page.route}>
              <Button


                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#fff",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {page.nav}
              </Button>
            </Link>

          ))}
        </Box>
        <div className="flex gap-4 text-white font-bold items-center">
          <Link href="/register">Join Us</Link>
          <span>|</span>
          <Link href="/usercheck">Sign In</Link>
          <span>|</span>
          <Link href="#">Help </Link>
          <span className="hidden lg:block pl-2">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
                />
              </IconButton>
            </Tooltip>
          </span>
        </div>
      </div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon className=" text-[#fff] " />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.nav}</Typography>
                  </MenuItem>
                ))}
                <Box sx={{ flexGrow: 0, padding: "6px" }}>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                  <span className="flex flex-col gap-2">
                    <Link href='/usercheck'>
                      <button className="border-[1px] border-[#252525] py-2 rounded-[20px] mx-[10px]">
                        Sign In
                      </button>
                    </Link>
                  </span>
                </Box>
              </Menu>
            </Box>
            {/* mobile */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Image src={LOGO} width={100} height={100} alt="Logo" />
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "0",
                top: "0",
              }}
            >
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Nav;
