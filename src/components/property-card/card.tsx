import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import BedIcon from "@mui/icons-material/KingBed";
import BathIcon from "@mui/icons-material/Bathtub";

// Interface for PropertyCard props
interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  label: string;
  labelColor: "primary" | "error" | "success";
  labelIcon: JSX.Element;
}

const PropertyCard: React.FC<{ prp: PropertyCardProps }> = ({ prp }) => {
  return (
    <Link
      to={`/property/${prp.id}`}
      style={{ textDecoration: "none" }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Card
        sx={{
          width: "100%",
          borderRadius: 2,
          boxShadow: 3,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.06)",
            boxShadow: 6,
          },
          mx: { xs: 0, sm: 1 },
        }}
      >
        <Box position="relative">
          <CardMedia
            component="img"
            image={prp.image}
            alt={prp.title}
            sx={{
              borderRadius: "8px 8px 0 0",
              height: { xs: 180, sm: 220, md: 250 },
              objectFit: "cover",
            }}
          />
          <Chip
            label={prp.label}
            color={prp.labelColor}
            icon={prp.labelIcon}
            sx={{
              position: "absolute",
              bottom: { xs: 5, sm: 10 },
              right: { xs: 5, sm: 10 },
              fontSize: { xs: "0.70rem", sm: "0.875rem" },
              color: "white",
              fontWeight: "bold",
            }}
          />
        </Box>
        <CardContent>
          <Typography
            sx={{ fontSize: { xs: "16px", md: "20px" } }}
            color="primary"
            fontWeight="bold"
          >
            {prp.price}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "12px", md: "16px" } }}
            variant="subtitle1"
            fontWeight="bold"
            gutterBottom
          >
            {prp.title}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "11px", md: "15px" } }}
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            {prp.address}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              <BedIcon sx={{ fontSize: { xs: "14px", md: "20px" } }} />
              <Typography
                sx={{ fontSize: { xs: "12px", md: "16px" } }}
                variant="body2"
              >
                {prp.beds} Beds
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <BathIcon sx={{ fontSize: { xs: "14px", md: "20px" } }} />
              <Typography
                sx={{ fontSize: { xs: "12px", md: "16px" } }}
                variant="body2"
              >
                {prp.baths} Bath
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
