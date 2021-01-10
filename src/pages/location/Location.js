import React from 'react'
import Google from './GoogleAPI'
import { Button } from 'react-bootstrap'
import Storepic from './images/1.jpg'
import './Location.css'
import { Row, Col, Card, Form } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'

function Location() {
  return (
    <Row>
      <div
        className="col-3 nopadding border"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        {' '}
        <div className="SearchingBox border">
          <Row>
            <ul className="SearchingPlace">
              <Form.Control
                className="searchingInp border "
                type="text"
                placeholder="據點搜尋"
              />

              <Form.Control
                className="searchingInp border "
                as="select"
                defaultValue="Choose"
              >
                <option selected>全部</option>
                <option>台北市</option>
                <option>新北市</option>
                <option>桃園市</option>
                <option>新竹市</option>
              </Form.Control>
            </ul>
            <Button size="lg" variant="primary" className="SearchingBtn ">
              Search
            </Button>
          </Row>
        </div>
        <nav className="nav-menu ">
          <ul className="nopadding">
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>

            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
            <li>
              <div className="Location_item">
                <div className="photoBox">
                  <img src={Storepic} alt="Product" />
                </div>
                <h5>桃園門市</h5>
                <div className="address fontSize14">門市地址</div>
                <div className="time fontSize14">營業時間</div>
                <div className="phone fontSize14">連絡電話</div>
                <div className="addressA fontSize14">
                  320桃園市中壢區中北路200號
                </div>
                <div className="timeA fontSize14">上午9:00~下午9:00</div>
                <div className="phoneA fontSize14">04 2237 0460</div>

                <Button variant="primary">詳細資訊</Button>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="col-9 nopadding" style={{ height: 'calc(100vh - 80px)' }}>
        <Google />
      </div>
    </Row>
  )
}

export default Location
