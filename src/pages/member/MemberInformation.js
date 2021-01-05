import React from 'react'
import { withRouter } from 'react-router-dom'
import MemberNav from '../../components/MemberNav'
import { Form, Col, Row, Modal } from 'react-bootstrap'

function Information(props) {
  const { isAuth } = props
  return (
    <>
      <MemberNav />
      <Modal.Dialog>
        <Form
          style={{
            margin: '0 auto',
            marginTop: '80px',
            padding: 0,
            // min-width: 500px,
            maxwidth: '600px',
            width: '350px',
          }}
        >
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Dialog>
      <button onClick={() => props.history.push('/member')}>回首頁</button>
    </>
  )
}

export default withRouter(Information)
