import React from 'react'
import { Accordion, Form, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../product.css'
function Sidenav() {
  return (
    <>
      <Form.Control
        className="searchingInp border col-12"
        type="text"
        placeholder="搜尋產品"
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
                className="colorPrimary P_sidenav_Flex"
              >
                Category
                <FontAwesomeIcon
                  id="arrow"
                  icon={faAngleDown}
                  className=" P_sidenav_transition "
                ></FontAwesomeIcon>
              </h5>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className="P_sidenav_cardbody">
            <Card.Body>
              <h6 className="sidemenu_item">Sub_Category</h6>
              <h6 className="sidemenu_item">Sub_Category</h6>
              <h6 className="sidemenu_item">Sub_Category</h6>
              <h6 className="sidemenu_item">Sub_Category</h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default Sidenav
