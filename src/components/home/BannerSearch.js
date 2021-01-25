import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Locationdata } from '../../pages/location/data/locationdata'

import moment from 'moment'
import { DatePicker, Select, Form } from 'antd'
import 'antd/dist/antd.css'

function BannerSearch(props) {
  const { RangePicker } = DatePicker
  const [locationOption, setlocationOption] = useState([])

  useEffect(() => {
    // console.log('Locationdata', Locationdata)
    const locationList = []
    // console.log(Locationdata[0].name)
    // console.log(Locationdata.length)
    Locationdata.map((v, i) => {
      locationList.push(
        <Option value={v.name} key={v.name}>
          {v.name}
        </Option>
      )
    })
    setlocationOption(locationList)
    // console.log('locationList', locationList)
  }, [])

  const [rentalDate, setRentalDate] = useState('')
  const [rentalTime, setRentalTime] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [returnTime, setReturnTime] = useState('')
  const [locatinoStart, setLocationStart] = useState('')
  const [locationEnd, setLocationEnd] = useState('')
  const [validateStatus1, setValidateStatus1] = useState('')
  const [validateStatus2, setValidateStatus2] = useState('')
  const [validateStatus3, setValidateStatus3] = useState('')
  const [help1, setHelp1] = useState('')
  const [help2, setHelp2] = useState('')
  const [help3, setHelp3] = useState('')
  const { Option } = Select
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
  function onOk(value) {
    console.log('onOk: ', value)
  }
  function onChange(value, dateString) {
    // console.log('Selected Time: ', value)
    // console.log('Formatted Selected Time: ', dateString)
    const rentalDateString = dateString[0]
    const returnDateString = dateString[1]
    setRentalDate(rentalDateString.substring(0, 10))
    setRentalTime(rentalDateString.substring(12, 16))
    setReturnDate(returnDateString.substring(0, 10))
    setReturnTime(returnDateString.substring(12, 16))
  }
  function handleChange1(value) {
    // console.log(`selected ${value}`)
    setLocationStart(value)
  }
  function handleChange2(value) {
    // console.log(`selected ${value}`)
    setLocationEnd(value)
  }
  function goToRental() {
    if (rentalDate === '') {
      setValidateStatus1('error')
      setHelp1('請選擇您的「出發時間」與「結束時間」')
    } else {
      setValidateStatus1('')
      setHelp1('')
    }
    if (locatinoStart === '') {
      setValidateStatus2('error')
      setHelp2('請選擇您的「出發的地點」')
    } else {
      setValidateStatus2('')
      setHelp2('')
    }
    if (locationEnd === '') {
      setValidateStatus3('error')
      setHelp3('請選擇您的您的「還車的據點」')
    } else {
      setValidateStatus3('')
      setHelp3('')
    }
    const rentalLocation = locatinoStart
    const returnLocation = locationEnd
    const lazyTime = {
      rentalDate,
      rentalTime,
      returnDate,
      returnTime,
      rentalLocation,
      returnLocation,
    }
    rentalDate !== '' &&
      locatinoStart !== '' &&
      locationEnd !== '' &&
      localStorage.setItem('lazyTime', JSON.stringify(lazyTime))
  }

  const display = (
    <>
      <div className="BannerSearchBar">
        <Form.Item label="" validateStatus={validateStatus1} help={help1}>
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
            // onOk={onOk}
          />
        </Form.Item>

        <Form.Item label="" validateStatus={validateStatus2} help={help2}>
          <h6>選擇您的城市：</h6>
          <Select
            size={'large'}
            defaultValue="取車地點"
            style={{ width: '100%' }}
            onChange={handleChange1}
            validateStatus="warning"
          >
            {locationOption}
          </Select>
        </Form.Item>

        <Form.Item label="" validateStatus={validateStatus3} help={help3}>
          <Select
            size={'large'}
            defaultValue="還車據點"
            style={{ width: '100%' }}
            onChange={handleChange2}
          >
            {locationOption}
          </Select>
        </Form.Item>

        <Button
          className="bannerSearchBtn"
          variant="primary"
          block
          onClick={goToRental}
        >
          下一步
        </Button>
      </div>
    </>
  )

  return <>{display}</>
}

export default withRouter(BannerSearch)
