import React, { useState, useEffect } from 'react'
import { Row, Col, Modal, Button, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import ProductData from './ProductData2.json'
import Carousel from './components/Carousel'
import Sidenav from './components/Sidenav'
import { Link } from 'react-router-dom'
import './product.css'

function ProductList(props) {
  const [id, setId] = useState(0)
  const [title, setTitle] = useState(0)
  const [images, setImages] = useState(0)
  const [price, setPrice] = useState(0)

  // 以上為我加的code

  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')

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
  // searching place----------------------
  const [searchQuery, setSearchQuery] = useState('')
  const [doSearch, setDoSearch] = useState(false)
  const [products, setproducts] = useState([])
  useEffect(() => {
    setproducts(
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
  }, [doSearch])

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

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="productsArea">
        {products.map((item, index) => {
          return (
            <div className="P_card">
              <div style={{ overflow: 'hidden' }}>
                <Link
                  to={`/product/Detail/${item.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    src={item.images[0]}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
              </div>

              <div className="card-body">
                <Link
                  to={`/product/Detail/${item.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h5 className="card-title">{item.title}</h5>
                  <div className="card-text ">{item.description}</div>
                  <p className="card-text text-danger">NTD {item.price}元</p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )

  return (
    <>
      {messageModal}
      <Carousel />
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col sm={3} className="nopadding ">
            <Sidenav
              searchQuery={searchQuery}
              doSearch={doSearch}
              setSearchQuery={setSearchQuery}
              setDoSearch={setDoSearch}
            />
          </Col>
          <Col sm={9} className="nopadding ">
            {display}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(ProductList)
