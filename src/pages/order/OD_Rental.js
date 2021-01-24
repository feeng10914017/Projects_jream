import React, { useState, useEffect } from 'react'
import { Row, Button, Form, Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'
import CkoutCredit from '../../components/order/CheckOut_Credit'
import CkoutInvoice from '../../components/order/CheckOut_Invoice'
import CkoutDetail from '../../components/order/CheckOut_Detail'

function OD_Rental(props) {
  //  Credit
  const [cardNumber, setCardNumber] = useState(0)
  const [validityMM, setValidityMM] = useState(0)
  const [validityYY, setValidityYY] = useState(0)
  const [verificationCode, setVerificationCode] = useState(0)
  //  Invoice
  const [invoiceTitle, setInvoiceTitle] = useState('')
  const [invoiceValue1, setInvoiceValue1] = useState('')
  const [invoiceValue2, setInvoiceValue2] = useState('')
  const [invoiceCheckBox, setInvoiceCheckBox] = useState(false)
  //  Invoice's Modal
  const [invoiceTitleShow, setInvoiceTitleShow] = useState(false)
  const [invoiceCompanyShow, setInvoiceCompanyShow] = useState(false)
  const [invoiceVehicleNullShow, setInvoiceVehicleNullShow] = useState(false)
  const [invoiceVehicleShow, setInvoiceVehicleShow] = useState(false)
  const [invoiceCheckBoxShow, setInvoiceCheckBoxShow] = useState(false)
  // console.log('cardNumber', cardNumber)
  // console.log('validityMM', validityMM)
  // console.log('validityYY', validityYY)
  // console.log('verificationCode', verificationCode)
  // console.log('invoiceTitle', invoiceTitle)
  // console.log('invoiceValue1', invoiceValue1)
  // console.log('invoiceValue2', invoiceValue2)
  // console.log('invoiceCheckBox', invoiceCheckBox)

  //  Motor Order and Serial Number parameter
  const [serialNumber, setSerialNumber] = useState('')

  useEffect(() => {
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
    const RandomNumber = Math.floor(Math.random() * 10 ** 12)
    const finalSerialNumber = 'MC' + year + monthArray[month] + RandomNumber
    setSerialNumber(finalSerialNumber)
  }, [])
  function pushToFinalOrder() {
    const motorCart = JSON.parse(localStorage.getItem('motorCart'))
    const finalRentalOrder = {
      serialNumber,
      motorCart,
      cardNumber,
      validityMM,
      validityYY,
      verificationCode,
      invoiceTitle,
      invoiceValue1,
      invoiceValue2,
    }
    localStorage.setItem('rentalOrder', JSON.stringify(finalRentalOrder))
    localStorage.setItem('motorCart', '[]')
    props.history.push('/order/rentalReport')
  }

  //  Invoice Verification
  function RentalSubmit(e) {
    e.preventDefault()
    if (invoiceTitle === '') {
      setInvoiceTitleShow(true)
      return
    }
    if (invoiceTitle === '電子發票 - 公司' && invoiceValue1 === '') {
      setInvoiceCompanyShow(true)
      return
    }
    if (
      invoiceTitle === '個人 - 手機條碼載具' &&
      invoiceValue1 === '' &&
      invoiceValue2 === ''
    ) {
      setInvoiceVehicleNullShow(true)
      return
    }
    if (
      invoiceTitle === '個人 - 手機條碼載具' &&
      invoiceValue1 !== invoiceValue2
    ) {
      setInvoiceVehicleShow(true)
      return
    }
    if (invoiceCheckBox === false) {
      setInvoiceCheckBoxShow(true)
      return
    } else {
      pushToFinalOrder()
    }
  }

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
        <CkoutDetail type="Motor" />
        <Form onSubmit={RentalSubmit} return false>
          <CkoutCredit
            setCardNumber={setCardNumber}
            setValidityMM={setValidityMM}
            setValidityYY={setValidityYY}
            setVerificationCode={setVerificationCode}
          />
          <div className="block"></div>
          <CkoutInvoice
            setInvoiceTitle={setInvoiceTitle}
            setInvoiceValue1={setInvoiceValue1}
            setInvoiceValue2={setInvoiceValue2}
            setInvoiceCheckBox={setInvoiceCheckBox}
          />

          {/* Button */}
          <Row className="justify-content-center finalBtnParent">
            <Link to="/order">
              <Button className="finalBtn place-center" variant="danger">
                重新選車
              </Button>
            </Link>
            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
              type="submit"
            >
              下一步
            </Button>
          </Row>
        </Form>
        {/* modal */}
        <Modal
          size="sm"
          show={invoiceTitleShow}
          onHide={() => setInvoiceTitleShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">提醒</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>請確認您的「發票類型」</p>
          </Modal.Body>
        </Modal>
        <Modal
          size="sm"
          show={invoiceCompanyShow}
          onHide={() => setInvoiceCompanyShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">提醒</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>請輸入您的「統一編號」</p>
          </Modal.Body>
        </Modal>
        <Modal
          size="sm"
          show={invoiceVehicleNullShow}
          onHide={() => setInvoiceVehicleNullShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">提醒</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>請輸入您的「手機條碼」</p>
          </Modal.Body>
        </Modal>
        <Modal
          size="sm"
          show={invoiceVehicleShow}
          onHide={() => setInvoiceVehicleShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">提醒</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>請確認您輸入的「手機條碼」是相同的</p>
          </Modal.Body>
        </Modal>
        <Modal
          size="sm"
          show={invoiceCheckBoxShow}
          onHide={() => setInvoiceCheckBoxShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">提醒</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>請確認「服務條款」</p>
          </Modal.Body>
        </Modal>
      </article>
    </>
  )
}

export default withRouter(OD_Rental)
