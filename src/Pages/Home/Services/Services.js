import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/whitening.png'

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, qui at dicta vitae tempore repudiandae dolorem magni facilis ipsa, maiores praesentium temporibus, eum dolorum voluptates consectetur iure suscipit incidunt eveniet!',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, qui at dicta vitae tempore repudiandae dolorem magni facilis ipsa, maiores praesentium temporibus, eum dolorum voluptates consectetur iure suscipit incidunt eveniet!',
        img: cavity,
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, qui at dicta vitae tempore repudiandae dolorem magni facilis ipsa, maiores praesentium temporibus, eum dolorum voluptates consectetur iure suscipit incidunt eveniet!',
        img: teeth,
    },



]

const Services = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map(service =>
                            <Grid item xs={4} sm={4} md={4} key={service.name}>
                                <Service service={service}></Service>

                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Services;