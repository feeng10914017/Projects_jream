import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Image } from 'react-bootstrap'

import './member.scss'

var background = { backgroundSize: 'cover' }

function Login(props) {
  return (
    <div className="A-login">
      <div style={{ width: 'auto', position: 'relative' }}>
        <Button className="A-SIG">圖片文字</Button>
        <Image
          style={background}
          responsive
          src="http://localhost:3000/images/home/images2.jpg"
        ></Image>
      </div>
      <Form>
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
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
      </Form>
    </div>
  )
}

export default Login
