import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function Login() {
  return (
    <>
      <Form style={{ marginTop: '80px' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>帳號:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>密碼:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to="/member">
          <Button variant="primary" type="submit">
            登入
          </Button>
        </Link>
      </Form>
    </>
  )
}

export default Login
