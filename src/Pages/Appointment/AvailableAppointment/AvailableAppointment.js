import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 10,
    },
    {
        id: 4,
        name: 'Cavity ',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Pediatric Dental ',
        time: '06.00 AM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery ',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },


]

const AvailableAppointment = ({ date }) => {

    return (
        <Container>

            <h3>Available Appointments on {date.toDateString()}</h3>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking}></Booking>)
                }

            </Grid>

        </Container>
    );
};

export default AvailableAppointment;