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
  constructor() {
    super()

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    //this.markerOne = React.createRef()
    this.markers = React.createRef([])
    this.markers.current = []

    this.infoWindowOne = React.createRef()
  }

  addToRefs = (el) => {
    if (el && !this.markers.current.includes(el)) {
      this.markers.current.push(el)
    }
  }

  onMarkerClick = (props, marker, e) => {
    console.log(marker)
    this.props.setDataFromLeft(false)
    this.recenterMap()
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
      console.log(this.props.id)
      console.log(this.markers.current)
    }
  }

  recenterMap = () => {
    const map = this.map
    const curr = this.props.currentLocation

    const google = this.props.google
    const maps = google.maps

    if (map) {
      let center = new maps.LatLng(curr.lat, curr.lng)
      map.panTo(center)
      map.setZoom(12)

      const index = this.markers.current.findIndex(
        (marker) => +marker.props.itemid === this.props.id
      )

      console.log(index)
      console.log(this.markers.current[index])

      if (index > -1) {
        let markerCurrent = this.markers.current[index].marker
        let infowindowCurrent = this.infoWindowOne.current.infowindow
        infowindowCurrent.open(map, markerCurrent)
      }
    }
  }

  render() {
    const { dataFromLeft } = this.props

    return (
      <div className="map_class1">
        <Map
          google={this.props.google}
          zoom={8.3}
          initialCenter={{
            lat: 23.797296,
            lng: 121.03121,
          }}
          containerStyle={containerStyle}
          onReady={this.onMapReady}
        >
          {Locationdata.map((item) => {
            return (
              <Marker
                address={item.address}
                name={item.name}
                position={{ lat: item.lat, lng: item.lng }}
                opentime={item.opentime}
                phone={item.phone}
                email={item.email}
                img={item.img}
                onClick={this.onMarkerClick}
                ref={this.addToRefs}
                itemid={item.id}
              />
            )
          })}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            ref={this.infoWindowOne}
          >
            <div className="Location_infobox">
              <div class="title_and_img">
                <h4>
                  {dataFromLeft
                    ? this.props.name
                    : this.state.selectedPlace.name}
                </h4>
                <div className="photoBox">
                  <img
                    src={
                      dataFromLeft
                        ? this.props.img
                        : this.state.selectedPlace.img
                    }
                  />
                </div>
              </div>

              <p>
                地址:
                {dataFromLeft
                  ? this.props.address
                  : this.state.selectedPlace.address}
              </p>
              <p>
                營業時間 :
                {dataFromLeft
                  ? this.props.opentime
                  : this.state.selectedPlace.opentime}
              </p>
              <p>
                連絡電話 :
                {dataFromLeft
                  ? this.props.phone
                  : this.state.selectedPlace.phone}
              </p>
              <p>
                電子信箱 :
                {dataFromLeft
                  ? this.props.email
                  : this.state.selectedPlace.email}
              </p>

              {/* <Button variant="primary" href={this.state.selectedPlace.path}> */}
              {/* <Button variant="primary" href="http://localhost:3000/motor">
                前往租車
              </Button> */}
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
