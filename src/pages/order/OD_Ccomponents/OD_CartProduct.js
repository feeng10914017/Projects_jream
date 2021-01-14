import React, { useState, useEffect, useReducer } from 'react'
import {
  Row,
  Form,
  Card,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import $ from 'jquery'
function OD_CartProduct(props) {
  const productData = props.data

  const display = (
    <>
      <div id="clickEvent">
        {productData.length > 0 ? (
          productData.map((v, index) => {
            const initialState = v.productAmount
            const reducer = (state, aciton) => {
              switch (aciton) {
                case 'increment':
                  return state + 1
                case 'decrement':
                  return state == 1 ? state : state - 1
                default:
                  return state
              }
            }
            const [count, dispatch] = useReducer(reducer, initialState)
            return (
              <>
                <Card.Body key={index}>
                  <Form.Group
                    controlId={'checkBoxProduct' + v.id}
                    className="lease"
                  >
                    <div>
                      <Form.Control type="checkbox" />
                    </div>
                    <Form.Label>
                      <Row>
                        <div className="col-2 motorImage">
                          <img
                            src={
                              'http://localhost:3000/images/product/' + v.img
                            }
                            alt=""
                          />
                        </div>
                        <p className="col-4">{v.productName}</p>
                        <div className="col-2">
                          <Form.Control
                            as="select"
                            defaultValue={v.productSize}
                          >
                            <option>xxl</option>
                            <option>...</option>
                          </Form.Control>
                        </div>

                        <InputGroup className="col-2">
                          <InputGroup.Prepend>
                            <Button
                              variant="outline-primary"
                              className="px-2 d-flex align-items-center"
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
                              className="px-2 d-flex align-items-center"
                              id="minus"
                              onClick={() => {
                                dispatch('decrement')
                              }}
                            >
                              <AiOutlineMinus />
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                        <h6 className="col-2">$ {v.productPrice}</h6>
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
