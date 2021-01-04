import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import LeaseImg from './images/Leoncino_250_gray.jpg'
import Table from 'react-bootstrap/Table'

import './order.scss'
import OrderStep from './OrderStep'
function Order() {
  return (
    <>
      <OrderStep />
      <Card>
        <Card.Header>
          <Nav fill variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#motor">
                <p>重機租賃</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#produc">
                <p>周邊商品</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body id="motor">
          <Table responsive>
            <thead>
              <tr>
                <th class="figu">
                  <img src={LeaseImg} />
                </th>
                <th>SUZUKI</th>
                <th>GSX - S1000S</th>
                <th>BROWN</th>
                <th>$1000</th>
              </tr>
            </thead>
          </Table>
          {/* <div class="cardTitle">
            <Card.Title>
              <p>SUZUKI</p>
              <p>GSX - S1000S</p>
              <p>BROWN</p>
            </Card.Title>
          </div> */}
          <hr />
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        <Card.Body id="produc">
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Order
