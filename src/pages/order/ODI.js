import React, { useState, useEffect } from 'react'
import { Row, Card, Nav, Button, Form } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './ODI.scss'
import OrderStep from './components/OrderStep'
import ODIMotor from './ODI_Motor'
import ODIProduct from './ODI_Product'
function ODI(props) {
  const [navState, setNavState] = useState('NavMotor')
  const navStateOnClick = navState
  function changeDisplay(a, b) {
    document.getElementById(a).classList.add('displayFlex')
    document.getElementById(b).classList.remove('displayFlex')
    document.getElementById(a).classList.remove('displayNone')
    document.getElementById(b).classList.add('displayNone')
  }

  //透過改變後的navState,來調整顯示的內容(使用function changeDisplay)
  useEffect(() => {
    // console.log('改變後的navState', navState)
    navStateOnClick == 'NavMotor'
      ? changeDisplay('BodyMotor', 'BodyProd')
      : changeDisplay('BodyProd', 'BodyMotor')
  }, [navState])

  return (
    <>
      <OrderStep />
      <Card className="col-10">
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
        <Card.Body id="CardBody">
          <ODIMotor />
          <ODIProduct />
        </Card.Body>
      </Card>
      <Row className="justify-content-center col-10">
        <Button className="finalBtn place-center" variant="danger">
          繼續購物
        </Button>
        <Link to="/orderII">
          <Button
            className="finalBtn finalBtnTwo place-center"
            variant="primary"
          >
            下一步
          </Button>
        </Link>
      </Row>
    </>
  )
}

export default ODI
