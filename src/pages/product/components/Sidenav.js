import React, { useState, useEffect, useContext } from 'react'
import { Accordion, Form, Card } from 'react-bootstrap'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import ProductData2 from '../ProductData2.json'
import '../product.css'

function Sidenav() {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ProductData2.reduce((prev, product) => {
    const { category, sub_category } = product // 解構賦值

    // 如不是 Array 的話，就建成 Array
    if (!Array.isArray(prev[category])) {
      prev[category] = []
    }

    // 如sub_category 不包含於 prev[category] 這個 Array 裡，就加進此 Array 裡
    if (!prev[category].includes(sub_category)) {
      prev[category].push(sub_category)
    }

    return prev
  }, {})

  const CustomToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext)

    useEffect(() => {
      const icon = document.getElementById(`sidenav_${eventKey}`)

      if (icon) {
        if (currentEventKey === eventKey) {
          icon.classList.add('fa-rotate-180')
        } else {
          icon.classList.remove('fa-rotate-180')
        }
      }
    }, [currentEventKey])

    const decoratedOnClick = useAccordionToggle(eventKey, () => {
      callback && callback(eventKey)
    })

    return (
      <h5 onClick={decoratedOnClick} className="colorPrimary P_sidenav_Flex">
        {children}
        <FontAwesomeIcon
          id={`sidenav_${eventKey}`}
          icon={faAngleDown}
          className="P_sidenav_transition"
        ></FontAwesomeIcon>
      </h5>
    )
  }

  const cards = Object.keys(categories).map((category) => {
    return (
      <Card className="nopadding">
        <Card.Header className="nopadding">
          <CustomToggle
            as={Card.Header}
            variant="link"
            eventKey={category}
            className="nopadding"
          >
            {category}
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={category} className="P_sidenav_cardbody">
          <Card.Body>
            {categories[category].map((sub_category) => {
              return (
                <h6
                  className="sidemenu_item"
                  onClick={() => {
                    window.location.href = `${window.location.origin}/product?search=${sub_category}`
                  }}
                >
                  {sub_category}
                </h6>
              )
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  })
  // searching place----------------------

  return (
    <>
      <Form.Control
        className="searchingInp border col-12"
        type="text"
        style={{ marginTop: '10px' }}
        placeholder="搜尋產品"
        value={searchQuery}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            window.location.href = `${window.location.origin}/product?search=${searchQuery}`
          }
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Accordion className="nopadding P_Sidenav">{cards}</Accordion>
    </>
  )
}

export default Sidenav
