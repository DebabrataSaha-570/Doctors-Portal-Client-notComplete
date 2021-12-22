import { Container, Grid, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { loginUser, user, isLoading, authError } = useAuth()


    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)


    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)
        loginUser(loginData.email, loginData.password)
    }

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6} >
                        <Typography variant="body1" gutterBottom >Login</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Your Password"
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained"> Login </Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                        </form>}
                        {isLoading &&
                            <CircularProgress />
                        }
                        {user?.email && <Alert severity="success">User logged in  Successfully!!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default Login;