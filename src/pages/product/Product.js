import React from 'react'
import { Row, Col, Card, Nav, Button, Form, Table } from 'react-bootstrap'
import Products from './components/Products'
import Container from 'react-bootstrap/Container'
import Carousel from './components/Carousel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import Details from './components/Details'
import Sidenav from './components/Sidenav'
import './product.css'
function App(props) {
  return (
    <DataProvider>
      <Carousel />

      <div className="App ">
        <Container>
          <Row>
            <Col sm={2} className="nopadding ">
              <Sidenav />
            </Col>
            <Col sm={10} className="nopadding ">
              {props.type === 'details' ? <Details /> : <Products />}
            </Col>
          </Row>
        </Container>
      </div>
    </DataProvider>
  )
}

export default App
