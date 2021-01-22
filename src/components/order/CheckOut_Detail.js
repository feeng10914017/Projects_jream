import React, { useState, useEffect } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import $ from 'jquery'

import CartMotor from './CartMotor'
import CartProduct from '../../components/order/CartProduct'
import GrandTotal from '../../components/order/CheckOut_GrandTotal'
import { AiOutlineDown } from 'react-icons/ai'

function CheckOut_Detail(props) {
  const motorCart = JSON.parse(localStorage.getItem('motorCart'))
  const finalCart = JSON.parse(localStorage.getItem('finalProductCart'))
  const shipping = JSON.parse(localStorage.getItem('shipping'))
  const [rentalAmount, setRentalAmount] = useState(0)
  const [rentalSum, setrentalSum] = useState(0)
  const [productAmout, setProductAmout] = useState(0)
  const [productSumPlus, setProductSumPlus] = useState(0)
  const [productShipping, setProductShipping] = useState('')

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
  // 運費 顯示
  useEffect(() => {
    JSON.stringify(shipping) === '[]' || null
      ? setProductShipping('未選擇')
      : shipping[0] === 'seven'
      ? setProductShipping('80')
      : shipping[0] === 'family'
      ? setProductShipping('120')
      : shipping[0] === 'credit'
      ? setProductShipping('60')
      : shipping[0] === 'delivery'
      ? setProductShipping('150')
      : setProductShipping('error')
  }, [shipping])
  // 商品 小計
  useEffect(() => {
    if (JSON.stringify(finalCart) === '[]' || null) {
      setProductAmout(0)
    } else {
      let newSum = 0
      let newAmount = finalCart.length
      finalCart.map((v, index) => {
        newSum = newSum + Number(v.amount) * Number(v.price)
      })

      setProductAmout(newAmount)
      setProductSumPlus(newSum + Number(productShipping))
    }
  }, [finalCart, productShipping])

  useEffect(() => {
    $('#productArrowParent').on('click', function () {
      $('#productArrow').toggleClass('transfromArrow')
    })
  }, [])

  const motorDisplay = (
    <>
      <Accordion>
        <p className="fontSize14 text-center colorSecondary">
          本次租賃總計 <span className="colorPrimary">NT$</span>
          <span className="colorPrimary fontSize19"> {rentalSum}</span>
        </p>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="text-center fontSize14 colorLight "
            id="productArrowParent"
          >
            總計 {rentalAmount} 台重機
            <AiOutlineDown id="productArrow" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CartMotor data={motorCart} />
              <GrandTotal type={'Motor'} shipping={'none'} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
  const productDisplay = (
    <>
      <Accordion>
        <p className="fontSize14 text-center colorSecondary">
          本次消費總計 <span className="colorPrimary">NT$</span>
          <span className="colorPrimary fontSize19"> {productSumPlus}</span>
        </p>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="text-center fontSize14 colorLight "
            id="productArrowParent"
          >
            總計 {productAmout} 件商品
            <AiOutlineDown id="productArrow" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {/* <CartMotor data={motorCart} /> */}
              <GrandTotal type={'Prod'} shipping={shipping} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
  return <>{props.type === 'Motor' ? motorDisplay : productDisplay}</>
}
export default CheckOut_Detail
