import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import ProductData from './ProductData2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Sidenav from './components/Sidenav'

import './product.css'

function Detail(props) {
  const id = +props.match.params.id
  const product = ProductData.find((val) => {
    return val.id === id
  })
  product.images = product.variances[0].images
  product.colors = []
  product.sizes = []
  product.variances.forEach((variance) => {
    if (!product.colors.includes(variance.color)) {
      product.colors.push(variance.color)
    }
    if (!product.sizes.includes(variance.size)) {
      product.sizes.push(variance.size)
    }
  })

  const [productData, setProductData] = useState(product)
  // 以下為加入購物車
  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  //購物車商品=>大小  單價  數量
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [buyAmount, setBuyAmount] = useState(1)
  // 讓小圖片變大檢視
  const [index, setIndex] = useState(0)
  const imgDiv = useRef()

  // useEffect(() => {
  //   console.log(productData)
  // }, [productData])

  useEffect(() => {
    const newImages = productData.variances.find((variance) => {
      if (!selectedColor) {
        return true
      }
      return variance.color === selectedColor
    }).images

    // console.log(newImages)
    setProductData({ ...productData, images: newImages })
  }, [selectedColor, selectedSize])

  //商品數量計數器
  const reduction = () => {
    const tmp = buyAmount
    buyAmount === 1 ? setBuyAmount(tmp) : setBuyAmount(tmp - 1)
  }

  const increase = () => {
    const tmp = buyAmount
    setBuyAmount(tmp + 1)
  }

  // 大圖局部放大細節
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    // console.log(x, y)
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('productCart')) || []

    const newCart = [...currentCart, value]
    localStorage.setItem('productCart', JSON.stringify(newCart))

    // 設定資料
    setMycart(newCart)
    setProductName(value.name)
    handleShow()
  }
  // 彈跳視窗
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>產品：{productName} 已成功加入購物車</Modal.Body>
      <Modal.Footer>
        <Link to={`/product`} style={{ textDecoration: 'none' }}>
          <Button variant="secondary" onClick={handleClose}>
            繼續購物
          </Button>
        </Link>
        <Button
          variant="primary"
          onClick={() => {
            props.history.push('/cart')
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )
  // 縮圖放大顯示

  return (
    <>
      {messageModal}

      <Row>
        <Col sm={3} className="nopadding ">
          <Sidenav />
        </Col>
        <Col sm={9} className="nopadding ">
          {/* 產品照片放大 */}
          <div className="P_details">
            <div>
              <div
                className="P_img-container"
                onMouseMove={handleMouseMove}
                style={{
                  backgroundImage: `url(${productData.images[index]})`,
                }}
                ref={imgDiv}
                onMouseLeave={() =>
                  (imgDiv.current.style.backgroundPosition = `center`)
                }
              ></div>
              {/* 小圖 點後放大 */}
              {productData.images.map((item, index) => {
                return (
                  <img
                    src={item}
                    className="P_D_smallPhoto"
                    alt="..."
                    onClick={() => setIndex(index)}
                  />
                )
              })}
            </div>
            {/* 詳細資料位置 */}
            <div className="box-details">
              <h5 className="text-secondary">{productData.title}</h5>
              <div className="text-danger" style={{ textAlign: 'right' }}>
                <span>NT$</span>
                <h4 className="text-danger">{productData.price}</h4>
              </div>

              {/* <div>商品內容: {productData.description}</div> */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()

                  updateCartToLocalStorage({
                    id: productData.id,
                    name: productData.title,
                    img: productData.images[0],
                    color: selectedColor,
                    size: selectedSize,
                    amount: buyAmount,
                    price: productData.price,
                    totalprice: buyAmount * productData.price,
                    // 給後面的陣列
                    colorOptions: productData.colors,
                    sizeOptions: productData.sizes,
                  })
                }}
              >
                {/*------------------顏色選擇---------------------- */}
                <div>
                  {/* 顏色選擇 : */}
                  <select
                    className="Product_color_selector"
                    required
                    multiple
                    onChange={(event) => {
                      // 設定要轉換為數字(索引值)
                      setSelectedColor(event.target.value)
                    }}
                  >
                    {/* <option value="-1" disabled selected hidden>
                Please Select
              </option> */}

                    {productData.colors.map((item, index) => {
                      return (
                        <option
                          value={item}
                          style={{ backgroundColor: item }}
                          required
                        >
                          {/* {item}{' '} */}
                        </option>
                      )
                    })}
                  </select>
                </div>

                {/*------------------大小選擇---------------------- */}
                <div>
                  {/* 大小選擇 : */}
                  <select
                    className="Product_size_selector"
                    required
                    multiple
                    // value={productSize}
                    onChange={(event) => {
                      // 設定要轉換為數字(索引值)
                      setSelectedSize(event.target.value)
                    }}
                  >
                    {productData.sizes.map((item) => {
                      return (
                        <option value={item} required>
                          {item}
                        </option>
                      )
                    })}
                  </select>
                </div>

                {/*-------------------- 數量選擇----------------------- */}
                <div
                  className="d-flex"
                  sytle={{ justifyContent: 'space-around' }}
                >
                  <div className="P_amount">
                    <a className="count" onClick={() => reduction()}>
                      <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                    </a>
                    <span className="fontSize19">{buyAmount}</span>
                    <a className="count" onClick={() => increase()}>
                      <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </a>
                  </div>
                  {/* -----------------加入購物車---------------- */}
                  <button type="submit" className="btn addtocart-btn">
                    加入購物車
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="box-details fontSize16">
              <h5> {productData.description}</h5>
              <p>商品內容: </p>
              <div> {productData.content}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link to={`/product`} style={{ textDecoration: 'none' }}>
                <Button variant="secondary" onClick={handleClose}>
                  繼續購物
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(Detail)
