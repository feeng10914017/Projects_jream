import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

//排版用元件 全部都使用
import MyNavbar from './components/index/MyNavbar'
import MyFooter from './components/index/MyFooter'
import MainContent from './components/index/MainContent'
import ScrollToTop from './components/index/ScrollToTop'

//頁面元件
import Home from './pages/Home'
import LogIn from './pages/member/Login'
import News from './pages/news/News'
import AllNews from './pages/news/allNews'

import News1 from './pages/news/News1'
import News2 from './pages/news/News2'

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
import OrderRentalReport from './pages/order/OD_RentalReport'

function App() {
  const [auth, setAuth] = React.useState(false)
  useEffect(() => {
    setAuth(localStorage.getItem('userData'))
  }, [auth])

  function PrivateRoute({ component: Component, authed, setAuth, ...rest }) {
    return (
      <Route
        {...rest}
        setAuth={setAuth}
        render={(props) =>
          authed === true ? (
            <Component setAuth={setAuth} {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    )
  }

  return (
    <Router>
      <>
        <ScrollToTop>
          <MyNavbar auth={auth} setAuth={setAuth} />
          <MainContent>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <LogIn auth={auth} setAuth={setAuth} />
              </Route>

              {/* news */}
              <Route path="/news/newspages/1">
                <News1 />
              </Route>
              <Route path="/news/newspages/2">
                <News2 />
              </Route>
              <Route path="/news/allNews/2">
                <AllNews />
              </Route>
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
                <MemberEdit auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/member/information">
                <MemberInformation auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/member/favorite">
                <MemberFavorite auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/member/rent-record">
                <MemberRentrecord auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/member/order-record">
                <MemberOrderrecord auth={auth} setAuth={setAuth} />
              </Route>
              <PrivateRoute
                authed={localStorage.getItem('userData') && true}
                path="/member"
                component={Member}
                sauth={auth}
                setAuth={setAuth}
              />
              {/* <Route path="/member">
                <Member />
              </Route> */}

              {/* order */}
              <Route path="/order/rentalReport">
                <OrderRentalReport />
              </Route>
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
