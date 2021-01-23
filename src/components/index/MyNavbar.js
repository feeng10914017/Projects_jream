import { React, useState } from 'react'

import { IoPersonOutline } from 'react-icons/io5'
import { IoCartOutline } from 'react-icons/io5'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { withRouter, NavLink, Route, Redirect } from 'react-router-dom'

function MyNavbar({ auth, setAuth }) {
  // const { location } = props
  const [member, setMember] = useState(
    JSON.parse(localStorage.getItem('userData'))
  )
  // console.log(location.pathname)
  const loginout = (
    <Nav.Link as={NavLink} to="/login">
      <IoPersonOutline size="18" />
      <h6>登入</h6>
    </Nav.Link>
  )

  const login = (
    <>
      <NavDropdown title={<h6>{member && member.memberName}</h6>}>
        <NavDropdown.Item as={NavLink} to="/member">
          會員中心
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          as={NavLink}
          to="/"
          onClick={() => {
            localStorage.clear()
            sessionStorage.clear()
            setAuth(false)
          }}
        >
          登出
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )

  //一般header
  const display = (
    <>
      <header className="header ">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
          // fixed="top"
        >
          <Navbar.Brand href="#home">
            <Nav.Link as={NavLink} to="/">
              <img
                className="logo"
                src="http://localhost:3000/images/logo/logo_w.png"
                alt=""
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/news">
                <h6>最新消息</h6>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/motor">
                <h6>機車租賃</h6>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/product">
                <h6>周邊商品</h6>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/location">
                <h6>據點消息</h6>
              </Nav.Link>
            </Nav>
            <Nav>
              {auth ? login : loginout}
              {/* <Nav.Link as={NavLink} to="/login">
                <IoPersonOutline size="18" /> */}
              {/* {auth ? login : loginout} */}
              {/* </Nav.Link> */}
              <Nav.Link eventKey={2} as={NavLink} to="/order">
                <IoCartOutline size="20" />
                <h6>購物車</h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )

  const homeDisplay = (
    <>
      <header className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          fixed="top"
          bg="primary"
        >
          <Navbar.Brand href="#home">
            <Nav.Link as={NavLink} to="/">
              <img
                className="logo"
                src="http://localhost:3000/images/logo/logo_w.png"
                alt=""
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/news">
                <h6>最新消息</h6>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/motor">
                <h6>機車租賃</h6>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/product">
                <h6>周邊商品</h6>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/location">
                <h6>據點消息</h6>
              </Nav.Link>
            </Nav>
            <Nav>
              {/* {auth ? login : loginout} */}
              {/* <Nav.Link as={NavLink} to="/login">
                <IoPersonOutline size="18" />
                <h6>登入</h6>
              </Nav.Link> */}
              <Nav.Link eventKey={2} as={NavLink} to="/order">
                <IoCartOutline size="20" />
                <h6>購物車</h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )
  return (
    <>
      {/* {location.pathname === '/' || location.pathname == '/motor'
        ? homeDisplay
        : display} */}
      {/* {location.pathname === '/' ? homeDisplay : display} */}
      {display}
    </>
  )
}

export default withRouter(MyNavbar)
