import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineFolderOpen } from 'react-icons/ai'
import RelatedMotor from '../../components/news/RelatedMotor'
import { ImNewspaper } from 'react-icons/im'

import '../../styles/news/news.scss'

function News2() {
  return (
    <>
      <div className="wrapper">
        <div className="container pagination_news">
          <div className="pagination_news_content position-relative">
            <h4 className=" py-3 pagination_news bh1">
              [新車報到] 英國猛虎登場！Triumph「TIGER 850 SPORT」
            </h4>
            <div className="news_index_detail d-flex justify-content-between pt-2">
              <div className="news_index_detail_icon_group d-flex justify-content-between">
                <div className="category_group d-flex">
                  <ImNewspaper style={{ height: '1.5rem', width: '1.5rem' }} />
                  <p style={{ margin: '0 0 0 5px' }}>新車報到</p>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="time_group d-flex">
                  <AiOutlineClockCircle
                    style={{ height: '1.5rem', width: '1.5rem' }}
                  />
                  <p style={{ margin: '0 0 0 5px' }}>2020/10/23</p>
                </div>
              </div>
            </div>
            <br />
            <img src="http://localhost:3000/images/news/motor2.jpg" alt="1" />

            <p className="py-5" style={{ whiteSpace: 'pre-wrap' }}>
              <p>英國猛虎登場！Triumph「TIGER 850 SPORT」</p>
              <p>
                Triumph在上周向車迷們發表了搭載三缸引擎的冒險車款TIGER 850
                SPORT，日本建議售價維139萬日圓（含稅），預計2021年2月起開始交車。
              </p>
              <p>
                TIGER 850
                SPORT搭載專用的並列三缸引擎，由於量身打造的規格配備及高科技，讓它實現前所未有的操控和乘坐便利性，也因為它是以最新一代的TIGER為基礎進行開發，因此具有熟悉的動感外觀和敏捷處理。
              </p>
              <p>
                通過結合新型“ Taylor
                Made”的性能和規格，將其設計為一款易於操作，專注於道路並能響應任何騎行的冒險自行車。
              </p>
              <p>
                全新2021年式「TIGER 850 SPORT」共有「TIGER 850
                SPORT」以及「TIGER 850
                SPORT」(*註一)兩個版本供消費者選擇，並分別提供2款配色、共4款車型供選擇。
              </p>
            </p>

            <Link
              to="/news"
              className="position-absolute btn btn01 back_to_list"
            >
              返回公告頁
            </Link>
          </div>
          <div className="related_news">
            <h2 className="bh2">相關新聞</h2>
            <ul className="d-flex justify-content-between">
              <RelatedMotor />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default News2
