import React, { useState, useEffect } from 'react'
import { ListGroup, Button, Modal, Col, Row } from 'react-bootstrap'
import Product from '../images/7418807_R-removebg-preview.png'

import '../member.scss'
function MyVerticallyCenteredModal(props) {
  const [CartOrder, setCartOrder] = useState(
    JSON.parse(localStorage.getItem('CartOrder'))
  )
  const [credit, setCredit] = useState('')
  const finalProductCart = CartOrder.finalProductCart[0]
  function CreditHidden(value) {
    const Value1 = value.slice(0, 4)
    const Value2 = value.slice(12, 16)
    return Value1 + ' xxxx xxxx ' + Value2
  }
  const aa = <></>
  const bb = (
    <>
      <Col lg={6}>
        <Row>
          <Col lg={4}>
            <p>統一編號</p>
          </Col>
          <Col lg={8}>
            <p>{CartOrder.invoiceValue1}</p>
          </Col>
        </Row>
      </Col>
    </>
  )
  const cc = (
    <>
      <Col lg={6}>
        <Row>
          <Col lg={4}>
            <p>捐贈單位</p>
          </Col>
          <Col lg={8}>
            <p>{CartOrder.invoiceValue1}</p>
          </Col>
        </Row>
      </Col>
    </>
  )
  const dd = (
    <>
      <Col lg={6}>
        <Row>
          <Col lg={4}>
            <p>條碼載具</p>
          </Col>
          <Col lg={8}>
            <p>{CartOrder.invoiceValue1}</p>
          </Col>
        </Row>
      </Col>
    </>
  )
  useEffect(() => {
    setCredit(CreditHidden(CartOrder.cardNumber))
  })
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">訂單詳情</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單編號</p>
              </Col>
              <Col lg={8}>
                <p>{CartOrder.serialNumber}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單狀態</p>
              </Col>
              <Col lg={8}>
                <p>待出貨</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單金額</p>
              </Col>
              <Col lg={8}>
                <p>NT$ {finalProductCart.price}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>付款方式</p>
              </Col>
              <Col lg={8}>
                <p>
                  {CartOrder.shipping === 'delivery' ? '貨到付款' : '信用卡'}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>發票類型</p>
              </Col>
              <Col lg={8}>
                <p>{CartOrder.invoiceTitle}</p>
              </Col>
            </Row>
          </Col>
          {CartOrder.invoiceTitle === '電子發票 - 個人' && aa}
          {CartOrder.invoiceTitle === '電子發票 - 公司' && bb}
          {CartOrder.invoiceTitle === '捐贈發票' && cc}
          {CartOrder.invoiceTitle === '個人 - 手機條碼載具' && dd}
        </Row>

        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂購人</p>
              </Col>
              <Col lg={8}>
                <p>{CartOrder.userName}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>手機號碼</p>
              </Col>
              <Col lg={8}>
                <p>{CartOrder.userPhone}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>收件人</p>
              </Col>
              <Col lg={8}>
                <p>{CartOrder.recipientName}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>手機號碼</p>
              </Col>
              <Col lg={8}>
                <p>{CartOrder.recipientPhone}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col lg={2}>
                <p>收件地址</p>
              </Col>
              <Col lg={10}>
                <p>{CartOrder.finalRecipientAdd}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col lg={2}>
                <p>收件備註</p>
              </Col>
              <Col lg={10}>
                <p>{CartOrder.userComment}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
function OrderR({ status = '訂單已成立' }) {
  const [modalShow, setModalShow] = React.useState(false)
  const [CartOrder, setCartOrder] = useState(
    JSON.parse(localStorage.getItem('CartOrder'))
  )
  const finalProductCart = CartOrder.finalProductCart[0]
  return (
    <>
      <ListGroup.Item>
        <td className="A-OrderRImg">
          <img src={finalProductCart.img} alt="Product" />
        </td>
        <td className="A-OrderRP1">
          <p>{finalProductCart.name}</p>
          <p className="A-OrderRP2">{finalProductCart.color}</p>
        </td>
        <td className="A-OrderRTime">
          <p>{CartOrder.oldDate}</p>
        </td>
        <td className="A-OrderRPrice">
          <p>{finalProductCart.price}</p>
        </td>
        <td className="A-OrderRStatus">
          <p>{status}</p>
        </td>
        <td className="A-OrderRButton">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            查看訂單
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </td>
      </ListGroup.Item>
    </>
  )
}

export default OrderR
