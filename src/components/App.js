import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar.js';
import Home from './Pages/Home.js';
import About from './/Pages/About.js';
import Contact from './Pages/Contact.js';
import Error from './Pages/Error.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="nav-bar">
            <Navbar /> 
          </div>       
          <div className="container">
            <Switch>            
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />         
            </Switch>             
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
