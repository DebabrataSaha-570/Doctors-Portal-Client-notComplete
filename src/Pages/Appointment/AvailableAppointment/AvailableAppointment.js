import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, Alert } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 20,
    },
    {
        id: 2,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 15,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 10,
        price: 17,
    },
    {
        id: 4,
        name: 'Cavity ',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 19,
    },
    {
        id: 5,
        name: 'Pediatric Dental ',
        time: '06.00 AM - 07.00 PM',
        space: 10,
        price: 25,
    },
    {
        id: 6,
        name: 'Oral Surgery ',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 23,
    },


]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)

    return (
        <Container>

            <Typography variant='h5' sx={{ color: 'info.main', my: 2 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully!!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} setBookingSuccess={setBookingSuccess} date={date}></Booking>)
                }

            </Grid>

        </Container >
    );
};

export default AvailableAppointment;