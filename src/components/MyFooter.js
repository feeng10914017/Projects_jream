import React, { useState, useEffect } from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

function MyFooter(props) {
  return (
    <>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="icon">
            <div className="icon_circle">
              <GrFacebookOption size="18" color="#f5f5f5" />
            </div>
            <div className="icon_circle">
              <AiOutlineInstagram size="18" color="#f5f5f5" />
            </div>
            <div className="icon_circle">
              <AiOutlineTwitter size="18" color="#f5f5f5" />
            </div>
          </div>
          <div className="navLink">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/news">
                <p>最新消息</p>
              </Nav.Link>
              <AiOutlineMinus size="24" color="#f5f5f5" />
              <Nav.Link as={NavLink} to="/motor">
                <p>機車租賃</p>
              </Nav.Link>
              <AiOutlineMinus size="24" color="#f5f5f5" />
              <Nav.Link as={NavLink} to="/product">
                <p>周邊商品</p>
              </Nav.Link>
              <AiOutlineMinus size="24" color="#f5f5f5" />
              <Nav.Link as={NavLink} to="/location">
                <p>據點消息</p>
              </Nav.Link>
            </Nav>
          </div>
          <div>
            <h6>客服電話：0800 - 6631 - 8168</h6>
          </div>
          <div className="end">
            <p>© 2019 JREAM MOTOR TAIWAN CO., LTD. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyFooter
