import React from 'react'
import Google from './GoogleAPI'
import { Button } from 'react-bootstrap'

import './Location.css'

import { Row, Col, Card, Form } from 'react-bootstrap'

function Location() {
  return (
    <Row>
      <div className="col-3 nopadding" style={{ height: 'calc(100vh - 80px)' }}>
        {' '}
        <div className="SearchingBox">
          <Row>
            <ul>
              <input
                type="text"
                id="myInput"
                onkeyup="myFunction()"
                placeholder="Search for names.."
                className=""
              />

              <Form.Control as="select">
                <option>Default select</option>
              </Form.Control>
            </ul>
            <Button variant="primary" className="SearchingBtn">
              Search
            </Button>
          </Row>
        </div>
        <div>
          <ul>
            <li>120333</li>
            <li>120333</li>
            <li>120333</li>
            <li>120333</li>
            <li>120333</li>
            <li>120333</li>
            <li>120333</li>
            <li>120333</li>
            <li>120333</li>
          </ul>
        </div>
      </div>

      <div className="col-9 nopadding">
        <Google />
      </div>
    </Row>
  )
}

export default Location
