import React, { useState, useEffect } from 'react'
import { Row, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'
import CkoutCredit from '../../components/order/CheckOut_Credit'
import CkoutInvoice from '../../components/order/CheckOut_Invoice'
import CkoutDetail from '../../components/order/CheckOut_Detail'

function OD_Rental() {
  const [cardNumber, setCardNumber] = useState(0)
  const [validityMM, setValidityMM] = useState(0)
  const [validityYY, setValidityYY] = useState(0)
  const [verificationCode, setVerificationCode] = useState(0)
  const [invoiceTitle, setInvoiceTitle] = useState('')
  const [invoiceValue1, setInvoiceValue1] = useState('')
  const [invoiceValue2, setInvoiceValue2] = useState('')
  const [invoiceCheckBox, setInvoiceCheckBox] = useState(false)
  //   console.log(invoiceTitle)
  //   console.log(invoiceValue1)
  //   console.log(invoiceValue2)
  //   console.log(invoiceCheckBox)
  // // console.log(cardNumber)
  // console.log(validityMM)
  // console.log(validityYY)
  // console.log(verificationCode)

  //後台新增租賃訂單
  async function addRentalOrder() {
    // 構造出一個準備要送到伺服器的物件data
    const newRentalOrder = {}

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch('http://localhost:5555/users', {
        method: 'post',
        body: JSON.stringify(newRentalOrder),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()
        console.log(data)

        // 設定資料到member狀態
        // if (data.id) alert('新增成功')

        // history.push('/member')
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  return (
    <>
      <article className="col-10 CheckTwo">
        <OrderStep step="3" />
        {/* <CkoutDetail /> */}
        <Form>
          <CkoutCredit
            setCardNumber={setCardNumber}
            setValidityMM={setValidityMM}
            setValidityYY={setValidityYY}
            setVerificationCode={setVerificationCode}
          />
          <div className="block"></div>
          <CkoutInvoice
            invoiceTitle={invoiceTitle}
            setInvoiceTitle={setInvoiceTitle}
            setInvoiceValue1={setInvoiceValue1}
            setInvoiceValue2={setInvoiceValue2}
            setInvoiceCheckBox={setInvoiceCheckBox}
          />
        </Form>

        {/* Button */}
        <Row className="justify-content-center finalBtnParent">
          <Link to="/order">
            <Button className="finalBtn place-center" variant="danger">
              重新選車
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

export default OD_Rental
