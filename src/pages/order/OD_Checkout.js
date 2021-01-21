import React, { useState, useEffect } from 'react'
import { Row, Card, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import OrderStep from '../../components/order/CartStep'
import GrandTotal from '../../components/order/CheckOut_GrandTotal'

function OD_Checkout() {
  const [checkType, setCheckType] = useState([])
  const [smShow, setSmShow] = useState(false)
  const checkTypeValue = checkType

  const handleChangeChecked = (element) => {
    // console.log(element.target.value)
    const indexValue = []
    indexValue.push(element.target.value)
    // console.log(indexValue)
    setCheckType(indexValue)
  }

  function ReShipping() {
    localStorage.setItem('shipping', '[]')
  }
  useEffect(() => {
    ReShipping()
  }, [])

  function nextBtn() {
    // console.log('localStorage', localStorage.getItem('shipping'))
    localStorage.getItem('shipping') === '[]' && setSmShow(true)
  }

  useEffect(() => {
    localStorage.setItem('shipping', JSON.stringify(checkTypeValue))
  }, [checkTypeValue])

  // console.log(checkTypeValue)

  const display = (
    <>
      <article className="col-10 payAndInvoiceChose">
        <OrderStep step="2" />
        <Card>
          <Card.Header>
            <h6>取貨和付款方式</h6>
          </Card.Header>

          <Card.Body className="invoiceChose">
            <Form>
              <Form.Group as={Row} reqire="true">
                {/* <Form.Label></Form.Label> */}
                <Row>
                  <Form.Check
                    type="radio"
                    label="7-11 取貨付款"
                    name="invoice"
                    id="seven"
                    value="seven"
                    onClick={handleChangeChecked}
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
                    value="family"
                    onClick={handleChangeChecked}
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
                    value="credit"
                    onClick={handleChangeChecked}
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
                    value="delivery"
                    onClick={handleChangeChecked}
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

        {/* Modal */}
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">提醒</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>請選擇您的「付款」與「貨運方式」</p>
          </Modal.Body>
        </Modal>

        {/* Button */}
        <Row className="justify-content-center col-10 finalBtnParent">
          <Link to="/order">
            <Button className="finalBtn place-center" variant="danger">
              返回購物車
            </Button>
          </Link>

          <Link
            to={() => {
              switch (checkTypeValue[0]) {
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
              onClick={() => nextBtn()}
            >
              下一步
            </Button>
          </Link>
        </Row>
        <Button onClick={() => setSmShow(true)}>Small modal</Button>
      </article>
    </>
  )

  return <>{display}</>
}

export default OD_Checkout
