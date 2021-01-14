import React from 'react'
import { Row, Button, ButtonGroup, Card } from 'react-bootstrap'

function MotorCard() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '0 auto' }}>
          <div style={{ display: 'flex' }}>
            <Card style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img
                variant="top"
                src="http://localhost:3000/images/motor/Leoncino_250_gray.jpg"
              />
              <Card.Body>
                <Card.Title>Leoncino</Card.Title>
                <Card.Text>0.0</Card.Text>
                <Button variant="primary">查看商品</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img
                variant="top"
                src="http://localhost:3000/images/motor/Leoncino_250_gray.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img
                variant="top"
                src="http://localhost:3000/images/motor/Leoncino_250_gray.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img
                variant="top"
                src="http://localhost:3000/images/motor/Leoncino_250_gray.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default MotorCard
