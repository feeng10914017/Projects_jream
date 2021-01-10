import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Form, Col, Card, ListGroup } from 'react-bootstrap'
import FavoriteM from './components/FavoriteM'

function Favorite() {
  return (
    <>
      <MemberNav />
      <Form.Group
        as={Col}
        controlId="formGridState"
        className="A-From"
      ></Form.Group>
      <Card className="A-FVCard1">
        <Card.Header>
          <th>
            <td>
              <p>最愛</p>
            </td>
          </th>
        </Card.Header>
        <ListGroup variant="flush" className="A-FVList">
          <FavoriteM />
          <FavoriteM />
          <FavoriteM />
        </ListGroup>
      </Card>
      <Link to="/member">
        <button>回首頁</button>
      </Link>
    </>
  )
}

export default withRouter(Favorite)
