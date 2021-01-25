import React, { useState, useEffect } from 'react'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'

function OD_CartReport() {
  const [shipping, setShipping] = useState('')
  const [serialNumber, setSerialNumber] = useState('')
  const [orderTime, setORderTime] = useState('')
  const [price, setPrice] = useState('')
  const [invoiceTitle, setInvoiceTitle] = useState('')
  const [invoiceValue1, setInvoiceValue1] = useState('')

  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userComment, setUserComment] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [recipientPhone, setRecipientPhone] = useState('')
  const [recipientAdd, setRecipientUserAdd] = useState('')
  const [Credit, setCredit] = useState('')

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
  function totalprice(list) {
    let Price = 0
    list.map((v, i) => {
      Price = Price + Number(v.amount) * Number(v.price)
    })
    return Price
  }
  function CreditHidden(value) {
    const Value1 = value.slice(0, 4)
    const Value2 = value.slice(12, 16)
    return Value1 + ' xxxx xxxx ' + Value2
  }
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('CartOrder'))
    const shippingType = JSON.parse(localStorage.getItem('shipping'))
    const productCart = cartData.finalProductCart

    setShipping(shippingType[0])
    setSerialNumber(cartData.serialNumber)
    orderEditTime()
    setPrice(totalprice(productCart))
    setCredit(CreditHidden(cartData.cardNumber))
    setUserName(cartData.userName)
    setUserPhone(cartData.userPhone)
    setUserComment(cartData.userComment)
    setRecipientName(cartData.recipientName)
    setRecipientPhone(cartData.recipientPhone)
    setRecipientUserAdd(cartData.finalRecipientAdd)
    setInvoiceTitle(cartData.invoiceTitle)
    setInvoiceValue1(cartData.invoiceValue1)

    // localStorage.removeItem('rentalOrder')
  }, [])
  const aa = (
    <>
      <Col lg={6}>
        <Row>
          <Col lg={4}>
            <p>&nbsp;</p>
          </Col>
          <Col lg={8}>
            <p>{}</p>
          </Col>
        </Row>
        <div className="line"></div>
      </Col>
    </>
  )
  const bb = (
    <>
      <Col lg={6}>
        <Row>
          <Col lg={4}>
            <p>統依編號</p>
          </Col>
          <Col lg={8}>
            <p>{invoiceValue1}</p>
          </Col>
        </Row>
        <div className="line"></div>
      </Col>
    </>
  )
  const cc = (
    <>
      <Col lg={6}>
        <Row>
          <Col lg={4}>
            <p>捐贈單位</p>
          </Col>
          <Col lg={8}>
            <p>{invoiceValue1}</p>
          </Col>
        </Row>
        <div className="line"></div>
      </Col>
    </>
  )
  const dd = (
    <>
      <Col lg={6}>
        <Row>
          <Col lg={4}>
            <p>條碼載具</p>
          </Col>
          <Col lg={8}>
            <p>{invoiceValue1}</p>
          </Col>
        </Row>
        <div className="line"></div>
      </Col>
    </>
  )
  const display = (
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
                    <p>NT$ {price}</p>
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
                    <p>{shipping === 'delivery' ? '貨到付款' : '信用卡'}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>配送方式</p>
                  </Col>
                  <Col lg={8}>
                    <p>宅配到府</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>發票類型</p>
                  </Col>
                  <Col lg={8}>
                    <p>{invoiceTitle}</p>
                  </Col>
                </Row>
                <div className="line"></div>
              </Col>
              {invoiceTitle === '電子發票 - 個人' && aa}
              {invoiceTitle === '電子發票 - 公司' && bb}
              {invoiceTitle === '捐贈發票' && cc}
              {invoiceTitle === '個人 - 手機條碼載具' && dd}
            </Row>

            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <p>訂購人</p>
                  </Col>
                  <Col lg={8}>
                    <p>{userName}</p>
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
                    <p>{userPhone}</p>
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
                    <p>{recipientName}</p>
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
                    <p>{recipientPhone}</p>
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
                    <p>{recipientAdd}</p>
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
                    <p>{userComment}</p>
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

export default OD_CartReport
