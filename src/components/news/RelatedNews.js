import React from 'react'

import { NavLink } from 'react-router-dom'

import { AiOutlineClockCircle } from 'react-icons/ai'

function RelatedNews(props) {
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
                <p style={{ margin: '0 0 0 5px' }}>2021/01/11</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                2021 會員專屬 農曆年全省道路救援方案
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
                <p style={{ margin: '0 0 0 5px' }}>2020/04/05</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                堅持獨到品味，走自己的路線~MAX車系改裝專門店~661豐連車業~
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
      <NavLink to="/news/2" className="a">
        <li>
          <div className="related_img">
            <img
              src="http://localhost:3000/images/news/neww4.png"
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
                <p style={{ margin: '0 0 0 5px' }}>2019/05/21</p>
              </div>
            </div>
            <div className="related_title">
              <h6 style={{ whiteSpace: 'pre-wrap' }} className="bh6">
                大型重型機車考照
              </h6>
            </div>
          </div>
        </li>
      </NavLink>
    </>
  )
}
export default RelatedNews
