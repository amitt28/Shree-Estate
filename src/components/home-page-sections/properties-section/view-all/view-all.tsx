import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import { Typography, Box } from '@mui/material';


function View(){

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
         View All
       </Typography>
     </Box>
        <Footer/>
        </>
    )
}
export default View;