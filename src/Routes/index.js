import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Register from '../components/Register';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/" redirectPath="/login" exact component={Dashboard} />
      <ProtectedRoute path="/register" redirectPath="/login" exact component={Register} />
    </Switch>
  </Router>
);

export default Routes;
