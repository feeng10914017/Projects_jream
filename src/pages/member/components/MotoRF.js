import React, { useState } from 'react'
import { ListGroup, Button, Modal } from 'react-bootstrap'
import Moto from '../images/159983596847-removebg-preview.png'
import '../member.scss'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
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
