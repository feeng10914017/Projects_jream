import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { RiCoinsLine } from 'react-icons/ri'
import { FiTruck } from 'react-icons/fi'
import { AiOutlineForm } from 'react-icons/ai'
import { FaFlagCheckered } from 'react-icons/fa'
// import './order.scss'
function Order() {
  return (
    <>
      <div class="step">
        <div>
          <BiSearchAlt />
        </div>
        <div>
          <RiCoinsLine />
          <FiTruck />
        </div>
        <div>
          <AiOutlineForm />
        </div>
        <div>
          <FaFlagCheckered />
        </div>
      </div>
    </>
  )
}

export default Order
