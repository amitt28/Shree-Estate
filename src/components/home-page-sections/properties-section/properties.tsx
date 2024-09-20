import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropertyCard from "../../property-card/card";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Card1 from "../../../assets/images/Card1.png";
import Card2 from "../../../assets/images/Card2.png";
import Card3 from "../../../assets/images/Card3.png";

interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  label: string;
  labelColor: "primary" | "error" | "success"; // Union type
  labelIcon: JSX.Element;
}

const LatestListedProperties: React.FC = () => {
  let properties: PropertyCardProps[] = [
    {
      id: 1,
      image: Card1,
      price: "$5,970",
      title: "Tranquil Haven In The Woods",
      address: "103 Wright Court, Burien, WA 98168",
      beds: 4,
      baths: 3,
      label: "Popular",
      labelColor: "error", 
      labelIcon: <WhatshotIcon />,
    },
    {
      id: 2,
      image: Card2,
      price: "$7,350",
      title: "Modern Villa with Scenic Views",
      address: "452 Mountain Ridge, Aspen, CO 81611",
      beds: 5,
      baths: 4,
      label: "Newest",
      labelColor: "primary",
      labelIcon: <HomeIcon />,
    },
    {
      id: 3,
      image: Card3,
      price: "$4,200",
      title: "Charming Cottage by the Lake",
      address: "784 Lakeside Drive, Lake Tahoe, CA 96150",
      beds: 3,
      baths: 2,
      label: "Discounted Price",
      labelColor: "success", 
      labelIcon: <AttachMoneyIcon />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 5, mt: 8 }}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "24px", md: "32px" }, color: "rgba(1, 29, 51, 1)" }}>
            Latest Listed Properties
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            marginTop={1}
            sx={{ fontSize: { xs: "14px", md: "16px" }, mt: { xs: 1, md: 0 }, color: "rgba(1, 29, 51, 1)" }}
          >
            Donec Porttitor Euismod Dignissim. Nullam A Lacina Ipsum, Nec Dignissim Purus. Nulla Convallis Ipsum Molestie.
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 4,
            mt: { xs: 2, md: 0 },
            px: '26px',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': { transform: 'scale(1.1)' },
          }}
          component={Link}
          to="/view-all"
          onClick={() => window.scrollTo(0, 0)}
        >
          View All
        </Button>
      </Box>

      {/* Property Cards Row */}
      <Box display="flex" justifyContent={{ xs: "center", sm: "space-between" }} gap={3} flexWrap="wrap">
        {properties.map((property) => (
          <Box
            key={property.id}
            sx={{
              width: { xs: "100%", sm: "40%", md: "30%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PropertyCard prp={property} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default LatestListedProperties;
