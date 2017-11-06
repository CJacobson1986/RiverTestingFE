/**
*
* NavBarMain
*
*/

import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';
import './styleM.css';

export default class NavBarMain extends React.PureComponent {
  render() {
    return (
      <div className="navContainer">
        <img className="logoSRK" src={require("../../images/SRK-Heron-Banner-Logo.jpg")}/>
        <nav className="nav">
          <div className="pageButtons">
            <Link className="navButtons" to="/">
            Home
            </Link>
            <Link className="navButtons" to="/TestingSupplies">
            Profile
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

NavBarMain.contextTypes = {
  router: React.PropTypes.object
};
