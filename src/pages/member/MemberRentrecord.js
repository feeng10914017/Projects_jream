import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import MotoR from './components/MotoR'
import { Form, Col, Card, ListGroup, Button } from 'react-bootstrap'
import Moto from './images/159983596847-removebg-preview.png'

function Rentrecord() {
  return (
    <>
      <MemberNav />
      <Form.Group as={Col} controlId="formGridState" className="A-MotoFrom">
        <td>
          <Form.Label>查詢紀錄：</Form.Label>
        </td>
        <td>
          <Form.Control as="select" defaultValue="Choose">
            <option selected>全部</option>
            <option>兩個月內</option>
            <option>一年內</option>
          </Form.Control>
        </td>
      </Form.Group>
      <Card className="A-MotoCard">
        <Card.Header>
          <th>
            <td>
              <p className="A-MotoNum">租賃編號</p>
            </td>
            <td>
              <p className="A-MotoTimeC">取車時間</p>
            </td>
          </th>
        </Card.Header>
        <ListGroup variant="flush" className="A-MotoList">
          <MotoR />
          <MotoR />
          <MotoR />
          <MotoR />
          <MotoR />
        </ListGroup>
      </Card>
      <Link to="/member">
        <button>回首頁</button>
      </Link>
    </>
  )
}

export default withRouter(Rentrecord)
