import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Typography, Box } from '@mui/material';

function About(){
    return(
        <>
       <Header/>
       <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4">
        About-Us
      </Typography>
    </Box>
       <Footer/>
        </>
       
    )
}


export default About;