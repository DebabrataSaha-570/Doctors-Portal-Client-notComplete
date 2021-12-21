import { Container, Grid } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/login.png'

const Login = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >

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