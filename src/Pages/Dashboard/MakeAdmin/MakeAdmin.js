import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleAdmitSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        e.preventDefault()

    }

    return (
        <div>
            <h3>This is make admin component </h3>
            <form onSubmit={handleAdmitSubmit}>
                <TextField
                    label="Standard"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant='contained'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;