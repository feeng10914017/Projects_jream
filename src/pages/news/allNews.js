import React, { useState, useEffect } from 'react'
import { Figure } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import NewTab2 from '../../components/news/NewTab2'

function News() {
  return (
    <>
      <div>
        <Figure>
          <Figure.Image
            // width={'auto'}
            src="http://localhost:3000/images/news/bigpage.jpg"
          />
        </Figure>

        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0 auto' }}>
            <NewTab2 />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default News
