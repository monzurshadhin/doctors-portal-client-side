import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from '../../../images/login.png';
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
    const [loginData,setLoginData] = useState({});
    const navigate =  useNavigate();

    const {user,registerUser,isLoading,authError} = useAuth();
    console.log(loginData);
    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) =>{
        if(loginData.password !== loginData.password2){
            alert('password not matched')
        }
        registerUser(loginData.email,loginData.password,loginData.name,navigate)

        e.preventDefault();
  
    }
    return (
        <>
        <Navigation></Navigation>
        <Container>
          <Grid container spacing={2}>
            <Grid sx={{mt:8}} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
            Register
        </Typography>
                {
                !isLoading&& <form onSubmit={handleLoginSubmit} action="">
                <TextField 
                sx={{width:"1",m:1}}
                id="standard-name" 
                label="Your Name" 
                variant="standard"
                type="text"
                name="name"
                onBlur={handleOnBlur}
                />
                <TextField 
                sx={{width:"1",m:1}}
                id="standard-email" 
                label="Your Email" 
                variant="standard"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                />
                <TextField 
                sx={{width:"1",m:1}}
                id="standard-password" 
                label="Your Password" 
                variant="standard"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                />
                <TextField 
                sx={{width:"1",m:1}}
                id="standard-password2" 
                label="re-type your Password" 
                variant="standard"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                />
                <NavLink style={{textDecoration:"none"}} to="/login">
                    <Button  variant="text">already have an account</Button>
                </NavLink>
                <Button style={{width:"100%",marginTop:"20px"}} type="submit" variant="contained">Register</Button>
                </form>
                }
                {
                    isLoading && (
                    <LinearProgress color="secondary" />
                  
                    )
                }
                {
                    user?.email && (<Alert severity="success">Register successfully!</Alert>) 
                }
                {
                    authError && (<Alert severity="error">{authError}!</Alert>)
                }
         
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:"100%"}} src={login} alt="" />
            </Grid>
          </Grid>
        </Container>
       </>
    );
};

export default Register;