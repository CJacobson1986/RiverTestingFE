/*
 *
 * TestingSupplies
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import NavBarHome from 'components/NavBarHome';
import NavBarMain from 'components/NavBarMain';
import GooMap from 'components/GooMap';

import './style.css';
import './styleM.css';

export default class TestingSupplies extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token:sessionStorage.getItem('token'),
      date:"",
      user:"",
      fullName: "",
      phoneNumber: "",
      notification: "",
      address: "",
      certification: "",
      certificationId: "",
      pickUpDate: "",
      testingFrequency: "",
      gpsCoords:"",
      testingLocation: ""
    }
  }


  componentWillMount(){
    this.getUserInfo()
  }

  handleDate = (event, date) => {
    this.setState({
      date: date,
      pickUpDate: date
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
      json.user.pickUpDate = json.user.pickUpDate.toString().slice(0,15);
      console.log(json.user.fullName)
      this.setState({
        fullName: json.user.fullName,
        phoneNumber: json.user.phoneNumber,
        email:json.user.email,
        address: json.user.address,
        certification: json.user.certification,
        certificationId: json.user.certificationId,
        pickUpDate: json.user.pickUpDate,
        testingFrequency: json.user.testingFrequency,
        gpsCoords: json.user.testingLocation,
        testingLocation: json.user.testingLocation
      })
    }.bind(this))
  }

  openDatePicker = () => {
    this.refs.datePicker.openDialog();
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
    data.append('fullName', this.state.fullName);
    data.append('phoneNumber', this.state.phoneNumber);
    data.append('address', this.state.address);
    data.append('certification', this.state.certification);
    data.append('certificationId', this.state.certificationId);
    data.append('pickUpDate', this.state.pickUpDate);
    data.append('testingFrequency', this.state.testingFrequency);
    data.append('testingLocation', JSON.stringify(this.state.testingLocation));

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
        if(json.error === "token_expired") {
          setTimeout(function(){
            let url = '/';
            _this.context.router.history.push(url);
          }, 1000)
        }
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

  enterKey = (event) => {
    var key = event.keyCode;

    if (key === 13) {
      this.updateProfile();
    }
  }

  setCoords = (marker) => {
    this.setState({
      gpsCoords:marker,
      testingLocation: marker
    })
  }

  renderNav = () =>
  {
      if(this.state.token)
      {
        return (
          <NavBarMain/>
        )
      }
      else {
        return (
        <NavBarHome/>
      )
    }
  }

  render() {
    let weekly = '';
    let monthly = '';
    let bimonthly = '';
    switch(this.state.testingFrequency)
    {
      case 'Weekly':
        weekly = 'selected';
        break;
      case 'Monthly':
        monthly = 'selected';
        break;
      case 'Bi-Monthly':
          bimonthly = 'selected';
          break;
    }
    return (
      <div className="productContainer">
        <Helmet title="TestingSupplies" meta={[ { name: 'description', content: 'Description of TestingSupplies' }]}/>
        {this.renderNav()}
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
            <p>{this.state.fullName}</p>
            <p>{this.state.email}</p>
            <p>{this.state.phoneNumber}</p>
            <p>{this.state.address}</p>
            <p>{this.state.certification}</p>
            <p>{this.state.certificationId}</p>
          </div>
        </div>
        <div className="productList">
          <button className="button" onClick={this.openDatePicker}>Click here to select pick-up date</button>
          <MuiThemeProvider><DatePicker  className='datePicker' textFieldStyle={{cursor: 'pointer'}} ref='datePicker' hintText="nothing" onChange={this.handleDate}/></MuiThemeProvider>
        </div>
        <div className="productPickUp">
          <div className="productPickUpTitle">
          Testing Supplies Pick-up date:
          </div>
          <div className="productPickUpDate">
          {this.state.pickUpDate}
          </div>
        </div>
        <div className="productFrequencyList">
          <div className="productFrequencyTitle">Testing Frequency:</div>
          <select className="productFrequency" onChange={this.handleTestingFrequency}>
            <option selected>{this.state.testingFrequency}</option>
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
          <div className="gpsCoords">{this.state.gpsCoords.lat} & {this.state.gpsCoords.lng}</div>
        </div>
        <GooMap className="gooMap" setCoords={this.setCoords}/>
        <input type="submit" className="profileSubmit"  onClick={this.updateProfile}/><br/>
        <div className="profileNotification">{this.state.notification}</div>
      </div>
    );
  }
}

TestingSupplies.contextTypes = {
  router: React.PropTypes.object
};
