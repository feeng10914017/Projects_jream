import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import $ from 'jquery'
import Banner from '../components/video/homeBanner.mp4'
import './home.scss'
function Home() {
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  }
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
      <div className="ParallaxVideo">
        <video autoplay="autoplay" loop="true" muted="true">
          <source src={Banner} type="video/mp4" />
          <h1>Video Background</h1>
        </video>
      </div>
      <div className="test"></div>
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
