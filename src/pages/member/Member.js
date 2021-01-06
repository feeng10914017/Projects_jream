import React from 'react'
import Card from './components/Card'
import Moto from './images/159983596847-removebg-preview.png'
import Product from './images/7418807_R-removebg-preview.png'

import { Container, Row, Col } from 'react-bootstrap'
import './member.scss'

function Member(props) {
  return (
    <>
      <div className="A-member">
        <h3>歡迎XXX!,歡迎來到會員首頁</h3>
        <Card />
        <h4>上次租用車款</h4>
        <Container>
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
        </Container>
        <h4>配件選購</h4>
        <Container>
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
        </Container>
      </div>
    </>
  )
}

export default Member
