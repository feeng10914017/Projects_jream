import React, { useState } from 'react'
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
import Motorcycle from './pages/motor/Motorcycle'

import Product from './pages/product/ProductList'
import Detail from './pages/product/ProductDetail'
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
import OrderRentalt from './pages/order/OD_Rental'

//登入元件(測試用)
// import useToken from './pages/member/components/useToken'
function App() {
  //判別登入狀態
  // const { token, setToken } = useToken()
  // console.log(useToken())

  // if (!token) {
  //   return (
  //     <Router>
  //       <>
  //         <ScrollToTop>
  //           <MyNavbar />
  //           <MainContent>
  //             <Switch>
  //               <Route path="/login">
  //                 <LogIn setToken={setToken} />
  //               </Route>
  //             </Switch>
  //           </MainContent>
  //           <MyFooter />
  //         </ScrollToTop>
  //       </>
  //     </Router>
  //   )
  // }

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
              <Route path="/motorcycle/:type?/:id?">
                <Motorcycle />
              </Route>

              {/* product */}
              <Route path="/product/Detail/:id?">
                <Detail id="1" />
              </Route>

              <Route exact path="/product">
                <Product />
              </Route>

              <Route path="/location">
                <Location />
              </Route>

              {/* member */}
              <Route path="/member/Edit">
                <MemberEdit />
              </Route>
              <Route path="/member/information">
                <MemberInformation />
              </Route>
              <Route path="/member/favorite">
                <MemberFavorite />
              </Route>
              <Route path="/member/rent-record">
                <MemberRentrecord />
              </Route>
              <Route path="/member/order-record">
                <MemberOrderrecord />
              </Route>
              <Route path="/member">
                <Member />
              </Route>

              {/* order */}
              <Route path="/order/rentalt">
                <OrderRentalt />
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
