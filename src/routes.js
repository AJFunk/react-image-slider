import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar';

import App from './components/App';
import Slideshow from './components/Slideshow';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route path="/slideshow" component={Slideshow} />
    </div>
  </Router>
);

export default Routes;
