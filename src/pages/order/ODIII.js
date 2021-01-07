import React, { useState, useEffect } from 'react'
import { Row, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//引入頁面元件
import OrderStep from './components/OrderStep'
import Person from './ODIII_Person'
import Credit from './ODIII_Credit'
import Invoice from './ODIII_Invoice'

//引入樣式表
import './ODIII.scss'

function ODIII() {
  return (
    <>
      <OrderStep />
      <Form>
        <Person />
        <Credit />
        <Invoice />
      </Form>
      <Row className="justify-content-center col-10">
        <Link to="/orderII">
          <Button className="finalBtn place-center" variant="danger">
            重選付款方式
          </Button>
        </Link>
        <Button className="finalBtn finalBtnTwo place-center" variant="primary">
          下一步
        </Button>
      </Row>
    </>
  )
}

export default ODIII
