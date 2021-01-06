import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import $ from 'jquery'
function ODIII_Invoice() {
  useEffect(() => {
    $('#Invoice')
      .find('button')
      .on('click', function () {
        // console.log('ok')
        const InvoiceCaption = 'Invoice' + $(this).attr('id')
        $(this)
          .addClass('InvoiceActive')
          .siblings()
          .removeClass('InvoiceActive')
        $('#' + InvoiceCaption)
          .removeClass('displayNone')
          .siblings()
          .addClass('displayNone')
      })
  }, [])
  return (
    <>
      <Card className="col-10">
        <Card.Header>
          <h6>發票類型</h6>
        </Card.Header>
        <Card.Body id="Invoice">
          <div className=" d-flex justify-content-between mb-3">
            <Button id="Personal" variant="outline-light">
              電子發票 - 個人
            </Button>
            <Button id="Company" variant="outline-light">
              電子發票 - 公司
            </Button>
            <Button id="Donate" variant="outline-light">
              捐贈發票
            </Button>
            <Button id="Vehicle" variant="outline-light">
              個人 - 手機條碼載具
            </Button>
          </div>
          {/* 電子發票 - 個人 */}
          <p id="InvoicePersonal" className="fontSize14 colorLight displayNone">
            依財政部規定，發票已託管，無需開立紙本發票。
          </p>
          {/* 電子發票 - 公司 */}
          <Form.Group
            as={Row}
            controlId="InvoiceCompanyInput"
            className="displayNone"
            id="InvoiceCompany"
          >
            <Form.Label column sm="2">
              統一編號
            </Form.Label>
            <Col sm="5">
              <Form.Control type="text" placeholder="請輸入統一編號" />
            </Col>
            <p className="fontSize14 colorDanger">
              根據財政部「電子發票實施作業要點」，於消費開立「三聯電子發票」不主動寄送，lativ亦會將發票號碼上傳至政府平台。
            </p>
          </Form.Group>
          {/* 捐贈發票 */}
          <Form.Group
            as={Row}
            controlId="InvoiceDonateInput"
            className="displayNone"
            id="InvoiceDonate"
          >
            <Form.Label column sm="2">
              捐贈單位
            </Form.Label>
            <Col sm="5">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose123...</option>
                <option>...</option>
              </Form.Control>
            </Col>
          </Form.Group>
          {/* 個人 - 手機條碼載具 */}
          <Form.Row id="InvoiceVehicle" className="displayNone">
            <Form.Group
              className="col-6"
              as={Row}
              controlId="InvoiceVehicleOne"
            >
              <Form.Label column sm="0"></Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  placeholder="請輸入手機條碼(限大寫英文數字)"
                />
              </Col>
            </Form.Group>
            <Form.Group
              className="col-6"
              as={Row}
              controlId="InvoiceVehicleTwo"
            >
              <Form.Label column sm="0"></Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  placeholder="請再次輸入手機條碼(限大寫英文數字)"
                />
              </Col>
            </Form.Group>
          </Form.Row>
        </Card.Body>
      </Card>
    </>
  )
}
export default ODIII_Invoice
