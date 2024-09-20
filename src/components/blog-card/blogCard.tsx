import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardMedia ,CardContent, Avatar, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface Blog {
    id: number;
    date: string;
    title: string;
    description: string;
    author: string;
    datePublished: string;
    image: string;
    authorImage: string;
  }

  // Update BlogCard to expect a blog prop with a Blog type
const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
    // Extract the day and weekday from the custom date format, e.g., "08 Mon"
    const [day, weekday] = blog.date.split(' ');
  
    return (


      <Card
        sx={{
          maxWidth: { xs: "90%", md : "100%"}, // Full width on small screens, max 345px on medium+
          borderRadius: '16px',
          boxShadow: 3,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.05)', // Slightly enlarges the card on hover
            boxShadow: 6, // Increases shadow depth for a 3D effect
          },
          margin: { xs: '16px 0', sm: 'auto' }, // Add margin for small screens
        }}
      >
        <Box position="relative">
        <CardMedia component="img" image={blog.image} alt={blog.title} sx={{
          borderRadius: "8px 8px 0 0",
          height: { xs: 180, sm: 220, md: 250 }, // Responsive image height
          objectFit: "cover", // Ensure the image covers the entire area without distortion
        }} />
  
          {/* Sticky Note for Date */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 40,
              backgroundColor: '#fff',
              borderRadius: '0 0 8px 8px', // Rounded corners
              padding: '4px 10px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
              textAlign: 'center',
              width: '50px', // Adjust to match the sticky note size
              height: '55px', // Fixed height to match the design
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Centers the text vertically
            }}
          >
            <Typography variant="h6" fontWeight="bold" lineHeight={1.2}>
              {day} {/* Date */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {weekday} {/* Weekday */}
            </Typography>
          </Box>
        </Box>
  
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            fontWeight="bold" 
            mt={1}
            sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} // Adjust title size for small screens
          >
            {blog.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} // Adjust description font size for small screens
          >
            {blog.description}
          </Typography>
          
          
          <Box 
            display="flex" 
            alignItems={{ xs: 'flex-start', sm: 'center' }} 
            justifyContent="space-between" 
            mt={4}
          >
            <Box 
              display="flex" 
              alignItems="center" 
              mb={{ xs: 2, sm: 0 }} // Add bottom margin on small screens
            >
              <Avatar src={blog.authorImage} sx={{ width: 40, height: 40, mr: 1 }} />
              <Box>
                <Typography variant="body2" fontWeight="bold">{blog.author}</Typography>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }} // Adjust datePublished font size for small screens
                >
                  {blog.datePublished}
                </Typography>
              </Box>
            </Box>
            
            <Button
           component={Link} 
           to={`/read/${blog.id}`} 
           style={{ textDecoration: "none" }} 
           onClick={() => window.scrollTo(0, 0)} 
              sx={{
                background: 'linear-gradient(180deg, #014167 -11.96%, #011D33 40.48%)',
                borderRadius: '50%',
                width: 47,
                height: 47,
                minWidth: 47, // Ensure button doesn't stretch horizontally
                padding: 0, // Adjust padding so the content fits snugly
                transition: 'background-color 0.3s, transform 0.3s',
                '&:hover': {
                  backgroundColor: '#1976d2', // Change button color on hover
                  transform: 'scale(1.1)', // Slightly enlarges the button
                },
                alignSelf: { xs: 'flex-start', sm: 'flex-end' }, // Align button on small screens
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 24 }} /> {/* Adjust icon size */}
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  };

  export default BlogCard;


