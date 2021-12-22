import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    console.log('isLoading private route', isLoading)
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;