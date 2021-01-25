import React, { useState, useEffect } from 'react'
import { Figure } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import NewTab from '../../components/news/NewTab'
import './News.css'
function News() {
  return (
    <>
      <div className="C-searchDiv position-relative">
        <Figure>
          <Figure.Image
            // width={'auto'}
            src="http://localhost:3000/images/news/bigpage.jpg"
          />
        </Figure>

        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0 auto' }}>
            <NewTab />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default News
