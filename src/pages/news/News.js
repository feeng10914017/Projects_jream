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
        {/* <div className="C-searchButtonGroup">
          <div
            className="C-searchButton"
            // value="1"
            // onClick={() => {
            //   pCategory_id = '1'
            //   categorySearch()
            // }}
          >
            # 休閒
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '2'
            //   categorySearch()
            // }}
          >
            # 冒險
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '3'
            //   categorySearch()
            // }}
          >
            # 動作
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '4'
            //   categorySearch()
            // }}
          >
            # 策略
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '5'
            //   categorySearch()
            // }}
          >
            # 競速
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '6'
            //   categorySearch()
            // }}
          >
            其他
          </div>
        </div>

        <div className="C-searchbarDiv">
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              className="C-searchBar"
              placeholder="搜尋"
              // onChange={(e) => {
              //   setSearchData(e.target.value)
              // }}
            />
            <AiOutlineSearch className="C-searchbarIcon" />
          </div>
        </div> */}

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
