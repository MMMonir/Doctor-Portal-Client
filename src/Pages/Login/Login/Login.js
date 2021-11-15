import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value, newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () =>{
        signInUsingGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant="body1">Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                        sx={{width: '75%', m:1}}
                        id="standard-basic" 
                        label="Your Email" 
                        name="email" 
                        onBlur={handleOnChange}
                        variant="standard" />
                    <TextField 
                        sx={{width: '75%', m:1}}
                        id="standard-basic" 
                        label="Your Password" 
                        type="password"
                        name="password"
                        onBlur={handleOnChange}
                        variant="standard" />
                    <NavLink style={{textDecoration: 'none'}} to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    <Button sx={{width: '75%', m:1}} type="submit" variant="contained">Login</Button>
                    
                    {user?.email && <Alert severity="success">User Login Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Button sx={{width: '75%', m:1}} variant="contained" onClick={handleGoogleSignIn}>Google Sign In</Button>
                    <div>{isLoading && <CircularProgress />}</div>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt=""/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;