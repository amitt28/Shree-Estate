import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Chip } from "@mui/material";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";

// Sample data for properties (replace this with an API or data source)
const properties = [
  {
    id: 1,
    image: "https://via.placeholder.com/1600x1000",
    price: "$5,970",
    title: "Tranquil Haven In The Woods",
    address: "103 Wright Court, Burien, WA 98168",
    beds: 4,
    baths: 3,
    description: "A beautiful home surrounded by nature and tranquility...",
    label: "Popular",
    labelColor: "red",
    labelIcon: <WhatshotIcon />,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200",
    price: "$7,350",
    title: "Modern Villa with Scenic Views",
    address: "452 Mountain Ridge, Aspen, CO 81611",
    beds: 5,
    baths: 4,
    description:
      "This modern villa offers breathtaking mountain views, contemporary design, and top-notch amenities. The property boasts an expansive living room with floor-to-ceiling windows, a gourmet kitchen with high-end appliances, and a master suite with a private balcony overlooking the valley. Perfect for entertaining, it includes an infinity pool and spacious outdoor seating areas.",
    label: "Newest",
    labelColor: "blue",
    labelIcon: <HomeIcon />,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200",
    price: "$4,200",
    title: "Charming Cottage by the Lake",
    address: "784 Lakeside Drive, Lake Tahoe, CA 96150",
    beds: 3,
    baths: 2,
    description:
      "A charming lakeside cottage offering picturesque views and a tranquil atmosphere. The cottage features rustic décor with modern touches, including a cozy living room with a stone fireplace, hardwood floors, and an open kitchen. The outdoor area provides a private dock, perfect for kayaking or enjoying sunsets by the water. Ideal for small families or couples looking for a quiet retreat.",
    label: "Discounted Price",
    labelColor: "green",
    labelIcon: <AttachMoneyIcon />,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200",
    price: "$6,500",
    title: "Luxury Penthouse in Downtown",
    address: "123 City Center Plaza, New York, NY 10001",
    beds: 2,
    baths: 2,
    description:
      "This luxury penthouse in the heart of downtown offers urban living at its finest. With sleek, modern finishes, floor-to-ceiling windows, and breathtaking skyline views, this home is perfect for those who love city life. The open-concept layout features a designer kitchen, spacious living areas, and a master suite with a spa-like bathroom. Amenities include a private rooftop terrace and 24-hour concierge service.",
    label: "Discounted Price",
    labelColor: "green",
    labelIcon: <AttachMoneyIcon />,
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x200",
    price: "$3,850",
    title: "Rustic Farmhouse with Acreage",
    address: "658 County Road, Austin, TX 73301",
    beds: 4,
    baths: 3,
    description:
      "Experience the charm of country living in this spacious farmhouse, situated on 10 acres of private land. The property features a large wrap-around porch, vintage wood beams, and modern updates throughout. The open floor plan is ideal for family living, with a large kitchen, family room with a stone fireplace, and a spacious master suite. The land includes a barn and plenty of space for outdoor activities or gardening.",
    label: "Newest",
    labelColor: "blue",
    labelIcon: <HomeIcon />,
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300x200",
    price: "$9,100",
    title: "Seaside Mansion with Private Beach",
    address: "901 Oceanview Avenue, Malibu, CA 90265",
    beds: 6,
    baths: 5,
    description:
      "This seaside mansion offers ultimate luxury with direct access to a private beach...",
    label: "Most Chosen",
    labelColor: "red", // You can use any valid color string here
    labelIcon: <AttachMoneyIcon />,
  },
];

function PropertyDetails() {
  const { id } = useParams(); // Get the property ID from the URL
  const property = properties.find((p) => p.id === Number(id)); // Find the property by ID

  if (!property) {
    return (
      <>
        <Header />
        <Typography variant="h6">Property not found.</Typography>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {property.title}
        </Typography>

        {/* Property Label */}
        {property.label && (
          <Chip
            label={property.label}
            icon={property.labelIcon}
            sx={{
              backgroundColor: property.labelColor, // Dynamic color applied here
              color: "white",
              fontWeight: "bold",
              mt: 2,
              "& .MuiChip-icon": {
                color: "white", // Change icon color to white
              },
            }}
          />
        )}

        <Typography variant="h6" sx={{ color: "primary.main", mt: 2 }}>
          {property.price}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          {property.address}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <img
            src={property.image}
            alt={property.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {property.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            {property.beds} Beds • {property.baths} Baths
          </Typography>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default PropertyDetails;
