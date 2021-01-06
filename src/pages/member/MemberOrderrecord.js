import React from 'react'
import { withRouter } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Form, Col, Card, ListGroup } from 'react-bootstrap'
import Product from './images/7418807_R-removebg-preview.png'

function Orderrecord(props) {
  const { isAuth } = props
  return (
    <>
      <MemberNav />
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label style={{ width: '350px', margin: '0 auto' }}>
          查詢：
        </Form.Label>
        <Form.Control
          as="select"
          defaultValue="Choose"
          style={{ width: '350px', margin: '0 auto' }}
        >
          <option>兩個月</option>
          <option>一年</option>
        </Form.Control>
      </Form.Group>
      <Card style={{ width: '1100px', margin: '0 auto' }}>
        <Card.Header>
          <th>
            <td>
              <p style={{ margin: '0', marginLeft: '48px' }}>訂單</p>
            </td>
            <td>
              <p style={{ margin: '0', marginLeft: '500px' }}>訂單</p>
            </td>
          </th>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <img
              src={Product}
              alt="Product"
              height="180px"
              width="180px"
              style={{ margin: '32px 0 32px 48px' }}
            />
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item>
            <img
              src={Product}
              alt="Product"
              height="180px"
              width="180px"
              style={{ margin: '32px 0 32px 48px' }}
            />
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item>
            <img
              src={Product}
              alt="Product"
              height="180px"
              width="180px"
              style={{ margin: '32px 0 32px 48px' }}
            />
            Cras justo odio
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <button onClick={() => props.history.push('/member')}>回首頁</button>
    </>
  )
}

export default withRouter(Orderrecord)
