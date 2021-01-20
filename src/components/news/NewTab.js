import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

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
          <p>
            從小就對於理工方面的事物較為感興趣，受到很多網路資訊及影音娛樂的影響，而受工程師這類的職業吸引，在高中期間預定的大學理想目標是相關的科系，然而當時的成績並不理想，所以轉而選擇了第二興趣的經濟領域的科系，在畢業後，我覺得開始正式的工作之前應該出國看看，於是我選擇到美國進行一年的課程，在返台後找工作的一兩個月中，我認為我還是想走走看工程師的路，並找上了資策會的前端工程師養成班。
          </p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <p>
            從小就對於理工方面的事物較為感興趣，受到很多網路資訊及影音娛樂的影響，而受工程師這類的職業吸引，在高中期間預定的大學理想目標是相關的科系，然而當時的成績並不理想，所以轉而選擇了第二興趣的經濟領域的科系，在畢業後，我覺得開始正式的工作之前應該出國看看，於是我選擇到美國進行一年的課程，在返台後找工作的一兩個月中，我認為我還是想走走看工程師的路，並找上了資策會的前端工程師養成班。
          </p>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <p>
            從小就對於理工方面的事物較為感興趣，受到很多網路資訊及影音娛樂的影響，而受工程師這類的職業吸引，在高中期間預定的大學理想目標是相關的科系，然而當時的成績並不理想，所以轉而選擇了第二興趣的經濟領域的科系，在畢業後，我覺得開始正式的工作之前應該出國看看，於是我選擇到美國進行一年的課程，在返台後找工作的一兩個月中，我認為我還是想走走看工程師的路，並找上了資策會的前端工程師養成班。
          </p>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <p>
            從小就對於理工方面的事物較為感興趣，受到很多網路資訊及影音娛樂的影響，而受工程師這類的職業吸引，在高中期間預定的大學理想目標是相關的科系，然而當時的成績並不理想，所以轉而選擇了第二興趣的經濟領域的科系，在畢業後，我覺得開始正式的工作之前應該出國看看，於是我選擇到美國進行一年的課程，在返台後找工作的一兩個月中，我認為我還是想走走看工程師的路，並找上了資策會的前端工程師養成班。
          </p>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <p>
            從小就對於理工方面的事物較為感興趣，受到很多網路資訊及影音娛樂的影響，而受工程師這類的職業吸引，在高中期間預定的大學理想目標是相關的科系，然而當時的成績並不理想，所以轉而選擇了第二興趣的經濟領域的科系，在畢業後，我覺得開始正式的工作之前應該出國看看，於是我選擇到美國進行一年的課程，在返台後找工作的一兩個月中，我認為我還是想走走看工程師的路，並找上了資策會的前端工程師養成班。
          </p>
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
