import React from 'react'
import Google from './GoogleAPI'
import SiderDemo from './SideNav'

function Location() {
  return (
    <>
      <div style={{ overflow: 'hidden', width: '1440px' }}>
        <Google />
        <SiderDemo />
      </div>
      <div></div>
    </>
  )
}

export default Location