import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import DashBoard from '../components/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute path="/" redirectPath="/login" exact component={DashBoard} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
