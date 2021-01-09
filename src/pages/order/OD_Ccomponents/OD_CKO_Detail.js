import React, { useState, useEffect } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import $ from 'jquery'

import ODIMotor from './OD_CartMotor'
import ODICardTotal from './OD_GrandTotal'
import { AiOutlineDown } from 'react-icons/ai'

function OD_CKO_Detail() {
  useEffect(() => {
    $('#productArrowParent').on('click', function () {
      $('#productArrow').toggleClass('transfromArrow')
    })
  })
  return (
    <>
      <Accordion>
        <p className="fontSize14 text-center colorSecondary">
          本次消費總計 <span className="colorPrimary">NT$</span>
          <span className="colorPrimary fontSize19"> 1490</span>
        </p>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="text-center fontSize14 colorLight "
            id="productArrowParent"
          >
            總計 1 件商品
            <AiOutlineDown id="productArrow" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ODIMotor />
              <ODICardTotal />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}
export default OD_CKO_Detail
