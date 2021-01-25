import React from 'react'
import { Row, Button, ButtonGroup } from 'react-bootstrap'

function MotorSBar() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            border: '1px #FFAC55 solid',
            margin: '0 auto',
          }}
        >
          <Row style={{ margin: '1rem' }}>
            <h5 style={{ margin: '0 1rem' }}>廠牌</h5>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Row>
          <Row style={{ margin: '1rem' }}>
            <h5 style={{ margin: '0 1rem' }}>價格</h5>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Row>
          <Row style={{ margin: '1rem' }}>
            <h5 style={{ margin: '0 1rem' }}>馬力</h5>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Row>
          <Row style={{ margin: '1rem' }}>
            <h5 style={{ margin: '0 1rem' }}>系列</h5>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Row>
        </div>
      </div>
    </>
  )
}

export default MotorSBar
