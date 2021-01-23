import React, { useState, userEffect } from 'react'
import { Link, withRouter, useHistory, useParams } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Table, Button } from 'react-bootstrap'

import './member.scss'

function Information() {
  let history = useHistory()
  let { id } = useParams()
  const [memberData, setMemberData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  )
  console.log('ed member', memberData)
  const [memberName, setMemberName] = useState(memberData.memberName)
  const [memberNickname, setMeNickname] = useState(memberData.memberNickname)
  const [memberBirth, setMemberBirth] = useState(memberData.Birth)
  const [memberGender, setMemberGender] = useState(memberData.Gender)
  const [memberEmail, setMemberEmail] = useState(memberData.memberEmail)
  const [memberPhone, setMemberPhone] = useState(memberData.memberPhone)
  const [memberTelephone, setMemberTelephone] = useState(
    memberData.memberTelephone
  )
  const [memberAddress, setMemberAddress] = useState(memberData.memberAddress)
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  // async function getMember() {
  //   try {
  //     const response = await fetch('http://localhost:5555/editmember', {
  //       method: 'get',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         memberName,
  //         memberNickname,
  //         memberBirth,
  //         memberGender,
  //         memberEmail,
  //         memberPhone,
  //         memberTelephone,
  //         memberAddress,
  //       }),
  //     })
  //     if (response.ok) {
  //       const data = await response.json()
  //       console.log('WHO', data)
  //       if (data) {
  //         setMemberEmail(data)
  //         console.log('member', member)
  //         console.log('data', data)
  //         localStorage.setItem('userData', JSON.stringify(data))
  //         // setAuth(true)
  //       } else {
  //         console.log('error')
  //       }
  //     }
  //   } catch (err) {
  //     // alert('無法辨識資料')
  //     console.log(err)
  //   }
  // }
  async function updateMember(id) {
    const newMember = {
      id,
      memberName,
      memberNickname,
      memberBirth,
      memberGender,
      memberEmail,
      memberPhone,
      memberTelephone,
      memberAddress,
    }
    try {
      const response = await fetch(`http://localhost:5555/editmember/${id}`, {
        method: 'put',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMember),
      })
      if (response.ok) {
        const data = await response.json()
        if (data) {
          setMemberEmail(data)
          console.log('data', data)
          localStorage.setItem('userData', JSON.stringify(data))
          if (data) alert('更新成功')
          history.push('/member/information')
        } else {
          console.log('error')
        }
      }
    } catch (err) {
      // alert('無法辨識資料')
      console.log(err)
    }
  }
  // userEffect(() => {
  //   if (memberData === 1) {
  //     setMemberData()
  //     console.log('沒值', id)
  //     updateMember(id)
  //     console.log('hi 沒有值', id)
  //     updateMember(memberData.id)
  //     console.log('member.id 沒有值', memberData.id)
  //     console.log('member', memberData)
  //   }
  // }, [memberData, id])
  return (
    <>
      <MemberNav />
      <Table
        className="MBI"
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
                defaultValue={memberData.memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">暱稱</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={memberData.memberNickname}
                onChange={(e) => setMeNickname(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">生日</td>
            <td className="MBItdL">
              <input
                type="date"
                defaultValue={memberData.memberBirth}
                onChange={(e) => setMemberBirth(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">性別</td>
            <td className="MBItdL">
              <select
                defaultValue={memberData.memberGender}
                onChange={(e) => setMemberGender(e.target.value)}
              >
                <option disabled>請選擇</option>
                <option value="1">男</option>
                <option value="2">女</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="MBItdC">信箱</td>
            <td className="MBItdL">
              <input
                type="email"
                defaultValue={memberData.memberEmail}
                onChange={(e) => setMemberEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">手機</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={memberData.memberPhone}
                onChange={(e) => setMemberPhone(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">電話</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={memberData.memberTelephone}
                onChange={(e) => setMemberTelephone(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="MBItdC">地址</td>
            <td className="MBItdL">
              <input
                type="text"
                defaultValue={memberData.memberAddress}
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
                  updateMember(memberData.id)
                  console.log('onclick ed', memberData.id)
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
