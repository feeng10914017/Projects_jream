import React, { useState, useEffect } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { RiCoinsLine } from 'react-icons/ri'
import { FiTruck } from 'react-icons/fi'
import { AiOutlineForm } from 'react-icons/ai'
import { AiOutlineFlag } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

function OrderStep() {
  return (
    <>
      <div class="step">
        <div>
          <div>
            <BiSearchAlt size="32" color="#CACACA" />
          </div>
          <p>1. 確認訂單</p>
        </div>
        <AiOutlineMinus size="48" color="#CACACA" />
        <div>
          <div>
            <RiCoinsLine size="16" color="#CACACA" />
            <FiTruck size="16" color="#CACACA" />
          </div>
          <p>2. 付款與運送</p>
        </div>
        <AiOutlineMinus size="48" color="#CACACA" />
        <div>
          <div>
            <AiOutlineForm size="32" color="#CACACA" />
          </div>

          <p>3. 填寫資料</p>
        </div>
        <AiOutlineMinus size="48" color="#CACACA" />
        <div>
          <div>
            <AiOutlineFlag size="32" color="#CACACA" />
          </div>

          <p>4. 完成訂單</p>
        </div>
      </div>
    </>
  )
}

export default OrderStep
