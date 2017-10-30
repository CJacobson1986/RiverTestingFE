/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import NavBar from 'components/NavBar';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="homeContainer">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
          <NavBar/>
          <div className="homeFullOverlay">
          </div>
          <div className="welcome-text">
              <h1 className="helloJob">SRK River Testing</h1>
              <h3 className="subHeader">Schedualing the SRK river testing.</h3>
          </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
