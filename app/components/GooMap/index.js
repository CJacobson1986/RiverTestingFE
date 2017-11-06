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

const MyMapComponent = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBaCSTynQm-OT6I63Cg4m7i8WG2TiHpMbs&libraries=geometry,drawing,places",
      loadingElement:<div style={{ height:'100%'}} />,
      containerElement:<div style={{ height:'400px'}} />,
      mapElement:<div style={{ height:'100%'}} />
  }),
   withScriptjs,
   withGoogleMap
  )((props) =>
  <GoogleMap
    defaultZoom={8}
    defualtCenter={{ lat:-34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onCLick={props.onMarkerClick} />}
  </GoogleMap>
);

export default class GooMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state= {
      isMarkerShown: false,
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true})
    }, 2000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <div>
      <MyMapComponent isMarkerShown={this.state.isMarkerShown} onMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}

GoogleMap.contextTypes = {
  router: React.PropTypes.object
};
