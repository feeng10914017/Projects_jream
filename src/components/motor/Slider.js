import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import $ from 'jquery'
import '../../css/motor.scss'

function Slider(props) {
  useEffect(() => {
    const background_list = [
      '/images/motor/LOGO/YAMAHA.png',
      '/images/motor/LOGO/SUZUKI.png',
      '/images/motor/LOGO/HONDA.png',
      '/images/motor/LOGO/YAMAHA.png',
      '/images/motor/LOGO/YAMAHA.png',
      '/images/motor/LOGO/YAMAHA.png',
    ]
    console.log(background_list[0])
    let index = 0
    $('.sbox-s')
      .mouseenter(function () {
        $(this)
          .css({ background: 'white', opacity: '80%', transform: 'scale(0.7)' })
          .parent()
          .siblings()
          .find('.sbox-s')
          .css({ background: 'white', opacity: '50%', transform: 'scale(0.8)' })

        //目前是第幾個sbox-s
        index = $(this).index('.sbox-s')
        // console.log($(this).parent().children().find('.sbox-s'))
        // console.log('sbox-s mouseenter')
        console.log(index)
        $('.s-slider-box').css(
          'background-image',
          'url("' + background_list[index] + '")'
        )
      })
      .mouseleave(function () {
        $(this).css({
          background: 'white',
          opacity: '50%',
          transform: 'scale(0.8)',
        })
        // $('.s-slider-box').css(
        //   'background-image',
        //   "url('/images/shop/bigImage/1_MONSTER HUNTER_ WORLD_0.jpg')"
        // )
      })
    // $('.sbox').mouseleave(function() {
    //   $('.sbox-s').css({ transform: 'scale(1)' })

    // })
    $('.s-slider-box').mouseleave(function () {
      $('.sbox-s').css({ transform: 'scale(1)', opacity: '100%' })
    })
  }, [])
  // console.log('目前樣式',props.type)

  return (
    <>
      <div className="s-slider-box d-flex">
        <div className="p-0 col col-lg-4 col-6 flex-grow-1">
          <div className="sbox-s position-relative">
            <Link onClick={() => props.handletype(1)}>YAMAHA</Link>
          </div>
        </div>
        <div className="p-0 col col-lg-4 col-6 flex-grow-1">
          <div className="sbox-s position-relative">
            <Link onClick={() => props.handletype(2)}>HONDA</Link>
          </div>
        </div>
        <div className="p-0 col col-lg-4 col-6 flex-grow-1">
          <div className="sbox-s position-relative">
            <Link onClick={() => props.handletype(3)}>SUZUKI</Link>
          </div>
        </div>
        <div className="p-0 col col-lg-4 col-6 flex-grow-1">
          <div className="sbox-s position-relative">
            <Link onClick={() => props.handletype(4)}>KAWASAKI</Link>
          </div>
        </div>
        <div className="p-0 col col-lg-4 col-6 flex-grow-1">
          <div className="sbox-s position-relative">
            <Link onClick={() => props.handletype(5)}>DUCATI</Link>
          </div>
        </div>
        <div className="p-0 col col-lg-4 col-6 flex-grow-1">
          <div className="sbox-s position-relative">
            <Link onClick={() => props.handletype(6)}>BMW</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
