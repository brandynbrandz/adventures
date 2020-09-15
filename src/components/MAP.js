import React, { Component } from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
require("dotenv").config();

const AnyReactComponent = ({ text }) => <div className="map__name">{text}</div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
  console.log("apiIsLoaded");
  if (map) {
    map.setOptions({
      gestureHandling: "greedy",
      mapTypeControl: false,
      minZoom: 2,
    });
  }
};
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -1.267579,
      lng: 36.905399,
    },
    zoom: 13,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <h1>Our Location</h1>

        <div className="map__img">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAP,
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <AnyReactComponent lat={-1.267579} lng={36.905399} text="Brandz" />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
