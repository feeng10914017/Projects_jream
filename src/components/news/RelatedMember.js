import React from 'react'

import { NavLink } from 'react-router-dom'

import { AiOutlineClockCircle } from 'react-icons/ai'

function RelatedMember(props) {
  console.log(444, props.related)
  let news = props.related ? props.related : ''

  console.log(news)
  return (
    <>
      <NavLink to="/news/1" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/neww2.jpg"
              alt=""
              className="object-fit"
            />
          </div>
          <div className="related_content">
            <div className="related_time">
              <div className="d-flex">
                <AiOutlineClockCircle
                  style={{ height: '1.5rem', width: '1.5rem' }}
                />
                <p style={{ margin: '0 0 0 5px' }}>2020/10/10</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                北區會員 VIP專屬 👉🏻 租👆🏻送✌🏻
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
      <NavLink to="/news/newspages/4" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/12345.jpg"
              alt=""
              className="object-fit"
            />
          </div>
          <div className="related_content">
            <div className="related_time">
              <div className="d-flex">
                <AiOutlineClockCircle
                  style={{ height: '1.5rem', width: '1.5rem' }}
                />
                <p style={{ margin: '0 0 0 5px' }}>2020/08/03</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                2020振興無極限 超狂翻倍購車專案
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
      <NavLink to="/news/2" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/neww1.jpg"
              alt=""
              className="object-fit"
            />
          </div>
          <div className="related_content">
            <div className="related_time">
              <div className="d-flex">
                <AiOutlineClockCircle
                  style={{ height: '1.5rem', width: '1.5rem' }}
                />
                <p style={{ margin: '0 0 0 5px' }}>2020/07/13</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                「YAMAHA LIFE APP」新註冊車主歡迎禮
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
      <NavLink to="/news/2" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/123456.jpg"
              alt=""
              className="object-fit"
            />
          </div>
          <div className="related_content">
            <div className="related_time">
              <div className="d-flex">
                <AiOutlineClockCircle
                  style={{ height: '1.5rem', width: '1.5rem' }}
                />
                <p style={{ margin: '0 0 0 5px' }}>2020/07/08</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                2020 CB300R 新手購車專案 輕巧入手 質感跑格
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
    </>
  )
}
export default RelatedMember
