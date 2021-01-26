import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import '../product.css'

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  if (props.location.pathname === '/product')
    return (
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={<span aria-hidden="true" />}
        nextIcon={<span aria-hidden="true" />}
      >
        {/* <Carousel.Item style={{ height: 'calc(60vh - 80px )' }}>
          <img
            className="d-block w-100 "
            src="/images/1.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>配件商城</h3>
            <p>人身部品 一次到位</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 'calc(60vh - 80px )' }}>
          <img
            className="d-block w-100 "
            src="https://kickstart.bikeexif.com/wp-content/uploads/2014/11/see-see-motorcycle-shop-3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>配件商城</h3>
            <p>人身部品 一次到位</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item style={{ height: 'calc(60vh - 80px )' }}>
          <img
            className="d-block w-100 "
            src="/images/3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>配件商城</h3>
            <p>人身部品 一次到位</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  return <></>
}

export default withRouter(ControlledCarousel)
