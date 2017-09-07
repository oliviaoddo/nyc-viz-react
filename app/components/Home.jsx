import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MapContainer from './MapIntro'
import { connect } from 'react-redux';
import { mapThreeStyle, mapFourStyle, mapStyles } from '../../public/js/mapStyles.js'
import { fetchFood, fetchNoise, fetchGraffiti } from '../redux/main';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGraffiti()
  }
  render() {
    return (
      <div>
              <div className="section">
           <MapContainer center={{ lat: 40.7831, lng: -73.9712 }} style={mapStyles} zoom={10}/>
          </div>
        <div id="index-banner" className="parallax-container">

          <div className="section no-pad-bot">

            <div className="container">
              <br />
              <br />
              <div className="row center" />
              <br />
              <br />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img

              className="img1"
              src="images/ny2.jpg"
              alt="Olivia Oddo in San Francisco"
            />
          </div>
        </div>

        <div className="grey lighten-4">
          <div className="section">
           <MapContainer center={{
            lat: 40.7831,
            lng: -73.9712
          }} style={mapThreeStyle}/>
          </div>
        </div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <div className="row center" />
              <br />
              <br />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img
              className="img1"
              src="images/ny3.jpg"
              alt="Olivia Oddo in San Francisco"
            />
          </div>
        </div>

        <div className="grey lighten-4">
          <div className="section">
            <MapContainer center={{
            lat: 40.7831,
            lng: -73.9512
          }} style={mapStyles}/>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center" />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img
              src="images/ny4.jpg"
              alt="Unsplashed background img 2"
            />
          </div>
        </div>

        <div className="grey lighten-4">
          <div className="section">
           <MapContainer graffiti={this.props.graffiti || null} center={{ lat: 40.6535528, lng: -73.9676001 }} style={mapFourStyle}/>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center" />
            </div>
          </div>
          <div
            ref={img => {
              $(img).parallax();
            }}
            className="parallax"
          >
            <img
              src="images/ny5.jpg"
              alt="Unsplashed background img 3"
            />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    noise: state.map.noise,
    food: state.map.food,
    graffiti: state.map.graffiti
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFood: () => dispatch(fetchFood()),
  fetchNoise: () => dispatch(fetchNoise()),
  fetchGraffiti: () => dispatch(fetchGraffiti())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
