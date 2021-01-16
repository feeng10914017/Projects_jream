import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import { Container, Row, Col } from 'react-bootstrap'


//import video
import Banner from '../components/home/video/homeBanner.mp4'
//import components
import BannerSearch from '../components/home/BannerSearch'
import ContactUs from '../components/home/ContactUs'
//import react-icon
import { GiSelect } from 'react-icons/gi'
import { RiMotorbikeFill, RiArrowRightSFill } from 'react-icons/ri'
import { MdDateRange } from 'react-icons/md'
import { FaStoreAlt } from 'react-icons/fa'

function Home() {
  const bgImg1 = 'http://localhost:3000/images/home/bgImg1.jpg'
  const bgImg2 = 'http://localhost:3000/images/home/bgImg2.jpg'

  return (
    <>
      {/* bannerVideo */}
      <div className="ParallaxVideo">
        <video autoplay="autoplay" loop="true" muted="true">
          <source src={Banner} type="video/mp4" />
        </video>
      </div>

      {/* bannerContent */}
      <Container className="bannerTitle">
        <Col md={{ span: 5, offset: 7 }}>
          <h2>踏上夢想的旅程</h2>
          <p>
            想騎乘的慾望，不應受到環境左右而引響，快將將一切拋置腦後，享受映入眼簾的美景與被風撫摸的快感吧！
          </p>
          <BannerSearch />
        </Col>
      </Container>

      <section className="homeSquare1">
        <Container>
          {/* marquee */}
          <Col md={{ span: 10, offset: 1 }} className="Marquee">
            <p>
              2020-10-18 HONDA CB1000R發表：TFT儀表、外觀小拉皮，Black
              Edition還配備快排！測試
            </p>
          </Col>
          {/* scroll down */}
          <div className="scrollDown">
            <h6>scroll down</h6>
          </div>
          {/* step */}
          <article className="homeStep">
            <Row>
              <img
                src="http://localhost:3000/images/home/stepThreeFingers.svg"
                alt=""
              />
              <h4>簡單&nbsp;3&nbsp;步驟&nbsp;&nbsp;&nbsp;即可租車</h4>
            </Row>
            <section className="step123">
              <section>
                <div className="stepIcon">
                  <GiSelect size="7.5rem" color="#cacaca" />
                  <RiMotorbikeFill
                    size="4rem"
                    color="#b02825"
                    className="stepInline"
                  />
                </div>
                <div className="stepCaption">
                  <div>
                    <h5>1</h5>
                  </div>
                  <h5>先選車</h5>
                </div>
              </section>
              <RiArrowRightSFill size="3rem" color="#cacaca" />
              <section>
                <div className="stepIcon">
                  <GiSelect size="7.5rem" color="#cacaca" />
                  <MdDateRange
                    size="4rem"
                    color="#b02825"
                    className="stepInline"
                  />
                </div>
                <div className="stepCaption">
                  <div>
                    <h5>2</h5>
                  </div>
                  <h5>再選日期</h5>
                </div>
              </section>
              <RiArrowRightSFill size="3rem" color="#cacaca" />
              <section>
                <div className="stepIcon">
                  <GiSelect size="7.5rem" color="#cacaca" />
                  <FaStoreAlt
                    size="4rem"
                    color="#b02825"
                    className="stepInline"
                  />
                </div>
                <div className="stepCaption">
                  <div>
                    <h5>3</h5>
                  </div>
                  <h5>再選店家</h5>
                </div>
              </section>
            </section>
          </article>
          <article className="homeBlock hBlock1">
            <Row>
              <Col md={8}>
                <Row>
                  <div className="homeLineSL"></div>
                  <h3>RECOMMEND</h3>
                  <div className="homeLineM"></div>
                </Row>
                <div className="blockContainer"></div>
              </Col>
              <Col md={{ span: 2, offset: 1 }} className="well1">
                <div>
                  <img
                    src="http://localhost:3000/images/home/well.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </article>
        </Container>
      </section>

      <Parallax bgImage={bgImg1} strength={250} className="zIndex1">
        <div style={{ height: 800 }}></div>
      </Parallax>

      <section className="homeSquare2">
        <Container>
          <article className="homeBlock">
            <Row>
              <Col md={4} className="well2">
                <div>
                  <img
                    src="http://localhost:3000/images/home/well.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={8}>
                <Row>
                  <div className="homeLineM"></div>
                  <h3>FEATURED</h3>
                  <div className="homeLineSR"></div>
                </Row>
                <div className="blockContainer"></div>
              </Col>
            </Row>
          </article>

          {/* 關於我們 */}
          <article className="homeAbout">
            <Col md={{ span: 10, offset: 1 }}>
              <Row>
                <div className="homeLineM"></div>
                <h3>ABOUT</h3>
                <div className="homeLineM"></div>
              </Row>
              <div className="blockContainer">
                <h6>
                  現代人工作壓力大，有些人會選擇在假日騎車或是開車出遊，在這當中有許多人會選擇騎乘重機出遊，藉由騎乘的過程來釋放平時的壓力。
                </h6>
                <br />
                <h6>
                  但一台重機價格不斐，所以我們希望藉由這個平台，吸引有著重機夢但經濟預算不允許，或是假日想要騎著重機跑跑山路、海線欣賞風景、亦或是享受騎乘時快感的人，有一個值得信任租賃平台讓他/她們去租賃重機。
                </h6>
              </div>
            </Col>
          </article>
        </Container>
      </section>

      <Parallax bgImage={bgImg2} strength={300} className="zIndex1">
        <div style={{ height: 800 }}></div>
      </Parallax>

      <section className="homeSquare3">
        <Container>
          <article className="homeBlock hBlock1">
            <Row>
              <Col md={8}>
                <Row>
                  <div className="homeLineSL"></div>
                  <h3>CONTACT&nbsp;&nbsp;US</h3>
                  <div className="homeLineM"></div>
                </Row>
                <ContactUs />
              </Col>
              <Col md={{ span: 2, offset: 1 }} className="well3">
                <div>
                  <img
                    src="http://localhost:3000/images/home/well.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </article>
        </Container>
      </section>
    </>
  )
}

export default Home
