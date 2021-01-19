import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import '../product.css'
function Sidenav() {
  return (
    <Accordion className="nopadding">
      <Card className="nopadding">
        <Card.Header className="nopadding">
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="0"
            className="nopadding"
          >
            <h5>Click me!</h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="nopadding">
        <Card.Header className="nopadding">
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="1"
            className="nopadding"
          >
            <h5>Click me!</h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="nopadding">
        <Card.Header className="nopadding">
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="2"
            className="nopadding"
          >
            <h5>Click me!</h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="nopadding">
        <Card.Header className="nopadding">
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="3"
            className="nopadding"
          >
            <h5>Click me!</h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Sidenav
