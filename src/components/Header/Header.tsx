import React, { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const location = useLocation(); // Get the current route location
  const theme = useTheme(); // Access the theme for breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("lg")); // Check if the screen is mobile size

  // Function to determine if the current route is the home page
  const isActiveRoute = (route: string) => location.pathname === route;

  // Variable to check if we're on the home page
  const isHomePage = isActiveRoute("/");

  // State for controlling the drawer (mobile menu)
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer's open/close state
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <AppBar
        position="static"
        sx={{
          background: isHomePage
            ? "linear-gradient(360deg, #014167 -11.96%, #011D33 40.48%)"
            : "white", // Change background color based on route
          color: isHomePage ? "white" : "black", // Ensure the text is readable on white background
          boxShadow: "none", // Remove default shadow
          borderBottom: isHomePage ? "none" : "2px solid rgba(0, 0, 0, 0.1)",
          paddingBottom: isMobile ? "5px" : "8px", // Adjust padding for mobile
        }}
      >
        <Toolbar sx={{ marginTop: "15px", justifyContent: "space-between" }}>
          {/* Menu Icon and Logo for small screens */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Mobile Menu Icon */}
              <IconButton
                onClick={toggleDrawer(true)} // Open drawer on click
                sx={{
                  color: isHomePage ? "#FFFFFF" : "#000000",
                  marginRight: "10px",
                }}
              >
                <MenuIcon />
              </IconButton>

              {/* Logo next to Menu Icon */}
              <Box>
                <img
                  src={isHomePage ? logo : logo2}
                  alt="Shree Real Estate"
                  style={{
                    height: "40px", // Adjust height for mobile
                    backgroundColor: "transparent",
                  }}
                />
              </Box>
            </Box>
          )}

          {/* Logo for large screens */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={isHomePage ? logo : logo2}
                alt="Shree Real Estate"
                style={{
                  height: "50px", // Adjust height for larger screens
                  backgroundColor: "transparent",
                  marginLeft: "80px", // You can adjust this based on your design
                }}
              />
            </Box>
          )}

          {/* Navigation Links for large screens */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2.2 }}>
              {[
                "/",
                "/about-us",
                "/contact-us",
                "/blogs",
                "/terms-conditions",
                "/privacy-policy",
              ].map((path, idx) => {
                let buttonLabels = [
                  "Home",
                  "About Us",
                  "Contact Us",
                  "Blogs",
                  "Terms & Conditions",
                  "Privacy Policy",
                ];
                return (
                  <Button
                    key={idx}
                    color="inherit"
                    component={Link}
                    to={path}
                    sx={{
                      fontSize: isActiveRoute(path) ? "18px" : "16px", // Bigger font for active route
                      fontWeight: isActiveRoute(path) ? "bold" : "normal",
                      color: isHomePage ? "#FFFFFF" : "#000000", // White on home page, black on others
                      transition: "all 0.3s ease", // Smooth transition effect
                      "&:hover": {
                        color: isHomePage ? "#FFFFFF" : "#000000", // Adjust hover color for black text
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {buttonLabels[idx]}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu - Left Side */}
      <Drawer
        anchor="left" // Drawer slides in from the left
        open={drawerOpen}
        onClose={toggleDrawer(false)} // Close drawer when clicking outside
        PaperProps={{
          sx: {
            backgroundColor: "#f7f9fc", // Soft off-white or light gray
            color: "#014167", // Dark blue text color
            width: "250px", // Drawer width
            boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.2)", // Light shadow for depth
          },
        }}
      >
        {/* Close Button inside Drawer */}
        <Box
          sx={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0", // Thin border at the bottom for a clean separation
          }}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#014167" }}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ fontWeight: "bold", color: "#014167", mr:"8px" }}>Menu</Box>
        </Box>

        {/* List of Links inside Drawer */}
        <List sx={{ paddingTop: 0 }}>
          {[
            "/",
            "/about-us",
            "/contact-us",
            "/blogs",
            "/terms-conditions",
            "/privacy-policy",
          ].map((path, idx) => {
            let buttonLabels = [
              "Home",
              "About Us",
              "Contact Us",
              "Blogs",
              "Terms & Conditions",
              "Privacy Policy",
            ];

            return (
              <ListItem key={idx} disablePadding>
                <ListItemButton
                  component={Link}
                  to={path}
                  onClick={toggleDrawer(false)} // Close the drawer when link is clicked
                  sx={{
                    textAlign: "left",
                    fontWeight: isActiveRoute(path) ? "bold" : "normal",
                    color: isActiveRoute(path) ? "#014167" : "#000000",
                    padding: "10px 16px", // Padding inside button
                    borderBottom: "1px solid #e0e0e0", // Adds a light border between items
                    "&:hover": {
                      backgroundColor: "#e0f7fa", // Soft blue on hover
                      transition: "all 0.3s ease", // Smooth hover transition
                    },
                  }}
                >
                  <ListItemText
                    primary={buttonLabels[idx]}
                    sx={{
                      fontSize: "16px", // Font size for the text
                      fontWeight: isActiveRoute(path) ? "bold" : "normal", // Bold active link
                      color: isActiveRoute(path) ? "#014167" : "#000000", // Blue for active link
                      textTransform: "uppercase", // Make all text uppercase
                      letterSpacing: "0.05em", // Slight spacing between letters
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
