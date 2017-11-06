/*
 *
 * TestingSupplies
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import NavBarMain from 'components/NavBarMain';

import './style.css';
import './styleM.css';

export default class TestingSupplies extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date:"Select date...",
      user:"",
      fullName: "",
      phoneNumber: "",
      notification: "",
      address: "",
      certification: "",
      certificationId: "",
      productPickUpDate: "",
      testingFrequency: "",
      testingLocation: ""
    }
  }

  componentWillMount(){
    this.getUserInfo()
  }

  handleDate = (event, date) => {
    this.setState({
      date: date,
      productPickUpDate: date
    })
  }

  getUserInfo = () => {
    fetch("http://localhost:8000/api/showUser/" + sessionStorage.getItem('id'), {
      method:"GET"
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        user:json.user
      })
    }.bind(this))
  }

  openDatePicker = () => {
    this.refs.dp.openDialog();
  }

  handleTestingFrequency = (event) => {
    this.setState({
      testingFrequency:event.target.value
    })
  }

  handleTestingLocation = (event) => {
    this.setState({
      testingLocation:event.target.value
    })
  }

  updateProfile = () => {
    let data = new FormData;
    let _this = this;
    data.append('fullName', this.state.user.fullName);
    data.append('phoneNumber', this.state.user.phoneNumber);
    data.append('address', this.state.user.address);
    data.append('certification', this.state.user.certification);
    data.append('certificationId', this.state.user.certificationId);
    data.append('pickUpDate', this.state.productPickUpDate);
    data.append('testingFrequency', this.state.testingFrequency);
    data.append('testingLocation', this.state.testingLocation);

    fetch("http://localhost:8000/api/updateUser", {
      method: "POST",
      body: data,
      headers:{"Authorization":"Bearer "+ sessionStorage.getItem('token')}
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
      }
    })
  }

  render() {
    return (
      <div className="productContainer">
        <Helmet title="TestingSupplies" meta={[ { name: 'description', content: 'Description of TestingSupplies' }]}/>
        <NavBarMain/>
        <div className="productHeaderContainer">
          <div className="productHeader">
            <p>Name:</p>
            <p>Email:</p>
            <p>Phone Number:</p>
            <p>Address:</p>
            <p>Certification:</p>
            <p>Certification Id:</p>
          </div>
          <div className="productHeaderBE">
            <p>{this.state.user.fullName}</p>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.phoneNumber}</p>
            <p>{this.state.user.address}</p>
            <p>{this.state.user.certification}</p>
            <p>{this.state.user.certificationId}</p>
          </div>
        </div>
        <div className="productList">
          <button className="button" onClick={this.openDatePicker}>Click here to select pick-up date</button>
          <MuiThemeProvider><DatePicker  className='dp' textFieldStyle={{cursor: 'pointer'}} ref='dp' hintText="nothing" onChange={this.handleDate}/></MuiThemeProvider>
        </div>
        <div className="productPickUp">
          <div className="productPickUpTitle">
          Testing Supplies Pick-up date:
          </div>
          <div className="productPickUpDate">
          {this.state.date.toString().slice(0,15)}
          </div>
        </div>
        <div className="productFrequencyList">
          <div className="productFrequencyTitle">Testing Frequency:</div>
          <select className="productFrequency" onChange={this.handleTestingFrequency}>
            <option>Please Select...</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Bi-Monthly</option>
          </select>
        </div>
        <div className="testingLocation">
          <div className="testingLocationTitle">
          Testing Location:
          </div>
          <input type="text" onChange={this.handleTestingLocation} placeholder="GPS Coordinates"/>
        </div>
        <input type="submit" className="profileSubmit" onClick={this.updateProfile}/><br/>
        <div className="profileNotification">{this.state.notification}</div>
      </div>
    );
  }
}

TestingSupplies.contextTypes = {
  router: React.PropTypes.object
};
