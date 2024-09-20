import React, { useState } from "react";
import { Box, Container, Typography, TextField, MenuItem } from "@mui/material";
import BlogCard from "../../components/blog-card/blogCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card1 from "../../assets/images/blogs-home-page/Rectangle 35.png";
import Card2 from "../../assets/images/blogs-home-page/Rectangle 36.png";
import Card3 from "../../assets/images/blogs-home-page/Rectangle 37.png";
import mini1 from "../../assets/images/blogs-home-page/Image.png";
import mini2 from "../../assets/images/blogs-home-page/Image (1).png";
import mini3 from "../../assets/images/blogs-home-page/Image (2).png";

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

const BlogPage: React.FC = () => {
  // State for search query and selected month
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Blog data array
  const blogPosts: Blog[] = [
    {
      id: 1,
      date: "28 Tue",
      title: "Top 10 Home Buying Mistakes to Avoid",
      description:
        "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
      author: "Tracey Wilson",
      datePublished: "August 20, 2022",
      image: Card1,
      authorImage: "https://via.placeholder.com/50",
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
    },
  ];

  // Filter blog posts based on search query and selected month
  const filteredPosts = blogPosts.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMonth =
      selectedMonth === "" || blog.datePublished.includes(selectedMonth);

    return matchesSearch && matchesMonth;
  });

  return (
    <>
      <Header />
      <Container>
        {/* Header Section */}
        <Box my={4}>
          <Typography
            variant="h5"
            textAlign="left"
            fontWeight={700}
            color="rgba(1, 29, 51, 1)"
            gutterBottom
          >
            CHECKOUT OUR NEW
          </Typography>
          <Typography
            variant="h4"
            textAlign="left"
            fontWeight={540}
            mb={2}
            color="rgba(1, 29, 51, 1)"
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
        </Box>

        {/* Search and Filter Section */}
        <Box display="flex" justifyContent="space-between" my={4}>
          {/* Search Bar */}
          <TextField
            label="Search Here"
            variant="outlined"
            fullWidth
            sx={{
              maxWidth: "65%",
              borderRadius: "14px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
              },
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
          {/* Month Filter */}
          <TextField
            select
            label="Select Month"
            variant="outlined"
            fullWidth
            sx={{
              maxWidth: "30%",
              borderRadius: "14px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
              },
            }}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)} // Update selected month on selection change
          >
            <MenuItem value="">All Months</MenuItem>{" "}
            {/* Option to reset filter */}
            {months.map((month, index) => (
              <MenuItem key={index} value={month}>
                {month}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Blog Posts Section */}
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((blog) => (
              <Box
                key={blog.id}
                sx={{
                  width: { xs: "100%", sm: "50%", md: "30%" },
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: { xs: 2, sm: 3, md: 4 },
                }}
              >
                <BlogCard blog={blog} />
              </Box>
            ))
          ) : (
            <Typography variant="h4" sx={{ color: "#7A7A7A", my: 25, fontWeight: "600" }}>
              No posts match your search or filter.
            </Typography>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;
