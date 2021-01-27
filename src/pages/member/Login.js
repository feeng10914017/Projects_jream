import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginG from './components/Login-G'

// import PropTypes from 'prop-types'
import './login.scss'

//

//
function Login(props) {
  const { location, setIsAuth, setAuth } = props
  const history = useHistory()
  const [member, setMember] = useState([])
  const [memberEmail, setMemberEmail] = useState('')
  const [password, setPassword] = useState('')
  const [memberName, setMemberName] = useState('')
  const [memberBirth, setMemberBirth] = useState('')

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      event.stopPropagation()
      getMember()
    }
    setValidated(true)
  }
  const handleSubmitS = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      event.stopPropagation()
      getMemberU()
    }
    setValidated(true)
  }
  //登入
  async function getMember() {
    try {
      const response = await fetch('http://localhost:5555/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberEmail, password }),
      })
      console.log('email?', memberEmail)
      if (response.ok) {
        const data = await response.json()
        console.log('WHO', data)
        if (data) {
          setMember(data)
          console.log('member', member)
          console.log('data', data)
          localStorage.setItem('userData', JSON.stringify(data))
          setAuth(true)
        } else {
          console.log('error')
        }
      }
    } catch (err) {
      // alert('無法辨識資料')
      console.log(err)
    }
  }

  //註冊
  async function getMemberU() {
    try {
      const response = await fetch('http://localhost:5555/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          memberName,
          memberBirth,
          memberEmail,
          password,
        }),
      })
      console.log('email?', memberEmail)
      if (response.ok) {
        const data = await response.json()
        console.log('WHO', data)
        if (data) {
          setMember(data)
        } else {
          console.log('error')
        }
      }
    } catch (err) {
      // alert('無法辨識資料')
      console.log(err)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      alert('登入成功')
      history.push('/member')
    } else {
      console.log('請重新輸入')
    }
  }, [member])

  useEffect(() => {
    document.querySelector('.img__btn').addEventListener('click', () => {
      document.querySelector('.cont').classList.toggle('s--signup')
    })
  })

  return (
    <>
      <div className="cont">
        <form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="form sign-in A-label">
            <h2 className="AL-h2">夢想啟程</h2>
            <label>
              <span>Email</span>
              <input
                type="email"
                className="LI-input"
                onChange={(e) => setMemberEmail(e.target.value)}
                required="required"
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                className="LI-input"
                onChange={(e) => setPassword(e.target.value)}
                required="required"
              />
            </label>
            <button
              type="submit"
              className="submit A-Btn Login-button"
              onClick={() => {
                if (member.id === true) {
                  setIsAuth(true)
                }
              }}
            >
              登入
            </button>
            {/* <LoginG /> */}

            <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
          </div>
        </form>
        <div className="sub-cont">
          <form noValidate validated={validated} onSubmit={handleSubmitS}>
            <div className="img">
              <div className="img__text m--up">
                <h2 className="AL-h2-2 h1">還沒加入會員嗎?</h2>
                <p className="h6">加入會員獲得更多資訊</p>
              </div>
              <div className="img__text m--in">
                <h2 className="AL-h2-2 h1">已經是我們的會員?</h2>
                <p className="h6">如果已經創建帳號，就直接登入吧~~</p>
              </div>
              <div className="img__btn">
                <span className="m--up h5">註冊</span>
                <span className="m--in h5">登入</span>
              </div>
            </div>
            <div className="form2 sign-up A-label">
              <h2 className="AL-h2">加入我們</h2>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  className="LI-input"
                  onChange={(e) => setMemberName(e.target.value)}
                  required="required"
                />
              </label>
              <label>
                <span>birth</span>
                <input
                  type="date"
                  className="LI-input"
                  onChange={(e) => setMemberBirth(e.target.value)}
                  required="required"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  className="LI-input"
                  onChange={(e) => setMemberEmail(e.target.value)}
                  required="required"
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  className="LI-input"
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                />
              </label>
              <button
                type="submit"
                className="submit A-Btn Login-button"
                onClick={() => {
                  window.location.reload()
                  alert('註冊成功')
                  if (member === true) {
                    setIsAuth(true)
                  }
                }}
              >
                註冊
              </button>
              {/* <LoginG /> */}
              {/* <button type="button" className="fb-btn A-Btn Login-button">
              Join with <span>facebook</span>
            </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// }

export default Login
