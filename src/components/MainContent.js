import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
function MainContent(props) {
  const { location } = props

  //一般內容
  const display = (
    <>
      <main role="main" className="flex-shrink-0">
        <Container>{props.children}</Container>
        {/* <div className="container"></div> */}
      </main>
    </>
  )

  //沒有container的內容
  const noneContainer = (
    <>
      <main role="main" className="flex-shrink-0 noneContainer">
        {props.children}
      </main>
    </>
  )
  return <>{location.pathname == '/' ? noneContainer : display}</>
}

export default withRouter(MainContent)
