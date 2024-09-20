import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <>
      <Header />

      <Box
        sx={{
          p: { xs: 3, sm: 5, md: 10 }, // Adjust padding for small screens
          borderRadius: 5,
          maxWidth: "1280px",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack column on small screens
          height: { xs: "auto", md: "775px" }, // Auto height for small screens, fixed for medium+
        }}
      >
        {/* Contact Information Section */}
        <Box
          sx={{
            background:
              "linear-gradient(180deg, #014167 -11.96%, #011D33 40.48%)",
            color: "white",
            p: 4,
            borderRadius: { xs: "16px 16px 0 0", md: "16px 0 0 16px" }, // Rounded corners on top for small screens
            flex: { xs: 1, md: 0.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mb: { xs: 4, md: 0 }, // Margin for bottom only on small screens
          }}
        >
          <Box>
            <Typography
              fontSize="24px"
              fontWeight={600}
              lineHeight="32px"
              gutterBottom
              mt={3.5}
            >
              Contact Information
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={400}
              lineHeight="18px"
              color="rgba(218, 218, 218, 1)"
              gutterBottom
            >
              Lets Connect Here
            </Typography>

            <Box display="flex" alignItems="center" mb={2} mt={10}>
              <Phone sx={{ mr: "20px" }} />
              <Typography
                fontSize="16px"
                fontWeight={400}
                lineHeight="18px"
                color="rgba(218, 218, 218, 1)"
              >
                8563214569
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <Email sx={{ mr: "20px" }} />
              <Typography
                fontSize="16px"
                fontWeight={400}
                lineHeight="18px"
                color="rgba(218, 218, 218, 1)"
              >
                info@gmail.com
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <LocationOn sx={{ mr: "20px" }} />
              <Typography
                fontSize="16px"
                fontWeight={400}
                lineHeight="18px"
                color="rgba(218, 218, 218, 1)"
              >
                Lorem ipsum dolor sit amet consectetur. Placerat ac fames
                sitLorem ipsum dolor sit amet consectetur.
              </Typography>
            </Box>
          </Box>

          {/* Social Icons */}
          <Box display="flex" justifyContent="start">
            <Typography component="span" sx={{ mr: 2, cursor: "pointer" }}>
              <LinkedInIcon />
            </Typography>
            <Typography component="span" sx={{ mr: 2, cursor: "pointer" }}>
              <FacebookIcon />
            </Typography>
            <Typography component="span" sx={{ cursor: "pointer" }}>
              <InstagramIcon />
            </Typography>
          </Box>
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            backgroundColor: "#ECF7FE",
            p: 4,
            borderRadius: { xs: "0 0 14px 14px", md: "0 14px 14px 0" }, // Rounded corners for bottom on small screens
            flex: 1,
          }}
        >
          <Typography
            fontSize="24px"
            fontWeight={600}
            lineHeight="32px"
            gutterBottom
            mt={3.5}
            color="rgba(1, 29, 51, 1)"
          >
            Fill The Details Carefully...
          </Typography>
          <Typography
            fontSize="15px"
            fontWeight={400}
            lineHeight="18px"
            color="rgba(0, 0, 0, 0.5)"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur. Urna proin id semper
            imperdiet netus non. Sem quisque a sagittis viverra nibh senectus
            facilisis.
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={2}
            mt={5}
          >
            <TextField
              fullWidth
              label="Enter Your First Name"
              variant="outlined"
              sx={{
                flex: { xs: "1 1 100%", md: "0 1 48%" }, // Full width on small screens, half width on medium+
                borderRadius: "10px", // Adjust the radius as needed
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Apply radius to the input field
                },
              }}
            />
            <TextField
              fullWidth
              label="Enter Your Last Name"
              variant="outlined"
              sx={{
                flex: { xs: "1 1 100%", md: "0 1 48%" },
                borderRadius: "10px", // Adjust the radius as needed
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Apply radius to the input field
                },
              }}
            />
            <TextField
              fullWidth
              label="Enter Your Email ID"
              variant="outlined"
              sx={{
                flex: { xs: "1 1 100%", md: "0 1 48%" },
                borderRadius: "10px", // Adjust the radius as needed
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Apply radius to the input field
                },
              }}
            />
            <TextField
              fullWidth
              label="Enter Your Mobile Number"
              variant="outlined"
              sx={{
                flex: { xs: "1 1 100%", md: "0 1 48%" },
                borderRadius: "10px", // Adjust the radius as needed
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Apply radius to the input field
                },
              }}
            />
            <TextField
              fullWidth
              label="Enter Message"
              multiline
              rows={5}
              variant="outlined"
              sx={{
                flex: "1 1 100%",
                borderRadius: "10px", // Adjust the radius as needed
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Apply radius to the input field
                },
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(180deg, #014167 -11.96%, #011D33 40.48%)",
              mt: 3,
              px: 18,
              py: 1.5,
              "&:hover": { backgroundColor: "#001f31" },
              borderRadius: "10px", // Adjust the radius as needed
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", // Apply radius to the input field
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Contact;
