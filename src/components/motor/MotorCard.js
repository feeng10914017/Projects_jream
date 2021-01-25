import React, { useState, useEffect } from 'react'
import { Row, Button, ButtonGroup, Card } from 'react-bootstrap'

function MotorCard() {
  const [motorCard, setMotorCard] = useState([])

  //引入資料庫
  // async function getMotor() {
  //   try {
  //     const response = await fetch('http://localhost:5555/motor', {
  //       method: 'get',
  //     })
  //     if (response.ok) {
  //       // 剖析資料為JS的數值
  //       const data = await response.json()

  //       // 設定資料到MotorCart狀態
  //       setMotorCard(data)
  //     }
  //   } catch (error) {
  //     // 發生錯誤的處理情況
  //     alert('無法得到伺服器資料，請稍後再重試')
  //     console.log(error)
  //   }
  // }

  //帶入資料庫
  // useEffect(() => {
  //   getMotor()
  // }, [])

  const cardMotor =
    motorCard.length > 0 &&
    motorCard.map((v, i) => {
      return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img
            variant="top"
            src="http://localhost:3000/images/motor/Imperiake 400 紅.jpg"
          />
          <Card.Body>
            <Card.Title>{v.motorName}</Card.Title>
            <Card.Text>{v.motorPrice}</Card.Text>
            <Button variant="primary">查看商品</Button>
          </Card.Body>
        </Card>
      )
    })

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {cardMotor}
          </div>
        </div>
      </div>
    </>
  )
}

export default MotorCard
