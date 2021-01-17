import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
function NesMarquee() {
  return (
    <>
      {/* 缺少固定時間換消息內容 */}
      <Col lg={{ span: 10, offset: 1 }} md={12} xs={12} className="homeMarquee">
        <div id="breaking-news-container">
          <div id="breaking-news-colour" class="slideup animated"></div>
          <h6 className="breaking-news-title delay-animated slidein">
            //&nbsp;&nbsp;News&nbsp;&nbsp;//
          </h6>
          <a
            className="breaking-news-headline delay-animated2 fadein marquee"
            href
          >
            <p>
              2020-10-18 HONDA CB1000R發表：TFT儀表、外觀小拉皮，Black
              Edition還配備快排！
            </p>
          </a>
        </div>
      </Col>
    </>
  )
}

export default NesMarquee
