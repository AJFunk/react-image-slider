import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar';

import App from './components/App';
import Example from './components/Example';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route path="/example" component={Example} />
    </div>
  </Router>
);

export default Routes;
