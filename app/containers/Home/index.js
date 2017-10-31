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
          <div className="welcome-text">
              <h1 className="helloJob">SRK River Ambasador Program</h1>
              <div className="subHeader">Schedualing for the SRK River Testing Program.
            </div>
          </div>
          <div className="firstScrollPic"></div>
          <div className="bodyText">This is where the description of the site will reside.
          </div>
          <div className="secondScrollPic"></div>
          <div className="homeFooter">This is where the contact info and stuff will go.
          </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
