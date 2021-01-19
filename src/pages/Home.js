import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import { Container, Row, Col } from 'react-bootstrap'
import BackToTop from 'react-easy-back-to-top'

//import video
import Banner from '../components/home/video/homeBanner.mp4'
//import components
import BannerSearch from '../components/home/BannerSearch'
import ContactUs from '../components/home/ContactUs'
import NesMarquee from '../components/home/NesMarquee'
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

      <section className="scrollDownParent">
        {/* bannerContent */}
        <Container className="bannerTitle">
          <Col lg={{ span: 5, offset: 7 }} md={{ span: 8, offset: 2 }}>
            <h3>踏上夢想的旅程</h3>
            <p>
              想騎乘的慾望，不應受到環境左右而引響，快將將一切拋置腦後，享受映入眼簾的美景與被風撫摸的快感吧！
            </p>
            <BannerSearch />
          </Col>
        </Container>
        {/* scroll down */}
        <h6 className="scrollDown scrollDownText">scroll&nbsp;down</h6>
      </section>

      <section className="homeSquare1">
        <Container>
          {/* marquee */}
          <NesMarquee />
          {/* step */}
          <article className="homeStep">
            <Row className="stepTitle">
              <img
                src="http://localhost:3000/images/home/stepThreeFingers.svg"
                alt=""
              />
              <h4>簡單&nbsp;3&nbsp;步驟&nbsp;&nbsp;&nbsp;即可租車</h4>
            </Row>
            <Row className="step123">
              <Col lg={2} md={3} xs={12}>
                <div className="stepIcon">
                  <GiSelect size="7.5rem" color="#cacaca" />
                  <RiMotorbikeFill
                    size="4rem"
                    color="#b02825"
                    className="stepInline"
                  />
                </div>
                <Row className="stepCaption">
                  <div>
                    <h5>1</h5>
                  </div>
                  <h5>先選車</h5>
                </Row>
              </Col>
              <Col lg={1} md={1} xs={12}>
                <section>
                  <RiArrowRightSFill size="3rem" color="#cacaca" />
                </section>
              </Col>
              <Col lg={2} md={3} xs={12}>
                <div className="stepIcon">
                  <GiSelect size="7.5rem" color="#cacaca" />
                  <MdDateRange
                    size="4rem"
                    color="#b02825"
                    className="stepInline"
                  />
                </div>
                <Row className="stepCaption">
                  <div>
                    <h5>2</h5>
                  </div>
                  <h5>選日期</h5>
                </Row>
              </Col>
              <Col lg={1} md={1} xs={12}>
                <section>
                  <RiArrowRightSFill size="3rem" color="#cacaca" />
                </section>
              </Col>
              <Col lg={2} md={3} xs={12}>
                <div className="stepIcon">
                  <GiSelect size="7.5rem" color="#cacaca" />
                  <FaStoreAlt
                    size="4rem"
                    color="#b02825"
                    className="stepInline"
                  />
                </div>
                <Row className="stepCaption">
                  <div>
                    <h5>3</h5>
                  </div>
                  <h5>再選店家</h5>
                </Row>
              </Col>
            </Row>
          </article>
          {/* RECOMMEND */}
          <article className="homeBlock hBlock1" id="well01">
            <Col lg={8} md={10}>
              <Row>
                <Col lg={1} md={1} xs={1} className="homeLineLL"></Col>
                <h3>RECOMMEND</h3>
                <Col
                  lg={{ span: 5, offset: 3 }}
                  md={{ span: 8, offset: 3 }}
                  xs={{ span: 8, offset: 3 }}
                  className="homeLine"
                ></Col>
              </Row>
              <div className="blockContainer"></div>
            </Col>
          </article>
        </Container>
      </section>

      <Parallax bgImage={bgImg1} strength={250} className="zIndex1 Parallax01">
        <div style={{ height: 800 }}></div>
      </Parallax>

      <section className="homeSquare2">
        <Container>
          {/* FEATURED */}
          <article className="homeBlock hBlock2" id="well02">
            <Col lg={{ span: 8, offset: 4 }} md={{ span: 10, offset: 2 }}>
              <Row>
                <Col lg={1} md={1} xs={1} className="homeLineRR"></Col>
                <h3>FEATURED</h3>
                <Col
                  lg={{ span: 5, offset: 0 }}
                  md={{ span: 8, offset: 3 }}
                  xs={{ span: 8, offset: 3 }}
                  className="homeLine"
                ></Col>
              </Row>
              <div className="blockContainer"></div>
            </Col>
          </article>
          {/* ABOUT */}
          <article className="homeAbout">
            <Col md={{ span: 10, offset: 1 }}>
              <Row>
                <Col lg={2} md={7} xs={6} className="homeLine"></Col>
                {/* <Col md={12} xs={12}> */}
                <h3>ABOUT</h3>
                {/* </Col> */}
                <Col
                  lg={{ span: 2, offset: 0 }}
                  md={{ span: 7, offset: 5 }}
                  xs={{ span: 7, offset: 5 }}
                  className="homeLine"
                ></Col>
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
          {/* CONTACT US */}
          <article className="homeBlock" id="well03">
            <Col lg={8} md={10}>
              <Row>
                <Col lg={1} md={1} xs={1} className="homeLineLL"></Col>
                <h3>CONTACT&nbsp;&nbsp;US</h3>
                <Col
                  lg={{ span: 5, offset: 3 }}
                  md={{ span: 8, offset: 3 }}
                  xs={{ span: 8, offset: 3 }}
                  className="homeLine"
                ></Col>
              </Row>
              <ContactUs />
            </Col>
          </article>
        </Container>
      </section>

      <BackToTop
        text="Top"
        color="#f5f5f5"
        backgroundColor="#b02825"
        border="3px solid #cacaca"
        hover={{
          color: '#242424',
          backgroundColor: '#f5f5f5',
          border: '3px solid #b02825',
        }}
        position={{ bottom: '0%', right: '0%' }}
        margin="32px"
        fontSize="19px"
      />
    </>
  )
}

export default Home
