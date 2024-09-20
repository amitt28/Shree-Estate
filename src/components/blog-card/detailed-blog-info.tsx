import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Typography, Avatar, CardMedia, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card1 from "../../assets/images/blogs-home-page/Rectangle 35.png";
import Card2 from "../../assets/images/blogs-home-page/Rectangle 36.png";
import Card3 from "../../assets/images/blogs-home-page/Rectangle 37.png";
import BlogCard from "./blogCard";

const blogPosts = [
  {
    id: 1,
    date: "28 Tue",
    title: "Top 10 Home Buying Mistakes to Avoid",
    description:
      "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.",
    author: "Tracey Wilson",
    datePublished: "August 20, 2022",
    image: Card1,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Buying", "Selling"],
  },
  {
    id: 2,
    date: "08 Mon",
    title: "How to Stage Your Home for a Quick Sale",
    description:
      "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    author: "Tracey Wilson",
    datePublished: "August 20, 2022",
    image: Card3,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Improvement", "Selling"],
  },
  {
    id: 3,
    date: "26 Wed",
    title: "5 Tips for First-Time Home Sellers",
    description:
      "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    author: "Tracey Wilson",
    datePublished: "August 20, 2022",
    image: Card2,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Buying", "Selling"],
  },
  {
    id: 4,
    date: "15 Fri",
    title: "Understanding the Real Estate Market Trends",
    description: "Curabitur a neque id ipsum aliquam bibendum.",
    author: "Alex Martinez",
    datePublished: "September 12, 2022",
    image: Card3,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Market Trends", "Investment"],
  },
  {
    id: 5,
    date: "03 Mon",
    title: "How to Improve Your Home's Curb Appeal",
    description: "Suspendisse potenti. Aliquam erat volutpat.",
    author: "Emma Lee",
    datePublished: "September 22, 2022",
    image: Card2,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Improvement", "Market Trends"],
  },
  {
    id: 6,
    date: "20 Tue",
    title: "Essential Home Maintenance Tips for Fall",
    description:
      "Vestibulum euismod odio id libero faucibus, non facilisis sapien laoreet.",
    author: "Liam Brown",
    datePublished: "October 10, 2022",
    image: Card1,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Improvement", "Investment"],
  },
  {
    id: 7,
    date: "09 Thu",
    title: "How to Negotiate Your Home Purchase Price",
    description: "Sed sit amet est in orci pellentesque vehicula.",
    author: "Sophia Taylor",
    datePublished: "October 18, 2022",
    image: Card2,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Buying", "Negotiation"],
  },
  {
    id: 8,
    date: "27 Sat",
    title: "The Benefits of a Home Inspection",
    description: "Maecenas aliquet justo ac mi ultrices cursus.",
    author: "James Johnson",
    datePublished: "November 5, 2022",
    image: Card1,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Buying", "Investment"],
  },
  {
    id: 9,
    date: "12 Mon",
    title: "Navigating the Home Buying Process",
    description:
      "Aliquam erat volutpat. Duis vel lectus et libero ultrices tincidunt.",
    author: "Olivia White",
    datePublished: "November 15, 2022",
    image: Card3,
    authorImage: "https://via.placeholder.com/50",
    categories: ["Home Buying", "Negotiation"],
  },
];


function BlogDetail() {
  const { id } = useParams<{ id: string }>(); // Get the blog ID from the URL
  const blog = blogPosts.find((b) => b.id === Number(id)); // Find the blog based on the id

  if (!blog) {
    return <Typography variant="h4">Blog not found</Typography>;
  }

  // Filter related blogs based on shared categories
  const relatedBlogs = blogPosts.filter((b) => 
    b.id !== blog.id && b.categories.some((cat) => blog.categories.includes(cat))
  );

  return (
    <>
      <Header />

      <Box
        sx={{
          maxWidth: "85%",
          margin: "40px auto",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <Button
          component={Link}
          to={`/blogs`}
          style={{ textDecoration: "none" }}
          sx={{
            mb: 2,
            display: "inline-flex",
            alignItems: "center",
            color: "#3B3C4A",
            fontSize: "1rem",
            textDecoration: "none",
          }}
          startIcon={<ArrowBackIcon sx={{ fontSize: 20 }} />} // Back icon
        >
          Back {/* Button Text */}
        </Button>

        {/* Blog Title */}
        <Typography variant="h4" component="h1" fontWeight="600" gutterBottom>
          {blog.title}
        </Typography>

        {/* Author Info */}
        <Box display="flex" alignItems="center" mb={3}>
          <Avatar
            src={blog.authorImage}
            sx={{ width: 40, height: 40, mr: 1 }}
          />
          <Box>
            <Typography variant="body1" color="text.secondary" fontWeight="500">
              {blog.author}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" ml="35px">
              {blog.datePublished}
            </Typography>
          </Box>
        </Box>

        {/* Blog Image */}
        <CardMedia
          component="img"
          image={blog.image}
          alt={blog.title}
          sx={{
            height: 400,
            objectFit: "cover",
            borderRadius: "8px",
            mb: 3,
          }}
        />

        {/* Blog Content */}
        <Typography variant="body1" lineHeight={1.7} paragraph>
          {blog.description}
        </Typography>
        <Typography variant="body1" lineHeight={1.7} paragraph>
          {/* Add more content here */}
        </Typography>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
         <Box mt={6}>
         <Typography variant="h5" fontWeight="600" mb={3}>
           Related Blogs
         </Typography>
       
         <Box
           sx={{
             display: "flex",
             flexWrap: "wrap", // Ensures the items wrap when screen space is limited
             gap: 4,          // Adds consistent spacing between the cards
             justifyContent: "center", // Center the cards in the available space
           }}
         >
           {relatedBlogs.map((relatedBlog) => (
             <Box
               key={relatedBlog.id}
               sx={{
                 width: { xs: "100%", sm: "48%", md: "28%" }, // Responsive width for different screen sizes
                 mb: 3, // Bottom margin between rows
               }}
             >
               <BlogCard blog={relatedBlog} />
             </Box>
           ))}
         </Box>
       </Box>
        )}
      </Box>
      <Footer />
    </>
  );
}

export default BlogDetail;
