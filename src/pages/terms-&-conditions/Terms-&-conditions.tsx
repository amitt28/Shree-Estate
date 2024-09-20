import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Typography, Box } from '@mui/material';

function Terms(){
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
         Terms and Conditions
       </Typography>
     </Box>
        <Footer/>
         </>
    )
}


export default Terms;