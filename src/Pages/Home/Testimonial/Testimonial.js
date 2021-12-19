import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const testimonials = [
    {
        id: 1,
        name: 'Winson Herry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere cumque dignissimos unde maiores velit doloremque optio aperiam, ipsam ea minus ab explicabo non harum placeat ad iure eaque est.',
        img: people1,
        city: 'California'
    },
    {
        id: 2,
        name: 'Winson Herry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere cumque dignissimos unde maiores velit doloremque optio aperiam, ipsam ea minus ab explicabo non harum placeat ad iure eaque est.',
        img: people2,
        city: 'California'
    },
    {
        id: 3,
        name: 'Winson Herry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere cumque dignissimos unde maiores velit doloremque optio aperiam, ipsam ea minus ab explicabo non harum placeat ad iure eaque est.',
        img: people3,
        city: 'California'
    },

]

const Testimonial = () => {
    return (
        <Container sx={{ my: 5 }}  >
            <Box style={{ textAlign: 'left' }}>
                <Typography sx={{ color: 'info.main', fontWeight: 700 }} variant="h6">
                    Testimonial
                </Typography>
                <Box sx={{ my: 3, }}>
                    <Typography variant="h4">
                        What's Our Patients
                    </Typography>
                    <Typography variant="h4">
                        Says
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={2}>

                {
                    testimonials.map(testimonial => <SingleTestimonial key={testimonial.id} testimonial={testimonial}></SingleTestimonial>)
                }
            </Grid>



        </Container>
    );
};

export default Testimonial;