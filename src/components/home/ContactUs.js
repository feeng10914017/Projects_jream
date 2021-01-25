import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Input, Button } from 'antd'

const { TextArea } = Input
class ContactUs extends React.Component {
  state = {
    value: '',
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <>
        <article className="blockContainer">
          <div className="contactBg">
            <section>
              <div className="test">
                <Row>
                  <Col md={6} xs={12}>
                    <h6>姓名</h6>
                    <Input
                    // placeholder="Basic usage"
                    />
                  </Col>
                  <Col md={6} xs={12}>
                    <h6>信箱</h6>
                    <Input
                    // placeholder="Basic usage"
                    />
                  </Col>
                </Row>
                <Col>
                  <h6>信息</h6>
                  <TextArea
                    value={value}
                    onChange={this.onChange}
                    // placeholder="Controlled autosize"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </Col>
                <Col>
                  <Button block size="large">
                    <h6>送出</h6>
                  </Button>
                </Col>
              </div>
            </section>
          </div>
        </article>
      </>
    )
  }
}

export default ContactUs
