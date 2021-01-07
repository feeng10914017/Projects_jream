import React, { useState, useEffect } from 'react'
import { Row, Form, Card } from 'react-bootstrap'
import LeaseImg1 from '../images/7418807_R-removebg-preview.png'

function OD_CartProduct() {
  return (
    <>
      <Card.Body>
        <div className="lease">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="" />
          </Form.Group>
          <div className="cardContent">
            <Row>
              <div className="col-2 motorImage">
                <img src={LeaseImg1} />
              </div>
              <p className="col-4">
                BENKIA 摩托車防水秋冬防摔衣 黑 女款 騎行服 防摔衣 秋冬款
                HDF-JD-W149
              </p>
              <p className="col-2">
                <Form.Group controlId="formGridState">
                  <Form.Label></Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>xxl</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </p>
              <p className="col-2">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="number" placeholder="1" />
                </Form.Group>
              </p>
              <h6 className="col-2">$1000</h6>
            </Row>
          </div>
        </div>
      </Card.Body>
    </>
  )
}

export default OD_CartProduct
