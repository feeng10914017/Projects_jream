import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { AiOutlineLine } from 'react-icons/ai'

function ODIIIChildCredit() {
  return (
    <>
      <Card className="col-10">
        <Card.Header>
          <h6>信用卡付款</h6>
        </Card.Header>

        <Card.Body>
          <Form.Group as={Row} controlId="formPlaintextPhone">
            <Form.Label column sm="2">
              信用卡卡號
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="限使用台灣核發之信用卡" />
            </Col>
          </Form.Group>
          <div class="line"></div>
          <Form.Row className="wrap">
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="4">
                有效期限
              </Form.Label>
              <Col sm="3">
                <Form.Control type="text" placeholder="MM" />
              </Col>
              <Col sm="2" className="creditLine">
                <AiOutlineLine size="32" color="#CACACA" />
              </Col>
              <Col sm="3">
                <Form.Control type="text" placeholder="YY" />
              </Col>
            </Form.Group>
            <AiOutlineLine className="localLine" size="32" color="#CACACA" />
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="4">
                背面末三碼
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="信用卡背面末三碼" />
              </Col>
            </Form.Group>
          </Form.Row>
          <div class="line"></div>
          <p class="Caption">
            ※
            提供VISA丶MasterCard丶JCB信用卡交易，全程使用安全加密，信用卡資料將不會儲存於網站，您可以安心使用信用卡付款。
          </p>
        </Card.Body>
      </Card>
    </>
  )
}

export default ODIIIChildCredit
