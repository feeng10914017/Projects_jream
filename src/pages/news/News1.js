import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineFolderOpen } from 'react-icons/ai'
import RelatedMember from '../../components/news/RelatedMember'
import { ImNewspaper } from 'react-icons/im'

import '../../styles/news/news.scss'

function News1() {
  return (
    <>
      <div className="wrapper">
        <div className="container pagination_news">
          <div className="pagination_news_content position-relative">
            <h4 className=" py-3 pagination_news bh1">
              [會員快訊] 『會員專屬』一月行事曆
            </h4>
            <div className="news_index_detail d-flex justify-content-between pt-2">
              <div className="news_index_detail_icon_group d-flex justify-content-between">
                <div className="category_group d-flex">
                  <ImNewspaper style={{ height: '1.5rem', width: '1.5rem' }} />
                  <p style={{ margin: '0 0 0 5px' }}>會員快訊</p>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="time_group d-flex">
                  <AiOutlineClockCircle
                    style={{ height: '1.5rem', width: '1.5rem' }}
                  />
                  <p style={{ margin: '0 0 0 5px' }}>2021/01/01</p>
                </div>
              </div>
            </div>
            <br />
            <img
              style={{ width: '100%' }}
              src="http://localhost:3000/images/news/月份行事曆一月.jpg"
              alt="1"
            />

            <p className="py-5" style={{ whiteSpace: 'pre-wrap' }}>
              <p>來小小的公告一下我們的租車活動</p>
              <p>現在還有租車APP可以使用 訂車更快速🥰🥰</p>
              <p>
                貼心提醒： 有在鴻寶租過車或是買車的
                即有資料可以登入不需註冊唷🥰🥰 ⚠️也可以利用邀請碼邀請新人加入⚠️
              </p>
              <p>
                {/* 為提供頂級的運動速克達典範，車體採用全鋁合金車架、41mm倒立式前叉與多連桿後懸吊，兼具操控性與行車質感；「TMAX
                Tech
                MAX」更具備定速系統、電動風鏡、加熱把手與加熱坐墊等高規格配置，讓騎乘者以優雅之姿高速巡航。 */}
              </p>
              <p>
                {/* 全新2021年式「TMAX 560」共有「TMAX Tech
                MAX」以及「TMAX」(*註一)兩個版本供消費者選擇，並分別提供2款配色、共4款車型供選擇。 */}
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
              <RelatedMember />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default News1
