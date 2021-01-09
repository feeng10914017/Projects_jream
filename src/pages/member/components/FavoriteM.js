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
          <td style={{ height: '80px' }}>
            <p
              style={{
                marginLeft: '80px',
                marginTop: '24px',
                fontSize: '19px',
              }}
            >
              租賃次數:
              <span style={{ color: '#B02825', fontSize: '22px' }}>
                {' '}
                {rentFrequency}{' '}
              </span>
              次
            </p>
          </td>
          <td className="">
            <p
              style={{
                marginLeft: '80px',
                marginTop: '24px',
                fontSize: '19px',
                color: '#707070',
              }}
            >
              排氣量:{' '}
              <span style={{ marginLeft: '32px', fontSize: '22px' }}>
                {Displacement}
              </span>{' '}
              (C.C.)
            </p>
          </td>
          <td className="">
            <p
              style={{
                marginLeft: '80px',
                marginTop: '24px',
                fontSize: '19px',
                color: '#707070',
              }}
            >
              價錢:{' '}
              <span
                style={{
                  marginLeft: '32px',
                  fontSize: '22px',
                  color: '#B02825',
                }}
              >
                {Price} /天
              </span>
            </p>
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <p
              style={{
                marginLeft: '80px',
                marginTop: '24px',
                fontSize: '19px',
              }}
            >
              關於Ninja® 400 的最新消息
            </p>
            <ul>
              <li style={{ marginLeft: '60px' }}>
                Ninja®
                400似乎是一種巧合，但如果我們從更大的角度看待問題，這似乎是一種不可避免的事實。
              </li>
              <li style={{ marginLeft: '60px' }}>
                Ninja®
                400似乎是一種巧合，但如果我們從更大的角度看待問題，這似乎是一種不可避免的事實。
              </li>
              <li style={{ marginLeft: '60px' }}>
                Ninja®
                400似乎是一種巧合，但如果我們從更大的角度看待問題，這似乎是一種不可避免的事實。
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td colSpan="4">
            <Button style={{ float: 'right', margin: '16px 16px 16px 0' }}>
              再租一次
            </Button>
          </td>
        </tr>
      </ListGroup.Item>
    </>
  )
}

export default FavoriteM
