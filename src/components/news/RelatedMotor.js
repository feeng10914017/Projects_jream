import React from 'react'

import { NavLink } from 'react-router-dom'

import { AiOutlineClockCircle } from 'react-icons/ai'

function RelatedMotor(props) {
  console.log(444, props.related)
  let news = props.related ? props.related : ''

  console.log(news)
  return (
    <>
      <NavLink to="/news/1" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/motor3.jpg"
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
                <p style={{ margin: '0 0 0 5px' }}>2020/12/25</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                Pure Torque：「2021 MT-07」
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
      <NavLink to="/news/2" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/bigpage.jpg"
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
                <p style={{ margin: '0 0 0 5px' }}>2020/11/16</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                CRF300L CRF300 RALLY導入確定
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
      <NavLink to="/news/newspages/3" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/motor2.jpg"
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
                <p style={{ margin: '0 0 0 5px' }}>2020/10/23</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                英國猛虎登場！Triumph「TIGER 850 SPORT」
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
      <NavLink to="/news/2" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/motor4.jpg"
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
                <p style={{ margin: '0 0 0 5px' }}>2020/10/23</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                換臉大作戰！DUCATI「SuperSport 950」新面貌
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
    </>
  )
}
export default RelatedMotor
