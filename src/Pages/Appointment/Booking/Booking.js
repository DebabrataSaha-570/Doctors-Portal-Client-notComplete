import React from 'react';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
const Booking = ({ booking }) => {
    const { id, name, time, space } = booking
    return (
        <Grid item xs={12} sm={2} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant="contained">BOOK APPOINTMENT</Button>
            </Paper>

        </Grid>
    );
};

export default Booking;