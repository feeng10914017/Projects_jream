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
  const step = props.step
  const sizeList = []
  for (let i = 0; i < e.sizeOptions.length; i++) {
    sizeList.push(<option value={e.sizeOptions[i]}>{e.sizeOptions[i]}</option>)
  }

  const handleChangeSize = (element) => {
    // console.log(element.target.value)
    props.updateCartSizeToLocalStorage(e, element.target.value)
  }
  const handleChangeChecked = (element) => {
    // console.log(element.target.checked)
    props.checkedItem(e, element.target.checked, index)
  }

  const display = (
    <>
      <div id={'clickEvent' + index}>
        <Card.Body>
          <Form.Group controlId={'checkBoxProduct' + index} className="lease">
            <div>
              <Form.Control type="checkbox" onChange={handleChangeChecked} />
            </div>
            <Form.Label>
              <Row>
                <Col lg={1} md={4} className="motorImage">
                  <img src={e.img} alt="" />
                </Col>
                <Col lg={11} md={8} className="px-0">
                  <Row>
                    <Col lg={3} className="productTitle">
                      <Row>
                        <p>{e.name}</p>
                      </Row>
                    </Col>

                    <Col lg={2}>
                      <p>{e.color}</p>
                    </Col>

                    <Col lg={2}>
                      <Form.Control
                        as="select"
                        defaultValue={e.size}
                        onChange={handleChangeSize}
                      >
                        {sizeList}
                      </Form.Control>
                    </Col>
                    <Col lg={2}>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <Button
                            variant="outline-primary"
                            className="px-1 d-flex align-items-center"
                            onClick={() =>
                              props.updateCartAmountToLocalStorage(e, true)
                            }
                          >
                            <AiOutlinePlus />
                          </Button>
                        </InputGroup.Prepend>
                        <FormControl
                          value={e.amount}
                          readOnly
                          className="text-right inputAmount"
                        />
                        <InputGroup.Append>
                          <Button
                            variant="outline-primary"
                            className="px-1 d-flex align-items-center"
                            onClick={() => {
                              if (e.amount === 1) return
                              props.updateCartAmountToLocalStorage(e, false)
                            }}
                          >
                            <AiOutlineMinus />
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                    <Col lg={2}>
                      <h6>$ {e.price * e.amount}</h6>
                    </Col>
                    <Col lg={1}>
                      <Button
                        className="px-1 d-flex align-items-center"
                        onClick={() => props.deletItemToLocalStorage(e)}
                      >
                        <IoCloseSharp />
                      </Button>
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
  const finalDisplay = (
    <>
      <div id={'clickEvent' + index}>
        <Card.Body className="lease">
          <Form.Label>
            <Row>
              <Col lg={2} md={4} className="motorImage">
                <img src={e.img} alt="" />
              </Col>
              <Col lg={10} md={8} className="px-0">
                <Row>
                  <Col lg={4} className="productTitle">
                    <Row>
                      <p>{e.name}</p>
                    </Row>
                  </Col>
                  <Col lg={2}>
                    <p>{e.color}</p>
                  </Col>
                  <Col lg={2}>
                    <p>{e.size}</p>
                  </Col>
                  <Col lg={2}>
                    <p>{e.amount}</p>
                  </Col>
                  <Col lg={2}>
                    <h6>$ {e.price * e.amount}</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form.Label>
        </Card.Body>
      </div>
    </>
  )
  return <>{step === '3' ? finalDisplay : display}</>
}

export default OD_CartProduct
