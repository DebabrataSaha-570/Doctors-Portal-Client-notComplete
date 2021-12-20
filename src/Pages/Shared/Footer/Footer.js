import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Box } from '@mui/system';
import footerbg from '../../../images/footer-bg.png'


const footerBackground = {
    background: `url(${footerbg})`
}

const Footer = () => {
    return (
        <Box style={footerBackground}>
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid style={{ textAlign: 'left' }} item xs={6} sm={6} md={3}>
                        <Typography style={{ display: 'inlineBlock', height: '30px', width: '10px', content: "", }} variant="h6"> </Typography>
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
                    <Grid style={{ textAlign: 'left' }} item xs={6} sm={6} md={3}>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h6">Services</Typography>
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
                    <Grid style={{ textAlign: 'left' }} item xs={6} sm={6} md={3}>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h6">Oral Health</Typography>
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
                    <Grid item style={{ textAlign: 'left' }} xs={6} sm={6} md={3}>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h6">Oral Address</Typography>
                        <br />
                        <Typography variant="body1">New Yok - 101010 Huston Yards</Typography>
                        <br />

                        <Box sx={{ my: 3 }}>
                            <i style={{ color: 'green', backgroundColor: 'transparent', border: '1px solid green', borderRadius: '50%', padding: '10px 14px', marginRight: '10px', }} ><FontAwesomeIcon icon={faFacebookF} /></i>
                            <i style={{ color: 'green', backgroundColor: 'transparent', border: '1px solid green', borderRadius: '50%', padding: '10px', marginRight: '10px' }} ><FontAwesomeIcon icon={faGooglePlusG} /></i>
                            <i style={{ color: 'green', backgroundColor: 'transparent', border: '1px solid green', borderRadius: '50%', padding: '10px', marginRight: '10px' }} ><FontAwesomeIcon icon={faTwitter} /></i>
                        </Box>

                        <br />

                        <Typography variant="body1">Call Now</Typography>
                        <Button variant="contained">+2025552096</Button>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;