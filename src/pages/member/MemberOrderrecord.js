import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Form, Col, Card, ListGroup, Button } from 'react-bootstrap'
import OrderR from './components/OrderR'
import OrderRF from './components/OrderRF'

function Orderrecord(auth, setAuth) {
  return (
    <>
      <MemberNav />
      <Form.Group as={Col} controlId="formGridState" className="A-From">
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
      <Card className="A-ORCard1">
        <Card.Header>
          <th>
            <td>
              <p>訂單</p>
            </td>
            <td>
              <p className="A-ORCard2">訂單狀況</p>
            </td>
          </th>
        </Card.Header>
        <ListGroup variant="flush" className="A-OrderList">
          {localStorage.getItem('CartOrder') && <OrderR />}
          {/* <OrderRF /> */}
        </ListGroup>
      </Card>
      <Link to="/member">
        <Button
          variant="primary"
          type="submit"
          style={{ margin: '16px 16px 0 0' }}
        >
          回首頁
        </Button>
      </Link>
    </>
  )
}

export default withRouter(Orderrecord)
