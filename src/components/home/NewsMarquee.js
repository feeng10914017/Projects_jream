import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import $ from 'jquery'
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
      <p>
        [會員快訊]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021&nbsp;&nbsp;&nbsp;會員專屬&nbsp;&nbsp;&nbsp;農曆年全省道路救援方案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/01/11
      </p>
    </>
  )
  const bb = (
    <>
      <p>
        [新車報到]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021年式新色登場：「TMAX&nbsp;&nbsp;&nbsp;560
        」&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021/01/07
      </p>
    </>
  )
  const cc = (
    <>
      <p>
        [門市公告]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;深耕竹北二十八年，機車保養第一首選&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020/07/07
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
