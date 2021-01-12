import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Moto from '../images/159983596847-removebg-preview.png'
import '../member.scss'

function MotoR({
  img = '',
  rentnumbering = '20210107001',
  time = '2021/01/07 12:00:00',
  statusS = '訂單已完成',
  status = '預約完成',
}) {
  return (
    <>
      <ListGroup.Item>
        <td className="A-MotoRImg">
          <img src={Moto} alt="Moto" />
        </td>
        <td className="A-MotoRNum">
          <p>{rentnumbering}</p>
        </td>
        <td className="A-MotoTime">
          <p>{time}</p>
        </td>
        <td className="A-MotoStatus">
          <p>{status}</p>
        </td>
        <td className="A-MotoRButton">
          <Button>租賃細節</Button>
        </td>
      </ListGroup.Item>
    </>
  )
}
export default MotoR
