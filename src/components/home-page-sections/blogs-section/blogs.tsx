import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import BlogCard from '../../blog-card/blogCard'; 
import card1 from '../../../assets/images/blogs-home-page/Rectangle 35.png'
import card2 from '../../../assets/images/blogs-home-page/Rectangle 36.png'
import card3 from '../../../assets/images/blogs-home-page/Rectangle 37.png'
import mini1 from '../../../assets/images/blogs-home-page/Image.png'
import mini2 from '../../../assets/images/blogs-home-page/Image (1).png'
import mini3 from '../../../assets/images/blogs-home-page/Image (2).png'

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


const blogs: Blog[] = [
  {
    id: 1,
    date: '28 Tue',
    title: 'Top 10 Home Buying Mistakes to Avoid',
    description: 'Etiam eget elementum elit. Aenean dignissim dapibus vestibulum',
    author: 'Tracey Wilson',
    datePublished: 'August 20, 2022',
    image: card1, 
    authorImage: mini1,
  },
  {
    id: 2,
    date: '08 Mon',
    title: 'How to Stage Your Home for a Quick Sale',
    description: 'Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.',
    author: 'Tracey Wilson',
    datePublished: 'August 20, 2022',
    image: card2, 
    authorImage: mini2,
  },
  {
    id: 3,
    date: '26 Wed',
    title: '5 Tips for First-Time Home Sellers',
    description: 'In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.',
    author: 'Tracey Wilson',
    datePublished: 'August 20, 2022',
    image: card3, 
    authorImage: mini3,
  },
];


const BlogSection: React.FC = () => {
  return (
    <Container sx={{ my : '50px'}}>
    <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box textAlign={{ xs: "center", md: "left" }}>
            {" "}
            {/* Center text on small screens */}
            <Container>
            <Typography variant="h5" textAlign="left" fontWeight={700} color= "rgba(1, 29, 51, 1)" gutterBottom>
          WHATS TRENDING
        </Typography>
        <Typography
          variant="h4" textAlign="left" fontWeight={540} mb={2} color= "rgba(1, 29, 51, 1)"
        >
          LATEST BLOGS & POSTS
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#7A7A7A", marginBottom: "20px" }}
        >
          Donec Porttitor Euismod Dignissim. Nullam A Lacinia Ipsum, Nec
          Dignissim Purus. Nulla Convallis Ipsum Molestie Nibh Malesuada.
        </Typography>
        </Container>
          </Box>

          <Button
            variant="outlined"
            sx={{ borderRadius: 4, 
              mt: { xs: 2, md: 0 }, 
                px: '26px'  , 
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              transform: 'scale(1.1)', // Slightly enlarges the button
            },}}
            component={Link}
            to="/blogs"
            onClick={() => window.scrollTo(0, 0)}
          >
            View All
          </Button>
        </Box>
      
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {blogs.map((blog) => (
          <Box key={blog.id} 
          sx={{
            width: { xs: '100%', sm: '50%', md: '30%' }, // Full width on xs, auto on md and up
            display: 'flex',
            justifyContent: 'center', // Center the card inside its container on smaller screens
           marginBottom: { xs: 2, sm: 3, md: 4 }  }}
          >
            <BlogCard blog={blog} />
          </Box>
        ))}
      </Box>

    </Container>
  );
};

export default BlogSection;
