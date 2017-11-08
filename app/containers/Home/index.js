/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import NavBarHome from 'components/NavBarHome';
import NavBarMain from 'components/NavBarMain';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state= {
      image:""
    }
  }

  renderNav = () =>
  {
      if(sessionStorage.getItem('token') !== null || sessionStorage.getItem('token') !== '')
      {
        return (
          <NavBarHome/>
        )
      }
      else return (
        <NavBarMain/>
      )
  }

  render() {
    return (
      <div className="homeContainer">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
          {this.renderNav()}
          <div className="homeTitle">Savannah River Watch Program
          <p className="subTitle">"Ensuring a Swimable, Fishable Savannah River"</p>
          </div>
          <div className="birdWrapDiv">
            <img className="logoSRKbird" src={require("../../images/SRK-Bird-Only-Logo.jpg")}/>
          </div>
          <div className="subHeader">Schedualing for the SRK River Testing Program. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, arcu eu commodo maximus, lectus libero aliquet nibh, pulvinar commodo erat lectus at nibh. Mauris felis sem, condimentum sollicitudin turpis in, ultricies eleifend diam. Nunc porta feugiat lacus quis egestas. In in ex efficitur, euismod sapien venenatis, egestas ipsum. Duis elementum posuere purus, eu dignissim nisl fermentum et. Sed odio tellus, gravida et est a, facilisis tristique lacus. Maecenas sed pellentesque urna. Morbi et eros sed ex feugiat iaculis a non dolor. Aenean id ornare orci. Maecenas hendrerit purus in sapien efficitur, et commodo orci facilisis. In vitae porttitor mi. Aliquam consectetur id tellus a tempor. Vivamus ac justo a sapien pellentesque vulputate.
          </div>
          <div className="firstScrollPic">
          </div>
          <div className="bodyText">This is where the description of the site will reside. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, arcu eu commodo maximus, lectus libero aliquet nibh, pulvinar commodo erat lectus at nibh. Mauris felis sem, condimentum sollicitudin turpis in, ultricies eleifend diam. Nunc porta feugiat lacus quis egestas. In in ex efficitur, euismod sapien venenatis, egestas ipsum. Duis elementum posuere purus, eu dignissim nisl fermentum et. Sed odio tellus, gravida et est a, facilisis tristique lacus. Maecenas sed pellentesque urna. Morbi et eros sed ex feugiat iaculis a non dolor. Aenean id ornare orci. Maecenas hendrerit purus in sapien efficitur, et commodo orci facilisis. In vitae porttitor mi. Aliquam consectetur id tellus a tempor. Vivamus ac justo a sapien pellentesque vulputate.
          </div>
          <div className="secondScrollPic">
          </div>
          <div className="homeFooter">This is where the contact info and stuff will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, arcu eu commodo maximus, lectus libero aliquet nibh, pulvinar commodo erat lectus at nibh. Mauris felis sem, condimentum sollicitudin turpis in, ultricies eleifend diam. Nunc porta feugiat lacus quis egestas. In in ex efficitur, euismod sapien venenatis, egestas ipsum. Duis elementum posuere purus, eu dignissim nisl fermentum et. Sed odio tellus, gravida et est a, facilisis tristique lacus. Maecenas sed pellentesque urna. Morbi et eros sed ex feugiat iaculis a non dolor. Aenean id ornare orci. Maecenas hendrerit purus in sapien efficitur, et commodo orci facilisis. In vitae porttitor mi. Aliquam consectetur id tellus a tempor. Vivamus ac justo a sapien pellentesque vulputate.
          </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
