import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import MemberNav from './components/MemberNav'
import { Form, Col, Card, ListGroup, Button } from 'react-bootstrap'
import FavoriteM from './components/FavoriteM'

function Favorite(auth, setAuth) {
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
        </ListGroup>
      </Card>{' '}
      <Link to="/member">
        <Button
          variant="primary"
          type="submit"
          style={{ margin: '16px 16px 0 0' }}
        >
          回首頁
        </Button>
      </Link>
    </>
  )
}

export default withRouter(Favorite)
