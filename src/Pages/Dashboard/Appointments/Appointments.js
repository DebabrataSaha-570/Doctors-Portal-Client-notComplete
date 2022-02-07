import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Appointments = ({ date }) => {
    const { user } = useAuth()
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const url = `https://shielded-river-48943.herokuapp.com/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppointments(data)

            })
    }, [date])

    return (
        <div>
            <h2>Appointments {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Time</TableCell>
                            <TableCell >Service</TableCell>
                            <TableCell >Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" >
                                    {row.patientName}
                                </TableCell>
                                <TableCell >{row.time}</TableCell>
                                <TableCell >{row.serviceName}</TableCell>
                                <TableCell >{row.payment ?
                                    'Paid'
                                    :
                                    <Link to={`/dashboard/payment/${row._id}`}> <Button variant="contained">Pay</Button> </Link>
                                }

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;