import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import $ from 'jquery'
import { Link } from 'react-router-dom'

function NesMarquee() {
  const [replace, setReplace] = useState(0)
  function setTimeFunction() {
    setReplace(replace + 1)
    setTimeout(() => {
      console.log(replace)
      setTimeFunction()
    }, 9995)
  }
  useEffect(() => {
    setTimeout(() => {
      console.log('start')
      setTimeFunction()
    }, 3000)
  }, [])
  const aa = (
    <>
      <Link to="/news/newspages/1" style={{ color: 'black' }}>
        <p>
          [會員快訊]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021&nbsp;&nbsp;&nbsp;會員專屬&nbsp;&nbsp;&nbsp;一月行事曆&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/01/01
        </p>
      </Link>
    </>
  )
  const bb = (
    <>
      <Link to="/news/newspages/2" style={{ color: 'black' }}>
        <p>
          [新車報到]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021年式新色登場：「TMAX&nbsp;&nbsp;&nbsp;560
          」&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/01/07
        </p>
      </Link>
    </>
  )
  const cc = (
    <>
      <p>
        [新車報到]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英國猛虎登場！Triumph「TIGER 850
        SPORT」&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020/10/23
      </p>
    </>
  )

  return (
    <>
      {/* 缺少固定時間換消息內容 */}
      <Col lg={{ span: 10, offset: 1 }} md={12} xs={12} className="homeMarquee">
        <div id="breaking-news-container">
          <div id="breaking-news-colour" class="slideup animated"></div>
          <h6 className="breaking-news-title delay-animated slideinHome">
            &nbsp;&nbsp;News&nbsp;&nbsp;
          </h6>
          <a
            className="breaking-news-headline delay-animated2 fadein marquee"
            href
          >
            <div>{replace % 3 === 0 ? aa : replace % 3 === 1 ? bb : cc}</div>
          </a>
        </div>
      </Col>
    </>
  )
}

export default NesMarquee
