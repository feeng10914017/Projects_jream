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
              [會員快訊] 2020振興無極限 超狂翻倍購車專案
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
                  <p style={{ margin: '0 0 0 5px' }}>2020/08/03</p>
                </div>
              </div>
            </div>
            <br />
            <img
              style={{ width: '100%' }}
              src="http://localhost:3000/images/news/12345.jpg"
              alt="1"
            />

            <p className="py-5" style={{ whiteSpace: 'pre-wrap' }}>
              <p>
                為了持續實現「Be Your
                Wing」的品牌精神，致力滿足台灣消費者對於Honda大型重機商品與服務的期待為首要目標，以為顧客建構完善的二輪環境為核心理念，導入全級距的車款商品，並同步推動「6S」服務，不斷地為車主打造完善的二輪環境，並努力深耕台灣二輪市場。自今年2020年式最新車款陸續到港，其中包含全新CRF1100L
                Africa Twin、REBEL500、Super Cub C125等全新導入商品外，更有Neo
                Sports
                Café風格的CB1000R、傳承經典的CB1100RS以及操控性多樣化、面對不同道路的X-ADV、NC750X，頂級巡航二輪GOLDWING皆是具有高人氣的車款，並搭配多場顧客試乘與外展活動的舉辦，讓對於Jream有興趣的消費者與車主們，讓更多顧客能與一同實現安全與樂趣並行的二輪體驗。
              </p>
              <p>
                為了感謝車主們持續的鼓勵與支持以及響應政府振興券的推行，本月祭出「振興無極限
                超狂翻倍」購車專案，自2020/8/1起，本月購入指定車款並領牌的車主朋友即可享有使用振興券交換感謝禮券的活動，最高可獲得價值12,000元的真心感謝禮券，可用於折抵車輛副配件、人身部品與保養維修，輕鬆入主
                2020年式最新人氣車款。
              </p>
              <p>
                *如本活動因不可抗力之特殊原因無法執行，所屬之經銷商有權決定取消、終止、修改或暫停本活動。
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
