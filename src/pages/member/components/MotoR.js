import React, { useState } from 'react'
import { ListGroup, Button, Modal, Col, Row } from 'react-bootstrap'
import Moto from '../images/159983596847-removebg-preview.png'
import '../member.scss'

function MyVerticallyCenteredModal(props) {
  const [rentData, setRentData] = useState(
    JSON.parse(localStorage.getItem('rentalOrder'))
  )
  const motorCart = rentData.motorCart[0]
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
                <p>{rentData.serialNumber}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單日期</p>
              </Col>
              <Col lg={8}>
                <p>{motorCart.orderTime}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
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
            {/* <div className="line"></div> */}{' '}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>訂單金額</p>
              </Col>
              <Col lg={8}>
                <p>NT$ {motorCart.rentalPrice}</p>
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
            {/* <div className="line"></div> */}{' '}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>付款卡號</p>
              </Col>
              <Col lg={8}>
                <p>{rentData.cardNumber}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
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
                  <p>
                    {motorCart.company} {motorCart.model} {motorCart.color}
                  </p>
                </Col>
              </Row>
            </Row>
            {/* <div className="line"></div> */}{' '}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>取車地點</p>
              </Col>
              <Col lg={8}>
                <p>{motorCart.rentalLocation}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>還車地點</p>
              </Col>
              <Col lg={8}>
                <p>{motorCart.returnLocation}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>取車日期</p>
              </Col>
              <Col lg={8}>
                <p>{motorCart.rentalDate}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>還車日期</p>
              </Col>
              <Col lg={8}>
                <p>{motorCart.returnDate}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>取車時間</p>
              </Col>
              <Col lg={8}>
                <p>{motorCart.rentalTime}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <p>還車時間</p>
              </Col>
              <Col lg={8}>
                <p>{motorCart.returnTime}</p>
              </Col>
            </Row>
            {/* <div className="line"></div> */}{' '}
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
  rentnumbering = '20210107001',
  time = '2021/01/07 12:00:00',
  statusS = '訂單已完成',
  status = '預約完成',
}) {
  const [modalShow, setModalShow] = React.useState(false)
  const [rentData, setRentData] = useState(
    JSON.parse(localStorage.getItem('rentalOrder'))
  )
  const motorCart = rentData.motorCart[0]
  return (
    <>
      <ListGroup.Item>
        <td className="A-MotoRImg">
          {/* <img
            src={'http://localhost:3000/images/motor/smail_img/' + motorCart.img}
            alt="Moto"
          /> */}
          <img
            src={'http://localhost:3000/images/motor/' + motorCart.img}
            alt="Moto"
          />
        </td>
        <td className="A-MotoRNum">
          <p>{rentData.serialNumber}</p>
        </td>
        <td className="A-MotoTime">
          <p>
            {motorCart.rentalDate} {motorCart.rentalTime}
          </p>
        </td>
        <td className="A-MotoStatus">
          <p>{status}</p>
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
