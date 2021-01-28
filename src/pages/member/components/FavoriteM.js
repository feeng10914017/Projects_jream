import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'
import Moto from '../images/159983596847-removebg-preview.png'
import '../member.scss'
import { FaStar, FaRegStar } from 'react-icons/fa'

function FavoriteM({
  rentFrequency = '3',
  Displacement = '500',
  Price = '1000',
  MotoN = 'Ninja® 400',
  News = '2021 會員專屬 農曆年全省道路救援方案',
  News2 = '2021年式新色登場：「TMAX 560 」',
}) {
  const [rentData, setRentData] = useState(
    JSON.parse(localStorage.getItem('rentalOrder'))
  )
  const motorCart = rentData.motorCart[0]
  return (
    <>
      <ListGroup.Item>
        <tr>
          <td className="A-FVImg" rowSpan="2">
            <img
              src={
                'http://localhost:3000/images/motor/small_Img/' + motorCart.img
              }
              alt="Moto"
            />
            <FaStar className="A-FVStar" />
          </td>
          <td className="A-FVTd1">
            <p>
              <span> {motorCart.model} </span>
            </p>
          </td>
          <td className="A-FVTd2">
            <p>
              排氣量: <span>{Displacement}</span> (C.C.)
            </p>
          </td>
          <td className="A-FVTd3">
            <p>
              價錢: <span>{motorCart.rentalPrice} /天</span>
            </p>
          </td>
        </tr>
        <tr>
          <td colSpan="3" className="A-FVTL">
            <p>關於JREAM的最新消息</p>
            <ul>
              <li>
                <Link to="/news/1">
                  <p>{News}</p>
                </Link>
              </li>
              <li>
                <Link to="/news/2">
                  <p>{News2}</p>
                </Link>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td colSpan="4">
            <Link to="/motor">
              <Button className="A-FVTLB">再租一次</Button>
            </Link>
          </td>
        </tr>
      </ListGroup.Item>
    </>
  )
}

export default FavoriteM
