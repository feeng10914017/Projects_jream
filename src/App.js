import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

//排版用元件 全部都使用
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'

//頁面元件
import Home from './pages/Home'
import News from './pages/news/News'
import Motor from './pages/motor/Motor'
import Product from './pages/product/Product'
import Location from './pages/location/Location'
import Member from './pages/member/Member'
import MemberInformation from './pages/member/MemberInformation'
import MemberEdit from './pages/member/MemberEdit'
import MemberFavorite from './pages/member/MemberFavorite'
import MemberRentrecord from './pages/member/MemberRentrecord'
import MemberOrderrecord from './pages/member/MemberOrderrecord'
import LogIn from './pages/member/Login'
import Order from './pages/order/OD_Cart'
import OrderCheckout from './pages/order/OD_Checkout'
import OrderCreditCard from './pages/order/OD_CreditCard'
import OrderCartReport from './pages/order/OD_CartReport'
import OrderHomeDelivery from './pages/order/OD_HomeDelivery'
import { propTypes } from 'react-bootstrap/esm/Image'
function App() {
  return (
    <Router>
      <>
        <ScrollToTop>
          <MyNavbar />
          <MainContent>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/motor">
                <Motor />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/products/:id">
                <Product />
              </Route>
              <Route path="/location">
                <Location />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/member">
                <Member />
              </Route>
              <Route path="/memberEdit">
                <MemberEdit />
              </Route>
              <Route path="/information">
                <MemberInformation />
              </Route>
              <Route path="/favorite">
                <MemberFavorite />
              </Route>
              <Route path="/rent-record">
                <MemberRentrecord />
              </Route>
              {/* order */}
              <Route path="/order-record">
                <MemberOrderrecord />
              </Route>
              <Route path="/order/cartReport">
                <OrderCartReport />
              </Route>
              <Route path="/order/checkout">
                <OrderCheckout />
              </Route>
              <Route path="/order/CreditCard">
                <OrderCreditCard />
              </Route>
              <Route path="/order/HomeDelivery">
                <OrderHomeDelivery />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
            </Switch>
          </MainContent>
          <MyFooter />
        </ScrollToTop>
      </>
    </Router>
  )
}

export default App
