import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Nav, Button, Form, Table } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './OD.scss'
import OrderStep from './OD_Ccomponents/OD_Step'
import CartMotor from './OD_Ccomponents/OD_CartMotor'
import CartProduct from './OD_Ccomponents/OD_CartProduct'
import GrandTotal from './OD_Ccomponents/OD_GrandTotal'

//引入資料庫
const cartData = require('./data/cart.json')
//帶入資料庫
function OD_Cart({ data = cartData }) {
  /////////////////////////////////////////////////////////////////
  const [navState, setNavState] = useState('NavMotor')
  //透過改變後的navState,來調整顯示的內容(使用function changeDisplay)
  const navStateOnClick = navState
  function changeDisplay(a, b) {
    document.getElementById(a).classList.add('displayBlock')
    document.getElementById(b).classList.remove('displayBlock')
    document.getElementById(a).classList.remove('displayNone')
    document.getElementById(b).classList.add('displayNone')
  }
  useEffect(() => {
    navStateOnClick == 'NavMotor'
      ? changeDisplay('BodyMotor', 'BodyProd')
      : changeDisplay('BodyProd', 'BodyMotor')
  }, [navState])

  return (
    <>
      <article className="col-10">
        {/* 購物車步驟 */}
        <OrderStep step="1" />
        <Card className="cartHome">
          {/* CardHeader */}
          <Card.Header>
            <Nav fill variant="tabs" defaultActiveKey="#Nav_Motor">
              <Nav.Item>
                <Nav.Link
                  href="#Nav_Motor"
                  onClick={() => {
                    setNavState('NavMotor')
                  }}
                >
                  <p>重機租賃</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#Nav_Prod"
                  onClick={() => {
                    setNavState('NavProd')
                  }}
                >
                  <p>周邊商品</p>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {/* CardBody */}
          <div id="BodyMotor">
            <CartMotor data={data.motor} />
          </div>
          <div id="BodyProd">
            <CartProduct data={data.product} />
          </div>
        </Card>
        <GrandTotal
          type={navState}
          motorData={data.motor}
          productData={data.product}
        />

        {/* Button */}
        <Row className="justify-content-center finalBtnParent">
          <Button className="finalBtn place-center" variant="danger">
            繼續購物
          </Button>
          <Link to="/order/checkout">
            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
            >
              下一步
            </Button>
          </Link>
        </Row>
      </article>
    </>
  )
}

export default OD_Cart
