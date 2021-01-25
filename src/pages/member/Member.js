import { React, useState, useEffect } from 'react'
import Card from './components/Card'
import LogoutG from './components/Logout-G'
import Moto from './images/159983596847-removebg-preview.png'
import Product from './images/7418807_R-removebg-preview.png'

import { Row, Col } from 'react-bootstrap'

function Member() {
  const [member, setMember] = useState(
    JSON.parse(localStorage.getItem('userData'))
  )
  async function getMember(id) {
    try {
      const response = await fetch(`http://localhost:5555/information/${id}`, {
        mode: 'cors',
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(localStorage.getItem('userData')),
      })
      if (response.ok) {
        const data = await response.json()
        console.log('WHO', data)
        if (data) {
          setMember(data)
          console.log('member', member)
          console.log('data', data)
          localStorage.setItem('userData', JSON.stringify(data))
          // setAuth(true)
        } else {
          console.log('error')
        }
      }
    } catch (err) {
      // alert('無法辨識資料')
      console.log(err)
    }
  }
  useEffect(() => {
    getMember(member.id)
    console.log('member.id', member.id)
  })
  return (
    <>
      <div className="A-member">
        <h3>HI!{member.memberName},歡迎來到會員首頁</h3>
        <Card member={member} setMember={setMember} />
        {/* <LogoutG /> */}
        <h4>上次租用車款</h4>
        <Row>
          <Col>
            <img src={Moto} alt="Moto" height="220px" width="280px" />
          </Col>
          <Col>
            <img src={Moto} alt="Moto" height="220px" width="280px" />
          </Col>
          <Col>
            <img src={Moto} alt="Moto" height="220px" width="280px" />
          </Col>
        </Row>
        <h4>配件選購</h4>
        <Row>
          <Col>
            <img src={Product} alt="Product" height="180px" width="180px" />
          </Col>
          <Col>
            <img src={Product} alt="Product" height="180px" width="180px" />
          </Col>
          <Col>
            <img src={Product} alt="Product" height="180px" width="180px" />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Member
