import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'

function CheckOut_GrandTotal(props) {
  const propsChoseType = props.type
  const propsShipping = props.shipping

  const motorCart = JSON.parse(localStorage.getItem('motorCart'))
  const productCart = JSON.parse(localStorage.getItem('productCart'))
  const finalCart = JSON.parse(localStorage.getItem('finalProductCart'))
  const [productShipping, setProductShipping] = useState('')
  const [rentalAmount, setRentalAmount] = useState(0)
  const [rentalSum, setrentalSum] = useState(0)
  const [productAmout, setProductAmout] = useState(0)
  const [productSum, setProductSum] = useState(0)
  const [productSumPlus, setProductSumPlus] = useState(0)

  // 租賃 小計
  useEffect(() => {
    if (JSON.stringify(motorCart) === '[]' || null) {
      setRentalAmount(0)
      setrentalSum(0)
    } else {
      setRentalAmount(motorCart[0].rentalAmount)
      setrentalSum(motorCart[0].rentalAmount * motorCart[0].rentalPrice)
    }
  }, [motorCart])

  // 商品 小計
  useEffect(() => {
    if (JSON.stringify(finalCart) === '[]' || null) {
      setProductAmout(0)
      setProductSum(0)
    } else {
      let newSum = 0
      let newAmount = finalCart.length
      finalCart.map((v, index) => {
        newSum = newSum + Number(v.amount) * Number(v.price)
      })
      productShipping === '未選擇'
        ? setProductSumPlus(newSum)
        : setProductSumPlus(newSum + Number(productShipping))
      setProductSum(newSum)
      setProductAmout(newAmount)
    }
  }, [finalCart, productShipping])

  // 運費 顯示
  useEffect(() => {
    JSON.stringify(propsShipping) === '[]' || null
      ? setProductShipping('未選擇')
      : propsShipping[0] === 'seven'
      ? setProductShipping('80')
      : propsShipping[0] === 'family'
      ? setProductShipping('120')
      : propsShipping[0] === 'credit'
      ? setProductShipping('60')
      : propsShipping[0] === 'delivery'
      ? setProductShipping('150')
      : propsShipping[0] === 'none'
      ? setProductShipping('0')
      : setProductShipping('error')
  }, [propsShipping])

  const NoneDisplay = <></>

  const MotorDisplay = (
    <>
      <section className="cartTotal text-right">
        <Row className="mb-3">
          <div className="col-6"></div>
          <p className="col-2">共租 {rentalAmount} 天</p>
          <p className="col-2">租賃金額</p>
          <p className="col-2">$ {rentalSum}</p>
        </Row>
        <div className="line"></div>
        <Row>
          <div className="col-8"></div>
          <p className="col-2">
            小計<span></span>
          </p>
          <p className="col-2 colorPrimary">
            NT$ <span>{rentalSum}</span>
          </p>
        </Row>
      </section>
    </>
  )
  const ProductDisplay = (
    <>
      <section className="cartTotal text-right">
        <Row className="mb-3">
          <div className="col-6"></div>
          <p className="col-2">共 {productAmout} 件商品</p>
          <p className="col-2">商品金額</p>
          <p className="col-2">$ {productSum}</p>
        </Row>
        <Row>
          <div className="col-8"></div>
          <p className="col-2">運費</p>
          <p className="col-2">$ {productShipping}</p>
        </Row>

        <div className="line"></div>
        <Row>
          <div className="col-8"></div>
          <p className="col-2">
            小計<span></span>
          </p>
          <p className="col-2 colorPrimary">
            NT$
            <span> {productSumPlus}</span>
          </p>
        </Row>
      </section>
    </>
  )

  return (
    <>
      {propsChoseType === 'Motor'
        ? JSON.stringify(motorCart) === '[]' || null
          ? NoneDisplay
          : MotorDisplay
        : JSON.stringify(productCart) === '[]' || null
        ? NoneDisplay
        : ProductDisplay}
    </>
  )
}

export default CheckOut_GrandTotal
