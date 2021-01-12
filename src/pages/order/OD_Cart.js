import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Nav, Button, Form, Table } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './OD.scss'
import OrderStep from './OD_Ccomponents/OD_Step'
import CartMotor from './OD_Ccomponents/OD_CartMotor'
import CartProduct from './OD_Ccomponents/OD_CartProduct'
import GrandTotal from './OD_Ccomponents/OD_GrandTotal'

function OD_Cart() {
  const [motorCart, setMotorCart] = useState([])
  const [productCart, setProductCart] = useState([])
  const [shipping, setShipping] = useState([])
  const [navState, setNavState] = useState('NavMotor')

  //引入資料庫
  async function getMotor() {
    try {
      const response = await fetch('http://localhost:5555/motorCart', {
        method: 'get',
      })
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()

        // 設定資料到MotorCart狀態
        setMotorCart(data)
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }
  async function getProduct() {
    try {
      const response = await fetch('http://localhost:5555/productCart', {
        method: 'get',
      })
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()

        // 設定資料到ProductCart狀態
        setProductCart(data)
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }
  async function getShipping() {
    try {
      const response = await fetch('http://localhost:5555/shipping', {
        method: 'get',
      })
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()

        // 設定資料到Shippin狀態
        setShipping(data)
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  //帶入資料庫
  useEffect(() => {
    getMotor()
    getProduct()
    getShipping()
  }, [])

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

  /////////////////////////////////////////////////////////////////

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
            <CartMotor data={motorCart} />
          </div>
          <div id="BodyProd">
            <CartProduct data={productCart} />
          </div>
        </Card>
        <GrandTotal
          type={navState}
          data={navStateOnClick == 'NavMotor' ? motorCart : productCart}
          shipping={shipping}
        />

        {/* Button */}
        <Row className="justify-content-center finalBtnParent">
          <Button className="finalBtn place-center" variant="danger">
            繼續購物
          </Button>
          <Link
            to={
              navStateOnClick == 'NavMotor'
                ? '/order/CreditCard'
                : '/order/checkout'
            }
          >
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
