import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={5} >
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={12} sm={8} md={7}>
                <Appointments date={date}></Appointments>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;