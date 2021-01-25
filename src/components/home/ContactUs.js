import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Input, Button, notification, Space } from 'antd'

const { TextArea } = Input
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'JREAM',
    description:
      '感謝您的來信，您的信息我們已經收到囉，我們會盡快地回覆您，請您耐心等候。',
  })
}
const openNotificationWithIcon1 = (type) => {
  notification[type]({
    message: 'JREAM',
    description:
      '您還有欄位沒有填哦，快輸入您的姓名與信箱，並把您想說的話告訴我們哦。',
  })
}
notification.config({
  placement: 'topRight',
  top: 100,
  duration: 6,
})
class ContactUs extends React.Component {
  state = {
    value: '',
    value1: '',
    value2: '',
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value })
    console.log(value)
  }
  onChange1 = ({ target: { value1 } }) => {
    this.setState({ value1 })
  }
  onChange2 = ({ target: { value2 } }) => {
    this.setState({ value2 })
  }

  render() {
    const { value } = this.state
    const { value1 } = this.state
    const { value2 } = this.state
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
                      value={value1}
                      onChange={this.onChange1}
                      // placeholder="Basic usage"
                    />
                  </Col>
                  <Col md={6} xs={12}>
                    <h6>信箱</h6>
                    <Input
                      value={value2}
                      onChange={this.onChange2}
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
                  <Button
                    block
                    size="large"
                    onClick={() => {
                      if (value === '' || value1 === '' || value2 === '') {
                        openNotificationWithIcon1('warning')
                      } else {
                        this.setState({
                          value1: '',
                          value2: '',
                          value: '',
                        })
                        openNotificationWithIcon('success')
                      }
                    }}
                  >
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
