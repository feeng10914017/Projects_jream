import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { AiOutlineLine } from 'react-icons/ai'

import { countries, townships } from './data/TaiwanCountries'

function OD_CKO_Person() {
  //  location useState
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [countryTow, setCountryTow] = useState(-1)
  const [townshipTow, setTownshipTow] = useState(-1)

  //  添加監聽事件  確認是否與訂購人相同
  useEffect(() => {
    const OderName = document.getElementById('OderName')
    const OderPhone = document.getElementById('OderPhone')
    const OderCity = document.getElementById('OderCity')
    const OderTownship = document.getElementById('OderTownship')
    const OderAdd = document.getElementById('OderAdd')
    const RecipientName = document.getElementById('RecipientName')
    const RecipientPhone = document.getElementById('RecipientPhone')
    const RecipientCity = document.getElementById('RecipientCity')
    const RecipientTownship = document.getElementById('RecipientTownship')
    const RecipientAdd = document.getElementById('RecipientAdd')

    document
      .getElementById('isSamePerson')
      .addEventListener('click', function () {
        RecipientName.value = OderName.value
        RecipientPhone.value = OderPhone.value
        RecipientCity.value = OderCity.value
        RecipientTownship.value = OderTownship.value
        RecipientAdd.value = OderAdd.value

        if (this.checked) {
          RecipientName.setAttribute('disabled', '')
          RecipientPhone.setAttribute('disabled', '')
          RecipientCity.setAttribute('disabled', '')
          RecipientTownship.setAttribute('disabled', '')
          RecipientAdd.setAttribute('disabled', '')
        } else {
          RecipientName.removeAttribute('disabled')
          RecipientPhone.removeAttribute('disabled')
          RecipientCity.removeAttribute('disabled')
          RecipientTownship.removeAttribute('disabled')
          RecipientAdd.removeAttribute('disabled')
        }
      })
  }, [])

  return (
    <>
      {/* 訂購人 */}
      <Card>
        <Card.Header>
          <h6>訂購人資訊</h6>
        </Card.Header>
        <Card.Body>
          <Form.Group as={Row} controlId="OderName">
            <Form.Label column sm="2">
              姓名
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入姓名" />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Group as={Row} controlId="OderPhone">
            <Form.Label column sm="2">
              手機號碼
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入手機號碼" />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Row>
            <Form.Group className="col-6" as={Row} controlId="OderCity">
              <Form.Label column sm="4">
                請選擇縣市
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  value={country}
                  onChange={(event) => {
                    setCountry(+event.target.value)
                    setTownship(-1)
                  }}
                >
                  <option value={-1}>請選擇縣市</option>
                  {countries.map((v, i) => (
                    <option value={i} key={i}>
                      {v}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <AiOutlineLine className="localLine" size="32" color="#CACACA" />
            <Form.Group className="col-6" as={Row} controlId="OderTownship">
              <Form.Label column sm="4">
                請選擇地區
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  value={township}
                  onChange={(event) => {
                    setTownship(+event.target.value)
                  }}
                >
                  <option value={-1}>請選擇區域</option>
                  {country > -1 &&
                    townships[country].map((v, i) => (
                      <option value={i} key={i}>
                        {v}
                      </option>
                    ))}
                </Form.Control>
              </Col>
            </Form.Group>
          </Form.Row>
          <div className="line"></div>
          <Form.Group as={Row} controlId="OderAdd">
            <Form.Label column sm="2" srOnly></Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="請輸入地址" />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Group as={Row} controlId="OderRemarks">
            <Form.Label column sm="2">
              收件備註
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="司機大哥謝謝你~" />
            </Col>
          </Form.Group>
        </Card.Body>
      </Card>
      <div className="block"></div>
      {/* 收件人 */}
      <Card>
        <Card.Header className="Recipient">
          <h6>收件人資訊</h6>
          <Form.Group controlId="isSamePerson">
            <Form.Check type="checkbox" label="與訂購人相同" />
          </Form.Group>
        </Card.Header>
        <Card.Body>
          <Form.Group as={Row} controlId="RecipientName">
            <Form.Label column sm="2">
              姓名
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入姓名" />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Group as={Row} controlId="RecipientPhone">
            <Form.Label column sm="2">
              手機號碼
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="輸入手機號碼" />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Row>
            <Form.Group className="col-6" as={Row} controlId="RecipientCity">
              <Form.Label column sm="4">
                請選擇縣市
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="select"
                  defaultValue="請選擇縣市"
                  value={countryTow}
                  onChange={(event) => {
                    setCountryTow(+event.target.value)
                    setTownshipTow(-1)
                  }}
                >
                  <option value={-1}>請選擇縣市</option>
                  {countries.map((v, i) => (
                    <option value={i} key={i}>
                      {v}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <AiOutlineLine className="localLine" size="32" color="#CACACA" />
            <Form.Group
              className="col-6"
              as={Row}
              controlId="RecipientTownship"
            >
              <Form.Label column sm="4">
                請選擇地區
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="select"
                  defaultValue="請選擇區域"
                  value={townshipTow}
                  onChange={(event) => {
                    setTownshipTow(+event.target.value)
                  }}
                >
                  <option value={-1}>請選擇區域</option>
                  {country > -1 &&
                    townships[country].map((v, i) => (
                      <option value={i} key={i}>
                        {v}
                      </option>
                    ))}
                </Form.Control>
              </Col>
            </Form.Group>
          </Form.Row>
          <div className="line"></div>
          <Form.Group as={Row} controlId="RecipientAdd">
            <Form.Label column sm="2" srOnly>
              地址
            </Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="請輸入地址" />
            </Col>
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  )
}
export default OD_CKO_Person
