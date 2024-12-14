import React from 'react'
import './globals.css'


import Header from './components/Header/Header'
import BannerRight from './components/BannerRight/BannerRight'
import Scroll from './components/Scroll/Scroll'


const page = () => {
  return (
    <>
      <Header />
      <BannerRight />
      <Scroll />
    </>
  )
}

export default page