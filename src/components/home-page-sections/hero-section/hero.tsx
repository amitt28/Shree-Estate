import React from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  CssBaseline,
  Container,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import Carousel from "../../corousel-images/corousel";
import First from "../../../assets/images/Rectangle 14.png";
import Second from "../../../assets/images/Rectangle 15.png";
import Third from "../../../assets/images/Rectangle 16.png";

function Hero() {
  return (
    <>
    
      <Box
        sx={{
          height:{ xs: "85vh", md: "100vh" },
          background: "linear-gradient(180deg, #014167 -11.96%, #011D33 40.48%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: { xs: "22px", md: "40px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '28px', md: "40px" },
            fontWeight: 600,
            mt: { xs: "10px", md: "20px" },
          }}
        >
          Find Your Dream Home With Ease - Where Luxury Meets Comfort. Discover
          Your Perfect Space Today.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            mx: { xs: "20px", md: "40px" },
            fontSize: { xs: "16px", md: "20px" },
          }}
        >
          Diverse Properties For Every Budget, Stress-Free Home Search.
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Carousel />
        </Box>
      </Box>

      <Box
        sx={{
          mt: -5,
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Paper
          elevation={3}
          sx={{ p: 3, display: "flex", alignItems: "center" }}
        >
          <Avatar>{/* Icon */}</Avatar>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">400 Happy Clients</Typography>
          </Box>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 3, display: "flex", alignItems: "center" }}
        >
          <Avatar>{/* Icon */}</Avatar>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">60+ New Listings Everyday!</Typography>
          </Box>
        </Paper>
      </Box>

      {/* Who are we Section */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: "20px", md: "30px" },
        }}
      >
        <CssBaseline />

        {/* Main Flexbox Container for Side-by-Side Layout */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={12}
          alignItems="center"
          justifyContent="center"
        >
          {/* Who Are We Section (Left) */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            maxWidth="900px"
            mt={{ xs: "30px", sm: "40px", md: "50px" }} // Responsive top margin
            mx="auto" // Center the section horizontally on small screens
            px={{ xs: "16px", md: "0px" }} // Padding on small screens to prevent text from touching the edges
          >
            {/* Heading: WHO ARE WE */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                textAlign: { xs: "center", md: "left" }, // Center the heading on small screens, left-align on larger screens
                fontSize: { xs: "22px", sm: "24px", md: "26px" }, // Responsive font size for different breakpoints
                color: "rgba(1, 29, 51, 1)",
              }}
            >
              WHO ARE WE
            </Typography>

            {/* Subheading: Main Title */}
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "28px", sm: "34px", md: "40px" }, // Adjust font size for small to large screens
                textAlign: { xs: "center", md: "left" }, // Center text on small screens, left-align on larger ones
                lineHeight: { xs: "1.2", md: "1.4" }, // Adjust line height for readability on small devices
                color: "rgba(1, 29, 51, 1)",
              }}
            >
              Assisting Individuals In Locating The Appropriate Real Estate.
            </Typography>

            {/* Paragraph: Body Text */}
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" }, // Slightly smaller font on smaller screens
                textAlign: { xs: "center", md: "left" }, // Center text on small screens, left-align on larger screens
                lineHeight: { xs: "1.4", md: "1.6" }, // Line height for better readability on mobile
                color: "rgba(0, 0, 0, 0.7)", // Optional: lightened color for better reading experience
              }}
            >
              Donec Porttitor Euismod Dignissim. Nullam A Lacinia Ipsum, Nec
              Dignissim Purus. Nulla Convallis Ipsum Molestie Nibh Malesuada, Ac
              Malesuada Leo Volutpat.
            </Typography>

            {/* Services (Icons) */}
            <Box display="flex" flexDirection="column" gap={3} maxWidth="400px">
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 3,
                  },
                }}
              >
                <IconButton>
                  <HomeIcon fontSize="large" />
                </IconButton>
                <Box>
                  <Typography variant="h6">Donec porttitor euismod</Typography>
                  <Typography variant="body2">
                    Nullam a lacinia ipsum, nec dignissim purus. Nulla
                  </Typography>
                </Box>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 3,
                  },
                }}
              >
                <IconButton>
                  <LocationSearchingIcon fontSize="large" />
                </IconButton>
                <Box>
                  <Typography variant="h6">Donec porttitor euismod</Typography>
                  <Typography variant="body2">
                    Nullam a lacinia ipsum, nec dignissim purus. Nulla
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Box>

          <Box
            flex={0.8}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={2}
            alignItems="center"
          >
            {/* Box with One Image */}
            <Box>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: "500px" },
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  borderRadius: 3,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 5,
                    borderRadius: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="620"
                  image={First}
                  alt="Property 3"
                  sx={{ borderRadius: 1 }}
                />
              </Card>
            </Box>

            {/* Box with Two Images */}
            <Box display="flex" flexDirection="column" gap={2}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: "400px" },
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  borderRadius: 3,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 5,
                    borderRadius: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={Second}
                  alt="Property 1"
                  sx={{ borderRadius: 1 }}
                />
              </Card>

              <Card
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: "400px" },
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  borderRadius: 3,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 5,
                    borderRadius: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={Third}
                  alt="Property 2"
                  sx={{ borderRadius: 1 }}
                />
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Hero;
