import React, { useState } from 'react'
import Google from './GoogleAPI'
import { Button } from 'react-bootstrap'
import './Location.css'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { Locationdata } from './data/locationdata.js'

function Location() {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

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
                <option selected>全部</option>
                <option>台北市</option>
                <option>新北市</option>
                <option>桃園市</option>
                <option>新竹市</option>
              </Form.Control>
            </ul>
            <Button size="lg" variant="primary" className="SearchingBtn ">
              Search
            </Button>
          </Row>
        </div>
        <nav className="nav-menu ">
          <ul className="nopadding">
            {Locationdata.map((item, index) => {
              return (
                <li key={index}>
                  <div className="Location_item">
                    <div className="photoBox">
                      <img src={item.img} alt="Product" />
                    </div>
                    <h5>{item.name}</h5>
                    <div className="address fontSize14">門市地址</div>
                    <div className="time fontSize14">營業時間</div>
                    <div className="phone fontSize14">連絡電話</div>
                    <div className="addressA fontSize14">{item.address}</div>
                    <div className="timeA fontSize14">{item.opentime}</div>
                    <div className="phoneA fontSize14">{item.phone}</div>

                    <Button
                      variant="primary"
                      onClick={() => {
                        setLat(item.lat)
                        setLng(item.lng)
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
        <Google currentLocation={{ lat, lng }} />
      </div>
    </div>
  )
}

export default Location
