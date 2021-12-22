import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';

import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Register = (props) => {
    const [loginData, setLoginData] = useState({})
    const { registerUser, isLoading } = useAuth()

    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        // console.log(field, value)
        const newLoginData = { ...loginData }
        console.log('login data', newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData)


    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password)

    }
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6} >
                        <Typography variant="body1" gutterBottom >Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
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
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Confirm Password"
                                name="password2"
                                onChange={handleOnChange}
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained"> Register </Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant="text">Already Registered ? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading &&
                            <CircularProgress />
                        }
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default Register;