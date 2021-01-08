import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { BiSearchAlt } from 'react-icons/bi'
import { RiCoinsLine } from 'react-icons/ri'
import { FiTruck } from 'react-icons/fi'
import { AiOutlineForm } from 'react-icons/ai'
import { AiOutlineFlag } from 'react-icons/ai'
import { AiOutlineLine } from 'react-icons/ai'
import '../OD.scss'
function OD_Step(props) {
  useEffect(() => {
    props.step == 1 &&
      $('#step1')
        .children()
        .eq(0)
        .addClass('activBorder')
        .children()
        .addClass('activeColorPrimary')
        .parent()
        .next()
        .addClass('activeColorSecondary')

    props.step == 2 &&
      $('#step2')
        .children()
        .eq(0)
        .addClass('activBorder')
        .children()
        .addClass('activeColorPrimary')
        .parent()
        .next()
        .addClass('activeColorSecondary')
    props.step == 3 &&
      $('#step3')
        .children()
        .eq(0)
        .addClass('activBorder')
        .children()
        .addClass('activeColorPrimary')
        .parent()
        .next()
        .addClass('activeColorSecondary')
    props.step == 4 &&
      $('#step4')
        .children()
        .eq(0)
        .addClass('activBorder')
        .children()
        .addClass('activeColorPrimary')
        .parent()
        .next()
        .addClass('activeColorSecondary')
  }, [])
  return (
    <>
      {console.log(props.step)}
      <div className="step">
        <div id="step1">
          <div>
            <BiSearchAlt size="32" />
          </div>
          <p>1. 確認訂單</p>
        </div>
        <AiOutlineLine size="48" />
        <div id="step2">
          <div>
            <RiCoinsLine className="coin" size="16" />
            <AiOutlineLine className="divide" size="40" />
            <FiTruck className="truck" size="16" />
          </div>
          <p>2. 付款與運送</p>
        </div>
        <AiOutlineLine size="48" />
        <div id="step3">
          <div>
            <AiOutlineForm size="32" />
          </div>
          <p>3. 填寫資料</p>
        </div>
        <AiOutlineLine size="48" />
        <div id="step4">
          <div>
            <AiOutlineFlag size="32" />
          </div>
          <p>4. 完成訂單</p>
        </div>
      </div>
    </>
  )
}

export default OD_Step
