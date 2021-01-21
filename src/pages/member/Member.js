import { React, useState } from 'react'
import Card from './components/Card'
import LogoutG from './components/Logout-G'
import Moto from './images/159983596847-removebg-preview.png'
import Product from './images/7418807_R-removebg-preview.png'

import { Row, Col } from 'react-bootstrap'

function Member() {
  // const [memberName, setMemberName] = useState()
  // fetch('http://localhost:5555/login', {
  //   method: 'post',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ memberName }),
  // })

  return (
    <>
      <div className="A-member">
        <h3>HI!!,歡迎來到會員首頁</h3>
        <Card />
        <LogoutG />
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
