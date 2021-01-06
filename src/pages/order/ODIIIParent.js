import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//引入頁面元件
import OrderStep from './components/OrderStep'
import Person from './ODIIIChildPerson'
import Credit from './ODIIIChildCredit'
import Invoice from './ODIIIChildInvoice'
//引入樣式表
import './ODIIIParent.scss'

function ODIIIParent() {
  return (
    <>
      <OrderStep />
      <Form>
        <Person />
        <Credit />
        <Invoice />
      </Form>
      <Row className="justify-content-center col-10">
        <Button className="finalBtn place-center" variant="danger">
          繼續購物
        </Button>
        <Button className="finalBtn place-center" variant="primary">
          下一步
        </Button>
      </Row>
    </>
  )
}

export default ODIIIParent
