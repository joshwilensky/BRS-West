import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Events from './components/Events/Events';
import Donate from './components/Donate/Donate';
import Rabbi from './components/Rabbi/Rabbi';
import Community from './components/Community/Community';
import Times from './components/Times/Times';
import Footer from './components/Footer/Footer';
import Moment from 'moment';
import './App.css';

class App extends Component {
  state = {
    dateMDY: Moment().format('dddd, MMMM DD, YYYY'),
    hebrewMonth: new Date().toLocaleDateString('en-US-u-ca-hebrew'),
  }

  render() {
    return (
      <Router>
        <div>
          <div className="row">
            <div className="col-md-9">
              <img src="./logo.png" className="Logo" alt="logo"></img>
            </div>
            <div className="col-md-3">
              <h5>{this.state.dateMDY}</h5>
              <h5>{this.state.hebrewMonth}</h5>

            </div>
          </div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/times'} className="nav-link">Service Times</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/events'} className="nav-link">Events</Link></li>
              <li><Link to={'/donate'} className="nav-link">Donate</Link></li>
              <li><Link to={'/rabbi'} className="nav-link">Rabbi's Blog</Link></li>
              <li><Link to={'/community'} className="nav-link">Community</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/events' component={Events} />
            <Route path='/donate' component={Donate} />
            <Route path='/rabbi' component={Rabbi} />
            <Route path='/community' component={Community} />
            <Route path='/times' component={Times} />
          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}


export default App;