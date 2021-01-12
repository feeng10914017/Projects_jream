import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Product from '../images/7418807_R-removebg-preview.png'

import '../member.scss'
function OrderR({
  img = '',
  productName = '安全帽',
  itemName = '大概是安全帽',
  time = '2021/01/07',
  price = '$19000',
  statusS = '訂單已完成',
  status = '訂單已完成',
}) {
  return (
    <>
      <ListGroup.Item>
        <td className="A-OrderRImg">
          <img src={Product} alt="Product" />
        </td>
        <td className="A-OrderRP1">
          <p>{productName}</p>
          <p className="A-OrderRP2">{itemName}</p>
        </td>
        <td className="A-OrderRTime">
          <p>{time}</p>
        </td>
        <td className="A-OrderRPrice">
          <p>{price}</p>
        </td>
        <td className="A-OrderRStatus">
          <p>{status}</p>
        </td>
        <td className="A-OrderRButton">
          <Button>查看訂單</Button>
        </td>
      </ListGroup.Item>
    </>
  )
}

export default OrderR
