import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import '../member.scss'

function MemberNav() {
  return (
    <>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/Information">
            個人資料
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/Favorite">
            車輛最愛
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/rent-record">
            租車紀錄
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/order-record">
            訂單紀錄
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default MemberNav
