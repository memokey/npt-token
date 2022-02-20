import React from "react";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import CapitalScreen from './screens/Capital/CapitalScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen';
import UserboardScreen from './screens/Dashboard/UserboardScreen';
import TransactionsScreen from './screens/Transactions/TransactionsScreen';

import NotFoundScreen from './screens/NotFound/NotFoundScreen';

import SigninScreen from './screens/Members/SigninScreen';
import SignupScreen from './screens/Members/SignupScreen';
import ForgotScreen from './screens/Members/ForgotScreen';
import ProfileScreen from './screens/Members/ProfileScreen';
import MarketScreen from './screens/Market/MarketScreen';
import MembersScreen from './screens/Members/MembersScreen';
import HistoryScreen from './screens/Transactions/HistoryScreen';
import UserHistoryScreen from './screens/Transactions/UserHistoryScreen';
import PrivateRoute from "./components/Route/PrivateRoute";
import PublicRoute from "./components/Route/PublicRoute";
import CurrencyScreen from "./components/Trade/CurrencyScreen";
import store from './store';
import { setTokenStore } from "./reducers/authReducer";
if (localStorage.jwt_token) {
  // Set auth token header auth
  const token = localStorage.jwt_token;
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  store.dispatch(setTokenStore(token))
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    localStorage.removeItem('jwt_token');
    store.dispatch(setTokenStore(token))
  }
}
const BaseRoute = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path='/' component={SigninScreen} />
        <Route exact path='/members' component={ProfileScreen} />
        <Route exact path='/admin/members' component={MembersScreen} />
        <Route exact path='/admin/history' component={HistoryScreen} />
        <Route exact path='/capital' component={CapitalScreen} />
        <Route exact path='/admin/dashboard' component={DashboardScreen} />
        <PrivateRoute exact path='/panel' component={UserboardScreen} />
        <PrivateRoute exact path='/currency/:kind/:action' component={CurrencyScreen} />
        <PrivateRoute exact path='/history' component={UserHistoryScreen} />
        <PrivateRoute exact path='/transactions' component={TransactionsScreen} />
        <PublicRoute exact path='/members/forgot-password' component={ForgotScreen} />
        <PublicRoute exact path='/members/signup' component={SignupScreen} />
        <PrivateRoute exact path='/market' component={MarketScreen} />
        <PrivateRoute component={NotFoundScreen} />
        <PublicRoute component={NotFoundScreen} />
      </Switch>
    </>
  );
};

export default BaseRoute;
