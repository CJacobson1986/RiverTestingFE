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
      <div className="productContainer">
        <Helmet title="TestingSupplies" meta={[ { name: 'description', content: 'Description of TestingSupplies' }]}/>
        <div className="productHeader">

        </div>
        <div className="productList">

        </div>
        <div className="productFooter">

        </div>
      </div>
    );
  }
}

TestingSupplies.contextTypes = {
  router: React.PropTypes.object
};
