import React from 'react'
import { withRouter } from 'react-router-dom'
import MemberNav from '../../components/MemberNav'

function Favorite(props) {
  const { isAuth } = props
  return (
    <>
      <MemberNav />
      <button onClick={() => props.history.push('/member')}>回首頁</button>
    </>
  )
}

export default withRouter(Favorite)
