import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from '../../../images/login.png';
import Navigation from "../../Shared/Navigation/Navigation";
const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {user,loginUser,isLoading,signInWithGoogle} = useAuth();
    console.log(loginData);

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) =>{
      loginUser(loginData.email,loginData.password,location,navigate)

        e.preventDefault();
        
    }

    const handleGoogleSignIn = () =>{
      signInWithGoogle(location,navigate)
    }
  return (
  
     <>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{mt:8}} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
          Login
      </Typography>
              <form onSubmit={handleLoginSubmit} action="">
              <TextField 
              sx={{width:"1",m:1}}
              id="standard-basic" 
              label="Your Email" 
              variant="standard"
              type="email"
              name="email"
              onChange={handleOnChange}
              />
              <TextField 
              sx={{width:"1",m:1}}
              id="standard-basic" 
              label="Your Password" 
              variant="standard"
              type="password"
              name="password"
              onChange={handleOnChange}
              />
              <NavLink style={{textDecoration:"none"}}  to="/register">
                  <Button variant="text">create a new account</Button>
              </NavLink>
              <Button style={{width:"100%",marginTop:"20px"}} type="submit" variant="contained">Login</Button>
              </form>
              <p>------------------------</p>
              <Button onClick={handleGoogleSignIn} variant='contained'>Google sign in</Button>
       
          </Grid>
          <Grid item xs={12} md={6}>
              <img style={{width:"100%"}} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
     </>

  );
};

export default Login;
