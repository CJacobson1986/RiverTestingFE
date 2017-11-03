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
      email: "",
      password: "",
      fullName: "",
      phoneNumber: "",
      notification: "",
      address: "",
      certification: "",
      certificationId: "",
      role_id: 1,
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

  handleFullName = (event) => {
    this.setState({
      fullName:event.target.value
    })
  }

  handlePhoneNumber =(event) => {
    this.setState({
      phoneNumber:event.target.value
    })
  }

  handleAddress =(event) => {
    this.setState({
      address:event.target.value
    })
  }

  handleCertification =(event) => {
    this.setState({
      certification:event.target.value
    })
  }

  handleCertificationId =(event) => {
    this.setState({
      certificationId:event.target.value
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
    data.append('fullName', this.state.fullName);
    data.append('phoneNumber', this.state.phoneNumber);
    data.append('address', this.state.address);
    data.append('certification', this.state.certification);
    data.append('certificationId', this.state.certificationId);
    data.append('role_id', this.state.role_id);

    fetch('http://localhost:8000/api/store', {
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
                <div className="registerTitle">Registration for SRK River Ambasadors</div>
                <input type="text" className="emailRegister" value={this.state.email} onChange={this.handleEmail} placeholder="E-mail"/>
                <input type="text" className="phoneNumberRegister" value={this.state.phoneNumber} onChange={this.handlePhoneNumber} placeholder="Phone Number"/>
                <input type="text" className="fullNameRegister" value={this.state.fullName} onChange={this.handleFullName} placeholder="Full Name"/>
                <input type="text" className="addressRegister" value={this.state.address} onChange={this.handleAddress} placeholder="Address"/>
                <input type="text" className="certificationRegister" value={this.state.certification} onChange={this.handleCertification} placeholder="Certification"/>
                <input type="text" className="certificationIdRegister" value={this.state.certificationId} onChange={this.handleCertificationId} placeholder="Certification Id Number"/>
                <input type="password" className="passwordRegister" value={this.state.password} onKeyDown={this.enterKey} onChange={this.handlePassword} placeholder="Password"/>
                <input type="submit" className="registerButton" placeholder="Register" onClick={this.register}/>
                <div className="submitNote">{this.state.notification}</div>
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
