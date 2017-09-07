import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graffitiPics } from '../../public/js/mapStyles.js'

export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google}

          initialCenter={this.props.center}
          zoom={this.props.zoom || 12}
          zoomControl= {true}
        scrollwheel= {false}
        disableDefaultUI= {true}
        styles= {this.props.style}>
        {this.props.graffiti ? Object.keys(this.props.graffiti).map(el => {
          let position = this.props.graffiti[el].center
          return (
                    <Marker
                    key={el}
                    position={position}
                    icon={{
                      url:'images/' + graffitiPics[Math.floor(Math.random() * 14) + 0]

                    }}
                    />
                  )
        }) : null}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBukZ6vAJ-XjCyADpZ3Ebr_7O-ltyQsx-s')
})(MapContainer)



