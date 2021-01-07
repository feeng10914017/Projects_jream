import React, { useState, useEffect } from 'react'
import { Row, Form, Card } from 'react-bootstrap'
import LeaseImg from '../images/Leoncino_250_gray.jpg'

function OD_CartMotor() {
  return (
    <>
      <Card.Body>
        <div className="lease">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="" />
          </Form.Group>
          <div className="cardContent">
            <Row>
              <div className="col-3 motorImage">
                <img src={LeaseImg} />
              </div>
              <p className="col-2">SUZUKI</p>
              <p className="col-3">GSX - S1000S</p>
              <p className="col-2">BROWN</p>
              <h6 className="col-2">$1000</h6>
            </Row>
            <hr />
            <Row>
              <p className="col-3">取車地點</p>
              <p className="col-3">台北濱江店</p>
              <p className="col-3">還車地點</p>
              <p className="col-3">台北濱江店</p>
            </Row>
            <Row>
              <p className="col-3">取車日期</p>
              <p className="col-3">2020/12/19</p>
              <p className="col-3">還車日期</p>
              <p className="col-3">2020/12/20</p>
            </Row>
            <Row>
              <p className="col-3">取車時間</p>
              <p className="col-3">13:15</p>
              <p className="col-3">還車時間</p>
              <p className="col-3">09:15</p>
            </Row>
          </div>
        </div>
      </Card.Body>
    </>
  )
}

export default OD_CartMotor
