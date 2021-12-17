import React from 'react';
import Banner from '../../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Gutter from '../Gutter/Gutter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Gutter></Gutter>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </>
    );
};

export default Home;