import React from 'react'
import './App.css'
import Navbar from '../../components/news/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Reports from './Reports'
import Products from './Products'

function News() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  )
}

export default News
