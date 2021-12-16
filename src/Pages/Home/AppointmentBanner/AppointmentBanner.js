import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import appoinment from '../../../images/appointment-bg.png'

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const appinmentBg = {
    background: `url(${appoinment})`
}


const AppointmentBanner = () => {
    return (
        <Box style={appinmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '400px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" >
                        APPOINMENT
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;