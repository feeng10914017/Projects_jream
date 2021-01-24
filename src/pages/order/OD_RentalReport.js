import React, { useState, useEffect } from 'react'
import { Row, Button, Card, Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//引入頁面元件
import OrderStep from '../../components/order/CartStep'

function OD_CartReport() {
  return (
    <>
      <article className="col-10 cartReport">
        <OrderStep step="4" />
        <Card>
          <Card.Header>
            <h6 className="px-3">
              訂單編號
              <span className="pl-3">202012201833 OrderRentalReport</span>
            </h6>
          </Card.Header>

          <Card.Body>
            <Row>
              <div className="col-lg-6">
                <Row>
                  <p className="col-sm-4">訂單日期</p>
                  <p className="col-sm-8">2020-12-12</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">訂單狀態</p>
                  <p className="col-sm-8">待出貨</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">付款方式</p>
                  <p className="col-sm-8">信用卡付款</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">商品金額</p>
                  <p className="col-sm-8">NT$ 140,000</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">運費</p>
                  <p className="col-sm-8">NT$ 0</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">訂單金額</p>
                  <p className="col-sm-8">NT$ 140,000</p>
                </Row>
                <div className="line col auto col-sm-12"></div>
              </div>
              <div className="col-lg-6">
                <Row>
                  <p className="col-sm-4">配送方式</p>
                  <p className="col-sm-8">宅配</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">收件人</p>
                  <p className="col-sm-8">小帥哥</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">收件人電話</p>
                  <p className="col-sm-8">0912345678</p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">收件地址</p>
                  <p className="col-sm-8">
                    320 桃園市中壢區中大路300號國立中央大學
                  </p>
                </Row>
                <div className="line"></div>
                <Row>
                  <p className="col-sm-4">收件備註</p>
                  <p className="col-sm-8">無</p>
                </Row>
              </div>
            </Row>
          </Card.Body>
        </Card>

        {/* Button */}
        <Row className="justify-content-center finalBtnParent">
          <Link to="/">
            <Button className="finalBtn place-center" variant="danger">
              繼續逛逛
            </Button>
          </Link>
          <Link to="/member">
            <Button
              className="finalBtn finalBtnTwo place-center"
              variant="primary"
            >
              訂單查詢
            </Button>
          </Link>
        </Row>
      </article>
    </>
  )
}

export default OD_CartReport
