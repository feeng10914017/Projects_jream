import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

function Pageee() {
  let active = 2
  let items = []
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '0 auto' }}>
          <Pagination>{items}</Pagination>
        </div>
      </div>
    </>
  )
}

export default Pageee
