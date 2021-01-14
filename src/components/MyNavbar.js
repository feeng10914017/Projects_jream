import React, { useState, useEffect } from 'react'
import $ from 'jquery'
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

import { withRouter, NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const { location } = props
  // console.log(location.pathname)

  // useEffect(() => {
  //   let navbarPosition = $('.bannerHeader').offset().top
  //   // console.log(navbarPosition)
  //   $(window).on('scroll', function () {
  //     let scrollTop = $(this).scrollTop()
  //     console.log(scrollTop)
  //     if (scrollTop >= navbarPosition) {
  //       $('.navbar').addClass('active')
  //       $('.logo').attr('src', 'http://localhost:3000/images/logo/logo_w.png')
  //       // console.log('+')
  //     } else {
  //       $('.navbar').removeClass('active')
  //       // console.log('-')
  //     }
  //   })
  // }, [])

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
              <Nav.Link as={NavLink} to="/login">
                <IoPersonOutline size="18" />
                <h6>登入</h6>
              </Nav.Link>
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
              <Nav.Link as={NavLink} to="/login">
                <IoPersonOutline size="18" />
                <h6>登入</h6>
              </Nav.Link>
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
      {location.pathname == '/' ? homeDisplay : display}
      {/* {display} */}
    </>
  )
}

export default withRouter(MyNavbar)
