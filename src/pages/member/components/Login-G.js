import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import '../login.scss'

import { refreshTokenSetup } from '../utils/refreshToken'

const clientId =
  '901766639548-1q68ne39r4honv8veh9j001t7buqn209.apps.googleusercontent.com'

function LoginG() {
  let history = useHistory()
  const onSuccess = (res) => {
    alert(`登入成功 welcome ${res.profileObj.name}.`)
    console.log('Login Success: currentUser:', res.profileObj)
    refreshTokenSetup(res)
    history.push('/member') //這裡以後會跳轉到首頁
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
  }
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  })

  return (
    <>
      <button onClick={signIn} className="fb-btn A-Btn Login-button">
        <span className="buttonText">Sign in with Google</span>
      </button>
    </>
  )
}
export default LoginG
