import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock } from '@fortawesome/free-solid-svg-icons'

const Gutter = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', py: 2, px: 4, backgroundColor: '#1cb79a', color: 'white', borderRadius: '5px' }}>
                        <Box sx={{ pr: 4 }}>
                            <Typography variant="h3"><FontAwesomeIcon icon={faClock} /></Typography>
                        </Box>
                        <Box >
                            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>Opening Hours</Typography>
                            <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque.</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', py: 2, px: 4, backgroundColor: '#1cb79a', color: 'white', borderRadius: '5px' }}>
                        <Box sx={{ pr: 4 }}>
                            <Typography variant="h3"><FontAwesomeIcon icon={faClock} /></Typography>
                        </Box>
                        <Box >
                            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>Visit our location</Typography>
                            <Typography variant="body2">Bryoklyn, NY 10036, United States</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', py: 2, px: 4, backgroundColor: '#1cb79a', color: 'white', borderRadius: '5px' }}>
                        <Box sx={{ pr: 4 }}>
                            <Typography variant="h3"><FontAwesomeIcon icon={faClock} /></Typography>
                        </Box>
                        <Box >
                            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>Contact us now</Typography>
                            <Typography variant="body2">+000123 456</Typography>
                        </Box>
                    </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Gutter;