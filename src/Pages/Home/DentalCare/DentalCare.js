import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatMent from '../../../images/treatment.png';
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    // height: 400
}

const DentalCare = () => {
    return (
        <Container style={{marginTop:"100px"}} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          
            <Grid item xs={12} md={6} style={verticalCenter} >
                <img src={treatMent} style={{ width: '350px' }} alt="" />
            </Grid>

            <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                <Box>
                    <Typography variant="h4">
                        Exceptional Dental <br />
                        Care, on Your Terms
                    </Typography>
                    <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas
                    </Typography>
                    <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                </Box>
            </Grid>

        </Grid>
    </Container>
    );
};

export default DentalCare;