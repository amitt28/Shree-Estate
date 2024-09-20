// src/components/Testimonials.tsx
import React from "react";
import { Box, Typography, Avatar, Container, IconButton } from "@mui/material";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./testimonials.css"; // Add this import to apply custom CSS for slick-slide

type Testimonial = {
  name: string;
  role: string;
  heading: string;
  message: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jaydon Aminoff",
    role: "Buyer",
    heading: "It proved to be exactly the kind of home we wanted.",
    message:
      "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Affrals Sizzan",
    role: "Seller",
    heading: "It proved to be exactly the kind of home we wanted.",
    message:
      "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Makenna Korla",
    role: "Agent",
    heading: "It proved to be exactly the kind of home we wanted.",
    message:
      "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jaydon Aminoff",
    role: "Buyer",
    heading: "It proved to be exactly the kind of home we wanted.",
    message:
      "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Affrals Sizzan",
    role: "Seller",
    heading: "It proved to be exactly the kind of home we wanted.",
    message:
      "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Makenna Korla",
    role: "Agent",
    heading: "It proved to be exactly the kind of home we wanted.",
    message:
      "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// Custom next arrow with updated styles
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: -15, // Move the button further to the right
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.9)", // White background with transparency
        border: "2px solid rgba(0, 0, 0, 0.1)", // Soft border
        zIndex: 10, // Ensures the button stays on top of the cards
        display: { xs: "none", sm: "flex" }, // Hidden on xs screens, visible on sm and up
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderColor: "#000", // Darker border on hover
        },
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ChevronRightIcon fontSize="medium" />
    </IconButton>
  );
};

// Custom previous arrow with updated styles
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: -15, // Move the button further to the right
        transform: "translateY(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.9)", // White background with transparency
        border: "2px solid rgba(0, 0, 0, 0.1)", // Soft border
        zIndex: 10, // Ensures the button stays on top of the cards
        display: { xs: "none", sm: "flex" }, // Hidden on xs screens, visible on sm and up
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderColor: "#000", // Darker border on hover
        },
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ChevronLeftIcon fontSize="medium" />
    </IconButton>
  );
};

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ mb: "50px" }}>
      <Box sx={{ p: 4, textAlign: "left", position: "relative" }}>
        <Typography
          variant="h5"
          fontWeight={700}
          color="rgba(1, 29, 51, 1)"
          gutterBottom
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h4"
          fontWeight={540}
          mb={2}
          color="rgba(1, 29, 51, 1)"
        >
          LOOK AT WHAT OUR CUSTOMERS SAY
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#7A7A7A", marginBottom: "20px" }}
        >
          Donec Porttitor Euismod Dignissim. Nullam A Lacinia Ipsum, Nec
          Dignissim Purus. Nulla Convallis Ipsum Molestie Nibh Malesuada.
        </Typography>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                backgroundColor: "white",
                borderRadius: 4,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 3,
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  mb: 1,
                  textAlign: "center",
                }}
              >
                “
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 1, textAlign: "left", fontWeight: 600 }}
              >
                {testimonial.heading}
              </Typography>

              <Typography variant="body1" sx={{ mb: 2.5, textAlign: "left" }}>
                {testimonial.message}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Testimonials;
