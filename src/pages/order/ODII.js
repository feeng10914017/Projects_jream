import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './ODII.scss'
import OrderStep from './components/OrderStep'
function ODII() {
  return (
    <>
      <OrderStep />
      <Card className="col-10">
        <Card.Header>
          <h6>取貨和付款方式</h6>
        </Card.Header>

        <Card.Body>
          <Row>
            <div className="d-flex">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="radio" label="" />
              </Form.Group>

              <p>7-11 取貨付款</p>
            </div>
            <p>
              <span>滿1000元免運費，運費 $0</span>
            </p>
          </Row>
          <div class="line"></div>
          <Row>
            <div className="d-flex">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="radio" label="" />
              </Form.Group>

              <p>全家 取貨付款</p>
            </div>
            <p>
              <span>滿1000元免運費，運費 $0</span>
            </p>
          </Row>
          <div class="line"></div>
          <Row>
            <div className="d-flex">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="radio" label="" />
              </Form.Group>

              <p>信用卡付款</p>
            </div>
            <p>
              <span>滿1000元免運費，運費 $0</span>
            </p>
          </Row>
          <div class="line"></div>
          <Row>
            <div className="d-flex">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="radio" label="" />
              </Form.Group>

              <p>宅配 貨到付款</p>
            </div>
            <p>
              <span>滿1000元免運費，運費 $0</span>
            </p>
          </Row>
        </Card.Body>
      </Card>

      <Row className="justify-content-center col-10">
        <Button className="finalBtn place-center" variant="danger">
          繼續購物
        </Button>
        <Button className="finalBtn place-center" variant="primary">
          下一步
        </Button>
      </Row>
    </>
  )
}

export default ODII
