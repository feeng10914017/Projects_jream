import React, { useState, useEffect } from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

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
        </div>
      </footer>
    </>
  )
}

export default MyFooter
