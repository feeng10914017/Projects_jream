import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Moto from '../images/159983596847-removebg-preview.png'
import '../member.scss'
import { FaStar, FaRegStar } from 'react-icons/fa'

function FavoriteM({
  rentFrequency = '3',
  Displacement = '500',
  Price = '1000',
}) {
  return (
    <>
      <ListGroup.Item>
        <tr>
          <td className="A-FVImg" rowSpan="2">
            <img src={Moto} alt="Moto" />
            <FaStar className="A-FVStar" />
          </td>
          <td className="A-FVTd1">
            <p>
              租賃次數:
              <span> {rentFrequency} </span>次
            </p>
          </td>
          <td className="A-FVTd2">
            <p>
              排氣量: <span>{Displacement}</span> (C.C.)
            </p>
          </td>
          <td className="A-FVTd3">
            <p>
              價錢: <span>{Price} /天</span>
            </p>
          </td>
        </tr>
        <tr>
          <td colSpan="3" className="A-FVTL">
            <p>關於Ninja® 400 的最新消息</p>
            <ul>
              <li>
                Ninja®
                400似乎是一種巧合，但如果我們從更大的角度看待問題，這似乎是一種不可避免的事實。
              </li>
              <li>
                Ninja®
                400似乎是一種巧合，但如果我們從更大的角度看待問題，這似乎是一種不可避免的事實。
              </li>
              <li>
                Ninja®
                400似乎是一種巧合，但如果我們從更大的角度看待問題，這似乎是一種不可避免的事實。
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td colSpan="4">
            <Button className="A-FVTLB">再租一次</Button>
          </td>
        </tr>
      </ListGroup.Item>
    </>
  )
}

export default FavoriteM
