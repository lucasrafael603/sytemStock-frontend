import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import User from '../pages/User'
import SignIn from '../pages/SignIn'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/user" exact component={User} />
    <Route path="/signIn" exact component={SignIn} />
  </Switch>
);

export default Routes;
