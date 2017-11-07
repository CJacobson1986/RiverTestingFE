/**
*
* GoogleMap
*
*/

import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import './style.css';
import './styleM.css';

export default class GooMap extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state= {
      center: {
        lat: 33.4645243,
        lng: -81.9336476
      }
    }
  }

  handleMarkerClick = (event) => {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    let marker = {
      lat: lat,
      lng: lng
    }
    this.setState({
      center: marker
    }, function() {
      this.props.setCoords(this.state.center)
      this.forceUpdate();
    }.bind(this))
  }

  render() {

  const MyMapComponent = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: this.state.center.lat, lng: this.state.center.lng }} onClick={this.handleMarkerClick}>
      <Marker position={{ lat: this.state.center.lat, lng: this.state.center.lng }}/>
    </GoogleMap>
  ));

  return (
    <div id="map">
    <MyMapComponent/>
    </div>
  );
}
}

GooMap.contextTypes = {
  router: React.PropTypes.object
};
