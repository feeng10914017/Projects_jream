import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Image } from 'react-bootstrap'

import './member.scss'
import './login.scss'

// var background = { backgroundSize: 'cover' }

function Login(props) {
  useEffect(() => {
    document.querySelector('.img__btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s--signup')
    })
  })
  return (
    <>
      {/* <p className="tip">Click on button in image container</p> */}
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome back,</h2>
          <label>
            <span>Account</span>
            <input type="account" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <Link to="./Member">
            <button type="button" className="submit A-Btn">
              Sign In
            </button>
          </Link>
          <button type="button" className="fb-btn A-Btn">
            Connect with <span>facebook</span>
          </button>
          <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Account</span>
              <input type="account" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <button type="button" className="submit A-Btn">
              Sign Up
            </button>
            <button type="button" className="fb-btn A-Btn">
              Join with <span>facebook</span>
            </button>
          </div>
        </div>
      </div>
    </>
    // <div className="A-login">
    //   <div style={{ width: 'auto', position: 'relative' }}>
    //     <Button className="A-SIG">圖片文字</Button>
    //     <Image
    //       style={background}
    //       responsive
    //       src="http://localhost:3000/images/home/images2.jpg"
    //     ></Image>
    //   </div>
    //   <Form>
    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Label>帳號:</Form.Label>
    //       <Form.Control type="email" placeholder="Account" />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicPassword">
    //       <Form.Label>密碼:</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicCheckbox">
    //       <Form.Check type="checkbox" label="保持登入" />
    //     </Form.Group>
    //     <Link to="/member">
    //       <Button variant="primary" type="submit">
    //         登入
    //       </Button>
    //     </Link>
    //     <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
    //   </Form>
    // </div>
  )
}

export default Login
