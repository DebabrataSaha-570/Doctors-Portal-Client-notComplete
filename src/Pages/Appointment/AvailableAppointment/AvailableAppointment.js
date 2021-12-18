import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h3>This is AvailAbleAppointment component {date.toDateString()}</h3>
        </div>
    );
};

export default AvailableAppointment;