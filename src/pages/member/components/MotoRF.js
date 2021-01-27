import React, { useState } from 'react'
import { ListGroup, Button, Modal, Row, Col } from 'react-bootstrap'
import Moto from '../images/159983596847-removebg-preview.png'
import '../member.scss'

function MyVerticallyCenteredModal(
  props,
  {
    serialNumber = 'MC202101512546953214',
    oldDate = '2020/12/22 08:00:00',
    rentalPrice = '1000',
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
            {/* <div className="line"></div> */}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單日期</p>
              </Col>
              <Col lg={8}>
                <p>{oldDate}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單狀態</p>
              </Col>
              <Col lg={8}>
                <p>待領車</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單金額</p>
              </Col>
              <Col lg={8}>
                <p>NT$ {rentalPrice}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
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
            {/* <div className="line"></div> */}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>付款卡號</p>
              </Col>
              <Col lg={8}>
                <p>{cardNumber}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>發票類型</p>
              </Col>
              <Col lg={8}>
                <p>{invoiceTitle}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>捐贈單位</p>
              </Col>
              <Col lg={8}>
                <p>{invoiceTitle1}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col lg={2}>
                <p>租賃車種</p>
              </Col>
              <Row>
                <Col lg={12}>
                  <p>{company}</p>
                </Col>
              </Row>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>取車地點</p>
              </Col>
              <Col lg={8}>
                <p>{rentalLocation}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>還車地點</p>
              </Col>
              <Col lg={8}>
                <p>{returnLocation}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>取車日期</p>
              </Col>
              <Col lg={8}>
                <p>{rentalDate}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>還車日期</p>
              </Col>
              <Col lg={8}>
                <p>{returnDate}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>取車時間</p>
              </Col>
              <Col lg={8}>
                <p>{rentalTime}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>還車時間</p>
              </Col>
              <Col lg={8}>
                <p>{returnTime}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function MotoR({
  img = '',
  rentnumbering = 'MC202101512546953214',
  time = '2020/12/25 08:00:00',
  statusS = '租賃完成',
  status = '預約完成',
}) {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <ListGroup.Item>
        <td className="A-MotoRImg">
          <img src={Moto} alt="Moto" />
        </td>
        <td className="A-MotoRNum">
          <p>{rentnumbering}</p>
        </td>
        <td className="A-MotoTime">
          <p>{time}</p>
        </td>
        <td className="A-MotoStatus">
          <p>{statusS}</p>
        </td>
        <td className="A-MotoRButton">
          <Button onClick={() => setModalShow(true)}>租賃細節</Button>
        </td>
      </ListGroup.Item>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
export default MotoR
