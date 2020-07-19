import React from 'react';
import './App.css';
import Login from './Components/Forms/login';
import Signup from './Components/Forms/signup';
import BookingForm from './Components/Booking/bookingForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/BookingForm' component={BookingForm} />
      </Switch>
    </Router>
  );
}

export default App;
