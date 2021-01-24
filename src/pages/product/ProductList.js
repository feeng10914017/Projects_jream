import React, { useState, useEffect } from 'react'
import { Row, Col, Modal, Button, Container } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

import Carousel from './components/Carousel'
import Sidenav from './components/Sidenav'

import ProductData from './ProductData2.json'
import { PRODUCT_PER_PAGE } from './constants'

import './product.css'
import { updateURLParameter } from './tools'

function ProductList(props) {
  const urlParams = new URLSearchParams(window.location.search)
  // const [id, setId] = useState(0)
  // const [title, setTitle] = useState(0)
  // const [images, setImages] = useState(0)
  // const [price, setPrice] = useState(0)
  // 以上為我加的code
  // const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  // searching place----------------------
  const [products, setProducts] = useState([])
  const total_page = Math.ceil(products.length / PRODUCT_PER_PAGE)
  const searchQuery = urlParams.get('search') || ''

  const [page, setPage] = useState(+urlParams.get('page') || 1, total_page)

  const handleClose = () => setShow(false)

  // const handleShow = () => setShow(true)

  // const updateCartToLocalStorage = (value) => {
  //   const currentCart = JSON.parse(localStorage.getItem('productCart')) || []

  //   const newCart = [...currentCart, value]
  //   localStorage.setItem('productCart', JSON.stringify(newCart))

  //   // 設定資料
  //   setMycart(newCart)
  //   setProductName(value.name)
  //   handleShow()
  // }

  useEffect(() => {
    setProducts(
      ProductData.filter((product) => {
        return (
          product.title
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          product.sub_category
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        )
      })
    )
  }, [])

  useEffect(() => {
    window.history.pushState(
      '',
      '',
      updateURLParameter(window.location.href, 'page', page)
    )
  }, [page])

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>產品：{productName} 已成功加入購物車</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
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

  // const spinner = (
  //   <>
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   </>
  // )

  const display = (
    <div className="productsArea">
      {products.map((product, index) => {
        if (Math.floor(index / PRODUCT_PER_PAGE) === page - 1) {
          return (
            <div className="P_card">
              <div style={{ overflow: 'hidden' }}>
                <Link
                  to={`/product/Detail/${product.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    src={product.variances[0]?.images[0]}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
              </div>

              <div className="card-body">
                <Link
                  to={`/product/Detail/${product.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h5 className="card-title">{product.title}</h5>
                  <div className="card-text ">{product.description}</div>
                  <p className="card-text text-danger">NTD {product.price}元</p>
                </Link>
              </div>
            </div>
          )
        }
      })}
    </div>
  )

  const page_buttons = []
  for (let i = 0; i < total_page; i++) {
    page_buttons.push(
      <li class="page-item">
        <span
          class="page-link"
          onClick={() => {
            setPage(i + 1)
          }}
        >
          {i + 1}
        </span>
      </li>
    )
  }

  return (
    <>
      {messageModal}
      <Carousel />
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col sm={3} className="nopadding ">
            <Sidenav />
          </Col>
          <Col sm={9} className="nopadding " style={{ height: '100vh' }}>
            {display}
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                {page === 1 ? null : (
                  <li class="page-item ">
                    <span
                      class="page-link"
                      onClick={() => {
                        setPage(page - 1)
                      }}
                      tabindex="-1"
                    >
                      上一頁
                    </span>
                  </li>
                )}
                {page_buttons}
                {page === total_page ? null : (
                  <li class="page-item">
                    <span
                      class="page-link"
                      onClick={() => {
                        setPage(page + 1)
                      }}
                      tabindex="+1"
                    >
                      下一頁
                    </span>
                  </li>
                )}
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(ProductList)
