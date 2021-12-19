import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'
const ExceptionalCare = () => {
    return (
        <Container sx={{ py: 3 }}>
            <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <Grid item xs={12} sm={12} md={5}>
                    <img src={treatment} style={{ width: '100%' }} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Box sx={{ pl: 3 }} >
                        <Typography variant="h3">
                            Exceptional Dental
                        </Typography>
                        <Typography variant="h3">
                            Care, On Your Terms
                        </Typography>

                        <Typography sx={{ py: 5 }} variant="subtitle1" gutterBottom component="div">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quae vel amet rem laudantium, veritatis autem adipisci saepe hic corporis repellat, iusto totam! Similique sint quod dolores? Ex nemo ipsa veritatis commodi eaque doloremque mollitia magni molestiae! Eius vitae modi debitis quos, dignissimos aliquid ab delectus officiis, a id perspiciatis?
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExceptionalCare;