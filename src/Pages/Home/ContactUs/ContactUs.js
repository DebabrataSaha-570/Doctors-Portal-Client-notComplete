import { Button, Container, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import appointmentBg from '../../../images/appointment-bg.png'


const contactBg = {
    background: `url(${appointmentBg})`,
    backgroundColor: 'rgb(23, 35, 64, 0.8 )',
    backgroundBlendMode: 'darken, luminosity'

}

const ContactUs = () => {
    return (
        <Box style={contactBg} sx={{ my: 5, p: 3 }}>
            <Container>
                <Box sx={{ my: 5 }}>
                    <Typography sx={{ color: 'info.main' }} variant="h6">
                        Contact Us
                    </Typography>
                    <Typography style={{ color: 'white' }} variant="h4">
                        Always Connect With Us
                    </Typography>
                </Box>
                <form action="">
                    <TextField
                        sx={{ width: '75%', my: 2, background: 'white', borderRadius: '5px' }}
                        required
                        id="outlined-required"
                        placeholder='Email Address*'
                        defaultValue=""
                    />
                    <TextField
                        sx={{ width: '75%', mb: 2, background: 'white', borderRadius: '5px' }}
                        required
                        id="outlined-required"
                        placeholder='Subject*'
                        defaultValue=""
                    />
                    <TextField
                        sx={{ width: '75%', background: 'white', borderRadius: '5px' }}
                        id="outlined-multiline-flexible"
                        placeholder='Your Message*'
                        multiline
                        rows={5}

                    />

                    <Box sx={{ my: 2 }}>
                        <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default ContactUs;