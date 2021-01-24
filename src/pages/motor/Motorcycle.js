import React, { useState, useEffect } from 'react'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'

import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineArrowsAlt,
} from 'react-icons/ai'
import '../../css/motor.scss'
import Swal from 'sweetalert2' //sweetalert2
import $ from 'jquery'

function Motorcycle(props) {
  const [myproduct, setMyproduct] = useState([])
  const [configORcomment, setCofigORcomment] = useState(1)

  const [mycart, setMycart] = useState([])
  console.log(props)
  const productId = props.match.params.type
  console.log(productId)
  const [like, setlike] = useState('')
  const [howmanylike, setHowmanylike] = useState(0)
  const [mbLikeThisProduct, setMbLikeThisProduct] = useState(false)
  const [defaultPic, setDefaultPic] = useState('')
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [mbAzen_arr_state, setMbAzen_arr_state] = useState([])
  const handleDisplay = (value) => {
    setCofigORcomment(value)
  }

  async function updateCartToLocalStorage(value) {
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
      html: `商品名稱:${myproduct.itemName}成功加入購物車`,
      timer: 2000,
    }).then((r) => {
      window.location.reload()
    })
  }

  async function getDataFromServer() {
    const request = new Request('http://localhost:6001/product/' + productId, {
      method: 'GET',
      credentials: 'include',
    })
    const response = await fetch(request)
    const data = await response.json()

    setMyproduct(data.rows[0])
    let picUrl = JSON.stringify(myproduct)

    console.log('pic', picUrl)
    // console.log(typeof(myproduct))
    setDefaultPic(data.rows[0].itemImg)

    setlike(data.rows[0].memberFavoriteId)

    // console.log(data.rows)
  }
  useEffect(() => {
    getDataFromServer()
  }, [])

  useEffect(() => {
    getDataFromServer()
  }, [productId])

  console.log('myproduct資訊=', myproduct)
  const url = props.match.url
  const path = props.match.path
  console.log('url', props.match)

  let wholike = { ...myproduct }
  console.log('wholike', Array.from(String(wholike.memberFavoriteId)))
  console.log(String(String(wholike.memberFavoriteId).replace(/([[]|])/gm, '')))
  console.log('wholike_toarr', [wholike.memberFavoriteId])
  let wholike2 = "'" + wholike.memberFavoriteId + "'"

  wholike2 = wholike2.split(',')
  console.log('wholike2', wholike2)

  useEffect(() => {
    console.log('like', like)
    let likedisplay = like.slice(0) //copy like state
    // console.log('likedisplay',likedisplay)
    let likedisplay2 = likedisplay.replace('[', '').replace(']', '') //取代"[]""
    let likedisplay2_arr = likedisplay2.split(',') //轉成arr
    if (JSON.parse(localStorage.getItem('LoginUserData')) !== null) {
      if (
        JSON.parse(localStorage.getItem('LoginUserData'))
          .mbAzen.replace(/([[]|])/gm, '')
          .split(',')
          .indexOf(productId) == -1
      ) {
        setMbLikeThisProduct(false)
      } else {
        setMbLikeThisProduct(true)
      }

      let mbId = JSON.parse(localStorage.getItem('LoginUserData')).mbId
      if (likedisplay2_arr.indexOf(`${mbId}`) !== -1) {
        setMbLikeThisProduct(true)
      }
    }

    // console.log('mbId',mbId)
    // console.log(likedisplay2_arr)

    if (likedisplay2_arr[0] !== '') {
      setHowmanylike(likedisplay2_arr.length)
    }
  }, [like])

  function clickTochangePic(e) {
    // console.log('this is',e)
    let newAttr = e.getAttribute('src')
    // console.log(newAttr)
    document.querySelector('.s-bigImg img').setAttribute('src', newAttr)
    // e.style.border = '1px solid orange'
    // console.log($(e))
  }

  useEffect(() => {
    $('.s-smallImg li img').click(function () {
      $(this)
        .css('border', '2px solid orange')
        .parent('li')
        .siblings()
        .children()
        .css('border', '0px')
    })
  }, [])

  let bigImgarray = []
  let oldname = String(myproduct.itemImg)
  let newname = oldname.split('.')
  for (let i = 0; i <= 3; i++) {
    bigImgarray.push(newname[0] + '_' + i)
  }
  console.log(bigImgarray)

  function addToHistory() {
    const currentHistory =
      JSON.parse(localStorage.getItem('browse-history')) || []

    if (currentHistory.indexOf(`${productId}`) == -1) {
      const newHistory = [...currentHistory, productId]
      localStorage.setItem('browse-history', JSON.stringify(newHistory))
    }
  }
  useEffect(() => {
    addToHistory()
  }, [])

  let images = []
  bigImgarray.forEach(function (pic) {
    images.push(`/images/shop/bigImage/` + pic + `.jpg`)
  })
  return (
    <>
      <div className="d-flex flex-wrap container">
        <div className="col col-12 col-md-6 my-5">
          <div
            className="text-center s-bigImg"
            style={{ position: 'relative' }}
          >
            <img
              className="img-fluid"
              src={`/images/shop/small_Img/${myproduct.itemImg}`}
              alt=""
            />
            <button
              type="button"
              style={{
                position: 'absolute',
                right: '0px',
                backgroundColor: 'transparent',
                border: '0px',
              }}
              onClick={() => setIsOpen(true)}
            >
              <AiOutlineArrowsAlt
                style={{ color: 'white', fontSize: '24px' }}
              />
            </button>
          </div>
          <ul className="list-unstyled d-flex justify-content-center s-smallImg mt-3">
            {bigImgarray.map((img, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => clickTochangePic(e.target)}
                  style={{ margin: '5px' }}
                >
                  <img
                    className="img-fluid mx-1"
                    src={`/images/shop/bigImage/${img}.jpg`}
                    alt=""
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col col-sm-12 col-md-6 my-5">
          <div className="d-flex">
            <span className="p">NT$:</span>
            <h2>{myproduct.itemPrice}</h2>
          </div>

          <h3>{myproduct.itemName}</h3>
          <p style={{ minHeight: '150px' }}>{myproduct.itemIntro}</p>
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-info mx-2 s-btn-common col-5 col-md-4"
              onClick={() =>
                updateCartToLocalStorage({
                  id: myproduct.itemId,
                  name: myproduct.itemName,
                  amount: 1,
                  price: myproduct.itemPrice,
                  img: myproduct.itemImg,
                })
              }
            >
              <AiOutlineShoppingCart
                style={{ color: '#F9A451', fontSize: '24px' }}
              />
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Motorcycle)
