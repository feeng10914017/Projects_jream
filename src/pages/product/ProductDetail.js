import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import ProductData from './ProductData.json'
import { Link } from 'react-router-dom'

import './product.css'

function Detail(props) {
  const FindProductData = () => {
    const id = +props.match.params.id
    const P = ProductData.find((val) => {
      return val.id === id
    })
    return P
  }
  // 以下為加入購物車
  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  //購物車商品=>大小  單價  數量
  const [productColor, setProductColor] = useState('-1')
  const [productSize, setProductSize] = useState('-1')
  const [productAmount, setProductAmount] = useState('')
  // 讓小圖片變大檢視
  const [index, setIndex] = useState(0)
  const imgDiv = useRef()
  // 大圖局部放大細節
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))

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
      {/* 產品照片放大 */}
      <div className="P_details">
        <div>
          <div
            className="P_img-container"
            onMouseMove={handleMouseMove}
            style={{
              backgroundImage: `url(${FindProductData().images[index]})`,
            }}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
          >
            {/* <img src={FindProductData().images[index]} alt="..." /> */}
          </div>
          {/* 小圖 點後放大 */}
          {FindProductData().images.map((item, index) => {
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
          <h3 className="text-secondary">{FindProductData().title}</h3>
          <div className="text-danger" style={{ textAlign: 'right' }}>
            <span>NT$</span>
            <h4>{FindProductData().price}</h4>
          </div>

          {/* <div>商品內容: {FindProductData().description}</div> */}
          {/*------------------顏色選擇---------------------- */}
          <div>
            {/* 顏色選擇 : */}
            <select
              className="Product_color_selector"
              required
              multiple
              onChange={(event) => {
                // 設定要轉換為數字(索引值)
                setProductColor(event.target.value)
              }}
            >
              <option value="-1" disabled selected hidden>
                Please Select
              </option>
              {FindProductData().colors.map((item, index) => {
                return (
                  <option value={item} style={{ backgroundColor: item }}>
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
              multiple
              // value={productSize}
              onChange={(event) => {
                // 設定要轉換為數字(索引值)
                setProductSize(event.target.value)
              }}
            >
              <option value="-1" disabled selected hidden>
                Please Select
              </option>
              {FindProductData().sizes.map((item, index) => {
                return <option value={item}>{item}</option>
              })}
            </select>
          </div>
          {/*------------------數量選擇---------------------- */}
          <div>
            數量選擇 :
            <select
              required
              value={productAmount}
              onChange={(event) => {
                // 設定要轉換為數字(索引值)
                setProductAmount(+event.target.value)
              }}
            >
              <option value="-1" disabled selected hidden>
                Please Select
              </option>
              {FindProductData().count.map((item, index) => {
                return <option>{item}</option>
              })}
            </select>
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              updateCartToLocalStorage({
                id: FindProductData().id,
                name: FindProductData().title,
                color: productColor,
                size: productSize,
                amount: productAmount,
                price: FindProductData().price,
                totalprice: productAmount * FindProductData().price,
                // 給後面的陣列
                colorOptions: FindProductData().colors,
                sizeOptions: FindProductData().sizes,
                Amount: FindProductData().count,
              })
            }}
          >
            加入購物車
          </button>
        </div>
      </div>
      <div>
        <div className="box-details">
          <p>商品內容: {FindProductData().description}</p>
          <p>商品內容: {FindProductData().content}</p>
        </div>
      </div>
    </>
  )
}

export default withRouter(Detail)
