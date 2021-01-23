import React, { useState, useEffect, useReducer } from 'react'
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
  const productData = props.data

  const display = (
    <>
      <div id="clickEvent">
        {productData.length > 0 ? (
          productData.map((v, index) => {
            const initialState = v.count
            const reducer = (state, aciton) => {
              switch (aciton) {
                case 'increment':
                  return state + 1
                case 'decrement':
                  return state === 1 ? state : state - 1
                default:
                  return state
              }
            }
            const sizesOption = []
            for (let i = 0; i < v.sizes.length; i++) {
              sizesOption.push(<option>{v.sizes[i]}</option>)
            }
            const colorsOption = []
            for (let i = 0; i < v.colors.length; i++) {
              colorsOption.push(<option>{v.colors[i]}</option>)
            }
            const [count, dispatch] = useReducer(reducer, initialState)
            return (
              <>
                <Card.Body key={index}>
                  <Form.Group
                    controlId={'checkBoxProduct' + v._id}
                    className="lease"
                  >
                    <div>
                      <Form.Control type="checkbox" />
                    </div>
                    <Form.Label>
                      <Row>
                        <Col lg={1} md={4} className="motorImage">
                          <img src={v.images} alt="" />
                        </Col>
                        <Col lg={11} md={8} className="px-0">
                          <Row>
                            <Col lg={4} className="productTitle">
                              <Row>
                                <p>{v.title}</p>

                                <Button className="px-1 d-flex align-items-center">
                                  <IoCloseSharp />
                                </Button>
                              </Row>
                            </Col>

                            <Col lg={2}>
                              <Form.Control as="select" defaultValue={v.color}>
                                {colorsOption}
                              </Form.Control>
                            </Col>

                            <Col lg={2}>
                              <Form.Control as="select" defaultValue={v.size}>
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
                                    onClick={() => {
                                      dispatch('increment')
                                    }}
                                  >
                                    <AiOutlinePlus />
                                  </Button>
                                </InputGroup.Prepend>
                                <FormControl
                                  value={count}
                                  readOnly
                                  className="text-right inputAmount"
                                />
                                <InputGroup.Append>
                                  <Button
                                    variant="outline-primary"
                                    className="px-1 d-flex align-items-center"
                                    id="minus"
                                    onClick={() => {
                                      dispatch('decrement')
                                    }}
                                  >
                                    <AiOutlineMinus />
                                  </Button>
                                </InputGroup.Append>
                              </InputGroup>
                            </Col>
                            <Col lg={2}>
                              <h6>$ {v.price * v.count}</h6>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form.Label>
                  </Form.Group>
                </Card.Body>
                {/* 在每個商品間添加分隔線 */}
                <div className="col-11 m-auto" key={index}>
                  {productData.length - 1 == index ? (
                    ''
                  ) : (
                    <div className="line"></div>
                  )}
                </div>
              </>
            )
          })
        ) : (
          <p>nothing</p>
        )}
      </div>
    </>
  )
  return <>{display}</>
}

export default OD_CartProduct
