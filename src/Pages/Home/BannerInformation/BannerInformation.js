import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const BannerInformation = () => {
    return (
        <Container style={{paddingLeft:"50px",paddingRight:"50px"}}>
            
            <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
      <Card style={{backgroundColor:"#5CE7ED", color:"white"}} sx={{ minWidth: 275,border:0,boxShadow:0  }}>
   
        <CardContent>
          
          <Typography variant="h5" component="div">
            Opening Hours
          </Typography>
         
          <Typography sx={{ fontSize: 14 }} gutterBottom>
          Lorem ipsum dolor sit amet consectetur?
          </Typography>
          
        </CardContent>
       
      </Card>
    </Grid>

    <Grid item xs={4} sm={4} md={4}>
      <Card style={{backgroundColor:"#000033" , color:"white"}} sx={{ minWidth: 275,border:0,boxShadow:0  }}>
   
        <CardContent>
          
          <Typography variant="h5" component="div">
            Visit Our Location
          </Typography>
         
          <Typography sx={{ fontSize: 14 }} gutterBottom>
          Lorem ipsum dolor sit amet consectetur?
          </Typography>
          
        </CardContent>
       
      </Card>
    </Grid>

    <Grid item xs={4} sm={4} md={4}>
      <Card style={{backgroundColor:"#5CE7ED", color:"white"}} sx={{ minWidth: 275,border:0,boxShadow:0  }}>
   
        <CardContent>
          
          <Typography variant="h5" component="div">
            Contact us now
          </Typography>
         
          <Typography sx={{ fontSize: 14 }} gutterBottom>
          +08810293248932
          </Typography>
          
        </CardContent>
       
      </Card>
    </Grid>
        </Grid>
        </Container>
    );
};

export default BannerInformation;