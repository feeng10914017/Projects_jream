import React, { useState, useEffect } from 'react'
import Banner from '../components/video/homeBanner.mp4'
function Home() {
  return (
    <>
      <video
        autoplay="autoplay"
        loop="true"
        muted="true"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: '-1',
        }}
      >
        <source src={Banner} type="video/mp4" />
      </video>
    </>
  )
}

export default Home
