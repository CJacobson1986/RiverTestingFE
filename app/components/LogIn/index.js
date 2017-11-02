/**
*
* LogIn
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class LogIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password: "",
      notificationTwo:"",
      open: this.props.open
    }
  }

  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  }

  enterKey = (event) => {
    var key = event.keyCode;

    if (key === 13) {
      this.logIn();
    }
  }

  logIn =() => {
    let data = new FormData;
    let _this = this;
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch('http://localhost:8000/api/logIn', {
      method:'Post',
      body:data
      })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error) {
        _this.setState({
          notificationTwo: json.error
        })
      }
      else {
        _this.setState({
          notificationTwo: json.success
        })
        sessionStorage.setItem('token', json.token);
        sessionStorage.setItem('id', json.user.id);
        setTimeout(function(){
          let url = '/TestingSupplies/';
          _this.context.router.history.push(url);
        }, 1000)
      }
    }.bind(this))
  }


    render() {
      if(this.props.open === true)
      {
      return (
        <div>
          <div className="logInFullContainer">
              <div className="logInUnderlay" onClick={this.props.onClose}>
              </div>
            <div className="logInContainer">
              <div className="logInInput">
                <div className="logInTitle">Log-In for SRK <br/> River Ambasadors</div>
                <input type="text" className="emailLogIn" value={this.state.email} onChange={this.handleEmail} placeholder="E-mail"/>
                <input type="password" className="passwordLogIn" value={this.state.password} onKeyDown={this.enterKey} onChange={this.handlePassword} placeholder="Password"/>
                <input type="submit" className="logInButton" placeholder="Log In" onClick={this.logIn} />
                <div className="submitNoteTwo">{this.state.notificationTwo}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div className="renuiDialogOverlayHidden"></div>
      );
  }
}
}
LogIn.contextTypes = {
  router: React.PropTypes.object
};
