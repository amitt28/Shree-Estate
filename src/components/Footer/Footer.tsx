import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
      sx={{
        background:
        "linear-gradient(180deg, #014167 -11.96%, #011D33 40.48%)",  // Primary background color
        color: 'white',                         // Text color set to white
        padding: { xs: '20px', md: '30px' },    // Responsive padding
        textAlign: 'center',
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },  // Stack vertically on small screens, horizontally on larger screens
          justifyContent: 'space-between',             // Space between columns
          alignItems: 'flex-start',                    // Align items to the top of the container
          gap: { xs: '20px', md: '40px' },             // Gap between sections
        }}
      >
        {/* Left Section - Contact Info and Logo */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 1 }}>  {/* Flexbox-based layout with equal space distribution */}
          <img 
            src={logo} 
            alt="Shree Real Estate"   
            style={{ height: '50px', backgroundColor: 'transparent' }}
          />
          <Typography variant="body2" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur. Ac sagittis et in.
          </Typography>
          <Typography variant="body2" sx={{ mt: 3 }}>
            📞 8965236547
          </Typography>
          <Typography variant="body2" sx={{ mt: 3 }}>
            📧 support@gmail.com
          </Typography>
        </Box>

        {/* Middle Section - Quick Links */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 0.9 }}>   {/* Flexbox-based layout with equal space distribution */}
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          {['Home', 'About Us', 'Contact Us', 'Blogs'].map((linkText, idx) => (
            <Typography variant="body2" sx={{ mt: idx === 0 ? 2 : 1 }} key={idx}>
              <Link
                to={linkText === 'Home' ? '/' : `/${linkText.toLowerCase().replace(' ', '-')}`} // Generate path based on link text
                style={{ color: 'inherit', textDecoration: 'none' }}
                onClick={() => window.scrollTo(0, 0)}               // Scroll to top when navigating
              >
                {linkText}
              </Link>
            </Typography>
          ))}
        </Box>

        {/* Right Section - Email Subscription */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 1 }}>   {/* Flexbox-based layout with equal space distribution */}
          <Typography variant="h6" component="h6">
            For Any Query Send Us Mail, We'll Contact You Soon!
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },      // Stack email and button vertically on small screens, side-by-side on larger screens
              mt: 2, 
              justifyContent: { xs: 'center', md: 'flex-start' } 
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email Address"
              sx={{ 
                backgroundColor: 'white', 
                borderRadius: 1, 
                width: { xs: '100%', sm: '70%' }                // Full width on small devices, 70% on larger
              }}
            />
            <Button
              variant="contained"
              sx={{
                ml: { xs: 0, sm: 2 },    // No left margin on mobile, margin on larger screens
                mt: { xs: 2, sm: 0 },    // Top margin on small screens to separate the button from text field
                backgroundColor: '#f50057', 
                color: 'white',
                width: { xs: '100%', sm: 'auto' }               // Full width button on small screens
              }}
            >
              →
            </Button>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mt: 2 }}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          borderTop: '1px solid #ccc',
          mt: 4,
          pt: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },  // Stack items vertically on small screens, horizontally on larger screens
          justifyContent: 'space-between', 
          alignItems: { xs: 'center', md: 'flex-start' }
        }}
      >
        {/* Left Side: Copyright Text */}
        <Typography variant="body2" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          © Shree Estate – All rights reserved
        </Typography>

        {/* Right Side: Links */}
        <Box 
          sx={{
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, // Stack links vertically on mobile, horizontally on larger screens
            gap: { xs: 1, md: 2 },                      // Adjust gap between links for responsiveness
            textAlign: { xs: 'center', md: 'left' },
            mt: { xs: 2, md: 0 }
          }}
        >
          <Typography variant="body2" component="span">
            Terms and Conditions
          </Typography>
          <Typography variant="body2" component="span">
            Privacy Policy
          </Typography>
          <Typography variant="body2" component="span">
            Disclaimer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
