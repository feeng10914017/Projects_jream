import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'

function OD_GrandTotal(props) {
  const data = props.data
  const type = props.type
  //計算商品總和
  let sum = 0
  data.map((v, index) => {
    sum = sum + Number(v.productPrice) * Number(v.productAmount)
  })
  //計算運費
  let shipping = ''
  props.shipping == false && (shipping = 0)
  console.log(type)
  console.log(data)
  const display = (
    <>
      {data.length > 0 ? (
        type == 'NavMotor' ? (
          <section className="cartTotal text-right">
            <Row className="mb-3">
              <div className="col-6"></div>
              <p className="col-2">共租 {data[0].rentalAmount} 天</p>
              <p className="col-2">租賃金額</p>
              <p className="col-2">
                $ {data[0].rentalAmount * data[0].rentalPrice}
              </p>
            </Row>
            <div className="line"></div>
            <Row>
              <div className="col-8"></div>
              <p className="col-2">
                小計<span></span>
              </p>
              <p className="col-2 colorPrimary">
                NT$ <span>{data[0].rentalAmount * data[0].rentalPrice}</span>
              </p>
            </Row>
          </section>
        ) : (
          <section className="cartTotal text-right">
            <Row className="mb-3">
              <div className="col-6"></div>
              <p className="col-2">共 {data.length} 件商品</p>
              <p className="col-2">商品金額</p>
              <p className="col-2">$ {sum}</p>
            </Row>
            <Row>
              <div className="col-8"></div>
              <p className="col-2">運費</p>
              <p className="col-2">$ {props.shipping == false && '未選擇'}</p>
            </Row>

            <div className="line"></div>
            <Row>
              <div className="col-8"></div>
              <p className="col-2">
                小計<span></span>
              </p>
              <p className="col-2 colorPrimary">
                NT$ <span>{sum + shipping}</span>
              </p>
            </Row>
          </section>
        )
      ) : (
        <p>nothing</p>
      )}
    </>
  )
  return <>{display}</>
}

export default OD_GrandTotal
