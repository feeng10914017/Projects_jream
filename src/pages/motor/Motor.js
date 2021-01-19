import React from 'react'
import MotorThreeD from '../../components/motor/MotorThreeD'
import MotorSBar from '../../components/motor/MotorSBar'
// import MotorCard from '../../components/motor/MotorCard'
import { Container, Row, Col, Pagination } from 'react-bootstrap'
import ProductList from './ProductList'

function Motor() {
  //設定分頁容納節點
  const paginationBasic = (
    <Pagination className="d-flex justify-content-center" size="md">
      {/* <Pagination.First href={'/products/' + 1} />
      <Pagination.Prev
        href={'/products/' + (props.list.page === 1 ? 1 : props.list.page - 1)}
      />
      {pages.slice(0, 10)}
      <Pagination.Next
        href={
          '/products/' +
          (props.list.page === props.list.totalPages
            ? props.list.totalPages
            : props.list.page + 1)
        }
      />
      <Pagination.Last href={'/products/' + props.list.totalPages} /> */}
    </Pagination>
  )
  return (
    <>
      <MotorThreeD />
      {/* <MotorSBar /> */}
      {/* <MotorCard /> */}
      {paginationBasic}
      <hr />
      <ProductList />
    </>
  )
}

export default Motor
