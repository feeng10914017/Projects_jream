import React, { useState, useEffect } from 'react'
import { Row, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//引入頁面元件
import OrderStep from './OD_Ccomponents/OD_Step'
import CkoutPerson from './OD_Ccomponents/OD_CKO_Person'
import CkoutCredit from './OD_Ccomponents/OD_CKO_Credit'
import CkoutInvoice from './OD_Ccomponents/OD_CKO_Invoice'
import CkoutDetail from './OD_Ccomponents/OD_CKO_Detail'

//引入樣式表
import './OD.scss'

function OD_CreditCard() {
  return (
    <>
      <article className="col-10 CheckTwo">
        <OrderStep step="3" />
        {/* <CkoutDetail /> */}
        <Form>
          <CkoutPerson />
          <div className="block"></div>
          <CkoutCredit />
          <div className="block"></div>
          <CkoutInvoice />
        </Form>

        {/* Button */}
        <Row className="justify-content-center finalBtnParent">
          <Link to="/order/checkout">
            <Button className="finalBtn place-center" variant="danger">
              重選付款方式
            </Button>
          </Link>
          <Link to="/order/cartReport">
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

export default OD_CreditCard
