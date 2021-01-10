import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import logo_w from './images/logo_w.png'
import { IoPersonOutline } from 'react-icons/io5'
import { IoCartOutline } from 'react-icons/io5'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  console.log(props)
  if (props.location.pathname === '/location')
    return (
      <>
        {' '}
        <header className="header">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="primary"
            variant="dark"
            // fixed="top"
          >
            <Navbar.Brand href="#home">
              <img className="logo" src={logo_w} alt="" />
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
                <Nav.Link as={NavLink} to="/login">
                  <IoPersonOutline size="18" color="#f5f5f5" />
                  <h6>登入</h6>
                </Nav.Link>
                <Nav.Link eventKey={2} as={NavLink} to="/orderI">
                  <IoCartOutline size="20" color="#f5f5f5" />
                  <h6>購物車</h6>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>{' '}
      </>
    )

  return (
    <>
      <header className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="#home">
            <img className="logo" src={logo_w} alt="" />
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
              <Nav.Link as={NavLink} to="/login">
                <IoPersonOutline size="18" color="#f5f5f5" />
                <h6>登入</h6>
              </Nav.Link>
              <Nav.Link eventKey={2} as={NavLink} to="/orderI">
                <IoCartOutline size="20" color="#f5f5f5" />
                <h6>購物車</h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )
}

// export default MyNavbar
export default withRouter(MyNavbar)
