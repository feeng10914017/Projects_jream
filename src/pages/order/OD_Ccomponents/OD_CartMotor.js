import React from 'react'
import { Row, Form, Card } from 'react-bootstrap'

function OD_CartMotor(props) {
  const MotortData = props.data
  console.log(MotortData)

  async function motorCart(id) {
    // 構造出一個準備要送到伺服器的物件data
    const newMember = {
      // name,
      // email,
      // username,
      // password,
    }

    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch('http://localhost:5555/users/' + id, {
        method: 'put',
        body: JSON.stringify(newMember),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()
        console.log(data)

        // 設定資料到member狀態
        if (data.id) alert('更新成功')

        // history.push('/member')
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  const display = (
    <>
      {MotortData.length > 0 ? (
        MotortData.map((v, index) => {
          return (
            <>
              <Card.Body key={index}>
                <Form.Group
                  controlId={'checkBoxMotor' + v.id}
                  className="lease"
                >
                  <div>
                    <Form.Control type="checkbox" />
                  </div>
                  <Form.Label>
                    <Row>
                      <div className="col-3">
                        <img
                          src={'http://localhost:3000/images/motor/' + v.img}
                          alt=""
                        />
                      </div>
                      <p className="col-2">{v.company}</p>
                      <p className="col-3">{v.model}</p>
                      <p className="col-2">{v.color}</p>
                      <h6 className="col-2">$ {v.rentalPrice}</h6>
                    </Row>
                    <hr />
                    <Row className="ml-5 mb-3">
                      <p className="col-3">取車地點</p>
                      <p className="col-3">{v.rentalLocation}</p>
                      <p className="col-3">還車地點</p>
                      <p className="col-3">{v.returnLocation}</p>
                    </Row>
                    <Row className="ml-5 mb-3">
                      <p className="col-3">取車日期</p>
                      <p className="col-3">{v.rentalDate}</p>
                      <p className="col-3">還車日期</p>
                      <p className="col-3">{v.returnDate}</p>
                    </Row>
                    <Row className="ml-5">
                      <p className="col-3">取車時間</p>
                      <p className="col-3">{v.rentalTime}</p>
                      <p className="col-3">還車時間</p>
                      <p className="col-3">{v.returnTime}</p>
                    </Row>
                  </Form.Label>
                </Form.Group>
              </Card.Body>
            </>
          )
        })
      ) : (
        <p>nothing</p>
      )}
    </>
  )
  return <>{display}</>
}

export default OD_CartMotor
