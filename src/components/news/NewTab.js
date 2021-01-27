import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Link, NavLink, withRouter } from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}))

export default function FullWidthTabs() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="全部消息" {...a11yProps(0)} />
          <Tab label="門市公告" {...a11yProps(1)} />
          <Tab label="會員快訊" {...a11yProps(2)} />
          <Tab label="新車報到" {...a11yProps(3)} />
          <Tab label="考照資訊" {...a11yProps(4)} />
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Link to="/news/1" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[會員快訊] 2021 會員專屬 農曆年全省道路救援方案</p>
              <p>2021/01/11</p>
            </div>
          </Link>
          <Link to="/news/2" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 2021年式新色登場：「TMAX 560 」</p>
              <p>2021/01/07</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] CRF300L CRF300 RALLY導入確定</p>
              <p>2020/11/16</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[會員快訊] 北區會員 VIP專屬 👉🏻 租👆🏻送✌🏻</p>
              <p>2020/10/10</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[門市公告] 下班之後的好去處！</p>
              <p>2020/09/11</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[會員快訊]「YAMAHA LIFE APP」新註冊車主歡迎禮</p>
              <p>2020/07/13</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[門市公告] 深耕竹北二十八年，機車保養第一首選 ~</p>
              <p>2020/07/07</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>
                [門市公告]
                堅持獨到品味，走自己的路線~MAX車系改裝專門店~661豐連車業~
              </p>
              <p>2020/04/05</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[考照資訊] 大型重型機車考照</p>
              <p>2019/05/21</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[考照資訊] 普通重型機車考照</p>
              <p>2019/05/21</p>
            </div>
          </Link>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[門市公告] 下班之後的好去處！</p>
              <p>2020/09/11</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[門市公告] 深耕竹北二十八年，機車保養第一首選 ~</p>
              <p>2020/07/07</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>
                [門市公告]
                堅持獨到品味，走自己的路線~MAX車系改裝專門店~661豐連車業~
              </p>
              <p>2020/04/05</p>
            </div>
          </Link>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[會員快訊] 2021 會員專屬 農曆年全省道路救援方案</p>
              <p>2021/01/11</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[會員快訊] 北區會員 VIP專屬 👉🏻 租👆🏻送✌🏻</p>
              <p>2020/10/10</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[會員快訊]「YAMAHA LIFE APP」新註冊車主歡迎禮</p>
              <p>2020/07/13</p>
            </div>
          </Link>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 2021年式新色登場：「TMAX 560 」</p>
              <p>2021/01/07</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] Pure Torque：「2021 MT-07」</p>
              <p>2020/12/25</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] CRF300L CRF300 RALLY導入確定</p>
              <p>2020/11/16</p>
            </div>
          </Link>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[考照資訊] 大型重型機車考照</p>
              <p>2019/05/21</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[考照資訊] 普通重型機車考照</p>
              <p>2019/05/21</p>
            </div>
          </Link>
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
