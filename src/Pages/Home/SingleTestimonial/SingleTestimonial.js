import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SingleTestimonial = ({ testimonial }) => {
    const { id, name, img, description, city } = testimonial
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5, px: 3 }}>
                <Typography variant="subtitle1">
                    {description}
                </Typography>
                <Box sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
                    <img style={{ paddingRight: '20px', width: '20%' }} src={img} alt="" />
                    <Box style={{ textAlign: 'left' }}>
                        <Typography sx={{ color: 'info.main', fontWeight: 700 }} variant='subtitle2'>
                            {name}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {city}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default SingleTestimonial;