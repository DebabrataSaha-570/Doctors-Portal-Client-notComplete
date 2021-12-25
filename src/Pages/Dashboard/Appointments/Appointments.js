import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const { user } = useAuth()
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const url = ``
        fetch()
    }, [])
    return (
        <div>
            <h2>Appointments</h2>
        </div>
    );
};

export default Appointments;