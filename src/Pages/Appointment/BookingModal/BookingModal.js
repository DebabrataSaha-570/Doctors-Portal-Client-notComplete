import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking

    const handleBookSubmit = (e) => {
        e.preventDefault()

        // collect data
        // send to the server

        handleBookingClose()
        alert('Submitting')

    }
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
                        defaultValue="Your Name"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        defaultValue="Phone Number"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        defaultValue="Email Address"
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