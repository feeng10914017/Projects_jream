import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Banner from '../components/video/homeBanner.mp4'
import './home.scss'
function Home() {
  // const styles = {
  //   fontFamily: 'sans-serif',
  //   textAlign: 'center',
  // }
  const insideStyles = {
    background: 'white',
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translate(-50%,-50%)',
  }
  const bgImg1 = 'http://localhost:3000/images/home/bgImg1.jpg'
  const bgImg2 = 'http://localhost:3000/images/home/bgImg2.jpg'
  return (
    <>
      {/* bannerVideo */}
      <div className="ParallaxVideo">
        <video autoplay="autoplay" loop="true" muted="true">
          <source src={Banner} type="video/mp4" />
          <h1>Video Background</h1>
        </video>
      </div>
      {/* bannerContent */}
      <Container className="bannerTitle">
        <Col md={{ span: 5, offset: 7 }}>
          <h2>踏上夢想的旅程</h2>
          <p>
            想騎乘的慾望，不應受到環境左右而引響，快將將一切拋置腦後，享受映入眼簾的美景與被風撫摸的快感吧！
          </p>
          <div className="BannerSearch">
            <Row>
              <h6>還車時間：</h6>
            </Row>
            <Row>
              <h6>租車時間：</h6>
            </Row>
            <Row>
              <h6>城市：</h6>
            </Row>

            <Link to={'/member'}>
              <Button className="bannerSearchBtn" variant="primary" block>
                下一步
              </Button>
            </Link>
          </div>
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
            <h4 className="text-center">
              簡單&nbsp;3&nbsp;步驟&nbsp;&nbsp;&nbsp;即可租車
            </h4>
            <section className="step123"></section>
          </article>
          <article className="homeBlock hBlock1">
            <Col md={9}>
              <Row>
                <div className="homeLineSL"></div>
                <h3>RECOMMEND</h3>
                <div className="homeLineM"></div>
              </Row>
              <div className="blockContainer"></div>
            </Col>
          </article>
        </Container>
      </section>
      <Parallax bgImage={bgImg1} strength={250} className='zIndex1'>
        <div style={{ height: 800 }}></div>
      </Parallax>

      <section className="homeSquare2">
        <Container>
          <article className="homeBlock">
            <Col md={{ span: 9, offset: 3 }}>
              <Row>
                <div className="homeLineM"></div>
                <h3>FEATURED</h3>
                <div className="homeLineSR"></div>
              </Row>
              <div className="blockContainer"></div>
            </Col>
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
                <h6>現代人工作壓力大，有些人會選擇在假日騎車或是開車出遊，在這當中有許多人會選擇騎乘重機出遊，藉由騎乘的過程來釋放平時的壓力。</h6>
                <br />
                <h6>但一台重機價格不斐，所以我們希望藉由這個平台，吸引有著重機夢但經濟預算不允許，或是假日想要騎著重機跑跑山路、海線欣賞風景、亦或是享受騎乘時快感的人，有一個值得信任租賃平台讓他/她們去租賃重機。</h6>
              </div>
            </Col>
          </article>
        </Container>
      </section>
      <Parallax bgImage={bgImg2} strength={300} className='zIndex1'>
        <div style={{ height: 800 }}>

        </div>
      </Parallax>

      <section className="homeSquare3">
        <Container>
          <article className="homeBlock hBlock1">
            <Col md={9}>
              <Row>
                <div className="homeLineSL"></div>
                <h3>CONTACT&nbsp;&nbsp;US</h3>
                <div className="homeLineM"></div>
              </Row>
              <div className="blockContainer"></div>
            </Col>
          </article>
        </Container>
      </section>
    </>
  )
}

export default Home
