import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import DianneImage from "../../../assets/images/Card2.png"; // Replace with actual image
import BackgroundImage from "../../../assets/images/homepage.png"; // Replace with actual image

// Styled Components
const TeamWrapper = styled(Box)(({ theme }) => ({
  padding: "50px 20px",
  backgroundColor: "#fff",
  textAlign: "left",
  position: "relative",
}));

const TeamCard = styled(Card)(({ theme }) => ({
  maxWidth: "250px",
  borderRadius: "20px",
  backgroundColor: "#2A2A2A",
  color: "#fff",
  position: "absolute",
  top: "50%",
  left: "10%",
  transform: "translateY(-50%)",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
}));

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#012c5f",
  color: "#FFFFFF",
  borderRadius: "30px",
  padding: "10px 30px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#013A72",
  },
}));

const TeamSection = () => {
  return (
    <Container>
      <TeamWrapper>
        <Typography variant="h5" textAlign="left" fontWeight={700} color= "rgba(1, 29, 51, 1)" gutterBottom>
          OUR TEAM MEMBERS
        </Typography>
        <Typography
          variant="h4" textAlign="left" fontWeight={540} mb={2} color= "rgba(1, 29, 51, 1)"
        >
          Lorem Ipsum Lorem Ipsum
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#7A7A7A", marginBottom: "20px" }}
        >
          Donec Porttitor Euismod Dignissim. Nullam A Lacinia Ipsum, Nec
          Dignissim Purus. Nulla Convallis Ipsum Molestie Nibh Malesuada.
        </Typography>

        {/* Flexbox layout for the Background Image and Card overlay, and the Text + Button section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stacks vertically on small screens, side by side on large screens
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5, // Adds space between the two sections
          }}
        >
          {/* Background Image with Card Overlay */}
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${BackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "300px", md: "400px" }, // Adjust height for different screen sizes
              width: { xs: "100%", md: "50%" }, // 50% width on larger screens, full width on small screens
              borderRadius: "20px",
            }}
          >
            {/* Team Member Card */}
            <TeamCard>
              <CardContent>
                <AvatarImage alt="Dianne Russell" src={DianneImage} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Dianne Russell
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                  More than 20 years of experience in the field of architecture
                  and has worked on projects up to 100+
                </Typography>
              </CardContent>
            </TeamCard>
          </Box>

          {/* Text + Button Section */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" }, // Center text on small screens, align left on larger screens
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#012c5f" }}
            >
              LOREM IPSUM DIP SUM DIP GIM GIL MER
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#7A7A7A", marginTop: "10px" }}
            >
              All our teams are professional and competent in their fields and
              will help you realize your dream building with the excellent
              result. More than 20 years of experience in the field architecture
              and has worked on project up to 100+
            </Typography>

            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }, // Center the button on small screens, align left on larger screens
                alignItems: "center",
                gap: "20px",
              }}
            >
              <StyledButton>See All Team</StyledButton>
              <Typography
                variant="body2"
                sx={{ color: "#013A72", cursor: "pointer" }}
              >
                How it works →
              </Typography>
            </Box>
          </Box>
        </Box>
      </TeamWrapper>
    </Container>
  );
};

export default TeamSection;
