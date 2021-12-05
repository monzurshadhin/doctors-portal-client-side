import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const Service = (props) => {
    const {img,name,description} = props.service
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275,border:0,boxShadow:0  }}>
      <CardMedia
        component="img"
        style ={{
            width:'auto',
            height:'80px',
            margin:'auto'
        }}
        image={img}
        alt="green iguana"
      />
        <CardContent>
          
          <Typography variant="h5" component="div">
            {name}
          </Typography>
         
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {description}
          </Typography>
          
        </CardContent>
       
      </Card>
    </Grid>
  );
};

export default Service;
