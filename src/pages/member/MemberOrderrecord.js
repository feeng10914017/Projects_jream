import React from 'react'
import { withRouter } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Form, Col } from 'react-bootstrap'

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
      <button onClick={() => props.history.push('/member')}>回首頁</button>
    </>
  )
}

export default withRouter(Orderrecord)
