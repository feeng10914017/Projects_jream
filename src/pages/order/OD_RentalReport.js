import React, { useState, useEffect } from 'react'
import { Row, Button, Card, Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//引入頁面元件
import OrderStep from '../../components/order/CartStep'

function OD_RentalReport() {
  const [serialNumber, setSerialNumber] = useState('')
  const [orderTime, setORderTime] = useState('')
  const [orderPrice, setOrderPrice] = useState('')
  const [creditHidden, setCreditHidden] = useState('')
  const [color, setColor] = useState('')
  const [company, setCompany] = useState('')
  const [model, setModel] = useState('')
  const [rentalDate, setRentalDate] = useState('')
  const [rentalLocation, setRentalLocation] = useState('')
  const [rentalTime, setRentalTime] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [returnLocation, setReturnLocation] = useState('')
  const [returnTime, setReturnTime] = useState('')

  useEffect(() => {
    const rentalData = JSON.parse(localStorage.getItem('rentalOrder'))
    const motorCart = rentalData.motorCart[0]
    setSerialNumber(rentalData.serialNumber)
    orderEditTime()
    setOrderPrice(
      Number(motorCart.rentalAmount) * Number(motorCart.rentalPrice)
    )
    setCreditHidden(rentalData.cardNumber)
    setColor(motorCart.color)
    setCompany(motorCart.company)
    setModel(motorCart.model)
    setRentalDate(motorCart.rentalDate)
    setRentalLocation(motorCart.rentalLocation)
    setRentalTime(motorCart.rentalTime)
    setReturnDate(motorCart.returnDate)
    setReturnLocation(motorCart.returnLocation)
    setReturnTime(motorCart.returnTime)
    localStorage.removeItem('rentalOrder')
  }, [])
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

  const display = (
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
                    <p>{serialNumber}</p>
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
                    <p>{orderTime}</p>
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
                    <p>NT$ {orderPrice}</p>
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
                    <p>{creditHidden}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <hr />
                <Row>
                  <Col lg={2}>
                    <p>租賃車種</p>
                  </Col>
                  <Col lg={10}>
                    <Row>
                      <Col lg={4}>
                        <p>{company}</p>
                      </Col>
                      <Col lg={4}>
                        <p>{model}</p>
                      </Col>
                      <Col lg={4}>
                        <p>{color}</p>
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
                    <p>{rentalLocation}</p>
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
                    <p>{returnLocation}</p>
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
                    <p>{rentalDate}</p>
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
                    <p>{returnDate}</p>
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
                    <p>{rentalTime}</p>
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
                    <p>{returnTime}</p>
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
  return <>{display}</>
}

export default OD_RentalReport
