import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Blog from '../pages/Blog';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}
