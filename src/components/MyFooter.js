import React, { useState, useEffect } from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'


function MyFooter(props) {
  return (
    <>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div class="icon">
            <div class="icon_circle"><GrFacebookOption size="18" color="#f5f5f5" /></div>
            <div class="icon_circle"><AiOutlineInstagram size="18" color="#f5f5f5" /></div>
            <div class="icon_circle"><AiOutlineTwitter size="18" color="#f5f5f5" /></div>
          </div>
          <div class="navLink">
            <Nav className="mr-auto">
              <Nav.Link href="#news">最新消息</Nav.Link>
              <AiOutlineMinus size="24" color="#f5f5f5"/>
              <Nav.Link href="#motor">機車租賃</Nav.Link>
              <AiOutlineMinus size="24" color="#f5f5f5"/>
              <Nav.Link href="#products">周邊商品</Nav.Link>
              <AiOutlineMinus size="24" color="#f5f5f5"/>
              <Nav.Link href="#location">據點消息</Nav.Link>
            </Nav>
          </div>
          <div><h3>客服電話：02-12345678</h3></div>
          <div class="end"><p>@123456789</p></div>
        </div>
          
      </footer>
    </>
  )
}

export default MyFooter
