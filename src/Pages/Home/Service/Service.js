import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Service = (props) => {
    const { name, img, description } = props.service;
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                image={img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}

                </Typography>
            </CardContent>

        </Card>
    );
};

export default Service;