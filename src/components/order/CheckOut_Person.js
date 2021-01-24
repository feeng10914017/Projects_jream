import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { AiOutlineLine } from 'react-icons/ai'

import { countries, townships } from './data/TaiwanCountries'

function CheckOut_Person(props) {
  //  user useState
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userCountry, setUserCountry] = useState(-1)
  const [usertownship, setUsertownship] = useState(-1)
  const [userAdd, setUserAdd] = useState('')
  const [userComment, setUserComment] = useState('')
  //  recipient useState
  const [recipientChecked, setRecipientChecked] = useState(false)
  const [recipientName, setRecipientName] = useState('')
  const [recipientPhone, setRecipientPhone] = useState('')
  const [recipientCountry, setRecipientCountry] = useState(-1)
  const [recipientTownship, setRecipientTownship] = useState(-1)
  const [recipientAdd, setRecipientAdd] = useState('')

  const handleChangeChecked = (element) => {
    console.log(element.target.checked)
    setRecipientChecked(element.target.checked)
  }
  useEffect(() => {
    console.log('recipientChecked', recipientChecked)
    if (recipientChecked) {
      setRecipientName(userName)
      setRecipientPhone(userPhone)
      setRecipientCountry(userCountry)
      setRecipientTownship(usertownship)
      setRecipientAdd(userAdd)
      props.setRecipientName(userName)
      props.setRecipientPhone(userPhone)
      props.setRecipientCountry(userCountry)
      props.setRecipientTownship(usertownship)
      props.setRecipientAdd(userAdd)
      document.getElementById('RecipientName').setAttribute('disabled', '')
      document.getElementById('RecipientPhone').setAttribute('disabled', '')
      document.getElementById('RecipientCity').setAttribute('disabled', '')
      document.getElementById('RecipientTownship').setAttribute('disabled', '')
      document.getElementById('RecipientAdd').setAttribute('disabled', '')
    } else {
      document.getElementById('RecipientName').removeAttribute('disabled')
      document.getElementById('RecipientPhone').removeAttribute('disabled')
      document.getElementById('RecipientCity').removeAttribute('disabled')
      document.getElementById('RecipientTownship').removeAttribute('disabled')
      document.getElementById('RecipientAdd').removeAttribute('disabled')
    }
  }, [recipientChecked])
  // console.log('userName', userName)
  // console.log('userPhone', userPhone)
  // console.log('userCountry', userCountry)
  // console.log('usertownship', usertownship)
  // console.log('userAdd', userAdd)
  // console.log('userComment', userComment)
  // console.log('recipientName', recipientName)
  // console.log('recipientPhone', recipientPhone)
  // console.log('recipientCountry', recipientCountry)
  // console.log('recipientTownship', recipientTownship)
  // console.log('recipientAdd', recipientAdd)

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
              <Form.Control
                type="text"
                placeholder="輸入姓名"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value)
                  props.setUserName(e.target.value)
                }}
                required
              />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Group as={Row} controlId="OderPhone">
            <Form.Label column sm="2">
              手機號碼
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="輸入手機號碼"
                value={userPhone}
                onChange={(e) => {
                  setUserPhone(e.target.value)
                  props.setUserPhone(e.target.value)
                }}
                required
              />
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
                  defaultValue="請選擇縣市"
                  value={userCountry}
                  onChange={(event) => {
                    setUserCountry(event.target.value)
                    setUsertownship(-1)
                    props.setUserCountry(event.target.value)
                    props.setUsertownship(-1)
                  }}
                  required
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
                  value={usertownship}
                  onChange={(event) => {
                    setUsertownship(event.target.value)
                    props.setUsertownship(event.target.value)
                  }}
                  required
                >
                  <option value={-1}>請選擇區域</option>
                  {userCountry > -1 &&
                    townships[userCountry].map((v, i) => (
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
              <Form.Control
                type="text"
                placeholder="請輸入地址"
                value={userAdd}
                onChange={(event) => {
                  setUserAdd(event.target.value)
                  props.setUserAdd(event.target.value)
                }}
                required
              />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Group as={Row} controlId="OderRemarks">
            <Form.Label column sm="2">
              收件備註
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="司機大哥謝謝你~"
                value={userComment}
                onChange={(e) => {
                  setUserComment(e.target.value)
                  props.setUserComment(e.target.value)
                }}
              />
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
            <Form.Check
              type="checkbox"
              label="與訂購人相同"
              onClick={handleChangeChecked}
            />
          </Form.Group>
        </Card.Header>
        <Card.Body>
          <Form.Group as={Row} controlId="RecipientName">
            <Form.Label column sm="2">
              姓名
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="輸入姓名"
                value={recipientName}
                onChange={(e) => {
                  setRecipientName(e.target.value)
                  props.setRecipientName(e.target.value)
                }}
                required
              />
            </Col>
          </Form.Group>
          <div className="line"></div>
          <Form.Group as={Row} controlId="RecipientPhone">
            <Form.Label column sm="2">
              手機號碼
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="輸入手機號碼"
                value={recipientPhone}
                onChange={(e) => {
                  setRecipientPhone(e.target.value)
                  props.setRecipientPhone(e.target.value)
                }}
                required
              />
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
                  value={recipientCountry}
                  onChange={(event) => {
                    setRecipientCountry(event.target.value)
                    setRecipientTownship(-1)
                    props.setRecipientCountry(event.target.value)
                  }}
                  required
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
                  value={recipientTownship}
                  onChange={(event) => {
                    setRecipientTownship(event.target.value)
                    props.setRecipientTownship(event.target.value)
                  }}
                  required
                >
                  <option value={-1}>請選擇區域</option>
                  {userCountry > -1 &&
                    townships[userCountry].map((v, i) => (
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
              <Form.Control
                type="text"
                placeholder="請輸入地址"
                value={recipientAdd}
                onChange={(e) => {
                  setRecipientAdd(e.target.value)
                  props.setRecipientAdd(e.target.value)
                }}
                required
              />
            </Col>
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  )
}
export default CheckOut_Person
