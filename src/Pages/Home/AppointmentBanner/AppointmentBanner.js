import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import background from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBg = {
    background: `url(${background})`,
  
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:150
}
const AppointmentBanner = () => {
    return (
      <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{
                width:400,
                marginTop:'-110px'
            }} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex', textAlign:'left', alignItems: 'center' }}>
           <Box  >
           <Typography variant="h6" sx={{mb:5}} style={{color:'#5ce7ed'}}>
            Appointment
            </Typography>
            <Typography variant="h4" sx={{mb:5}} style={{color:'white'}}>
            Make an Appointment Today
            </Typography>
            <Typography variant="p" sx={{mb:5}} style={{color:'white'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sit tenetur magni rem sequi fuga aspernatur eius excepturi consectetur dolorum.
            </Typography>
            <Button variant="contained" sx={{ display: 'block', my:5}} style={{backgroundColor:'#5ce7ed'}}>Learn More</Button>
           </Box>
          </Grid>
         
        </Grid>
      </Box>
      </Container>
    );
};

export default AppointmentBanner;