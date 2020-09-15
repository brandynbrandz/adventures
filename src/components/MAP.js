import React, { Component } from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
require("dotenv").config();

const AnyReactComponent = ({ text }) => <div className="map__name">{text}</div>;
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
      <div>
        <h1>Our Location</h1>
        <div className="map" style={{ height: "60vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GOOGLE_MAP,
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent lat={-1.267579} lng={36.905399} text="Brandz" />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
