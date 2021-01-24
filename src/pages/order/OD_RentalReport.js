import React, { useState, useEffect } from 'react'
import { Row, Button, Card, Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//引入頁面元件
import OrderStep from '../../components/order/CartStep'

function OD_CartReport() {
  const [rentalOrderData, setRentalOrderData] = useState({})

  useEffect(() => {
    setRentalOrderData(JSON.parse(localStorage.getItem('rentalOrder')))
  }, [])
  return (
    <>
      <article className="col-10 rentalReport">
        <OrderStep step="4" />
        <Card>
          <Card.Header>
            <h6 className="px-3">訂單詳情</h6>
          </Card.Header>

          <Card.Body>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>訂單編號</p>
                  </Col>
                  <Col lg={8}>
                    <p>{rentalOrderData.serialNumber}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>訂單日期</p>
                  </Col>
                  <Col lg={8}>
                    <p>2020-12-12</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>訂單狀態</p>
                  </Col>
                  <Col lg={8}>
                    <p>待領車</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>訂單金額</p>
                  </Col>
                  <Col lg={8}>
                    <p>NT$ 140,000</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>付款方式</p>
                  </Col>
                  <Col lg={8}>
                    <p>信用卡</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>付款卡號</p>
                  </Col>
                  <Col lg={8}>
                    <p>12345678952</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col lg={2}>
                    <p>租賃車種</p>
                  </Col>
                  <Col lg={10}>
                    <Row>
                      <Col lg={4}>
                        <p>SUZUKI</p>
                      </Col>
                      <Col lg={4}>
                        <p>GSX - S1000S</p>
                      </Col>
                      <Col lg={4}>
                        <p>BROWN</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>取車地點</p>
                  </Col>
                  <Col lg={8}>
                    <p>台北濱江店</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>還車地點</p>
                  </Col>
                  <Col lg={8}>
                    <p>台北濱江店</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>取車日期</p>
                  </Col>
                  <Col lg={8}>
                    <p>2021-01-09</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>還車日期</p>
                  </Col>
                  <Col lg={8}>
                    <p>2021-01-09</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>取車時間</p>
                  </Col>
                  <Col lg={8}>
                    <p>14:16:00</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>還車時間</p>
                  </Col>
                  <Col lg={8}>
                    <p>14:16:00</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Button */}
        <Row className="justify-content-center finalBtnParent">
          <Link to="/">
            <Button className="finalBtn place-center" variant="danger">
              繼續逛逛
            </Button>
          </Link>
          <Link to="/member">
            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
            >
              訂單查詢
            </Button>
          </Link>
        </Row>
      </article>
    </>
  )
}

export default OD_CartReport
