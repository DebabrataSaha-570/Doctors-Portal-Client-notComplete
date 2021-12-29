import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const { token } = useAuth()


    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleAdmitSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    console.log(data)
                    setSuccess(true)
                }
            })

        e.preventDefault()

    }

    return (
        <div>
            <h3>This is make admin component </h3>
            <form onSubmit={handleAdmitSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Standard"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant='contained'>Make Admin</Button>
                {success && <Alert severity="success">Made Admin Successfully!!</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;