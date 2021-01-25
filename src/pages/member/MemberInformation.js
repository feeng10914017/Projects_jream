import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Table, Button } from 'react-bootstrap'

import './member.scss'

function Information({ member, setMember }) {
  const [memberData, setMemberData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  )
  console.log('inf memberData', memberData)
  console.log('member', member)
  return (
    <>
      <MemberNav member={memberData} setMember={setMember} />
      <Table className="MBI">
        <tbody className="MBItr">
          <tr>
            <td className="MBItdC">姓名</td>
            <td className="MBItdL">{memberData.memberName}</td>
          </tr>
          <tr>
            <td className="MBItdC">暱稱</td>
            <td className="MBItdL">{memberData.memberNickname}</td>
          </tr>
          <tr>
            <td className="MBItdC">生日</td>
            <td className="MBItdL">{memberData.memberBirth}</td>
          </tr>
          <tr>
            <td className="MBItdC">性別</td>
            <td className="MBItdL">{memberData.memberGender}</td>
          </tr>
          <tr>
            <td className="MBItdC">信箱</td>
            <td className="MBItdL">{memberData.memberEmail}</td>
          </tr>
          <tr>
            <td className="MBItdC">手機</td>
            <td className="MBItdL">{memberData.memberPhone}</td>
          </tr>
          <tr>
            <td className="MBItdC">電話</td>
            <td className="MBItdL">{memberData.memberTelephone}</td>
          </tr>
          <tr>
            <td className="MBItdC">地址</td>
            <td className="MBItdL">{memberData.memberAddress}</td>
          </tr>
          <tr>
            <td className="MBItdC"></td>
            <td className="MBItdR">
              <Link to="/member/Edit">
                <Button
                  variant="primary"
                  type="submit"
                  memberData={memberData}
                  setMember={setMember}
                >
                  修改
                </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Link to="/member">
        <Button
          variant="primary"
          type="submit"
          style={{ margin: '16px 16px 0 250px' }}
        >
          回首頁
        </Button>
      </Link>
    </>
  )
}

export default withRouter(Information)
