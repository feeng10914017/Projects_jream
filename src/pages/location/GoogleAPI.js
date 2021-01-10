import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
  // onInfoBoxHome() {
  //   browserHistory.push('/')
  // }

  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: '100%', height: '105.6%', position: 'relative' }}
        zoom={8}
        initialCenter={{
          // lat: 24.797296,
          lat: 23.797296,
          lng: 121.03121,
        }}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 24.96956174638972, lng: 121.51736957182294 }}
          WEBSIT="http://localhost:3000/member"
          onClick={this.onMarkerClick}
        />
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'kevin'}
          position={{ lat: 24.797296, lng: 121.03121 }}
          WEBSIT="http://localhost:3000/motor"
          onClick={this.onMarkerClick}
        />
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'PUPU'}
          position={{ lat: 23.968842279661512, lng: 120.96951541325002 }}
          // WEBSIT="https://www.youtube.com/watch?v=ontX4zfVqK8&ab_channel=TraversyMedia"
          WEBSIT="http://localhost:3000/news"
          onClick={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>{this.state.selectedPlace.title}</p>

            <Button variant="primary" href={this.state.selectedPlace.WEBSIT}>
              {this.state.selectedPlace.name}
            </Button>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(MapContainer)
