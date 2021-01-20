import React from 'react'
import { Accordion, Form, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../product.css'
function Sidenav() {
  return (
    <>
      <Form.Control
        className="searchingInp border "
        type="text"
        placeholder="搜尋商品"
      />
      <Accordion className="nopadding P_Sidenav">
        <Card className="nopadding">
          <Card.Header className="nopadding">
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="0"
              className="nopadding "
            >
              <h5
                onClick={() => {
                  document
                    .getElementById('arrow')
                    .classList.toggle('fa-rotate-180')
                }}
                className="colorPrimary"
              >
                Click me!
                <FontAwesomeIcon
                  id="arrow"
                  icon={faAngleDown}
                  className=" P_sidenav_transition "
                ></FontAwesomeIcon>
              </h5>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className="P_sidenav_cardbody">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default Sidenav
