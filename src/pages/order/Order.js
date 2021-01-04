import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import LeaseImg from './images/Leoncino_250_gray.jpg'

import './orderStepOne.scss'
import OrderStep from './OrderStep'
function Order() {
  return (
    <>
      <OrderStep />
      <Card>
        <Card.Header>
          <Nav fill variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#motor">
                <p>重機租賃</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#produc">
                <p>周邊商品</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body id="motor">
          <div class="lease">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="" />
            </Form.Group>
            <div class="cardContent">
              <Row>
                <div class="col-3 motorImage">
                  <img src={LeaseImg} />
                </div>
                <p class="col-2">SUZUKI</p>
                <p class="col-2">GSX - S1000S</p>
                <p class="col-2">BROWN</p>
                <h6 class="col-3">$1000</h6>
              </Row>
              <hr />
              <Row>
                <p class="col-3">取車地點</p>
                <p class="col-3">台北濱江店</p>
                <p class="col-3">還車地點</p>
                <p class="col-3">台北濱江店</p>
              </Row>
              <Row>
                <p class="col-3">取車日期</p>
                <p class="col-3">2020/12/19</p>
                <p class="col-3">還車日期</p>
                <p class="col-3">2020/12/20</p>
              </Row>
              <Row>
                <p class="col-3">取車時間</p>
                <p class="col-3">13:15</p>
                <p class="col-3">還車時間</p>
                <p class="col-3">09:15</p>
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Button className="test" variant="primary">
        Go somewhere
      </Button>
    </>
  )
}

export default Order
