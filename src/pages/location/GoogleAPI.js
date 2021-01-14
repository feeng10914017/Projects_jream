import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Locationdata } from './data/locationdata.js'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const containerStyle = {
  position: 'relative',
  width: 'calc(100vw - 478px)',
  height: 'calc(100vh - 80px)',
}

export class MapContainer extends React.Component {
  // state = {
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {},
  //   currentLocation: {
  //     lat: 37.774929,
  //     lng: -122.419416,
  //   },
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.google !== this.props.google) {
  //     this.loadMap()
  //   }
  //   if (prevState.currentLocation !== this.state.currentLocation) {
  //     this.recenterMap()
  //   }
  // }

  // recenterMap() {
  //   const map = this.map
  //   const curr = this.state.currentLocation

  //   const google = this.props.google
  //   const maps = google.maps

  //   if (map) {
  //     let center = new maps.LatLng(curr.lat, curr.lng)
  //     map.panTo(center)
  //   }
  // }

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //   })

  // onMapClicked = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null,
  //     })
  //   }
  // }
  // -----------above is old-------------

  constructor() {
    super()

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {
        lat: 37.774929,
        lng: -122.419416,
      },
    }
    this.markerOne = React.createRef()
  }

  onMarkerClick = (props, marker, e) => {
    this.setState((prevState) => ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    }))
  }

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  onMapReady = (mapProps, map) => {
    this.map = map
  }

  componentDidMount() {
    console.log(this.map)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.currentLocation, prevProps.currentLocation)

    if (prevProps.google !== this.props.google) {
      this.loadMap()
    }
    if (prevProps.currentLocation !== this.props.currentLocation) {
      this.recenterMap()
    }
  }

  recenterMap = () => {
    const map = this.map
    const curr = this.props.currentLocation

    const google = this.props.google
    const maps = google.maps

    console.log(this.props, this.map)

    if (map) {
      console.log(this.markerOne.current.marker)
      let center = new maps.LatLng(curr.lat, curr.lng)
      map.panTo(center)
      map.setZoom(12)

      // this.setState({
      //   showingInfoWindow: true,
      //   activeMarker: this.markerOne.current
      // });
    }
  }

  //   onMarkerMounted = element => {
  //     console.log(element.marker,999)
  //   this.onMarkerClick(element.props, element.marker, element);
  // };

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //   })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
  render() {
    return (
      <div className="map_class1">
        <Map
          google={this.props.google}
          // style={{ width: '100%', height: '100%' }}
          zoom={8.3}
          initialCenter={{
            lat: 23.797296,
            lng: 121.03121,
          }}
          containerStyle={containerStyle}
          onReady={this.onMapReady}
        >
          {/* <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 24.96956174638972, lng: 121.51736957182294 }}
            WEBSIT="http://localhost:3000/member"
            onClick={this.onMarkerClick}
          /> */}
          {Locationdata.map((item, index) => {
            return (
              <Marker
                title={item.address}
                name={item.name}
                position={{ lat: item.lat, lng: item.lng }}
                WEBSIT="http://localhost:3000/member"
                onClick={this.onMarkerClick}
                ref={this.markerOne}
              />
            )
          })}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <p>{this.state.selectedPlace.title}</p>

              <Button variant="primary" href={this.state.selectedPlace.WEBSIT}>
                詳細資訊
              </Button>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}
const LoadingContainer = (props) => (
  <div class="hello" style={{ height: '100px' }}></div>
)
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer)
