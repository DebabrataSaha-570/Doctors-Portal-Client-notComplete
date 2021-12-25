import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking
    const { user } = useAuth()

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        console.log(newInfo)
        setBookingInfo(newInfo)
    }

    const handleBookSubmit = (e) => {
        e.preventDefault()

        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        // send to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })
        console.log(appointment)
        // alert('Submitting')

    }
    // console.log(user)
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>

                <form onSubmit={handleBookSubmit}>
                    <TextField
                        id="outlined-size-small"
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        onBlur={handleOnBlur}
                        name="patientName"
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        onBlur={handleOnBlur}
                        name="email"
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        onBlur={handleOnBlur}
                        name="phone"
                        defaultValue="Phone Number"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button type="submit" sx={{ m: 1 }} variant="contained">Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;