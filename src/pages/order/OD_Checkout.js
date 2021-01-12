import React, { useState, useEffect } from 'react'
import { Row, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './OD.scss'
import OrderStep from './OD_Ccomponents/OD_Step'
import GrandTotal from './OD_Ccomponents/OD_GrandTotal'

function OD_Checkout() {
  const [checkType, setCheckType] = useState('')
  return (
    <>
      <article className="col-10">
        <OrderStep step="2" />
        <Card>
          <Card.Header>
            <h6>取貨和付款方式</h6>
          </Card.Header>

          <Card.Body className="invoiceChose">
            <Form>
              <Form.Group as={Row} reqire>
                <Form.Label></Form.Label>

                <Row>
                  <Form.Check
                    type="radio"
                    label="7-11 取貨付款"
                    name="invoice"
                    id="seven"
                  />
                  <p>
                    <span>滿1000元免運費，運費 $0</span>
                  </p>
                </Row>
                <div className="line"></div>
                <Row>
                  <Form.Check
                    type="radio"
                    label="全家 取貨付款"
                    name="invoice"
                    id="family"
                  />
                  <p>
                    <span>滿1000元免運費，運費 $0</span>
                  </p>
                </Row>
                <div className="line"></div>
                <Row>
                  <Form.Check
                    type="radio"
                    label="信用卡付款"
                    name="invoice"
                    id="credit"
                    onClick={() => {
                      setCheckType('credit')
                    }}
                  />
                  <p>
                    <span>滿1000元免運費，運費 $0</span>
                  </p>
                </Row>
                <div className="line"></div>
                <Row>
                  <Form.Check
                    type="radio"
                    label="宅配 貨到付款"
                    name="invoice"
                    id="delivery"
                    onClick={() => {
                      setCheckType('delivery')
                    }}
                  />
                  <p>
                    <span>滿1000元免運費，運費 $0</span>
                  </p>
                </Row>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        {/* <GrandTotal /> */}

        {/* Button */}
        <Row className="justify-content-center col-10 finalBtnParent">
          <Link to="/order">
            <Button className="finalBtn place-center" variant="danger">
              返回購物車
            </Button>
          </Link>
          <Link
            to={() => {
              switch (checkType) {
                case 'credit':
                  return '/order/CreditCard'
                case 'delivery':
                  return '/order/HomeDelivery'
                default:
                  return
              }
            }}
          >
            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
            >
              下一步
            </Button>
          </Link>
        </Row>
      </article>
    </>
  )
}

export default OD_Checkout
