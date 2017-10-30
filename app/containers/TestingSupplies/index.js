/*
 *
 * TestingSupplies
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class TestingSupplies extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="TestingSupplies" meta={[ { name: 'description', content: 'Description of TestingSupplies' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

TestingSupplies.contextTypes = {
  router: React.PropTypes.object
};
