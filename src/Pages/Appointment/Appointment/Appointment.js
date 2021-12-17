import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    return (
        <>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointment></AvailableAppointment>
        </>
    );
};

export default Appointment;