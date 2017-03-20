import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class OfficeMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.refs.map, mapOptions);

  }

  // return <div className="map" ref={ map => this.mapNode = map}>Map</div>;
  // return <div className="map" ref="map">Map</div>;


  render() {
    return <div id='map-container' className="map" ref="map">Map</div>;

  }
}

export default withRouter(OfficeMap);
