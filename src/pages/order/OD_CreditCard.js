import React, { useState, useEffect } from 'react'
import { Row, Button, Form, Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'
import CkoutPerson from '../../components/order/CheckOut_Person'
import CkoutCredit from '../../components/order/CheckOut_Credit'
import CkoutInvoice from '../../components/order/CheckOut_Invoice'
import CkoutDetail from '../../components/order/CheckOut_Detail'

function OD_CreditCard(props) {
  //  user
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userCountry, setUserCountry] = useState(-1)
  const [usertownship, setUsertownship] = useState(-1)
  const [userAdd, setUserAdd] = useState('')
  const [userComment, setUserComment] = useState('')
  const [recipientChecked, setRecipientChecked] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [recipientPhone, setRecipientPhone] = useState('')
  const [recipientCountry, setRecipientCountry] = useState(-1)
  const [recipientTownship, setRecipientTownship] = useState(-1)
  const [recipientAdd, setRecipientAdd] = useState('')
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
    const finalSerialNumber = 'PC' + year + monthArray[month] + RandomNumber
    setSerialNumber(finalSerialNumber)
  }, [])
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
  function pushToFinalOrder() {
    const finalProductCart = JSON.parse(
      localStorage.getItem('finalProductCart')
    )

    const finalUserAdd = userCountry + usertownship + userAdd
    const finalRecipientAdd =
      recipientCountry + recipientTownship + recipientAdd
    const finalHoneOrder = {
      finalProductCart,
      cardNumber,
      serialNumber,
      userName,
      userPhone,
      finalUserAdd,
      userComment,
      recipientName,
      recipientPhone,
      finalRecipientAdd,
      invoiceTitle,
      invoiceValue1,
      invoiceValue2,
    }
    localStorage.setItem('CartOrder', JSON.stringify(finalHoneOrder))
    localStorage.setItem('finalProductCart', '[]')
    props.history.push('/order/cartReport')
  }
  return (
    <>
      <article className="col-10 CheckTwo">
        <OrderStep step="3" />
        <CkoutDetail />
        <Form onSubmit={RentalSubmit} return false>
          <CkoutPerson
            setUserName={setUserName}
            setUserPhone={setUserPhone}
            setUserCountry={setUserCountry}
            setUsertownship={setUsertownship}
            setUserAdd={setUserAdd}
            setUserComment={setUserComment}
            setRecipientChecke={setRecipientChecked}
            setRecipientName={setRecipientName}
            setRecipientPhone={setRecipientPhone}
            setRecipientCountry={setRecipientCountry}
            setRecipientTownship={setRecipientTownship}
            setRecipientAdd={setRecipientAdd}
          />
          <div className="block"></div>
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
            <Link to="/order/checkout">
              <Button className="finalBtn place-center" variant="danger">
                重選付款方式
              </Button>
            </Link>
            {/* <Link to="/order/cartReport"> */}
            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
              type="submit"
            >
              下一步
            </Button>
            {/* </Link> */}
          </Row>
        </Form>
      </article>
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
    </>
  )
}

export default withRouter(OD_CreditCard)
