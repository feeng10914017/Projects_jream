import React from 'react'
import { useGoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import '../login.scss'
const clientId =
  '901766639548-1q68ne39r4honv8veh9j001t7buqn209.apps.googleusercontent.com'

function LogoutG() {
  let history = useHistory()
  const onLogoutSuccess = (res) => {
    localStorage.clear()
    console.log('Logged out Success')
    alert('登出成功')
    history.push('/')
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  return (
    <>
      <button onClick={signOut} className="fb-btn A-Btn Login-button">
        <span className="buttonText">Sign out</span>
      </button>
    </>
  )
}

export default LogoutG
