import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={9}
        initialCenter={{
          lat: 24.285116895261098,
          lng: 120,
        }}
      >
        {/* <Marker onClick={this.onMarkerClick} name={'Current location'} /> */}
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 24.96956174638972, lng: 121.51736957182294 }}
        />
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 24.96956174638972, lng: 121.19455414658164 }}
        />
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 23.968842279661512, lng: 120.96951541325002 }}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{'test'}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.YOUR_API_KEY,
})(MapContainer)
