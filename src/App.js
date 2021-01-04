import React, { useState, useEffect } from 'react'

//排版用元件 全部都使用
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

//頁面元件

function App() {
  return<>
    <MyNavbar/>
    <MainContent>
      123 
      
    </MainContent>
    <MyFooter />
  </>
}

export default App;
