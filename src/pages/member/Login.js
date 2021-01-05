import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function Login() {
  return (
    <>
      <div>
        <Form
          style={{
            margin: '0 auto',
            marginTop: '125px',
            padding: 0,
            // min-width: 500px,
            maxwidth: '600px',
            width: '350px',
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>帳號:</Form.Label>
            <Form.Control type="email" placeholder="Account" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>密碼:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="保持登入" />
          </Form.Group>
          <Link to="/member">
            <Button variant="primary" type="submit">
              登入
            </Button>
          </Link>
        </Form>
      </div>
    </>
  )
}

export default Login
