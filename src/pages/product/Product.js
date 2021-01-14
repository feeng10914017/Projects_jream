import React from 'react'

import Products from './components/Products'
import Container from 'react-bootstrap/Container'
import Carousel from './components/Carousel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import Details from './components/Details'
import './product.css'
function App(props) {
  return (
    <DataProvider>
      <Carousel style={{ height: '30vh' }} />

      <div className="App ">
        <Container>
          {props.type === 'details' ? <Details /> : <Products />}
        </Container>
      </div>
    </DataProvider>
  )
}

export default App
