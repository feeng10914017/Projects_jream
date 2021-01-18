import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//排版用元件 全部都使用
import MyNavbar from './components/index/MyNavbar'
import MyFooter from './components/index/MyFooter'
import MainContent from './components/index/MainContent'
import ScrollToTop from './components/index/ScrollToTop'

//頁面元件
import Home from './pages/Home'
import LogIn from './pages/member/Login'
import News from './pages/news/News'
import Motor from './pages/motor/Motor'
import MotorList from './pages/motor/Product'

import Product from './pages/product/Product'
import Details from './pages/product/components/Details'
import Location from './pages/location/Location'

import Member from './pages/member/Member'
import MemberInformation from './pages/member/MemberInformation'
import MemberEdit from './pages/member/MemberEdit'
import MemberFavorite from './pages/member/MemberFavorite'
import MemberRentrecord from './pages/member/MemberRentrecord'
import MemberOrderrecord from './pages/member/MemberOrderrecord'
import Order from './pages/order/OD_Cart'
import OrderCheckout from './pages/order/OD_Checkout'
import OrderCreditCard from './pages/order/OD_CreditCard'
import OrderHomeDelivery from './pages/order/OD_HomeDelivery'
import OrderCartReport from './pages/order/OD_CartReport'

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
              <Route path="/login">
                <LogIn />
              </Route>

              {/* news */}
              <Route path="/news">
                <News />
              </Route>

              {/* motor */}
              <Route path="/motor/:type?/:page?">
                <Motor />
              </Route>
              <Route path="/motorlist/:type?/:id?">
                <MotorList />
              </Route>

              {/* product */}
              <Route path="/product/Detail/:id?">
                <Product type="details" />
              </Route>

              <Route exact path="/product">
                <Product type="products" />
              </Route>

              <Route path="/location">
                <Location />
              </Route>

              {/* member */}
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
