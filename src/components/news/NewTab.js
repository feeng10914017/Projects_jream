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
import Pagination from 'react-bootstrap/Pagination'

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
        {/* -------------------------------------------------------------------------------------- */}

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Link to="/news/newspages/2" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 2021年式新色登場：「TMAX 560 」</p>
              <p>2021/01/07</p>
            </div>
          </Link>

          <Link to="/news/newspages/1" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[會員快訊] 『會員專屬』一月行事曆</p>
              <p>2021/01/01</p>
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
              <p>[門市公告] 技冠群倫的機車達人！</p>
              <p>2020/12/12</p>
            </div>
          </Link>

          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[門市公告] 下班之後的好去處！</p>
              <p>2020/12/06</p>
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
              <p>[門市公告] 工欲善其事必先利其器！</p>
              <p>2020/11/05</p>
            </div>
          </Link>

          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[門市公告] 視客若友，待客如親，不變的堅持！</p>
              <p>2020/11/01</p>
            </div>
          </Link>

          <Link to="/news/newspages/3" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 英國猛虎登場！Triumph「TIGER 850 SPORT」</p>
              <p>2020/10/23</p>
            </div>
          </Link>

          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 換臉大作戰！DUCATI「SuperSport 950」新面貌</p>
              <p>2020/10/23</p>
            </div>
          </Link>

          <div className="d-flex" style={{ justifyContent: 'center' }}>
            <Pagination>
              {/* <Pagination.Prev /> */}
              <Pagination.Item active>{1}</Pagination.Item>

              {/* <Pagination.Item href="/news/1">{2}</Pagination.Item> */}
              <Pagination.Item>
                <Link to="/news/allNews/2" style={{ color: '#b02825' }}>
                  {2}
                </Link>
              </Pagination.Item>

              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </TabPanel>

        {/* -------------------------------------------------------------------------------------- */}

        <TabPanel value={value} index={1} dir={theme.direction}>
          <div>
            {/* <div style={{ height: '250px' }}> */}

            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[門市公告] 技冠群倫的機車達人！</p>
                <p>2020/12/12</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[門市公告] 下班之後的好去處！</p>
                <p>2020/12/06</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[門市公告] 工欲善其事必先利其器！</p>
                <p>2020/11/05</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[門市公告] 視客若友，待客如親，不變的堅持！</p>
                <p>2020/11/01</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[門市公告] 疑難雜症剋星的機車專家！YAMAHA YSP 金旺昇</p>
                <p>2020/10/19</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[門市公告] 摩托百貨精品，改裝技研專家~汐止阿松重車</p>
                <p>2020/09/11</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>
                  [門市公告]
                  堅持獨到品味，走自己的路線~MAX車系改裝專門店~661豐連車業~
                </p>
                <p>2020/08/31</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[門市公告] 中區新手租賃、安駕出遊的好選擇 </p>
                <p>2020/08/12</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>
                  [門市公告] 購車租車第一首選品牌，充滿樂趣與活力的~
                  重機新北旗艦店
                </p>
                <p>2020/07/07</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>
                  [門市公告]
                  努力提供給顧客更多更好的服務，優質技術本位的板橋上野車業
                </p>
                <p>2020/05/11</p>
              </div>
            </Link>
            <div className="d-flex" style={{ justifyContent: 'center' }}>
              <Pagination>
                {/* <Pagination.Prev /> */}
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </div>
        </TabPanel>

        {/* -------------------------------------------------------------------------------------- */}

        <TabPanel value={value} index={2} dir={theme.direction}>
          <div style={{ height: '454px' }}>
            <Link to="/news/newspages/1" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[會員快訊] 『會員專屬』一月行事曆</p>
                <p>2021/01/01</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[會員快訊] 北區會員 VIP專屬 👉🏻 租👆🏻送✌🏻</p>
                <p>2020/10/10</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[會員快訊] 2020振興無極限 超狂翻倍購車專案</p>
                <p>2020/08/03</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[會員快訊]「YAMAHA LIFE APP」新註冊車主歡迎禮</p>
                <p>2020/07/13</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[會員快訊] 2020 CB300R 新手購車專案 輕巧入手 質感跑格</p>
                <p>2020/07/08</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[會員快訊] 2019型動安全 感謝有禮 全面開跑</p>
                <p>2019/11/11</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p>[會員快訊] 2019旅夏購車專案 活動開跑</p>
                <p>2019/08/08</p>
              </div>
            </Link>
            <Link to="#" style={{ color: 'black' }}>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-between' }}
              >
                <p></p>
                <p></p>
              </div>
            </Link>
            <div
              className="d-flex"
              style={{
                justifyContent: 'center',
                marginTop: '100px',
              }}
            >
              <Pagination>
                {/* <Pagination.Prev /> */}
                <Pagination.Item active>{1}</Pagination.Item>
                {/* <Pagination.Item>{2}</Pagination.Item> */}
                {/* <Pagination.Next /> */}
              </Pagination>
            </div>
          </div>
        </TabPanel>

        {/* -------------------------------------------------------------------------------------- */}

        <TabPanel value={value} index={3} dir={theme.direction}>
          <Link to="/news/newspages/2" style={{ color: 'black' }}>
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
          <Link to="/news/newspages/3" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 英國猛虎登場！Triumph「TIGER 850 SPORT」</p>
              <p>2020/10/23</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 換臉大作戰！DUCATI「SuperSport 950」新面貌</p>
              <p>2020/10/23</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] SYM水冷「JET X 125」旗艦登場！</p>
              <p>2020/09/20</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 全路面制霸！DUCATI「Multistrada V4」改款發表</p>
              <p>2020/09/19</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 歐式跑旅羊 HONDA 2021年式「FORZA 125」</p>
              <p>2020/09/18</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 德裔休旅羊 BMW 2021年式「C400GT」新色</p>
              <p>2020/08/16</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[新車報到] 由此開始的情懷！KAWASAKI「MEGURO K3」發表</p>
              <p>2020/08/16</p>
            </div>
          </Link>
          <div className="d-flex" style={{ justifyContent: 'center' }}>
            <Pagination>
              {/* <Pagination.Prev /> */}
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </TabPanel>

        {/* -------------------------------------------------------------------------------------- */}

        <TabPanel value={value} index={4} dir={theme.direction}>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>
                [考照資訊]
                大型重機駕照-考照攻略：最難掌握的「定圓行駛」，大魔王是「直線煞車」
              </p>
              <p>2020/01/12</p>
            </div>
          </Link>
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[考照資訊] 大型重機考照-考照須知</p>
              <p>2020/01/12</p>
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
          <Link to="#" style={{ color: 'black' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <p>[考照資訊] 機車駕照考試須知</p>
              <p>2019/05/21</p>
            </div>
          </Link>
          <div
            className="d-flex"
            style={{
              justifyContent: 'center',
              marginTop: '200px',
            }}
          >
            <Pagination>
              {/* <Pagination.Prev /> */}
              <Pagination.Item active>{1}</Pagination.Item>
              {/* <Pagination.Item>{2}</Pagination.Item> */}
              {/* <Pagination.Next /> */}
            </Pagination>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
