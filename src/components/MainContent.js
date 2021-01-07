import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
function MainContent(props) {
  console.log(props)
  if (props.location.pathname === '/location')
    return (
      <>
        <main role="main" className="flex-shrink-0">
          <div>{props.children}</div>
        </main>
      </>
    )

  return (
    <>
      <main role="main" className="flex-shrink-0">
        <Container>{props.children}</Container>
        {/* <div>{props.children}</div> */}
        {/* <div className="container"></div> */}
      </main>
    </>
  )
}

export default withRouter(MainContent)

