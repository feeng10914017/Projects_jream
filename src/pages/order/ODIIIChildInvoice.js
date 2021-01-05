import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { AiOutlineLine } from 'react-icons/ai'

function ODIIIChildInvoice() {
  return (
    <>
      {/* 訂購人 */}
      <Card className="col-10">
        <Card.Header>
          <h6>發票類型</h6>
        </Card.Header>
        <Card.Body>
          <div className=" d-flex justify-content-between mb-3">
            <Button variant="outline-light">電子發票 - 個人</Button>
            <Button variant="outline-light">電子發票 - 公司</Button>
            <Button variant="outline-light">捐贈發票</Button>
            <Button variant="outline-light">個人 - 手機條碼載具</Button>
          </div>
          {/* 電子發票 - 個人 */}
          <p className="fontSize14 colorLight">
            依財政部規定，發票已託管，無需開立紙本發票。
          </p>
          {/* 電子發票 - 公司 */}
          <Form.Group as={Row} controlId="formPlaintextPhone">
            <Form.Label column sm="2">
              統一編號
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="請輸入統一編號" />
            </Col>
            <p className="fontSize14 colorDanger">
              根據財政部「電子發票實施作業要點」，於消費開立「三聯電子發票」不主動寄送，lativ亦會將發票號碼上傳至政府平台。
            </p>
          </Form.Group>
          {/* 捐贈發票 */}
          <Form.Group as={Row} controlId="formPlaintextPhone">
            <Form.Label column sm="2">
              捐贈單位
            </Form.Label>
            <Col sm="5">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose123...</option>
                <option>...</option>
              </Form.Control>
            </Col>
          </Form.Group>
          {/* 個人 - 手機條碼載具 */}
          <Form.Row>
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="0"></Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  placeholder="請輸入手機條碼(限大寫英文數字)"
                />
              </Col>
            </Form.Group>
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="0"></Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  placeholder="請再次輸入手機條碼(限大寫英文數字)"
                />
              </Col>
            </Form.Group>
          </Form.Row>
        </Card.Body>
      </Card>
    </>
  )
}
export default ODIIIChildInvoice
