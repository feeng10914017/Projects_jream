import React, { useState, useEffect } from 'react'
import { Row, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'
import CkoutPerson from '../../components/order/CheckOut_Person'
import CkoutInvoice from '../../components/order/CheckOut_Invoice'
import CkoutDetail from '../../components/order/CheckOut_Detail'

function OD_HomeDelivery() {
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
    }
  }

  return (
    <>
      <article className="col-10 CheckTwo">
        <OrderStep step="3" />
        <CkoutDetail type="Prod" />
        <Form onSubmit={RentalSubmit} return false>
          <CkoutPerson />
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

export default OD_HomeDelivery
