import { Container, Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';

const Login = () => {
    const [loginData, setLoginData] = useState({})



    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        // console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)


    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        alert("Hello")
        console.log(loginData)

    }

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6} >
                        <Typography variant="body1" gutterBottom >Logins</Typography>
                        <form onSubmit={handleLoginSubmit}>
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
                        </form>
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