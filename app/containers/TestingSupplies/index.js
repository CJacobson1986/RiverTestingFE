/*
 *
 * TestingSupplies
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

import './style.css';
import './styleM.css';

export default class TestingSupplies extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date:"Pick-up Date",
      user:""
    }
  }

  componentWillMount(){
    this.getUserInfo()
  }

  handleDate = (event, date) => {
    this.setState({
      date:date
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

  render() {
    return (
      <div className="productContainer">
        <Helmet title="TestingSupplies" meta={[ { name: 'description', content: 'Description of TestingSupplies' }]}/>
        <div className="productHeader">
        <p>Name: {this.state.user.fullName}</p>
        <p>Email: {this.state.user.email}</p>
        <p>Phone Number: {this.state.user.phoneNumber}</p>
        </div>
        <div className="productList">
        <button className="button" onClick={this.openDatePicker}>Click here to select pick-up date</button>
        <MuiThemeProvider><DatePicker  className='dp' textFieldStyle={{cursor: 'pointer'}} ref='dp' hintText="nothing" onChange={this.handleDate}/></MuiThemeProvider>
        </div>
        <div className="productFooter">
        {this.state.date.toString().slice(0,15)}
        </div>
      </div>
    );
  }
}

TestingSupplies.contextTypes = {
  router: React.PropTypes.object
};
