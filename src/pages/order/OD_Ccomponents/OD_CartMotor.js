import React from 'react'
import { Row, Form, Card } from 'react-bootstrap'

function OD_CartMotor(props) {
  const MotortData = props.data
  // console.log(MotortData)

  const display = (
    <>
      {MotortData.length > 0 ? (
        MotortData.map((v, index) => {
          return (
            <>
              <Card.Body key={index}>
                <div className="lease">
                  <Form.Group controlId={'checkBoxMotor' + v.id}>
                    <Form.Check type="checkbox" label="" />
                  </Form.Group>
                  <div className="cardContent">
                    <Row>
                      <div className="col-3 motorImage">
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
                    <Row>
                      <p className="col-3">取車地點</p>
                      <p className="col-3">{v.rentalLocation}</p>
                      <p className="col-3">還車地點</p>
                      <p className="col-3">{v.returnLocation}</p>
                    </Row>
                    <Row>
                      <p className="col-3">取車日期</p>
                      <p className="col-3">{v.rentalDate}</p>
                      <p className="col-3">還車日期</p>
                      <p className="col-3">{v.returnDate}</p>
                    </Row>
                    <Row>
                      <p className="col-3">取車時間</p>
                      <p className="col-3">{v.rentalTime}</p>
                      <p className="col-3">還車時間</p>
                      <p className="col-3">{v.returnTime}</p>
                    </Row>
                  </div>
                </div>
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
