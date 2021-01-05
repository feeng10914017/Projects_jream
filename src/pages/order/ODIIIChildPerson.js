import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { AiOutlineLine } from 'react-icons/ai'

function ODIIIChildPerson() {
  return (
    <>
      {/* 訂購人 */}
      <Card className="col-10">
        <Card.Header>
          <h6>訂購人資訊</h6>
        </Card.Header>
        <Card.Body>
          <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="2">
              姓名
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入姓名" />
            </Col>
          </Form.Group>
          <div class="line"></div>
          <Form.Group as={Row} controlId="formPlaintextPhone">
            <Form.Label column sm="2">
              手機號碼
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入手機號碼" />
            </Col>
          </Form.Group>
          <div class="line"></div>
          <Form.Row>
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="4">
                請選擇縣市
              </Form.Label>
              <Col sm="8">
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose123...</option>
                  <option>...</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <AiOutlineLine className="localLine" size="32" color="#CACACA" />
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="4">
                請選擇地區
              </Form.Label>
              <Col sm="8">
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Form.Row>
          <div class="line"></div>
          <Form.Group as={Row} controlId="formPlaintextAdd">
            <Form.Label></Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="請輸入地址" />
            </Col>
          </Form.Group>
          <div class="line"></div>
          <Form.Group as={Row} controlId="formPlaintextPS">
            <Form.Label column sm="2">
              收件備註
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="司機大哥謝謝你~" />
            </Col>
          </Form.Group>
        </Card.Body>
      </Card>

      {/* 收件人 */}
      <Card className="col-10">
        <Card.Header>
          <h6>收件人資訊</h6>
        </Card.Header>
        <Card.Body>
          <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="2">
              姓名
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入姓名" />
            </Col>
          </Form.Group>
          <div class="line"></div>
          <Form.Group as={Row} controlId="formPlaintextPhone">
            <Form.Label column sm="2">
              手機號碼
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入手機號碼" />
            </Col>
          </Form.Group>
          <div class="line"></div>
          <Form.Row>
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="4">
                請選擇縣市
              </Form.Label>
              <Col sm="8">
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <AiOutlineLine className="localLine" size="32" color="#CACACA" />
            <Form.Group
              className="col-6"
              as={Row}
              controlId="formPlaintextPhone"
            >
              <Form.Label column sm="4">
                請選擇地區
              </Form.Label>
              <Col sm="8">
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Form.Row>
          <div class="line"></div>
          <Form.Group as={Row} controlId="formPlaintextAdd">
            <Form.Label></Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="請輸入地址" />
            </Col>
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  )
}
export default ODIIIChildPerson
