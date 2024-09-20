import React from 'react';
import { Container, Card, CardContent, Typography, Box } from '@mui/material';
import { Search, Home, Bed } from '@mui/icons-material';

const services = [
  {
    title: 'Buy a New Home',
    description: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.',
    icon: <Search fontSize="large" />,
  },
  {
    title: 'Sell a House',
    description: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.',
    icon: <Home fontSize="large" />,
  },
  {
    title: 'Rent a House',
    description: 'Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.',
    icon: <Bed fontSize="large" />,
  },
];

interface ServiceCardProps{
    title: string;
    description: string;
    icon: JSX.Element;
}

let ServiceCard = ({ title, description, icon }:ServiceCardProps) => (
  <Card elevation={3} sx={{ borderRadius: '15px', textAlign: 'center', width: '100%', maxWidth: '300px' , 
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
    '&:hover': {
      transform: 'scale(1.04)', 
      boxShadow: 6, 
    },} }>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 3}}>
        {icon}
      </Box>
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" mt={2}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const ServicesSection = () => (
  <Container sx={{ my : '50px'}}>
    <Typography variant="h5" textAlign="left" fontWeight={700} color= "rgba(1, 29, 51, 1)" gutterBottom>
      OUR SERVICES
    </Typography>
    <Typography variant="h4" textAlign="left" fontWeight={540} mb={2} color= "rgba(1, 29, 51, 1)">
      Lorem Ipsum Lorem Ipsum
    </Typography>
    <Typography
      variant="body1"
      textAlign="left"
      color="textSecondary"
      mb={6}
    >
      Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
      Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
    </Typography>

    {/* Flexbox for layout */}
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        flexWrap: 'wrap', 
        gap: 4, 
        alignItems: 'center' 
      }}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </Box>
  </Container>
);

export default ServicesSection;




