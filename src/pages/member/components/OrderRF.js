import React from 'react'
import { ListGroup, Button, Modal, Col, Row } from 'react-bootstrap'
import Product from '../images/7418807_R-removebg-preview.png'

import '../member.scss'
function MyVerticallyCenteredModal(
  props,
  {
    serialNumber = 'MC202101512546953214',
    orderTime = '2020/12/22 08:00:00',
    price = '1000',
    cardNumber = '123445677890',
    company = 'Ninja 400',
    rentalLocation = '台北濱江店',
    returnLocation = '台北濱江店',
    rentalDate = '2020/12/25',
    returnDate = '2020/12/26',
    rentalTime = '08:00:00',
    returnTime = '16:00:00',
    invoiceTitle = '捐贈發票',
    invoiceTitle1 = '喜憨兒社會福利基金會',
    recipientAdd = '新北市新莊區瓊林南路23號',
    userName = '黃尚義',
    userPhone = '09151515151',
    userComment = '輕放謝謝',
    invoiceTitle2 = '捐贈發票',
    invoiceTitle3 = '喜憨兒社會福利基金會',
  }
) {
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
                <p>{serialNumber}</p>
              </Col>
            </Row>
          </Col>
          {/* <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單日期</p>
              </Col>
              <Col lg={8}>
                <p>{orderTime}</p>
              </Col>
            </Row>
          </Col> */}
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
                <p>NT$ {price}</p>
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
                <p>信用卡</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>配送方式</p>
              </Col>
              <Col lg={8}>
                <p>宅配到府</p>
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
                <p>{invoiceTitle2}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>捐贈單位</p>
              </Col>
              <Col lg={8}>
                <p>{invoiceTitle3}</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂購人</p>
              </Col>
              <Col lg={8}>
                <p>{userName}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>手機號碼</p>
              </Col>
              <Col lg={8}>
                <p>{userPhone}</p>
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
                <p>{userName}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>手機號碼</p>
              </Col>
              <Col lg={8}>
                <p>{userPhone}</p>
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
                <p>{recipientAdd}</p>
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
                <p>{userComment}</p>
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
function OrderR({
  img = '',
  productName = 'LS2 Metro Evo FF324 Rapid 2019摩托車頭盔',
  itemName = '聯名款',
  time = '2021/01/07',
  price = '$19000',
  statusS = '訂單已完成',
  status = '訂單已完成',
}) {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <ListGroup.Item>
        <td className="A-OrderRImg">
          <img src={Product} alt="Product" />
        </td>
        <td className="A-OrderRP1">
          <p>{productName}</p>
          <p className="A-OrderRP2">{itemName}</p>
        </td>
        <td className="A-OrderRTime">
          <p>{time}</p>
        </td>
        <td className="A-OrderRPrice">
          <p>{price}</p>
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
