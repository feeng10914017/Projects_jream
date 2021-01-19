import React, { useState, useEffect } from 'react'
import { Row, Card, Nav, Button } from 'react-bootstrap'
import { reactLocalStorage } from 'reactjs-localstorage'
import { Link } from 'react-router-dom'

import OrderStep from '../../components/order/CartStep'
import CartMotor from '../../components/order/CartMotor'
import CartProduct from '../../components/order/CartProduct'
import GrandTotal from '../../components/order/CheckOut_GrandTotal'

function OD_Cart() {
  const [navState, setNavState] = useState('NavMotor')
  const [motorCart, setMotorCart] = useState(
    reactLocalStorage.getObject('motorCart')
  )
  const [productCart, setProductCart] = useState(
    reactLocalStorage.getObject('productCart')
  )
  const localShipping = reactLocalStorage.get('shipping')

  function setLocalStorage() {
    reactLocalStorage.setObject('motorCart', [
      {
        id: '0',
        img: 'Leoncino_250_gray.jpg',
        company: 'SUZUKI',
        model: 'GSX - S1000S',
        color: 'BROWN',
        rentalPrice: '1000',
        rentalAmount: '1',
        rentalLocation: '台北濱江店',
        rentalDate: '2021-01-09',
        rentalTime: '14:16:00',
        returnLocation: '台北濱江店',
        returnDate: '2021-01-10',
        returnTime: '14:16:00',
        valid: 0,
      },
    ])
    reactLocalStorage.setObject('productCart', [
      {
        _id: '1',
        title: 'Wacth Product 01 ',
        images: 'https://www.upsieutoc.com/images/2020/07/18/img1.jpg',
        color: 'red',
        size: 'XL',
        price: 10001,
        count: 1,
        colors: ['red', 'black', 'teal'],
        sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      },
      {
        _id: '2',
        title: 'Wacth Product 02',
        images: 'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
        color: 'black',
        size: 'L',
        price: 102,
        count: 2,
        colors: ['red', 'black', 'teal'],
        sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      },
      {
        _id: '3',
        title: 'Wacth Product 03',
        images: 'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
        color: 'teal',
        size: 'M',
        price: 103,
        count: 3,
        colors: ['red', 'black', 'teal'],
        sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      },
      {
        _id: '4',
        title: 'Wacth Product 04',
        images: 'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
        color: 'red',
        size: 'XM',
        price: 104,
        count: 1,
        colors: ['red', 'black', 'teal'],
        sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      },
      {
        _id: '5',
        title: 'Wacth Product 05',
        images: 'https://www.upsieutoc.com/images/2020/07/18/img5.jpg',
        color: 'black',
        size: 'LX',
        price: 105,
        count: 1,
        colors: ['red', 'black', 'teal'],
        sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      },
    ])
    reactLocalStorage.set('shipping', '-1')
  }
  useEffect(() => {
    setMotorCart(reactLocalStorage.getObject('motorCart'))
    setProductCart(reactLocalStorage.getObject('productCart'))
  }, [])

  //透過改變後的navState,來調整顯示的內容(使用function changeDisplay)
  const navStateOnClick = navState
  function changeDisplay(a, b) {
    document.getElementById(a).classList.add('displayBlock')
    document.getElementById(b).classList.remove('displayBlock')
    document.getElementById(a).classList.remove('displayNone')
    document.getElementById(b).classList.add('displayNone')
  }
  useEffect(() => {
    navStateOnClick === 'NavMotor'
      ? changeDisplay('BodyMotor', 'BodyProd')
      : changeDisplay('BodyProd', 'BodyMotor')
  }, [navState])

  /////////////////////////////////////////////////////////////////
  const display = (
    <>
      <article className="col-10">
        {/* 購物車步驟 */}
        <OrderStep step="1" />
        <Card className="cartHome">
          {/* CardHeader */}
          <Card.Header>
            <Nav fill variant="tabs" defaultActiveKey="#Nav_Motor">
              <Nav.Item>
                <Nav.Link
                  href="#Nav_Motor"
                  onClick={() => {
                    setNavState('NavMotor')
                  }}
                >
                  <p>重機租賃</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#Nav_Prod"
                  onClick={() => {
                    setNavState('NavProd')
                  }}
                >
                  <p>周邊商品</p>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {/* CardBody */}
          <div id="BodyMotor">
            <CartMotor data={motorCart} />
          </div>
          <div id="BodyProd" className="py-4">
            {productCart.length > 0 ? (
              productCart.map((v, index) => {
                return (
                  <>
                    <CartProduct index={index} data={v} />
                    <div className="col-11 m-auto" key={index}>
                      {productCart.length - 1 == index ? (
                        ''
                      ) : (
                        <div className="line"></div>
                      )}
                    </div>
                  </>
                )
              })
            ) : (
              <p>nothing</p>
            )}
          </div>
        </Card>
        {/* <GrandTotal
          type={navState}
          data={navStateOnClick === 'NavMotor' ? motorCart : productCart}
          shipping={localShipping}
        /> */}

        {/* Button */}
        <Row className="justify-content-center finalBtnParent">
          <Link to={'/'}>
            <Button className="finalBtn place-center" variant="danger">
              繼續購物
            </Button>
          </Link>
          <Link
            to={
              navStateOnClick === 'NavMotor'
                ? '/order/CreditCard'
                : '/order/checkout'
            }
          >
            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
            >
              下一步
            </Button>
          </Link>
          <Button
            className="finalBtn finalBtnTwo place-center"
            variant="primary"
            onClick={setLocalStorage}
          >
            取資料
          </Button>
        </Row>
      </article>
    </>
  )
  return <>{display}</>
}

export default OD_Cart

// const [motorCart, setMotorCart] = useState([])
// const [productCart, setProductCart] = useState([])
// const [shipping, setShipping] = useState([])

// //引入資料庫
// async function getMotor() {
//   try {
//     const response = await fetch('http://localhost:5555/motorCart', {
//       method: 'get',
//     })
//     if (response.ok) {
//       // 剖析資料為JS的數值
//       const data = await response.json()

//       // 設定資料到MotorCart狀態
//       setMotorCart(data)
//     }
//   } catch (error) {
//     // 發生錯誤的處理情況
//     alert('無法得到伺服器資料，請稍後再重試')
//     console.log(error)
//   }
// }
// async function getProduct() {
//   try {
//     const response = await fetch('http://localhost:5555/productCart', {
//       method: 'get',
//     })
//     if (response.ok) {
//       // 剖析資料為JS的數值
//       const data = await response.json()

//       // 設定資料到ProductCart狀態
//       setProductCart(data)
//     }
//   } catch (error) {
//     // 發生錯誤的處理情況
//     alert('無法得到伺服器資料，請稍後再重試')
//     console.log(error)
//   }
// }
// async function getShipping() {
//   try {
//     const response = await fetch('http://localhost:5555/shipping', {
//       method: 'get',
//     })
//     if (response.ok) {
//       // 剖析資料為JS的數值
//       const data = await response.json()

//       // 設定資料到Shippin狀態
//       setShipping(data)
//     }
//   } catch (error) {
//     // 發生錯誤的處理情況
//     alert('無法得到伺服器資料，請稍後再重試')
//     console.log(error)
//   }
// }

// console.log(reactLocalStorage.getObject('motorCart'))
// //帶入資料庫
// useEffect(() => {
//   getMotor()
//   getProduct()
//   getShipping()
// }, [])
