import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Auth/Login/Login';
import SignUp from '../pages/Auth/SignUp/SignUp';
import Events from '../pages/Events/Events';
import CreateEventForm from '../pages/Events/CreateEventForm/CreateEventForm';
import EventPage from '../pages/Events/EventPage/EventPage'

const Content = () => {
  return (
    <div>
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/login'} component={Login} exact />
        <Route path={'/sign-up'} component={SignUp} exact />
        <Route path={'/events'} component={Events} exact />
        <Route path={'/event/'} component={Events} exact />
        <Route path={'/create-event'} component={CreateEventForm} exact />
      </Switch>
    </div>
  );
};

export default Content;
