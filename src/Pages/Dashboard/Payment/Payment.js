import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe, } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51KQUCqBsCr4lDhHtgkbrfSKjwteBVjyPyWWMe4DeDNI5q1JcLJiVnaSgLWGLkYA4sFrkb1EjThvdel108KUz8foH00RYxA58Hv');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
            })
    }, [])
    return (
        <div>
            <h3>Please Pay for: {appointment.patientName} for {appointment.serviceName} </h3>
            <h4>Pay: ${appointment?.price}</h4>

            <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>
        </div>
    );
};

export default Payment;


