import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import Banner from '../components/video/homeBanner.mp4'
import BnWhite from '../components/home/BannerWhite'
import BnRed from '../components/home/BannerRed'
function Home() {
  // useEffect(() => {
  //   let navbarPosition = $('#bannerRed').offset().top
  //   // console.log(navbarPosition)
  //   $(window).on('scroll', function () {
  //     let scrollTop = $(this).scrollTop()
  //     console.log(scrollTop)
  //     if (scrollTop >= navbarPosition) {
  //       $('.navbar').addClass('active')
  //       console.log('+')
  //     } else {
  //       $('.navbar').removeClass('active')
  //       console.log('-')
  //     }
  //   })
  // }, [])
  return (
    <>
      {/* <BnWhite /> */}
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
      <div id='bannerRed'></div>
      {/* <BnRed /> */}
    </>
  )
}

export default Home
