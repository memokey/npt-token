import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    const auth = useSelector((state) => state.auth);
    return (<Route {...rest} render={props => (auth.isAuthenticated ? <Redirect to="/panel" /> : <Component {...props} />)} />);
}

export default PublicRoute;