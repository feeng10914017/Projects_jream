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
      <article className="homeSquare1">
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
          <article className="homeBlock">
            <Col md={8}>
              <Row>
                <div className="homeLineS"></div>
                <h3>RECOMMEND</h3>
                <div className="homeLineM"></div>
              </Row>
              <div className="blockContainer"></div>
            </Col>
          </article>
        </Container>
      </article>
      <Parallax bgImage={bgImg1} strength={250}>
        <div style={{ height: 800 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax bgImage={bgImg2} strength={300}>
        <div style={{ height: 800 }}>
          <div style={insideStyles}>Dynamic Blur</div>
        </div>
      </Parallax>
    </>
  )
}

export default Home
