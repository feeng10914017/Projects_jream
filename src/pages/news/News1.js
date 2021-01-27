import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineFolderOpen } from 'react-icons/ai'
import RelatedNews from '../../components/news/RelatedNews'
import { ImNewspaper } from 'react-icons/im'

import '../../styles/news/news.scss'

function News1() {
  return (
    <>
      <div className="wrapper">
        <div className="container pagination_news">
          <div className="pagination_news_content position-relative">
            <h4 className=" py-3 pagination_news bh1">
              [會員快訊] 2021 會員專屬 農曆年全省道路救援方案
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
                  <p style={{ margin: '0 0 0 5px' }}>2021/01/11</p>
                </div>
              </div>
            </div>
            <br />
            <img
              src="http://localhost:3000/images/news/YMS_01_big.jpg"
              alt="1"
            />

            <p className="py-5" style={{ whiteSpace: 'pre-wrap' }}>
              <p>
                2021年式「TMAX
                560」新色上市，將自2021年1月7日於全台YMS展開預購。
              </p>
              <p>
                身為全球頂尖速克達王者與「MAX」家族精神領袖，全新第七代「TMAX
                560」追求極致騎乘體驗，兼具高質感設計與運動性能表現。透過全面提升的動力系統、更具侵略感的外觀以及高規格配備，演繹旗艦王者風範。
              </p>
              <p>
                搭載水冷 DOHC 562cc
                雙缸引擎，承襲「TMAX」車系一貫的優異性能，並藉由最適化CVT傳動調校，提供飽滿而順暢的加速表現。
                在外型設計上，透過銳利車側線條，自車頭一路延伸至後方，配上簡約的前LED方向燈，以及融合「T」字元素尾燈造型，展現俐落感與深刻的「MAX」印記。
              </p>
              <p>
                為提供頂級的運動速克達典範，車體採用全鋁合金車架、41mm倒立式前叉與多連桿後懸吊，兼具操控性與行車質感；「TMAX
                Tech
                MAX」更具備定速系統、電動風鏡、加熱把手與加熱坐墊等高規格配置，讓騎乘者以優雅之姿高速巡航。
              </p>
              <p>
                全新2021年式「TMAX 560」共有「TMAX Tech
                MAX」以及「TMAX」(*註一)兩個版本供消費者選擇，並分別提供2款配色、共4款車型供選擇。
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
              <RelatedNews />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default News1
