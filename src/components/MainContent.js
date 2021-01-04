import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
function MainContent(props) {
  return (
    <>
      <main role="main" className="flex-shrink-0">
        <Container>{props.children}</Container>
        {/* <div className="container"></div> */}
      </main>
    </>
  )
}

export default MainContent
