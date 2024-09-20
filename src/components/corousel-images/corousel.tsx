import React, { useState } from 'react';
import { Box, IconButton, CardMedia } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Homepage from '../../assets/images/homepage.png'

// Sample data for carousel images
let carouselImages = [
   Homepage,
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3'
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={carouselImages[currentIndex]}
        alt={`Carousel Image ${currentIndex + 1}`}
        sx={{ width: '100%' }}
      />
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: '#fff',
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: '#fff',
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

export default Carousel;
