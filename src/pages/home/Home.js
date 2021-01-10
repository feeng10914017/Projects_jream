import React, { useState, useEffect } from 'react'

function Home() {
  // const data = 9453
  // setter
  // localStorage.setItem('myData', data)

  // getter
  // localStorage.getItem('myData')

  // remove
  // localStorage.removeItem('myData')

  // // remove all
  // localStorage.clear()

  const [value, setValue] = React.useState('')

  const onChange = (event) => setValue(event.target.value)

  return (
    <>
      <div>
        <h1>Hello React with Local Storage!</h1>

        <input value={value} type="text" onChange={onChange} />

        <p>{value}</p>
      </div>
    </>
  )
}

export default Home
