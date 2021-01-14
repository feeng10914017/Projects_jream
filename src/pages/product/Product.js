import React from 'react'

import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import Details from './components/Details'
import './product.css'
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Products />
          <Details />
        </Router>
      </div>
    </DataProvider>
  )
}

export default App
