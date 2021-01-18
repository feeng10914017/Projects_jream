import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import NewTab from '../../components/news/NewTab'
import './News.css'
function News() {
  return (
    <>
      <div className="C-searchDiv position-relative">
        <figure>
          <img src="http://localhost:3000/images/news/bigpage.jpg" />
        </figure>
        <div className="C-searchButtonGroup">
          <div
            className="C-searchButton"
            // value="1"
            // onClick={() => {
            //   pCategory_id = '1'
            //   categorySearch()
            // }}
          >
            # 休閒
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '2'
            //   categorySearch()
            // }}
          >
            # 冒險
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '3'
            //   categorySearch()
            // }}
          >
            # 動作
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '4'
            //   categorySearch()
            // }}
          >
            # 策略
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '5'
            //   categorySearch()
            // }}
          >
            # 競速
          </div>
          <div
            className="C-searchButton"
            // onClick={() => {
            //   pCategory_id = '6'
            //   categorySearch()
            // }}
          >
            其他
          </div>
        </div>

        <div className="C-searchbarDiv">
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              className="C-searchBar"
              placeholder="搜尋"
              // onChange={(e) => {
              //   setSearchData(e.target.value)
              // }}
            />
            <AiOutlineSearch className="C-searchbarIcon" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0 auto' }}>
            <NewTab />
          </div>
        </div>
      </div>
      <hr />
      <div className="page-head-part3">
        <div className="content_big_part">
          <div className="class_pic">
            <figure>
              {/* <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="課程圖片" /> */}
            </figure>
          </div>
          <h5 className="class_title">課程特色</h5>
          <div className="line"></div>
          <ul className="features">
            <li>我們的導師有多年攝影教學經驗,熟習各主要牌子的相機運作</li>
            <li>課室設有場景供大家即場實習,不用另覓場地</li>
            <li>不定期設有免費的攝影活動供同學參與,增加實戰機會</li>
          </ul>
          <h5 className="class_title">課程內容</h5>
          <div className="line"></div>
          <p>
            攝影，到底應該如何實現。攝影可以說是有著成為常識的趨勢。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。了解清楚攝影到底是一種怎麼樣的存在，是解決一切問題的關鍵。
            薩迪相信，你在兩個仇人之間說話要有分寸，以免他們和好後你將無地自容。但願各位能從這段話中獲得心靈上的滋長。在人生的歷程中，攝影的出現是必然的。面對如此難題，我們必須設想周全。金纓曾提出，敗德之事非一，而酗酒者德必敗，傷生之事非一，而好色者生必傷。這句話決定了一切。不要先入為主覺得攝影很複雜，實際上，攝影可能比你想的還要更複雜。既然如此，顧炎武講過一段耐人尋思的話，人生富貴駒過隙，唯有榮名壽金石。這句話改變了我的人生。攝影勢必能夠左右未來。一般來說，我認為，話雖如此，做好攝影這件事，可以說已經成為了全民運動。
            雨果說過一句發人省思的話，世上只有兩種力量，一種是劍，一。這是撼動人心的。諸葛亮深信，將不可驕，驕則失禮，失禮則人離，人離則眾叛。但願諸位理解後能從中有所成長。若發現問題比我們想像的還要深奧，那肯定不簡單。看看別人，再想想自己，會發現問題的核心其實就在你身旁。
            攝影，到底應該如何實現。攝影可以說是有著成為常識的趨勢。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。了解清楚攝影到底是一種怎麼樣的存在，是解決一切問題的關鍵。
            薩迪相信，你在兩個仇人之間說話要有分寸，以免他們和好後你將無地自容。但願各位能從這段話中獲得心靈上的滋長。在人生的歷程中，攝影的出現是必然的。面對如此難題，我們必須設想周全。金纓曾提出，敗德之事非一，而酗酒者德必敗，傷生之事非一，而好色者生必傷。這句話決定了一切。
          </p>
          <h5 className="class_title">授課老師</h5>
          <div className="line"></div>
          <div className="teacher">
            <div className="teacher_pic">
              <figure>
                {/* <img src={devUrl + '/Pic/pic/member.jpg'} alt="老師圖片" /> */}
              </figure>
            </div>
            <div className="teacher_info_block">
              <h5 className="class_teacher">陳宇軒</h5>
              <p className="teacher_intro">
                驕則失禮，失禮則人離，
                人離則眾叛。但願諸位理解後能從中有所成長。
                若發現問題比我們想像的還要深奧，那肯定不簡單。看看別人，再想想自己，會發現問題的核心其實就在你身旁
              </p>
            </div>
          </div>
        </div>
        <div className="left_part">
          {/* <ClassCard />
          <div className="gmap">
            <GMap location={location} zoomLevel={15} />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default News
