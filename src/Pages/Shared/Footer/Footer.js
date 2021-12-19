import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid style={{ textAlign: 'left' }} item xs={12} sm={6} md={3}>
                    <Typography variant="body1">..</Typography>
                    <br />
                    <Typography variant="body1">Emergency dental care</Typography>
                    <br />
                    <Typography variant="body1">Check Up</Typography>
                    <br />
                    <Typography variant="body1">Treatment of Personal Diseases</Typography>
                    <br />
                    <Typography variant="body1">Tooth Extraction</Typography>

                    <br />
                    <Typography variant="body1">Check Up</Typography>



                </Grid>
                <Grid style={{ textAlign: 'left' }} item xs={12} sm={6} md={3}>
                    <Typography variant="h6">Emergency dental care</Typography>
                    <br />
                    <Typography variant="body1">Emergency dental care</Typography>
                    <br />
                    <Typography variant="body1">Check Up</Typography>
                    <br />
                    <Typography variant="body1">Treatment of Personal Diseases</Typography>
                    <br />
                    <Typography variant="body1">Tooth Extraction</Typography>

                    <br />
                    <Typography variant="body1">Check Up</Typography>
                    <br />
                    <Typography variant="body1">Check Up</Typography>
                    <br />
                    <Typography variant="body1">Check Up</Typography>
                </Grid>
                <Grid style={{ textAlign: 'left' }} item xs={12} sm={6} md={3}>
                    <Typography variant="body1">Emergency dental care</Typography>
                    <br />
                    <Typography variant="body1">Check Up</Typography>
                    <br />
                    <Typography variant="body1">Treatment of Personal Diseases</Typography>
                    <br />
                    <Typography variant="body1">Tooth Extraction</Typography>

                    <br />
                    <Typography variant="body1">Check Up</Typography>
                    <br />
                    <Typography variant="body1">Check Up</Typography>
                    <br />
                    <Typography variant="body1">Check Up</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <a href="">Emergency dental care</a>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Footer;