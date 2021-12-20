import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png'
import appoinment from '../../../images/appointment-bg.png'

import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';


const appinmentBg = {
    background: `url(${appoinment})`,
    marginTop: 150,
    backgroundColor: 'rgb(23, 35, 64, 0.8 )',
    // backgroundColor: 'rgba(83, 93, 118, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}


const AppointmentBanner = () => {
    return (
        <Box style={appinmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '400px', marginTop: "-118px" }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }} >
                            Appoinment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }} >
                            Make an appointment today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 400 }} >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit blanditiis corrupti totam vel iure dicta nulla atque accusantium sint rem?
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Lean more</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;