import React from 'react'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
function MainContent(props) {
  // console.log(props)
  if (props.location.pathname === '/location')
    return (
      <>
        {/* <main role="main" className="flex-shrink-0"> */}
        <div>{props.children}</div>
        {/* </main> */}
      </>
    )
  // if (props.location.pathname === '/product/Detail/id?')
  //   return (
  //     <>
  //       {/* <main role="main" className="flex-shrink-0"> */}
  //       <div>{props.children}</div>
  //       {/* </main> */}
  //     </>
  //   )
  if (props.location.pathname === '/product')
    return (
      <>
        {/* <main role="main" className="flex-shrink-0"> */}
        <div>{props.children}</div>
        {/* </main> */}
      </>
    )

  const { location } = props

  //一般內容
  const display = (
    <>
      <main role="main" className="flex-shrink-0 blockContainer">
        <Container>{props.children}</Container>
        {/* <div>{props.children}</div> */}
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
  return <>{location.pathname === '/' ? noneContainer : display}</>
}

export default withRouter(MainContent)
