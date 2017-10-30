/**
*
* Register
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password: "",
      notification:"",
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
      this.register();
    }
  }

  register =() => {
    let data = new FormData;
    let _this = this;
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch('http://localhost:8000/api/register', {
      method:'Post',
      body:data
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        if(json.error) {
          _this.setState({
            notification: json.error
          })
        }
        else {
          _this.setState({
            notification: json.success
          })
          console.log(json.token);
          sessionStorage.setItem('token', json.token);
        }
      }.bind(this))
  }


    render() {
      if(this.props.open === true)
      {
      return (
        <div>
          <div className="registerFullContainer">
              <div className="registerUnderlay" onClick={this.props.onClose}>
              </div>
            <div className="registerContainer">
              <div className="registerInput">
                <h3>Register for SRK River Testing</h3>
                <input type="text" className="emailRegister" value={this.state.email} onChange={this.handleEmail} placeholder="E-mail"/>

                <input type="password" className="passwordRegister" value={this.state.password} onKeyDown={this.enterKey} onChange={this.handlePassword} placeholder="Password"/>
                <input type="submit" className="registerButton" placeholder="Register" onClick={this.signIn} />
                <p className="submitNote">{this.state.notification}</p>
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

Register.contextTypes = {
  router: React.PropTypes.object
};
