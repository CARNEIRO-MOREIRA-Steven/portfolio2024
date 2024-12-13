import React from 'react'
import './globals.css'


import Header from './components/Header/Header'
import BannerRight from './components/BannerRight/BannerRight'
import ScrollRight from './components/Scroll/ScrollRight'
// import ScrollBottom from './components/Scroll/ScrollBottom'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const page = () => {
  return (
    <>
      <Header />
      <BannerRight />
      <section className='page_container'>
        <Banner />
        <ScrollRight />
        {/* <ScrollBottom /> */}
        <Contact />
        <Footer />
      </section>
    </>
  )
}

export default page