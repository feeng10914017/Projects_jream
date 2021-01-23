import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Table, Button } from 'react-bootstrap'

import './member.scss'

function Information() {
  const [member, setMember] = useState(
    JSON.parse(localStorage.getItem('userData'))
  )
  const [memberName, setMemberName] = useState()
  const [memberNickName, setMeNickName] = useState()
  const [memberBirth, setMemberBirth] = useState()
  const [memberGender, setMemberGender] = useState()
  const [memberEmail, setMemberEmail] = useState()
  const [memberPhone, setMemberPhone] = useState()
  const [memberTelephone, setMemberTelephone] = useState()
  const [memberAddress, setMemberAddress] = useState()
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
  async function getMember() {
    try {
      const response = await fetch('http://localhost:5555/editmember', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          memberName,
          memberNickName,
          memberBirth,
          memberGender,
          memberEmail,
          memberPhone,
          memberTelephone,
          memberAddress,
        }),
      })
      if (response.ok) {
        const data = await response.json()
        console.log('WHO', data)
        if (data) {
          setMember(data)
          console.log('member', member)
          console.log('data', data)
          localStorage.setItem('userData', JSON.stringify(data))
          // setAuth(true)
        } else {
          console.log('error')
        }
      }
    } catch (err) {
      // alert('無法辨識資料')
      console.log(err)
    }
  }
  async function updateMember() {
    try {
      const response = await fetch('http://localhost:5555/editmember', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          memberName,
          memberNickName,
          memberBirth,
          memberGender,
          memberEmail,
          memberPhone,
          memberTelephone,
          memberAddress,
        }),
      })
      if (response.ok) {
        const data = await response.json()
        console.log('WHO', data)
        if (data) {
          setMember(data)
          console.log('member', member)
          console.log('data', data)
          localStorage.setItem('userData', JSON.stringify(data))
          // setAuth(true)
        } else {
          console.log('error')
        }
      }
    } catch (err) {
      // alert('無法辨識資料')
      console.log(err)
    }
  }
  return (
    <>
      <MemberNav />
      <Table
        className="MBI"
        member={member}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <tbody className="MBItr">
          <tr>
            <td className="MBItdC">姓名</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={member.memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">暱稱</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={member.memberNickName}
                onChange={(e) => setMeNickName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">生日</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={member.memberBirth}
                onChange={(e) => setMemberBirth(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">性別</td>
            <td className="MBItdL">{member.memberGender}</td>
          </tr>
          <tr>
            <td className="MBItdC">信箱</td>
            <td className="MBItdL">
              <input
                type="email"
                defaultValue={member.memberEmail}
                onChange={(e) => setMemberEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">手機</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={member.memberPhone}
                onChange={(e) => setMemberPhone(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">電話</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={member.memberTelephone}
                onChange={(e) => setMemberTelephone(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">地址</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={member.memberAddress}
                onChange={(e) => setMemberAddress(e.target.value)}
                size="30"
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC"></td>
            <td className="MBItdR">
              <Link to="/member/information">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginRight: '16px' }}
                >
                  取消
                </Button>
              </Link>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  updateMember(member.id)
                  console.log('onclick ed', member.id)
                }}
              >
                確認修改
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Link to="/member">
        <button>回首頁</button>
      </Link>
    </>
  )
}

export default withRouter(Information)
