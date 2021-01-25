import React, { useState, useEffect } from 'react'
import { Row, Button, Card, Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'

function OD_CartReport() {
  const [orderTime, setORderTime] = useState('')
  function orderEditTime() {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const monthArray = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ]
    const date = new Date().getDate()
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const second = new Date().getSeconds()
    setORderTime(
      year +
        '-' +
        monthArray[month] +
        '-' +
        date +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
    )
  }
  return (
    <>
      <article className="col-10 cartReport">
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
                    <p>{}</p>
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
                    <p>{}</p>
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
                    <p>待出貨</p>
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
                    <p>NT$ {}</p>
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
                    <p>宅配 貨到付款</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>運費</p>
                  </Col>
                  <Col lg={8}>
                    <p>NT$ {}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>訂購人</p>
                  </Col>
                  <Col lg={8}>
                    <p>{}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>手機號碼</p>
                  </Col>
                  <Col lg={8}>
                    <p>{}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>收件人</p>
                  </Col>
                  <Col lg={8}>
                    <p>{}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>手機號碼</p>
                  </Col>
                  <Col lg={8}>
                    <p>{}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col lg={2}>
                    <p>收件地址</p>
                  </Col>
                  <Col lg={10}>
                    <p>{}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col lg={2}>
                    <p>收件備註</p>
                  </Col>
                  <Col lg={10}>
                    <p>{}</p>
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
