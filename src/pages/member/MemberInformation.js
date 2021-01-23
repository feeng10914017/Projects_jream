import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Table, Button } from 'react-bootstrap'

import './member.scss'

function Information() {
  const [member] = useState(JSON.parse(localStorage.getItem('userData')))

  return (
    <>
      <MemberNav />
      <Table className="MBI" member={member}>
        <tbody className="MBItr">
          <tr>
            <td className="MBItdC">姓名</td>
            <td className="MBItdL">{member.memberName}</td>
          </tr>
          <tr>
            <td className="MBItdC">暱稱</td>
            <td className="MBItdL">{member.memberNickname}</td>
          </tr>
          <tr>
            <td className="MBItdC">生日</td>
            <td className="MBItdL">{member.memberBirth}</td>
          </tr>
          <tr>
            <td className="MBItdC">性別</td>
            <td className="MBItdL">{member.memberGender}</td>
          </tr>
          <tr>
            <td className="MBItdC">信箱</td>
            <td className="MBItdL">{member.memberEmail}</td>
          </tr>
          <tr>
            <td className="MBItdC">手機</td>
            <td className="MBItdL">{member.memberPhone}</td>
          </tr>
          <tr>
            <td className="MBItdC">電話</td>
            <td className="MBItdL">{member.memberTelephone}</td>
          </tr>
          <tr>
            <td className="MBItdC">地址</td>
            <td className="MBItdL">{member.memberAddress}</td>
          </tr>
          <tr>
            <td className="MBItdC"></td>
            <td className="MBItdR">
              <Link to="/member/Edit">
                <Button variant="primary" type="submit">
                  修改
                </Button>
              </Link>
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
