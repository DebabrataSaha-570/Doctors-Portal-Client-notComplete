import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import CircularProgress from '@mui/material/CircularProgress';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()
    console.log('isLoading private route', isLoading)
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;