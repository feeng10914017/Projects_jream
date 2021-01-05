import React from 'react'
import Card from '../../components/Card'
import Moto from '../../components/images/159983596847-removebg-preview.png'
import Product from '../../components/images/7418807_R-removebg-preview.png'

import { Container, Row, Col } from 'react-bootstrap'

function Member(props) {
  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center', marginTop: '48px' }}>
          歡迎XXX!,歡迎來到會員首頁
        </h2>
        <Card />
        <h3 style={{ marginTop: '48px', marginBottom: '16px' }}>
          上次租用車款
        </h3>
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
        <h3 style={{ marginTop: '16px', marginBottom: '16px' }}>配件選購</h3>
        <Container style={{ marginBottom: '48px' }}>
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
