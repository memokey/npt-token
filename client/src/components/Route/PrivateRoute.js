import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../reducers/authReducer';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    const auth = useSelector((state) => state.auth);
    return (<Route {...rest} render={props => (auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />);
}

export default PrivateRoute;