/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import NavBar from 'components/NavBar';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="homeContainer">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
          <NavBar/>
            <div className="homeTitle">SRK River Ambasador Program</div>
            <div className="subHeader">Schedualing for the SRK River Testing Program. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, arcu eu commodo maximus, lectus libero aliquet nibh, pulvinar commodo erat lectus at nibh. Mauris felis sem, condimentum sollicitudin turpis in, ultricies eleifend diam. Nunc porta feugiat lacus quis egestas. In in ex efficitur, euismod sapien venenatis, egestas ipsum. Duis elementum posuere purus, eu dignissim nisl fermentum et. Sed odio tellus, gravida et est a, facilisis tristique lacus. Maecenas sed pellentesque urna. Morbi et eros sed ex feugiat iaculis a non dolor. Aenean id ornare orci. Maecenas hendrerit purus in sapien efficitur, et commodo orci facilisis. In vitae porttitor mi. Aliquam consectetur id tellus a tempor. Vivamus ac justo a sapien pellentesque vulputate.
            </div>
          <div className="firstScrollPic"></div>
          <div className="bodyText">This is where the description of the site will reside. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, arcu eu commodo maximus, lectus libero aliquet nibh, pulvinar commodo erat lectus at nibh. Mauris felis sem, condimentum sollicitudin turpis in, ultricies eleifend diam. Nunc porta feugiat lacus quis egestas. In in ex efficitur, euismod sapien venenatis, egestas ipsum. Duis elementum posuere purus, eu dignissim nisl fermentum et. Sed odio tellus, gravida et est a, facilisis tristique lacus. Maecenas sed pellentesque urna. Morbi et eros sed ex feugiat iaculis a non dolor. Aenean id ornare orci. Maecenas hendrerit purus in sapien efficitur, et commodo orci facilisis. In vitae porttitor mi. Aliquam consectetur id tellus a tempor. Vivamus ac justo a sapien pellentesque vulputate.
          </div>
          <div className="secondScrollPic"></div>
          <div className="homeFooter">This is where the contact info and stuff will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, arcu eu commodo maximus, lectus libero aliquet nibh, pulvinar commodo erat lectus at nibh. Mauris felis sem, condimentum sollicitudin turpis in, ultricies eleifend diam. Nunc porta feugiat lacus quis egestas. In in ex efficitur, euismod sapien venenatis, egestas ipsum. Duis elementum posuere purus, eu dignissim nisl fermentum et. Sed odio tellus, gravida et est a, facilisis tristique lacus. Maecenas sed pellentesque urna. Morbi et eros sed ex feugiat iaculis a non dolor. Aenean id ornare orci. Maecenas hendrerit purus in sapien efficitur, et commodo orci facilisis. In vitae porttitor mi. Aliquam consectetur id tellus a tempor. Vivamus ac justo a sapien pellentesque vulputate.
          </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
