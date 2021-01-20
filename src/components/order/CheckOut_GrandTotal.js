import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'

function OD_GrandTotal(props) {
  const data = props.data
  const type = props.type
  // console.log(type)
  // console.log(data)

  const [shipping, setShipping] = useState('')
  //計算商品總和
  let sum = 0
  data.map((v, index) => {
    sum = sum + Number(v.price) * Number(v.amount)
  })
  //計算運費
  useEffect(() => {
    const newShipping = localStorage.getItem('shipping')
    console.log('newShipping', newShipping, shipping)
    newShipping !== '' ? setShipping(newShipping) : setShipping('未選擇')
  }, [shipping])

  const display = (
    <>
      {data.length > 0 ? (
        type === 'Motor' ? (
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
              <p className="col-2">$ {shipping}</p>
            </Row>

            <div className="line"></div>
            <Row>
              <div className="col-8"></div>
              <p className="col-2">
                小計<span></span>
              </p>
              <p className="col-2 colorPrimary">
                NT${' '}
                <span>
                  {shipping === '未選擇' ? sum : sum + Number(shipping)}
                </span>
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
