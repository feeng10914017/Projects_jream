import React, { useState, useEffect } from 'react'
import { Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import moment from 'moment'
import { DatePicker, Select } from 'antd'
import 'antd/dist/antd.css'

function BannerSearch() {
  const { RangePicker } = DatePicker

  function range(start, end) {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day')
  }
  function disabledRangeTime(_, type) {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(0, 9),
      }
    }
    return {
      disabledHours: () => range(0, 60).splice(0, 9),
    }
  }
  function onChange(value, dateString) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }
  function onOk(value) {
    console.log('onOk: ', value)
  }

  const { Option } = Select

  function handleChange(value) {
    console.log(`selected ${value}`)
  }
  const display = (
    <>
      <div className="BannerSearchBar">
        <h6>選擇您的時間：</h6>
        <RangePicker
          size={'large'}
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [
              moment('10:00:00', 'HH:mm:ss'),
              moment('22:00:00', 'HH:mm:ss'),
            ],
          }}
          format="YYYY-MM-DD HH:mm"
          onChange={onChange}
          onOk={onOk}
        />

        <h6>選擇您的城市：</h6>

        <Select
          size={'large'}
          defaultValue="lucy"
          style={{ width: '100%' }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Link to={'/member'}>
          <Button className="bannerSearchBtn" variant="primary" block>
            下一步
          </Button>
        </Link>
      </div>
    </>
  )

  return <>{display}</>
}

export default BannerSearch
