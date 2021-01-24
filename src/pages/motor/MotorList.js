import React, { useState, useEffect } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Slider from '../../components/motor/Slider'
import Filterbar from '../../components/motor/Filterbar'

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineCloseCircle,
  AiFillHeart,
} from 'react-icons/ai'

import '../../css/motor.scss'
import Swal from 'sweetalert2'

function MotorList(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [myproduct, setMyproduct] = useState([])
  const [type, setType] = useState(0)
  const [totalpage, setTotalpage] = useState(0)
  const [currentpage, setCurrentpage] = useState(1)
  const [typeURL, setTypeURL] = useState(0)
  const [vendor, setVendor] = useState('V000')
  const [price, setPrice] = useState(9999)
  const [orderBy, setOrderBy] = useState('itemId')
  const [mbAzen_arr_state, setMbAzen_arr_state] = useState([])

  const searchParams = new URLSearchParams(props.location.search)

  async function updateCartToLocalStorage(value) {
    setDataLoading(true)

    const currentCart = JSON.parse(localStorage.getItem('motorCart')) || []
    let arr = []
    currentCart.forEach((element) => {
      arr.push(element.id == value.id)
    })
    if (arr.indexOf(true) == -1) {
      const newCart = [...currentCart, value]
      localStorage.setItem('motorCart', JSON.stringify(newCart))
      setMycart(newCart)
    }
    Swal.fire({
      html: `商品名稱:${value.name}成功加入購物車`,
      timer: 1500,
    }).then((r) => {
      window.location.reload()
    })
  }

  async function getDataFromServer(page) {
    const request = new Request('http://localhost:6001/product/list/' + page, {
      method: 'GET',
      credentials: 'include',
    })

    const response = await fetch(request)
    const data = await response.json()

    setMyproduct(data.rows)
    setTotalpage(data.totalPages)

    // console.log(data.rows)
  }

  async function getClassifiedDataFromServer(page) {
    const searchParams = new URLSearchParams(props.location.search)
    let request = undefined

    if (type !== 0 || vendor !== 'V000' || price !== '') {
      request = new Request(
        'http://localhost:6001/product/search/' +
          type +
          '/' +
          vendor +
          '/' +
          price +
          '/' +
          orderBy +
          '/' +
          currentpage,
        {
          method: 'GET',
          credentials: 'include',
        }
      )
    } else {
      request = new Request('http://localhost:6001/product/list/' + page, {
        method: 'GET',
        credentials: 'include',
      })
    }

    const response = await fetch(request)
    const data = await response.json()

    setMyproduct(data.rows)
    setTotalpage(data.totalPages)

    // console.log(data.rows)
  }

  // console.log(myproduct)

  useEffect(() => {
    getClassifiedDataFromServer(currentpage)
  }, [currentpage, vendor, price, orderBy])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [mycart])

  useEffect(() => {
    getClassifiedDataFromServer(currentpage)
  }, [type])

  let pageNumbers = []
  for (let i = 1; i <= totalpage; i++) {
    pageNumbers.push(i)
  }

  const paginate = (value) => {
    setCurrentpage(value)
  }

  function handletype(value) {
    setType(value)
    setCurrentpage(1)
  }

  // console.log('type=', type)
  let search = props.location.search

  let vendordisplay
  switch (vendor) {
    case 'V001':
      vendordisplay = '150 CC'
      break
    case 'V002':
      vendordisplay = '300 CC'
      break
    case 'V003':
      vendordisplay = '450 CC'
      break
    case 'V004':
      vendordisplay = '600 CC'
      break
    case 'V005':
      vendordisplay = '750 CC'
      break
    case 'V006':
      vendordisplay = '900 CC'
      break
    case 'V007':
      vendordisplay = '1050 CC'
      break
    case 'V008':
      vendordisplay = '1200 CC'
      break
    case 'V009':
      vendordisplay = '1350 CC'
      break
    case 'V010':
      vendordisplay = '1500 CC'
      break
    default:
  }

  let pricedisplay
  switch (price) {
    case '<1000':
      pricedisplay = '< NT$1000'
      break
    case '<2000':
      pricedisplay = '< NT$2000'
      break
    case '<3000':
      pricedisplay = '< NT$3000'
      break
    case '<4000':
      pricedisplay = '< NT$4000'
      break
    case '<5000':
      pricedisplay = '< NT$5000'
      break

    default:
  }

  let typedisplay
  switch (type) {
    case 1:
      typedisplay = 'YAMAHA'
      break
    case 2:
      typedisplay = 'HONDA'
      break
    case 3:
      typedisplay = 'SUZUKI'
      break
    case 4:
      typedisplay = 'KAWASAKI'
      break
    case 5:
      typedisplay = 'DUCATI'
      break
    case 6:
      typedisplay = 'BMW'
      break

    default:
  }

  const loading = (
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
      <div className="row row-cols-3">
        {myproduct.map((value, index) => {
          return (
            <div className="col-6 col-lg-4 col-sm-6" key={index}>
              <div className="s-cardwrap">
                <div
                  className="card my-2 s-productlist-card"
                  style={{ borderRadius: '0px' }}
                >
                  <img
                    src={`/images/motor/${value.itemImg}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <Link to={{ pathname: `/motorlist/${value.itemId}` }}>
                      <h5 className="cart-title" style={{ color: 'black' }}>
                        {value.itemName}
                      </h5>
                    </Link>
                    <div className="d-flex">
                      <p className="card-text col-8 p-0">
                        NT$ {value.itemPrice}
                      </p>
                      <Link
                        className="col-2"
                        onClick={() =>
                          updateCartToLocalStorage({
                            id: value.itemId,
                            name: value.itemName,
                            amount: 1,
                            price: value.itemPrice,
                            img: value.itemImg,
                          })
                        }
                      >
                        <AiOutlineShoppingCart
                          style={{ color: '#79cee2', fontSize: '24px' }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="row my-3">
        <div className="col-12 d-flex"></div>
      </div>
    </>
  )

  return (
    <>
      <Slider
        handletype={function (value) {
          handletype(value)
        }}
      />

      <br />

      <div className="d-flex">
        {type !== 0 ? (
          <div className="m-filterClearBtn">
            廠牌: {typedisplay}
            <button onClick={() => setType(0)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          ''
        )}
        {vendor !== 'V000' ? (
          <div className="m-filterClearBtn">
            排氣量:{vendordisplay}
            <button onClick={() => setVendor('V000')}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          ''
        )}
        {price !== 9999 ? (
          <div className="m-filterClearBtn">
            價格:{pricedisplay}
            <button onClick={() => setPrice(9999)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          ''
        )}
      </div>

      <br />

      <div>
        <Filterbar
          setMyproduct={setMyproduct}
          setTotalpage={setTotalpage}
          setVendor={setVendor}
          setPrice={setPrice}
          setOrderBy={setOrderBy}
        />
      </div>

      <br />

      <div>{dataLoading ? loading : display}</div>
    </>
  )
}
export default withRouter(MotorList)
