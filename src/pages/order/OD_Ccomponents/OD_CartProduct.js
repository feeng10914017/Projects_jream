import React from 'react'
import { Row, Form, Card } from 'react-bootstrap'

function OD_CartProduct(props) {
  const productData = props.data
  // console.log(productData)

  const display = (
    <>
      {productData.length > 0 ? (
        productData.map((v, index) => {
          return (
            <>
              <Card.Body key={index}>
                <div className="lease">
                  <Form.Group controlId={'checkBoxProduct' + v.id}>
                    <Form.Check type="checkbox" label="" />
                  </Form.Group>
                  <div className="cardContent">
                    <Row>
                      <div className="col-2 motorImage">
                        <img
                          src={'http://localhost:3000/images/product/' + v.img}
                          alt=""
                        />
                      </div>
                      <p className="col-4">{v.productName}</p>
                      <p className="col-2">
                        <Form.Group controlId="formGridState">
                          <Form.Label></Form.Label>
                          <Form.Control
                            as="select"
                            defaultValue={v.productSize}
                          >
                            <option>xxl</option>
                            <option>...</option>
                          </Form.Control>
                        </Form.Group>
                      </p>
                      <p className="col-2">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="number"
                            placeholder={v.productAmount}
                          />
                        </Form.Group>
                      </p>
                      <h6 className="col-2">$ {v.productPrice}</h6>
                    </Row>
                  </div>
                </div>
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
    </>
  )
  return <>{display}</>
}

export default OD_CartProduct
