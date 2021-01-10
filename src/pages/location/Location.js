import React from 'react'
import Google from './GoogleAPI'
import { Button } from 'react-bootstrap'

import './Location.css'
import { Row, Col, Card, Form } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'

function Location() {
  return (
    <Row>
      <div
        className="col-3 nopadding border"
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
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
            <li>
              <div className="Location_item"></div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="col-9 nopadding" style={{ height: 'calc(100vh - 80px)' }}>
        <Google />
      </div>
    </Row>
  )
}

export default Location
