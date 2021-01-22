import React from 'react'
import MotorThreeD from '../../components/motor/MotorThreeD'
import MotorSBar from '../../components/motor/MotorSBar'
// import MotorCard from '../../components/motor/MotorCard'
import { Container, Row, Col, Pagination } from 'react-bootstrap'
import MotorList from './MotorList'
import Pageee from '../../components/motor/Pageee'

function Motor() {
  //設定分頁容納節點

  return (
    <>
      <MotorThreeD />
      {/* <MotorSBar /> */}
      {/* <MotorCard /> */}

      <hr />
      <h4>機車列表</h4>
      <br />
      <MotorList />

      {/* <Pageee /> */}
    </>
  )
}

export default Motor
