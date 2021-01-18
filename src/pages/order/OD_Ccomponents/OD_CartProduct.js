import React, { useState, useEffect, useReducer } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import {
  Row,
  Col,
  Form,
  Card,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import $ from 'jquery'
function OD_CartProduct(props) {
  const e = props.data
  const index = props.index
  const sizesOption = []
  for (let i = 0; i < e.sizes.length; i++) {
    sizesOption.push(<option>{e.sizes[i]}</option>)
  }
  const colorsOption = []
  for (let i = 0; i < e.colors.length; i++) {
    colorsOption.push(<option>{e.colors[i]}</option>)
  }
  function plusBtn() {
    const number = e.cound + 1
    reactLocalStorage.setObject()
  }
  const display = (
    <>
      <div id={'clickEvent' + index}>
        <Card.Body>
          <Form.Group controlId={'checkBoxProduct' + index} className="lease">
            <div>
              <Form.Control type="checkbox" />
            </div>
            <Form.Label>
              <Row>
                <Col lg={1} md={4} className="motorImage">
                  <img src={e.images} alt="" />
                </Col>
                <Col lg={11} md={8} className="px-0">
                  <Row>
                    <Col lg={4} className="productTitle">
                      <Row>
                        <p>{e.title}</p>

                        <Button className="px-1 d-flex align-items-center">
                          <IoCloseSharp />
                        </Button>
                      </Row>
                    </Col>

                    <Col lg={2}>
                      <Form.Control as="select" defaultValue={e.color}>
                        {colorsOption}
                      </Form.Control>
                    </Col>

                    <Col lg={2}>
                      <Form.Control as="select" defaultValue={e.size}>
                        {sizesOption}
                      </Form.Control>
                    </Col>
                    <Col lg={2}>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <Button
                            variant="outline-primary"
                            className="px-1 d-flex align-items-center"
                            id="plus"
                            onClic={plusBtn}
                          >
                            <AiOutlinePlus />
                          </Button>
                        </InputGroup.Prepend>
                        <FormControl
                          value={e.count}
                          readOnly
                          className="text-right inputAmount"
                        />
                        <InputGroup.Append>
                          <Button
                            variant="outline-primary"
                            className="px-1 d-flex align-items-center"
                            id="minus"
                          >
                            <AiOutlineMinus />
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                    <Col lg={2}>
                      <h6>$ {e.price * e.count}</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Label>
          </Form.Group>
        </Card.Body>
      </div>
    </>
  )
  return <>{display}</>
}

export default OD_CartProduct
