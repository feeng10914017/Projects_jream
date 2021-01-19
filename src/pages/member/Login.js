import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import GoogleLogin from 'react-google-login'

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
      <article className="cont">
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
          {/* <GoogleLogin
            clientId="901766639548-dbbqmn3rl36n9aos6lk09vqa41u0k2g7.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="loginBtn loginBtn--google"
              >
                Login with Google
              </button>
            )}
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          /> */}
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
      </article>
    </>
  )
}

export default Login
