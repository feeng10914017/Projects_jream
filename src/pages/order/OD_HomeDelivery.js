import React, { useState, useEffect } from 'react'
import { Row, Button, Form, Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'
import CkoutPerson from '../../components/order/CheckOut_Person'
import CkoutInvoice from '../../components/order/CheckOut_Invoice'
import CkoutDetail from '../../components/order/CheckOut_Detail'

function OD_HomeDelivery(props) {
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
      // pushToFinalOrder()
      props.history.push('/order/cartReport')
    }
  }
  // console.log('userPhone', userName)
  // console.log('userName', userPhone)
  // console.log('userCountry', userCountry)
  // console.log('usertownship', usertownship)
  // console.log('userAdd', userAdd)
  // console.log('userComment', userComment)
  // console.log('invoiceCheckBox father', invoiceCheckBox)
  // console.log('recipientName', recipientName)
  // console.log('recipientPhone', recipientPhone)
  // console.log('recipientCountry', recipientCountry)
  // console.log('recipientTownship', recipientTownship)
  // console.log('recipientAdd', recipientAdd)
  return (
    <>
      <article className="col-10 CheckTwo">
        <OrderStep step="3" />
        <CkoutDetail type="Prod" />
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

            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
              type="submit"
            >
              下一步
            </Button>
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

export default withRouter(OD_HomeDelivery)
