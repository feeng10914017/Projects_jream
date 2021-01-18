import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginG from './components/Login-G'
import LogoutG from './components/Logout-G'
import './login.scss'

function Login() {
  useEffect(() => {
    document.querySelector('.img__btn').addEventListener('click', () => {
      document.querySelector('.cont').classList.toggle('s--signup')
    })
  })
  // const responseGoogle = (response) => {
  //   console.log(response)
  // }
  return (
    <>
      <div className="cont">
        <div className="form sign-in A-label">
          <h2 className="AL-h2">Welcome back,</h2>
          <label>
            <span>Email</span>
            <input type="email" className="LI-input" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" className="LI-input" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <Link to="./Member">
            <button type="button" className="submit A-Btn Login-button">
              Sign In
            </button>
          </Link>
          <LoginG />
          <LogoutG />
          {/* <button type="button" className="fb-btn A-Btn Login-button">
            Connect with <span>facebook</span>
          </button> */}

          <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2 className="AL-h2-2">New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2 className="AL-h2-2">One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up A-label">
            <h2 className="AL-h2">Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input type="text" className="LI-input" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" className="LI-input" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" className="LI-input" />
            </label>
            <button type="button" className="submit A-Btn Login-button">
              Sign Up
            </button>
            <LoginG />
            {/* <button type="button" className="fb-btn A-Btn Login-button">
              Join with <span>facebook</span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
