import React, { useState, useEffect } from 'react'
import { Accordion, Form, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import ProductData2 from '../ProductData2.json'
import '../product.css'

function Sidenav(props) {
  const { searchQuery, doSearch, setDoSearch, setSearchQuery } = props

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

  const cards = Object.keys(categories).map((category) => {
    return (
      <Card className="nopadding">
        <Card.Header className="nopadding">
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey={category}
            className="nopadding"
          >
            <h5
              onClick={() => {
                document
                  .getElementById(`sidenav_${category}`)
                  .classList.toggle('fa-rotate-180')
              }}
              className="colorPrimary P_sidenav_Flex"
            >
              {category}
              <FontAwesomeIcon
                id={`sidenav_${category}`}
                icon={faAngleDown}
                className=" P_sidenav_transition"
              ></FontAwesomeIcon>
            </h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={category} className="P_sidenav_cardbody">
          <Card.Body
            onClick={(e) => {
              setSearchQuery(e.target.innerHTML)
              setDoSearch(!doSearch)
            }}
          >
            {categories[category].map((sub_category) => {
              return <h6 className="sidemenu_item">{sub_category}</h6>
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
            setDoSearch(!doSearch)
          }
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Accordion className="nopadding P_Sidenav">{cards}</Accordion>
    </>
  )
}

export default Sidenav
