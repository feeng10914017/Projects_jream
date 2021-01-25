import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineFolderOpen } from 'react-icons/ai'
import { Breadcrumb } from 'react-bootstrap'
import { ImNewspaper } from 'react-icons/im'

import './News.css'

function News1() {
  return (
    <>
      <div className="wrapper">
        <div className="container pagination_news">
          <div className="pagination_news_content position-relative">
            <h4 className=" py-3 pagination_news bh1">
              [新車報到] 2021年式新色登場：「TMAX 560 」
            </h4>
            <div className="news_index_detail d-flex justify-content-between pt-2">
              <div className="news_index_detail_icon_group d-flex justify-content-between">
                <div className="category_group d-flex">
                  <ImNewspaper className="icon" />
                  <p>新車報到</p>
                </div>
                <div className="time_group d-flex">
                  <AiOutlineClockCircle className="icon" />
                  <p>2021/01/07</p>
                </div>
              </div>
            </div>
            <p className="py-5" style={{ whiteSpace: 'pre-wrap' }}>
              123
            </p>
            <Link to="/news" className="position-absolute btn back_to_list">
              返回公告頁
            </Link>
          </div>
          <div className="related_news">
            <h2 className="bh2">相關新聞</h2>
            {/* <ul className="d-flex justify-content-between">
              {relatedNews.map((v, i) => (
                <RelatedNews related={v} />
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default News1
