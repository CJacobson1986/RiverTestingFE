/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from 'react-router-dom';
import Bars from 'react-icons/lib/fa/bars';
import Register from 'components/Register';
import LogIn from 'components/LogIn';

import './style.css';
import './styleM.css';

export default class NavBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      logIn:false,
      register:false
    }
  }

  handleLogIn = () => {
    this.setState({
      logIn:!this.state.logIn
    })
  }

  renderLogIn = () => {
    if(this.state.logIn === true) {
      return (
        <LogIn open={this.state.logIn} onClose={this.handleLogIn}/>
      )
    }
  }

  handleRegister = () => {
    this.setState({
      register:!this.state.register
    })
  }

  renderRegister = () => {
    if(this.state.register === true) {
      return (
        <Register open={this.state.register} onClose={this.handleRegister}/>
      )
    }
  }


  render() {
    return (
      <div className="navContainer">
        <div className="siteName">Savannah River Keeper</div>
        <nav className="nav">
        {this.renderLogIn()}
        {this.renderRegister()}
        <div className="entranceButtons">
          <input type="submit" className="register" value="Register" onClick={this.handleRegister}/>
          <input type="submit" className="logIn" value="Log-In" onClick={this.handleLogIn}/>
        </div>
        </nav>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};
