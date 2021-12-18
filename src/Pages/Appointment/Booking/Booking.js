import React from 'react';
import Grid from '@mui/material/Grid';

const Booking = ({ booking }) => {
    const { id, name, time, space } = booking
    return (
        <Grid item xs={12} sm={2} md={4}>
            <h3>This is booking component</h3>
        </Grid>
    );
};

export default Booking;