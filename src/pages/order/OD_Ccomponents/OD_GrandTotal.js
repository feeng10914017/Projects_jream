import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'

function OD_GrandTotal(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    props.type == 'NavMotor'
      ? setData(props.motorData)
      : setData(props.productData)
  }, [])
  console.log('grand')
  console.log(data)
  console.log(props.type)
  const display = (
    <>
      {data.length > 0 ? (
        <section className="cartTotal text-right">
          <Row className="mb-3">
            <div className="col-6"></div>
            <p className="col-2">共 {data.length} 件商品</p>
            <p className="col-2">商品金額</p>
            <p className="col-2">$ 1,490</p>
          </Row>
          <Row>
            <div className="col-8"></div>
            <p className="col-2">運費</p>
            <p className="col-2">未選擇</p>
          </Row>
          <div className="line"></div>
          <Row>
            <div className="col-8"></div>
            <p className="col-2">
              小計<span></span>
            </p>
            <p className="col-2 colorPrimary">
              NT$<span>1,490</span>
            </p>
          </Row>
        </section>
      ) : (
        <p>nothing</p>
      )}
    </>
  )
  return <>{display}</>
}

export default OD_GrandTotal
