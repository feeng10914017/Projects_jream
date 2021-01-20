import React, { useState } from 'react'
import Google from './GoogleAPI'
import { Button } from 'react-bootstrap'
import './Location.css'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { Locationdata } from './data/locationdata.js'

function Location() {
  const [item, setItem] = useState({
    id: 0,
    name: '',
    lat: 23.797296,
    lng: 121.03121,
    address: '',
    opentime: '',
  })
  const [dataFromLeft, setDataFromLeft] = useState(true)

  return (
    <div className="d-flex">
      <div
        className="width_1 nopadding border flexSrink_0"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        {' '}
        <div className="SearchingBox border">
          <Row>
            <ul className="SearchingPlace">
              <Form.Control
                className="searchingInp border "
                type="text"
                placeholder="據點搜尋"
              />

              <Form.Control
                className="searchingInp border "
                as="select"
                defaultValue="Choose"
              >
                {Locationdata.map((location, index) => {
                  return <option>{location.city}</option>
                })}
              </Form.Control>
            </ul>
            <Button size="lg" variant="primary" className="SearchingBtn ">
              Search
            </Button>
          </Row>
        </div>
        <nav className="L_nav-menu ">
          <ul className="nopadding">
            {Locationdata.map((location, index) => {
              return (
                <li key={index}>
                  <div className="Location_item">
                    <div className="photoBox">
                      <img src={location.img} alt="Product" />
                    </div>
                    <h5>{location.name}</h5>
                    <div className="address fontSize14">門市地址</div>
                    <div className="time fontSize14">營業時間</div>
                    <div className="phone fontSize14">連絡電話</div>
                    <div className="addressA fontSize14">
                      {location.address}
                    </div>
                    <div className="timeA fontSize14">{location.opentime}</div>
                    <div className="phoneA fontSize14">{location.phone}</div>

                    <Button
                      variant="primary"
                      onClick={() => {
                        setItem(location)
                        setDataFromLeft(true)
                      }}
                    >
                      詳細資訊
                    </Button>
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div
        className="width_2 nopadding"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <Google
          currentLocation={{ lat: item.lat, lng: item.lng }}
          id={item.id}
          name={item.name}
          address={item.address}
          opentime={item.opentime}
          phone={item.phone}
          img={item.img}
          dataFromLeft={dataFromLeft}
          setDataFromLeft={setDataFromLeft}
        />
      </div>
    </div>
  )
}

export default Location
